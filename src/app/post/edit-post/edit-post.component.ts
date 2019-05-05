import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostModel as Post } from '../shared/post.model';
import { PostService } from '../shared/post.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-post',
  templateUrl: 'edit-post.component.html'
})

export class EditPostComponent implements OnInit {
  post: Post = new Post();
  postId: any;
  editForm: FormGroup;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private activateRoute: ActivatedRoute,
              private postService: PostService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.postId = this.activateRoute.snapshot.paramMap.get('id');

    if (this.postId) {
      this.post = Object.assign(this.post, this.postService.getSubject());
      this.initEditForm();
    }
  }

  /**
   * Initialize Edit Form
   */
  initEditForm(): void {
    this.editForm = this.fb.group({
      title: [this.post.title, Validators.required],
      text:  [this.post.text, Validators.required]
    });
  }

  /**
   * Submit Edit Form
   */
  onSubmitForm(): void {
    this.post.title = this.editForm.get('title').value;
    this.post.text = this.editForm.get('text').value;
    this.post.id = this.postId;

    console.log(this.editForm);

    this.postService.update(this.post.id, this.editForm.value);
  }
}
