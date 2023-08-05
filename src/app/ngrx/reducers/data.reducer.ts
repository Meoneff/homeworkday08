import { createReducer,on } from '@ngrx/store';
import { dataState } from '../states/data.state';
import * as dataActions from '../actions/data.actions';

export const initualState : dataState = {
    isLoading: false,
    isSuccess: false,
    articleList: [],
    error:'',
};

export const dataReducer = createReducer(
    initualState,
    on(dataActions.getData,(state,action)=>{
        console.log(action.type);
        let newState = {
            ...state,
            isLoading: true,
            isSuccess: false,
            error:'',
        };
        return newState;
    }),
    on(dataActions.getSuccess,(state,action)=>{
        console.log(action.type);
        let newState = {
            ...state,
            isLoading: false,
            isSuccess: true,
            articleList: action.articleList,
            error:'',
        };
        return newState;
    }),
    on(dataActions.getFailure,(state,action)=>{
        console.log(action.type);
        let newState = {
            ...state,
            isLoading: false,
            isSuccess: false,
            error: action.error,
        };
        return newState;
    })
);