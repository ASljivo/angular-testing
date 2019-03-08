import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { SearchItemService } from './search-item.service';
import { SearchItem } from '../models';
import { ITEMS } from './mockedItems';

describe('SearchItemService', () => {
  let service: SearchItemService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchItemService]
    });
    // Returns a service with the MockBackend so we can test with dummy responses
    service = TestBed.get(SearchItemService);
    // Inject the http service and test controller for each test
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('search should return SearchItems', fakeAsync(() => {
    const response = ITEMS;
    //  {
    //   resultCount: 1,
    //   results: [
    //     {
    //       artistId: '78500',
    //       artistName: 'U2',
    //       trackName: 'Beautiful Day',
    //       artworkUrl60: 'image.jpg'
    //     }
    //   ]
    // };

    // Perform a request (this is fakeAsync to the responce won't be called until tick() is called)
    service.searchMethod('U2').subscribe(res => {
      // Run our tests
      expect(res.results.length).toBe(3);
      expect(res.results[0]['artistName']).toBe('U2');
      expect(res.results[0]['trackName']).toBe('Beautiful Day');
      expect(res.results[0]['artworkUrl60']).toBe('image.jpg');
    });
    // Expect a call to this URL
    const req = httpTestingController.expectOne(
      'https://itunes.apple.com/search?term=U2&media=music&limit=20'
    );
    // Respond with this data when called
    req.flush(response);
    // Call tick whic actually processes te response
    tick();
  }));
});
