import { itemWithId } from "./itemWithId";

export class client extends itemWithId {
    name: string = '';
    color: string = '';

    constructor(_name: string, _id: string, _color: string) {
        super();
        this.name = _name;
        this.id = _id;
        this.color = _color;
    }
}