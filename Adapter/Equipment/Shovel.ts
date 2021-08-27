import { Item } from "./interfaces/Item";

export class Shovel implements Item {

    name = 'Shovel';

    use(): string {
        return `use ${this.name}`;
    }
}