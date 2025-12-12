import { makeAutoObservable } from 'mobx';
import { Loadings } from '../types';

class SearchState {

  loadings: Loadings = {
    searchLoading: false,
  };
  constructor() {
    makeAutoObservable(this); 
  }
}

export const searchStateStore = new SearchState();
export type SearchStateStore = typeof searchStateStore;
