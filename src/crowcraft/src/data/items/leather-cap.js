import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { MetalRivets } from "./metal-rivets";
import { LeatherSquare } from "./leather-square";
import { EtherealDust } from "./ethereal-dust";

export class LeatherCap extends Item {
    constructor() {
        super(
            "leather cap",
            [Professions.Leatherworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new LeatherSquare()),
				new CraftingMaterial(1, new LeatherSquare()),
				new CraftingMaterial(1, new LeatherSquare()),
				new CraftingMaterial(1, new MetalRivets()),
				new CraftingMaterial(6, new EtherealDust()),
            ],
            1
        );
    }
}
