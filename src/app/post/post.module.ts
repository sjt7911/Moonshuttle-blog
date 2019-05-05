import { NgModule } from '@angular/core';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './shared/post.service';
import { CreateNewPostComponent } from './create-new-post/create-new-post.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditPostComponent } from './edit-post/edit-post.component';

@NgModule({
  declarations: [
    PostListComponent,
    CreateNewPostComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    PostService
  ]
})

export class PostModule {}
