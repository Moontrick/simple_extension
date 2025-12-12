
import type { Loadings } from '../types';
import { searchStateStore, SearchStateStore } from './searchState';

class SearchSync {
  state: SearchStateStore;

  constructor(storeState: SearchStateStore) {
    this.state = storeState;
  }
  //Гетеры
  //______________________________________________________________________________________________
  public getLoadings() {
    return this.state.loadings;
  }
  
  //______________________________________________________________________________________________



  //Сетеры
  //______________________________________________________________________________________________
  public setLoadings(value: boolean, key: keyof Loadings) {
    this.state.loadings = { ...this.state.loadings, [key]: value };
  }
  //______________________________________________________________________________________________
}

export const searchSyncStore = new SearchSync(searchStateStore);
export type SearchSyncStore = typeof searchSyncStore;
