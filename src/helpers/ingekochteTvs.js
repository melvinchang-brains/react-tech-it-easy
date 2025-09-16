import {inventory} from "../constants/inventory.js";

export function calculateStockTvs() {
    let totalBuy=0
    for (let i = 0; i <inventory.length ; i++) {
        totalBuy += inventory[i].originalStock
    }

    return totalBuy;
}
