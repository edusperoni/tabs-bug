import { NavigatedData, Page } from '@nativescript/core'
import { SearchViewModel } from './search-view-model'

export function onNavigatingTo(args: NavigatedData) {
  const page = <Page>args.object
  page.bindingContext = new SearchViewModel()
  
}

export function navigate(args: any) {
  console.log('trying to navigate');
  args.object.page.frame.navigate('browse/browse-page');
}
