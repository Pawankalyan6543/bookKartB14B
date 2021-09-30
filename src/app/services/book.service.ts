import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, } from 'rxjs';

@Injectable()
export class BookService {

  bookList: Subject<any> = new Subject();

  constructor(private http: HttpClient) { }

  getBooks():Observable<any>{
    return this.http.get<any>("https://bookcart.azurewebsites.net/api/Book");}

    setBooksList(list : any) {
      this.bookList.next(list);
    }
  }