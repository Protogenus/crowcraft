///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { BoneBroth } from "./bone-broth";
import { HotSauce } from "./hot-sauce";
import { LargeCookingPot } from "./large-cooking-pot";
import { MeatOrMushroom } from "./meat-or-mushroom";
import { PasteurizedMilk } from "./pasteurized-milk";
import { PotatoFlour } from "./potato-flour";

export class BiscuitsAndGravy extends Item {
    constructor() {
        super(
            "biscuits and gravy",
            [Professions.Cooking],
            [Rarities.Uncommon],
            [
                new CraftingMaterial(1, new LargeCookingPot()),
				new CraftingMaterial(1, new PasteurizedMilk()),
				new CraftingMaterial(1, new MeatOrMushroom()),
				new CraftingMaterial(1, new PotatoFlour()),
				new CraftingMaterial(1, new BoneBroth()),
				new CraftingMaterial(1, new HotSauce()),
            ],
            1,
            ""
        );
    }
}
