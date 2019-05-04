import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class PostService {
  constructor(private http: HttpClient) {}

  /**
   * Get Base API Url address
   */
  static getBaseUrl(): string {
    const baseUrl = 'https://blog-angular-40873.firebaseio.com/posts.json';
    return baseUrl;
  }

  getList() {
    return this.http.get(PostService.getBaseUrl());
  }

  create(post: object) {
    return this.http.post(PostService.getBaseUrl(), post);
  }

  delete() {
  }
}
