import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { PostsService } from './posts.service';
import { Post } from '../models';
import { POSTS } from './mockedPosts';

describe('Posts', () => {
  // let mockMessageService;
  let httpTestingController: HttpTestingController;
  let service: PostsService;
  const reqUrl = 'https://jsonplaceholder.typicode.com/posts';
  let response: Post[];

  beforeEach(() => {
    response = POSTS;

    // mockMessageService = jasmine.createSpyObj(['add']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostsService]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(PostsService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('search should return post items', fakeAsync(() => {
    // Perform a request (this is fakeAsync to the responce won't be called until tick() is called)
    service.getPosts().subscribe(res => {
      // Run our tests
      expect(res.length).toBe(3);
      expect(res[0].id).toBe(1);
      expect(res[0].title).toBe('Test title');
      expect(res[0].body).toBe('Test body');
    });
    // Expect a call to this URL
    const req = httpTestingController.expectOne(reqUrl);
    // Respond with this data when called
    req.flush(response);
    // Call tick whic actually processes te response
    tick();
  }));

  it('should call get post by id with correct URL', fakeAsync(() => {
    service.getPost(3).subscribe();

    const req = httpTestingController.expectOne(`${reqUrl}/3`);
    req.flush(response[2]);
    tick();
  }));

  it('should call deletePost with correct URL', fakeAsync(() => {
    service.deletePost(123).subscribe(res => {
      expect(Object.keys(res).length).toBe(0);
    });

    const req = httpTestingController.expectOne(`${reqUrl}/123`);
    req.flush({});
    tick();
  }));
});
