import { createAction, props } from '@ngrx/store';
import { Article } from 'src/app/models/article.model';

export const getData = createAction('[Artilce] Get Article');
export const getSuccess = createAction('[Artilce] Get Article Success', props<{articleList: Article[]}>());
export const getFailure = createAction('[Artilce] Get Article Failure', props<{error: any}>());
