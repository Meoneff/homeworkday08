import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ApiServiceService } from "src/app/services/api-service.service";
import * as ArticleActions from '../actions/data.actions';
import { catchError, exhaustMap, map, of } from "rxjs";


@Injectable()
export class dataEffects{
    constructor(private apiService: ApiServiceService, private actions$: Actions){}

    getArticle$ = createEffect(()=>
        this.actions$.pipe(
            ofType(ArticleActions.getData),
            exhaustMap(()=>
                this.apiService.getArticle().pipe(
                    map((articles)=>{
                        return ArticleActions.getSuccess({articleList: articles});
                    }),
                    catchError((error)=> of(ArticleActions.getFailure({error})))
                )
            )
        )
    );
}