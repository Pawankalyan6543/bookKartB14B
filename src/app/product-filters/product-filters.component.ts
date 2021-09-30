import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.scss']
})
export class ProductFiltersComponent implements OnInit {

  booksList : any = [];

  constructor(public bookService : BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((res) => {
      console.log(res);
      this.booksList = res;
    })
  }

  onKey(event: any) {
    console.log(event.target.value);
    console.log(this);
    this.booksList = this.booksList.filter((item: any, index:any) => {
      let title = item?.title.toLowerCase();
       let value = event.target.value.toLowerCase();
      if(title.includes(value)) {
        return item;
      }
    });
    console.log("this.booksList", this.booksList);
    this.bookService.setBooksList(this.booksList);
  }

}
