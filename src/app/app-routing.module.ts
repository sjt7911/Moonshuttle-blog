import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post/post-list/post-list.component';
import { CreateNewPostComponent } from './post/create-new-post/create-new-post.component';

const routes: Routes = [
  {path: '', component: PostListComponent},
  {path: 'create-new-post', component: CreateNewPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
