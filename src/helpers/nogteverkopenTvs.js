import {calculateStockTvs} from './ingekochteTvs.js';
import {calculateSoldTvs} from './soldTvs.js';

export function calculateRemainingTvs () {
    return calculateStockTvs()-calculateSoldTvs();

}