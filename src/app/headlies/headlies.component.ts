import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';


@Component({
  selector: 'app-headlies',
  templateUrl: './headlies.component.html',
  styleUrls: ['./headlies.component.scss']
})
export class HeadliesComponent implements OnInit {
  categories=[
    'world',
    'india',
    'business',
    'technology',
    'entertainment',
    'sports',
    'science'
  ];
  constructor(private newsService:NewsService) { }
  news;
  ngOnInit() {
    this.getCategoryData(this.categories[0]);
  }
  url:string;
  onGetCategoryData(category){
    console.log(category);
    this.getCategoryData(category);
  }
  
  getCategoryData(category){  
    this.url="everything?q="+category;
    this.newsService.getData(this.url).subscribe(data=>{
    this.news=data;
    })
  }

}
