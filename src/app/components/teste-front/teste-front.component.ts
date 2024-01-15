import { Component } from '@angular/core';

@Component({
  selector: 'app-teste-front',
  templateUrl: './teste-front.component.html',
  styleUrls: ['./teste-front.component.css']
})
export class TesteFrontComponent {

  // Dados dos cards
cards = [
  { title: 'Card 1', content: 'Conteúdo do Card 1' },
  { title: 'Card 2', content: 'Conteúdo do Card 2' },
  { title: 'Card 3', content: 'Conteúdo do Card 3' },
  { title: 'Card 4', content: 'Conteúdo do Card 4' }, 
  { title: 'Card 5', content: 'Conteúdo do Card 5' },
  { title: 'Card 6', content: 'Conteúdo do Card 6' }
];

  cardSets = [
    
    { 
      key: '1',
      cards: [{
        img: '../assets/img/img_cards/img_perfume.jpg',
        title: 'fff',
        descri: 'ffff',
        txt_btn: 'fff'
      }]
    },
    { 
      key: '2',
      cards: [
      {
        img: '../assets/img/img_cards/img_corpo_e_banho.jpg',
        title: 'aaa',
        descri: 'aaa',
        txt_btn: 'aaa'
      }]
    },

    { 
      key: '3',
      cards: [
      {
        img: '../assets/img/img_cards/img_cabelo.jpg',
        title: 'rrr',
        descri: 'rrr',
        txt_btn: 'rrr'
      }]
    },

    { 
      key: '4',
      cards: [
      {
        img: '../assets/img/img_cards/img_cabelo.jpg',
        title: 'rrr',
        descri: 'rrr',
        txt_btn: 'rrr'
      }]
    },
    { 
      key: '5',
      cards: [
      {
        img: '../assets/img/img_cards/img_cabelo.jpg',
        title: 'rrr',
        descri: 'rrr',
        txt_btn: 'rrr'
      }]
    },
    { 
      key: '6',
      cards: [
      {
        img: '../assets/img/img_cards/img_cabelo.jpg',
        title: 'dddd',
        descri: 'ddrrr',
        txt_btn: 'dddd'
      }]
    }


];


currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.cardSets.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.cardSets.length) % this.cardSets.length;
  }
}


