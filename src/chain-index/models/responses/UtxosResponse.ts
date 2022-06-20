import {Tip} from "../Tip";
import {Page} from "../pagination/Page";

export interface UtxosResponse {
    currentTip: Tip,
    page: Page<any>
}
