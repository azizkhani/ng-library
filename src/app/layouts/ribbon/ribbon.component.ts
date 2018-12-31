import {Component, OnInit} from '@angular/core';
import {NavigationMenuItem, NavigationService} from '../navigation';

@Component({
    selector: 'sa-ribbon',
    templateUrl: './ribbon.component.html'
})
export class RibbonComponent implements OnInit {
    public isBookMark = false;
    public navMenuArray: Array<NavigationMenuItem> = [];

    public count: number;
    public lastUpdate: any;
    public active: boolean;
    public loading: boolean;

    constructor(
        private navigationService: NavigationService) {
        this.navigationService.navMenuArray.subscribe(navMenuArray => {
            this.navMenuArray = navMenuArray;
            this.navMenuArray.forEach((item, index) => {
                if (item.isShowing) {
                    this.isBookMark = item.isBookmark;
                }
            });
        });

        this.active = true;
        this.loading = false;
        this.lastUpdate = new Date();
    }

    ngOnInit() {
    }

    onBookMark() {
        this.navMenuArray.forEach((item, index) => {
            if (item.isShowing) {
                item.isBookmark = !item.isBookmark;
                this.isBookMark = item.isBookmark;
            }
        });

        this.navigationService.navMenuArray.next(this.navMenuArray);
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
        this.navigationService.navMenuArray.next(this.navMenuArray);

    }

    onBookMarkClick(navigationMenuItem: NavigationMenuItem) {
        this.navMenuArray.forEach((item, index) => {
            item.isShowing = false;
            if (item.topic === navigationMenuItem.topic) {
                item.isBookmark = !item.isBookmark;
            }
        });
        this.navigationService.navMenuArray.next(this.navMenuArray);
    }

    onBookMarkClickDelete(navigationMenuItem: NavigationMenuItem) {
        this.navMenuArray.forEach((item, index) => {
            if (item.topic === navigationMenuItem.topic) {
                item.isBookmark = !item.isBookmark;
            }
        });
        this.navigationService.navMenuArray.next(this.navMenuArray);
    }

    onCloseClick(id?: number) {
        let isAnotherPageIsShowingAlready = false;
        // Disable To close Home
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
                        this.navMenuArray[this.navMenuArray.length].isShowing = true;
                    }
                    break;
                }
            }
            this.navigationService.navMenuArray.next(this.navMenuArray);
        }
    }
}
