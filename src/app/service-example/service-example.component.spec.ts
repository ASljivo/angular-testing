import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ServiceExampleComponent } from './service-example.component';
import { SearchItemService } from './search-item.service';
import { ITEMS } from './mockedItems';

describe('ServiceExampleComponent', () => {
  let component: ServiceExampleComponent;
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
    fixture = TestBed.createComponent(ServiceExampleComponent);
    component = fixture.componentInstance;
    service = TestBed.get(SearchItemService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set heros correctly from the server', () => {
    spyOn(service, 'searchMethod').and.returnValue(of(articles));
    fixture.detectChanges();
    expect(fixture.componentInstance.articles.results.length).toBe(1);
  });
});
