import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable()

export class PostService {
  postList: AngularFireList<any>;
  private subject: Subject<any> = new Subject<any>();

  constructor(private db: AngularFireDatabase, private router: Router) {
    this.postList = this.db.list('posts');
  }

  setSubject(post: any) {
    this.subject = post;
  }

  getSubject() {
    return this.subject;
  }

  getList() {
    this.postList = this.db.list('posts');
    return this.postList.snapshotChanges();
  }

  create(post: any) {
    const promise = this.postList.push({
      title: post.title,
      text: post.text,
      createdAt: Date()
    });

    this.router.navigate(['/']);
  }

  update(postId: string, post: any) {
    console.log(postId);
    const promise = this.postList.update(postId, post);

    this.router.navigate(['/']);
  }

  /**
   * Delete Post
   * @param post
   */
  delete(post: any) {
    this.postList.remove(post.$key);
  }
}
