import { Moveable } from "./Character/Moveable";

export class Party implements Moveable {

    moveables: Moveable[] = [];

    addMoveable(moveable: Moveable): void {
        this.moveables = [...this.moveables, moveable];
    }

    move(): void {
        this.moveables.forEach(moveable => moveable.move());
    }
}