import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';


const routes: Routes = [
  { path:'BookCart', component:BookComponent},
  { path:'favorite', component:BookComponent},
  { path:'add_shopping_cart', component:BookComponent},
  { path:'myOrders', component:BookComponent},
  { path:'Logout', component:BookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
