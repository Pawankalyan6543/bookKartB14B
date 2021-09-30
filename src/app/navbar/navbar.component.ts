import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from '../services/themeservice.service';
import{BookService} from './../services/book.service';
import { Option } from "../option.model";
@Component({
  selector: 'app-nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent implements OnInit {
  
  booksList = [];
  total:any
  options$: Array<Option> = [];

  constructor(private bookService:BookService, private readonly themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.getThemeOptions().then((res: any)=> {
      this.options$ = res;
    })
    this.themeService.setTheme("indigo-pink");

      this.bookService.getBooks().subscribe((res) => {
        console.log(res);
        this.total =res.length;
        this.booksList = res;
        this.bookService.setBooksList(this.booksList);
      })

  }
  themeChangeHandler(themeToSet: any) {
    this.themeService.setTheme(themeToSet);
  }
  onKey(event: any) {
    console.log(event.target.value);
    console.log(this);
    if(event.target.value == "") {
      this.bookService.setBooksList(this.booksList);
      return;
    }
    let bList = this.booksList.filter((item: any, index:any) => {
      let title = item?.title.toLowerCase();
       let value = event.target.value.toLowerCase();
      if(title.includes(value)) {
        return item;
      }
    });
    this.bookService.setBooksList(bList);
  }
}