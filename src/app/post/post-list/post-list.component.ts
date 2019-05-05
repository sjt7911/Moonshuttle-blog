import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../shared/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: 'post-list.component.html'
})

export class PostListComponent implements OnInit, OnDestroy {
  posts = [];
  numberObsSubscription: Subscription = new Subscription();
  showDeleteItemAlert: boolean;

  constructor(private router: Router,
              private postService: PostService) {
    this.showDeleteItemAlert = false;
  }

  ngOnInit() {
    this.getList();
  }

  /**
   * Get Array of the Posts
   */
  getList(): void {
    this.numberObsSubscription.add(
      this.postService.getList()
      .subscribe(
        list => {
          this.posts = list.map(item => {
            return {
              $key: item.key,
              ...item.payload.val()
            };
          });
        }
      )
    );
  }

  editPost(post: any): void {
    this.postService.setSubject(post);
    this.router.navigate([`/post/${post.$key}/edit`]);
  }

  deletePost(post: any): void {
    this.postService.delete(post);
    this.showDeleteItemAlert = true;

    setTimeout(() => this.showDeleteItemAlert = false, 3000);
  }

  ngOnDestroy() {
    this.numberObsSubscription.unsubscribe();
  }
}
