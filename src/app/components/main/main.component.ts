import { Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article.model';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Store } from '@ngrx/store';
import { dataState } from 'src/app/ngrx/states/data.state';
import * as ArticleActions from '../../ngrx/actions/data.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnDestroy{
  // articleList: Article[] = []; //có dữ liệu trong store nên không cần dùng nên bỏ mấy cái merghmap
  //1 api nên hong cần mergh nhiều
  articleList$: Observable<Article[]> = this.store.select('article','articleList');

  constructor(private apiService:ApiServiceService, private store:Store<{article:dataState}>) {
    this.store.dispatch(ArticleActions.getData());
   }
   ngOnDestroy(): void {
    console.log('home component destroyed');
  }
  

}
