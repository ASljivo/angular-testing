import { Component, OnInit } from '@angular/core';
import { Post } from '../models';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-component-example',
  templateUrl: './component-example.component.html',
  styleUrls: ['./component-example.component.scss']
})
export class ComponentExampleComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostsService) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts().subscribe(posts => (this.posts = posts));
  }

  delete(post: Post) {
    this.posts = this.posts.filter(h => h.id !== post.id);
    this.postService.deletePost(post.id).subscribe(res => {});
  }
}
