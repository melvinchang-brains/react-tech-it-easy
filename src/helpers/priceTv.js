//import {bestSellingTv,inventory} from './constants/inventory.js';

export function getPriceTv(tv) {
    const priceTv = tv.price;
    return `€ ${priceTv},-`;
}