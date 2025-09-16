import './App.css';
import {calculateSoldTvs} from './helpers/soldTvs.js';
import {calculateStockTvs} from './helpers/ingekochteTvs.js';
import {calculateRemainingTvs} from './helpers/nogteverkopenTvs.js';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import {makeStringTv} from "./helpers/stringNaamTv.js";
import {getPriceTv} from "./helpers/priceTv.js";
import {formatSizes} from "./helpers/schermGrootte.js";
import checkIcon from "./assets/check.png";
import notIcon from "./assets/minus.png";
import {showOutcomeInConsole} from './helpers/oefenbestand.js';
//import {useEffect} from "react";



export function App() {
    const soldTvs = calculateSoldTvs();
    const gekochteTvs = calculateStockTvs();
    const nogTeVerkopenTvs = calculateRemainingTvs();
    const titleA = makeStringTv(bestSellingTv);
    const titleB = makeStringTv(inventory[0]);
    const price = getPriceTv(bestSellingTv);
    const sizesA = formatSizes(bestSellingTv.availableSizes);
    const sizesB = formatSizes(inventory[0].availableSizes);
    const opdrachtC = makeStringTv(bestSellingTv);
    const priceOpdrachtC = getPriceTv(bestSellingTv);
    const sizesOpdrachtC = formatSizes(bestSellingTv.availableSizes);


    function logMostSold() {
        console.log("Meest verkocht eerst");
    }

    function logCheapest() {
        console.log("Goedkoopste eerst");
    }

    function logBestForSport() {
        console.log("Meest geschikt voor sport");
    }


    showOutcomeInConsole();
    return (
        <div>
            <h1>Tech-It-Easy</h1>
            <h2>Verkoopoverzicht</h2>

            <p style={{color: "green"}}>Aantal verkochte tvs: {soldTvs}</p>

            <p style={{color: "blue"}}>Aantal ingekocht Tvs: {gekochteTvs}</p>

            <p style={{color: "red"}}>Nog te verkopen Tvs: {nogTeVerkopenTvs}</p>

            <h3>Naam van een tv</h3>
            <p>{titleA}</p>
            <p>{titleB}</p>

            <h3>Prijs Tv</h3>
            <p>{price}</p>

            <h3>Schermgroottes</h3>
            <p>{sizesA}</p>
            <p>{sizesB}</p>

            <p>{opdrachtC}</p>
            <p>{priceOpdrachtC}</p>
            <p>{sizesOpdrachtC}</p>

            <h3>Toepassingen</h3>
            <p>
                <img src={checkIcon} alt="" style={{width: 14, marginRight: 6}}/>wifi{" "}
                <img src={notIcon} alt="" style={{width: 14, margin: "0 6px 0 12px"}}/>speech{" "}
                <img src={checkIcon} alt="" style={{width: 14, margin: "0 6px 0 12px"}}/>hdr{" "}
                <img src={checkIcon} alt="" style={{width: 14, margin: "0 6px 0 12px"}}/>bluetooth{" "}
                <img src={notIcon} alt="" style={{width: 14, marginLeft: 12}}/>ambilight{" "}
            </p>


            <h3>Sorteren</h3>
            <button type="button" onClick={logMostSold}>Meest Verkocht</button>
            <button type="button" onClick={logCheapest}>Goedkoopste eerst</button>
            <button type="button" onClick={logBestForSport}>Meest geschikt voor sport eerst</button>
        </div>


    );

}


DDDDDDDd