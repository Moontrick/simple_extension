import { searchStateStore, SearchStateStore } from './searchState';
import { searchSyncStore, SearchSyncStore } from './searchSync';

class SearchAsync {
  state: SearchStateStore;
  sync: SearchSyncStore;

  constructor(
    storeState: SearchStateStore,
    syncStore: SearchSyncStore,
  ) {
    this.state = storeState;
    this.sync = syncStore;
  }

  // async  fetchPost() {
  //   try {
  //     const response = await baseService.post(
  //       RoutesSearch.GetSynonyms,
  //       { ...params },
  //     );

  //   } catch (error) {
  //     alertHandler.addAlert({ alert: error });
  //   } finally {
  //     this.state.loadings.loading = false;
  //   }
  
}

export const searchAsyncStore = new SearchAsync(
  searchStateStore,
  searchSyncStore,
);
export type SearchAsyncStore = typeof searchAsyncStore;
