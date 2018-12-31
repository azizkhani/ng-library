import {ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, Renderer} from '@angular/core';
import {ActivitiesService} from './activities.service';
import {LoginHistory} from './loginHistory.model';
import {JhiEventManager} from 'ng-jhipster';
import {NavigationMenuItem} from '../../navigation';
import {Subscription} from 'rxjs/Subscription';

declare var $: any;

@Component({
    selector: 'sa-activities',
    templateUrl: './activities.component.html',
    providers: [ActivitiesService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivitiesComponent implements OnInit, OnDestroy {
    count: number;
    lastUpdate: any;
    active: boolean;
    loading: boolean;
    loginHistoryList: LoginHistory[];
    documentSub: any;

    navMenuArray: Array<NavigationMenuItem> = [];
    navBookmarkMenuArray: Array<NavigationMenuItem> = [];

    eventSubscriber: Subscription;
    defualtActivityTab = 'tab1';

    constructor(private el: ElementRef,
                private eventManager: JhiEventManager,
                private renderer: Renderer,
                private activitiesService: ActivitiesService) {
        this.eventSubscriber = this.eventManager.subscribe('activeNavigationMenu', (response) => {
            if (this.navMenuArray.filter(c => {
                    return (c.attrMap.path === response.content.menuItem.attrMap.path);
                }
            ).length === 0) {
                this.navMenuArray.push(response.content.menuItem);
            }
        });
        this.active = true;
        this.loading = false;
        this.count = 0;
        this.lastUpdate = new Date();
    }

    ngOnInit() {
        this.activitiesService.getAllActivities().subscribe((res: LoginHistory[]) => {
            this.loginHistoryList = res;
        });

        this.onToggle();
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

    onBookMarkClick(navigationMenuItem: NavigationMenuItem) {
        this.navMenuArray.forEach((item, index) => {
            item.isShowing = false;
            if (item.topic === navigationMenuItem.topic) {
                item.isBookmark = !item.isBookmark;
            }
        });
    }

    onBookMarkClickDelete(navigationMenuItem: NavigationMenuItem) {
        this.navMenuArray.forEach((item, index) => {
            if (item.topic === navigationMenuItem.topic) {
                item.isBookmark = !item.isBookmark;
            }
        });
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
        /*  this.eventManager.destroy(this.eventSubscriber);*/
    }

    documentUnsub() {
        this.documentSub = null;
    }

    openIframeWithId(navigationMenuItem: NavigationMenuItem) {
        let isOpenedBefore = false;
        this.navMenuArray.forEach((item, index) => {
            item.isShowing = false;
            if (item.topic === navigationMenuItem.topic) {
                item.isShowing = true;
                isOpenedBefore = true;
            }
        });
        if (!isOpenedBefore) {
            navigationMenuItem.isShowing = true;
            this.navMenuArray.push(navigationMenuItem);
        }
        this.eventManager.broadcast({
            name: 'activeNavigationMenu',
            content: {
                menuItem: navigationMenuItem
            }
        });
    }

    onCloseClick(id ?: number) {
        let isAnotherPageIsShowingAlready = false;
        if (id !== 1) {
            for (let index = 0; index < this.navMenuArray.length; index++) {
                if (this.navMenuArray[index].isShowing || this.navMenuArray[index].id === id) {
                    this.navMenuArray[index].isShowing = false;
                    this.navMenuArray[index].isOpen = false;
                    if (this.navMenuArray.length > 0) {
                        this.navMenuArray.splice(index, 1);
                    }
                    for (let i = 0; i < this.navMenuArray.length; i++) {
                        if (this.navMenuArray[i].isShowing) {
                            isAnotherPageIsShowingAlready = true;
                            break;
                        }
                    }
                    if (!isAnotherPageIsShowingAlready) {
                        this.navMenuArray[this.navMenuArray.length - 1].isShowing = true;
                    }
                    break;
                }
            }
        }
    }
}
