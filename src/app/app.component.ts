import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AppCard} from './app-card/app-card';
import {AppData, CardData} from './data/app.data';
import {TitleCasePipe} from '@angular/common';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgbdModalContent, NgbdViewModalComponent} from './modal.component/modal.component';

const DASHBOARD_TITLE: string = 'welcome to mad jun angular realm!';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppCard, TitleCasePipe, NgbdModalContent, NgbdViewModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected readonly title: string = DASHBOARD_TITLE;
  protected AppCardData: CardData[];

  private modalService = inject(NgbModal);

  constructor() {
    this.AppCardData = [...AppData];
  }

  public ngOnInit(): void {}

  private open(content: any, data: CardData):void {
    const modalRef = this.modalService.open(content, { backdrop: 'static', centered: true });
    modalRef.componentInstance.title = data.title;
  }

  private openLg(content: any ,data: CardData):void {
    const modalRef = this.modalService.open(content, { size: 'lg', backdrop: 'static', centered: true });
    modalRef.componentInstance.title = data.title;
  }

  public onLectureSelected(data: CardData): void {
    console.log(data);

    this.openLg(NgbdViewModalComponent, data);
  }

  public onSubscribeSelected(data: CardData): void {
    console.log(data);

    this.open(NgbdModalContent, data);
  }

  public trackElement(index:number, element: CardData): number {
    return element.id;
  }
}
