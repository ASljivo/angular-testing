import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from '@angular/core/testing';

import { ComponentExampleComponent } from './component-example.component';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { PostsService } from './posts.service';
import { POSTS } from './mockedPosts';
import { DebugElement } from '@angular/core';

describe('ComponentExampleComponent', () => {
  let posts;
  let component: ComponentExampleComponent;
  let fixture: ComponentFixture<ComponentExampleComponent>;
  let httpTestingController: HttpTestingController;
  let service: PostsService;
  beforeEach(() => {
    posts = POSTS;

    TestBed.configureTestingModule({
      declarations: [ComponentExampleComponent],
      imports: [HttpClientTestingModule],
      providers: [PostsService]
    });
    fixture = TestBed.createComponent(ComponentExampleComponent);
    component = fixture.componentInstance;
    service = TestBed.get(PostsService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set heros correctly from the server', () => {
    spyOn(service, 'getPosts').and.returnValue(of(posts));
    fixture.detectChanges();
    expect(fixture.componentInstance.posts.length).toBe(3);
  });

  it('should create one tr for each post', () => {
    spyOn(service, 'getPosts').and.returnValue(of(posts));
    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.css('.posts')).length).toBe(3);
  });

  it('should detect delete post', () => {
    spyOn(service, 'deletePost').and.returnValue(of(true));
    component.posts = posts;
    component.delete(posts[0]);
    expect(service.deletePost).toHaveBeenCalledWith(posts[0].id);
    expect(fixture.componentInstance.posts.length).toBe(2);
  });
});
