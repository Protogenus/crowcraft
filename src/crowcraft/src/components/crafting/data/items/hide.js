import { RawMaterial, Rarities } from "../item";

export class Hide extends RawMaterial {
    constructor() {
        super(
            "hide",
            [],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [],
            1
        );
    }
}