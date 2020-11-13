import { Component, OnInit } from '@angular/core';
import { brailleAlphabet } from '../data/braille-alphabet';
import BrailleLetter from '../braille-letter';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.scss']
})
export class FlashcardComponent implements OnInit {

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
    this.currentLetter = this.getRandomLetter();
  }

}
