import { Character } from "../Character/Character";

export class Monster extends Character {

    type: string;

    constructor(name: string, type: string) {
        super(name);
    }

    getType(): string {
        return this.type;
    }

    move(): void {
        console.log(`${this.getName()} moved by ${Math.floor(Math.random() * 10)} positions`);
    }
}