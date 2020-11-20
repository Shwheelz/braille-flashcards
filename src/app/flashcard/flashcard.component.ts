import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { brailleAlphabet } from '../data/braille-alphabet';
import BrailleLetter from '../braille-letter';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.scss']
})
export class FlashcardComponent implements OnInit {

  @Input()
  public type: string;

  public currentLetter: BrailleLetter;
  public isFront: boolean;

  constructor() { }

  ngOnInit() {
    this.currentLetter = this.getRandomLetter();
    this.isFront = true;
  }

  public getRandomLetter() {
    return brailleAlphabet[Math.floor(Math.random() * brailleAlphabet.length)];
  }

  public flipCard() {
    this.isFront = !this.isFront;
  }

  public drawCard() {
    this.isFront = true;
    this.currentLetter = this.getRandomLetter();
  }

  public submitAnswer() {
    this.flipCard();
    
  }

}
