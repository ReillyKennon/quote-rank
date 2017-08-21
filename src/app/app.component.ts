import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quote Ranks';
  quote: Quote
  quotes: Array<Quote> = []

  onSubmit() {
    this.quotes.push(this.quote)

    // Because this.quotes is a refence to the array in memory, in order to make the
    // page refresh and display the newly created quote, we neeed to make copy the Array
    // into a new array to trigger a page refresh
    this.quotes = this.quotes.slice()
    this.quote = new Quote()
  }

  upVote(i) {
    this.quotes[i].upVote()
  }

  downVote(i) {
    this.quotes[i].downVote()
  }
  constructor() {}
  ngOnInit() {
    this.quote = new Quote()

  }

}
