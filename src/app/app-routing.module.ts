import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Blogs } from './blogs/blogs.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  { path: "", component: CardComponent },
  { path: "details", component: Blogs }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
