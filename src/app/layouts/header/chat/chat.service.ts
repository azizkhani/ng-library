import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Observer} from 'rxjs';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'webstomp-client';
import {AccountService} from '../../../shared/auth';
import {Account} from '../../../shared/account';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Subject} from 'rxjs';
import {MessageType} from './messageType.enum';

/**
 * TODO: CHera az  generic service extend nakarde?
 */
@Injectable({
    providedIn: 'root'
})
export class ChatService {
    private baseUrl = '/rest/core/bchat/messageReceiver';
    stompClient = null;
    subscriber = null;
    connection: Promise<any>;
    connectedPromise: any;
    listener: Observable<any>;
    listenerObserver: Observer<any>;

    private loggedInUser: Account;

    callChatComponentEvent: Subject<any> = new Subject();


    constructor(private asccountService: AccountService,
                private http: HttpClient) {
        this.connection = this.createConnection();
        this.listener = this.createListener();
        this.getCurrentUser();
    }

    getCurrentUser() {
        return this.asccountService.get().toPromise().then((account) => {
            this.loggedInUser = account;
        });
    }

    connecting() {
        const headers = {};
        this.stompClient = Stomp.over(new SockJS('/rest/websocket/chat'));
        this.stompClient.connect(headers, () => {
            this.subscribe();
        });
    }

    subscribe() {
        this.stompClient.subscribe('/topic/chatDirect/' + this.loggedInUser.id, (data) => {
            const message = JSON.parse(data.body);
            this.callChatComponent(message, MessageType.direct);
        });
        this.subscribeChannel();
    }

    subscribeChannel() {
        this.stompClient.subscribe('/topic/channel/' + this.loggedInUser.id, (data) => {
            const message = JSON.parse(data.body);
            this.callChatComponent(message, MessageType.channel);
        });
        this.subscribeGroup();
    }

    subscribeGroup() {
        this.stompClient.subscribe('/topic/group/' + this.loggedInUser.id, (data) => {
            const message = JSON.parse(data.body);
            this.callChatComponent(message, MessageType.group);
        });
        this.subscribeSeenUpdate();
    }

    subscribeSeenUpdate() {
        this.stompClient.subscribe('/topic/seenUpdate/' + this.loggedInUser.id, (data) => {
            const message = JSON.parse(data.body);
            this.callChatComponent(message, null);
        });
    }

    private callChatComponent(messageData: any, messageType: MessageType) {
        this.callChatComponentEvent.next({
            'messageData': messageData,
            'messageType': messageType
        });
    }


    private createConnection(): Promise<any> {
        return new Promise((resolve, reject) => this.connectedPromise = resolve);
    }

    private createListener(): Observable<any> {
        return new Observable((observer) => {
            this.listenerObserver = observer;
        });
    }

    unsubscribe() {
        if (this.subscriber !== null) {
            this.subscriber.unsubscribe();
        }
        this.listener = this.createListener();
    }

    disconnect() {
        if (this.stompClient !== null) {
            this.stompClient.disconnect();
            this.stompClient = null;
        }
    }

    getCountUnreadMessage() {
        return this.http.get<any>(this.baseUrl + '/getCountUnreadMessage');
    }

    updateSeenCount() {
    }
}
