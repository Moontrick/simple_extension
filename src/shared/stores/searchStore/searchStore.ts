import { searchAsyncStore, SearchAsyncStore } from './models/searchAsync';
import { searchStateStore, SearchStateStore } from './models/searchState';
import { searchSyncStore, SearchSyncStore } from './models/searchSync';

class SearchStore {
  state: SearchStateStore;
  sync: SearchSyncStore;
  async: SearchAsyncStore;

  constructor(
    searchState: SearchStateStore,
    searchSync: SearchSyncStore,
    searchAsync: SearchAsyncStore,
  ) {
    this.state = searchState;
    this.sync = searchSync;
    this.async = searchAsync;
  }
}

export const searchStore = new SearchStore(
  searchStateStore,
  searchSyncStore,
  searchAsyncStore,
);
