export class Error {
    message: string = '';
    stack: string = '';
    parameters: Array<string> = new Array<string>();lean;
    constructor(_message: string, _stack: string, _parameters: Array<string>) {
        this.message = _message;
        this.stack = _stack;
        this.parameters = _parameters;
    }
}