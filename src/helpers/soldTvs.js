import {inventory} from '../constants/inventory.js';

export function calculateSoldTvs () {
    let total = 0;

    for (let i = 0; i <inventory.length; i++) {

        total=total + inventory[i].sold;
    }

    return total;
}