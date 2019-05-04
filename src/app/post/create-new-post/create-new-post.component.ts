import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostModel as Post} from '../shared/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-new-post',
  templateUrl: 'create-new-post.component.html'
})

export class CreateNewPostComponent implements OnInit, OnDestroy {
  addNewPostForm: FormGroup;

  /**
   * Create Instance to model
   */
  post: Post = new Post();

  constructor(private postService: PostService,
              private fb: FormBuilder,
              private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
  }

  /**
   * Initialized New Post Form
   */
  initForm(): void {
    this.addNewPostForm = this.fb.group({
      title: [this.post.title, Validators.required],
      text:  [this.post.text, Validators.required]
    });
  }

  /**
   * On Submit Add new post form
   */
  onSubmitForm(): void {
    this.post.title = this.addNewPostForm.get('title').value;
    this.post.text = this.addNewPostForm.get('text').value;
    this.post.createdAt = new Date();

    this.postService.create(this.post)
      .subscribe(
        (response) => {
        },
        (error) => {},
        () => {
          this.router.navigate(['/']);
        }
      );
  }

  ngOnDestroy() {}
}
