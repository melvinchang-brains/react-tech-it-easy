// oefenbestand.js
import { inventory } from '../constants/inventory.js';
//import {calculateRemainingTvs} from "./nogteverkopenTvs.js";

export function showOutcomeInConsole() {
    console.log('uitkomst opdracht 1a');

    const tvTypeNamen = inventory.map((tv) => {
        return tv.type;
    });
    console.log("tvTypes:", tvTypeNamen);

    console.log('uitkomst opdracht 1b');
    const tvUitverkocht = inventory.filter((tv) => {
        return tv.originalStock - tv.sold === 0;
    });
    const resultaat = tvUitverkocht.map((tv) => {
        return tv.type;
    });

    console.log("tvUItverkocht:", resultaat);

    const infoNH3216Smart = inventory.filter((tv) => {
        console.log(tv);
        return (tv.type === "NH3216SMART")
    });
    console.log("infoNH3216Smart:", infoNH3216Smart);

    const requiredSpeed = inventory.map((tv) => {
        console.log(tv);

        const merkTv = tv.brand;
        const naamTv = tv.name;
        const snelheidTv = tv.refreshRate;
        return { name: `${merkTv} ${naamTv}`, suitable: snelheidTv >= 100
        };


    });

    console.log("snelleTv ", requiredSpeed);
    console.log("tvTypes: ", tvTypeNamen);
    console.log("tvUitverkocht: ", resultaat);
    console.log("infoNH3216: ", infoNH3216Smart);

}

const requiredSpeed = inventory.map((tv) => {
    const merkTv = tv.brand;
    const naamTv = tv.name;
    const snelheidTv = tv.refreshRate; // puntkomma!
    return {
        name: merkTv + " " + naamTv,
        suitable: snelheidTv >= 100,
    };
});

console.log("requiredSpeed:", requiredSpeed);