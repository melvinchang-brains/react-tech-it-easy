import {bestSellingTv, inventory} from "../constants/inventory.js";

export function makeStringTv(tv) {
    return`${tv.brand} ${tv.type} - ${tv.name}`;

}