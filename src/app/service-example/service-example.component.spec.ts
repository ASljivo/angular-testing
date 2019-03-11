import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ServiceExampleComponent } from './service-example.component';
import { SearchItemService } from './search-item.service';
import { ITEMS } from './mockedItems';

describe('ServiceExampleComponent', () => {
  let component: ServiceExampleComponent;
  // A fixture is a wrapper for a component and it’s template.
  let fixture: ComponentFixture<ServiceExampleComponent>;
  let service: SearchItemService;
  let articles;
  beforeEach(async(() => {
    articles = ITEMS;
    TestBed.configureTestingModule({
      declarations: [ServiceExampleComponent],
      imports: [HttpClientTestingModule],
      providers: [SearchItemService]
    }).compileComponents();
  }));

  beforeEach(() => {
    // 	We create an instance of a component fixture through the TestBed, this injects the SearchItemService into the component constructor.
    fixture = TestBed.createComponent(ServiceExampleComponent);
    // We can find the actual component from the componentInstance on the fixture.
    component = fixture.componentInstance;
    // We can get resolve dependencies using the TestBed injector by using the get function.
    service = TestBed.get(SearchItemService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set heros correctly from the server', () => {
    spyOn(service, 'searchMethod').and.returnValue(of(articles));
    // manually trigger change detections
    fixture.detectChanges();
    expect(fixture.componentInstance.articles.results.length).toBe(1);
  });
});
