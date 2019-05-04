import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostModel as Post} from '../shared/post.model';
import { PostService } from '../shared/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: 'post-list.component.html'
})

export class PostListComponent implements OnInit, OnDestroy {
  posts: Array<Post> = new Array<Post>();
  numberObsSubscription: Subscription = new Subscription();

  constructor(private router: Router,
              private postService: PostService) {}

  ngOnInit() {
    this.getPostList();
  }

  /**
   * Get Array of the Posts
   */
  getPostList(): void {
    this.numberObsSubscription.add(
      this.postService.getList()
      .subscribe(
        (response) => {
          for (const responseKey in response) {
            if (response.hasOwnProperty(responseKey)) {
              this.posts.push(response[responseKey]);
            }
          }
        },
        (error) => {
        },
        () => {
        }
      )
    );
  }

  /**
   * If I could get Id of item
   */
  delete() {
  }

  ngOnDestroy() {
    this.numberObsSubscription.unsubscribe();
  }
}
