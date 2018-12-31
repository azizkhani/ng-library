import {ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, Renderer} from '@angular/core';
import {NavigationMenuItem, NavigationService} from '../../navigation';
import {ChatService} from './chat.service';
import {MessageType} from './messageType.enum';
import {UserSeen} from './userSeen.model';

declare var $: any;

@Component({
    selector: 'bh-chat',
    templateUrl: './chat.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent implements OnInit, OnDestroy {

    public navMenuArray: Array<NavigationMenuItem> = [];

    unreadMessages: UserSeen[] = [];
    lastUpdate: any;
    active: boolean;
    loading: boolean;
    documentSub: any;
    unreadMessageCount = 0;

    constructor(private el: ElementRef,
                private renderer: Renderer,
                private navigationService: NavigationService,
                private chatService: ChatService) {
        this.active = true;
        this.loading = false;

        this.navigationService.navMenuArray.subscribe(navMenuArray => {
            this.navMenuArray = navMenuArray;
        });

        this.chatService.callChatComponentEvent.subscribe((data: any) => {
            this.newMessageEvent(data.messageData, data.messageType);
        });

        this.chatService.getCountUnreadMessage().toPromise().then((entities) => {
            // this.unreadMessageCount = entities.length;
            entities.forEach(unreadMess => {
                this.unreadMessages.push(unreadMess);
                this.active = true;
                this.loading = false;
                this.onToggle();
                this.active = true;
                this.loading = false;
                this.onToggle();
            });
        });
    }

    ngOnInit() {
        this.chatService.connecting();
        this.onToggle();
    }

    newMessageEvent(messageData: any, messageType: MessageType) {
        let isNewUnseenMess = true;
        this.unreadMessages.forEach((unreadMess, index) => {
            if (unreadMess.userId === messageData.createdById) {
                isNewUnseenMess = false;
                this.unreadMessages[index].seenCount = messageData.unReadCount;
            }
        });
        if (isNewUnseenMess) {
            this.unreadMessages.push(new UserSeen(messageData.createdById, messageData.unReadCount,
                messageData.createdByfullName, messageData.createdByImageCode));
        }
    }

    trackUnsenMessage(index, item: UserSeen) {
        return item.seenCount;
    }

    onToggle() {
        let dropdown = $('.ajax-dropdown', this.el.nativeElement);
        this.active = !this.active;
        if (this.active) {
            dropdown.fadeIn();

            this.documentSub = this.renderer.listenGlobal('document', 'mouseup', (event) => {
                if (!this.el.nativeElement.contains(event.target)) {
                    dropdown.fadeOut();
                    this.active = false;
                    this.documentUnsub();
                }
            });

        } else {
            dropdown.fadeOut();

            this.documentUnsub();
        }
    }

    update() {
        this.loading = true;
        setTimeout(() => {
            this.lastUpdate = new Date();
            this.loading = false;
        }, 1000);
    }

    ngOnDestroy() {
        this.documentUnsub();
    }

    documentUnsub() {
        this.documentSub = null;
    }


    openChat(audienceId: number, fullName: string) {
        this.onToggle();
        let chatNavMenu: NavigationMenuItem = new NavigationMenuItem();
        chatNavMenu.attrMap = {
            'path': null,
            'url': 'View/bchat/messageReceiver/Index.jsp?audienceId=' + audienceId
        };
        chatNavMenu.topic = ' چت ' + ' با ' + fullName;
        chatNavMenu.isEnable = true;
        chatNavMenu.childs = null;
        chatNavMenu.isOpen = false;
        chatNavMenu.isShowing = false;
        chatNavMenu.id = audienceId;


        if (chatNavMenu.childs === null || chatNavMenu.childs.length === 0) {
            let isOpenedBefore = false;
            this.navMenuArray.forEach((item, index) => {
                item.isShowing = false;
                if (item.id === chatNavMenu.id) {
                    item.isShowing = true;
                    isOpenedBefore = true;
                }
            });
            if (!isOpenedBefore) {
                chatNavMenu.isShowing = true;
                this.navMenuArray.push(chatNavMenu);
            }
            this.navigationService.navMenuArray.next(this.navMenuArray);
        }
    }
}
