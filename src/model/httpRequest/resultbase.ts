import { Error } from "./error";

/**
 * This object wraps the result of an API call to retrieve the data
 * and a set of indices.
 */
export class ResultBase<T> {
    data: Array<T> = new Array<T>();
    item: T | undefined;
    isSuccess: boolean;
    error: Error;

    constructor(data: Array<T>, isSuccess: boolean, error: Error) {
        this.isSuccess = isSuccess;
        this.error = error;
        this.data = data;
    }
}