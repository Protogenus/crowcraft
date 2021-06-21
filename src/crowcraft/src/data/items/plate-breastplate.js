import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { MetalSheet } from "./metal-sheet";
import { LeatherPadding } from "./leather-padding";
import { EtherealDust } from "./ethereal-dust";

export class PlateBreastplate extends Item {
    constructor() {
        super(
            "plate breastplate",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new MetalSheet()),
				new CraftingMaterial(1, new MetalSheet()),
				new CraftingMaterial(1, new MetalSheet()),
				new CraftingMaterial(1, new LeatherPadding()),
				new CraftingMaterial(18, new EtherealDust()),
            ],
            1
        );
    }
}
    