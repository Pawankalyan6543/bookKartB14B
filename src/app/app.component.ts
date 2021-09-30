import { Component } from '@angular/core';
import { BookService } from './services/book.service';
import { ThemeService } from './services/themeservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookKartB14B';
  bookList : any = [];
  constructor(public bookService: BookService) {

  }
  ngOnInit(): void {
   this.bookService.bookList.subscribe((res) => {
     console.log(res);
     this.bookList = res;
   })
  }
}
