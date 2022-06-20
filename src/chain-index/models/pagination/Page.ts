import {PageQuery} from "./PageQuery";

export type Page<T> = {
    currentPageQuery: PageQuery<T>,
    nextPageQuery?: PageQuery<T>,
    pageItems: T[]
}
