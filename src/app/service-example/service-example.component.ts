import { SearchItem } from './../models';
import { Component, OnInit } from '@angular/core';
import { SearchItemService } from './search-item.service';

@Component({
  selector: 'app-service-example',
  templateUrl: './service-example.component.html',
  styleUrls: ['./service-example.component.scss']
})
export class ServiceExampleComponent implements OnInit {
  articles: SearchItem;

  constructor(private searchItemService: SearchItemService) {}

  ngOnInit() {
    this.searchArticle();
  }

  searchArticle(): void {
    this.searchItemService.searchMethod('U2').subscribe(response => {
      this.articles = response;
    });
  }
}
