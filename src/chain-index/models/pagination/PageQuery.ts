import {PageSize} from "./PageSize";

export type PageQuery<T> = {
    pageQuerySize: PageSize,
    pageQueryLastItem?: T
}
