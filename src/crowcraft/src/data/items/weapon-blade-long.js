import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { MetalBar } from "./metal-bar";
import { BladeMoldLong } from "./blade-mold-long";
import { EtherealDust } from "./ethereal-dust";

export class WeaponBladeLong extends Item {
    constructor() {
        super(
            "weapon blade: long",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(4, new EtherealDust()),
				new CraftingMaterial(1, new BladeMoldLong()),
            ],
            1
        );
    }
}
