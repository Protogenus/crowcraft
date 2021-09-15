///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Bread } from "./bread";
import { FreshButter } from "./fresh-butter";
import { LargeCookingPot } from "./large-cooking-pot";
import { MeatOrMushroom } from "./meat-or-mushroom";
import { Produce } from "./produce";
import { UrguSpiceMix } from "./urgu-spice-mix";
import { WaterFlask } from "./water-flask";

export class SumptuousPotPie extends Item {
    constructor() {
        super(
            "sumptuous pot pie",
            [Professions.Cooking],
            [Rarities.Uncommon],
            [
                new CraftingMaterial(1, new LargeCookingPot()),
				new CraftingMaterial(1, new UrguSpiceMix()),
				new CraftingMaterial(2, new MeatOrMushroom()),
				new CraftingMaterial(1, new WaterFlask()),
				new CraftingMaterial(1, new FreshButter()),
				new CraftingMaterial(1, new Bread()),
				new CraftingMaterial(1, new Produce()),
            ],
            1,
            ""
        );
    }
}
