import {Component, EventEmitter, Input, output, Output} from '@angular/core';
import {CardData} from '../data/app.data';
import {NgClass} from '@angular/common';

@Component({
  selector: 'common-card',
  imports: [
    NgClass
  ],
  templateUrl: './app-card.html',
  styleUrl: './app-card.css'
})
export class AppCard {

  @Input({
    required: true,
  })
  public cardData: CardData;

  @Input({required: true, alias: 'cardIndex'})
  public index: number = 0;

  @Output('lectureSelected')
  public cardEmitter: EventEmitter<CardData> = new EventEmitter<CardData>();

  @Output('subscribeSelected')
  public cardSubscribeEmitter: EventEmitter<CardData> = new EventEmitter<CardData>();

  protected iconEmpty: string = '/images/empty-image.png';

  constructor() {
    this.cardData = {
      id: 0,
      title: '',
      description: '',
      icon: '',
      category: '',
    }
  }
  public ngOnInit() {}

  protected onButtonViewClick(): void {

    this.cardEmitter.emit(this.cardData);
  }
  protected onButtonSubmitClick(): void {

    this.cardSubscribeEmitter.emit(this.cardData);
  }

  protected getRibbonClass(): string {
    let cardClass: string = 'bg-info';

    if (this.cardData.category == 'BEGINNER') {
      cardClass = 'bg-success';
    }
    else if (this.cardData.category == 'INTERMEDIATE') {
      cardClass = 'bg-warning';
    }
    else if (this.cardData.category == 'ADVANCED') {
      cardClass = 'bg-danger';
    }
    return cardClass;
  }
}
