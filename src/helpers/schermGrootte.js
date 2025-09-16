export function formatSizes(availableSizes) {
    let result = '';
    for (let i = 0; i < availableSizes.length; i++) {
        const inch = availableSizes[i];
        const cm = Math.round(inch*2.54)
        const stukString = `${inch} inch (${cm} cm)`;

        if(i>0) result += " | ";
        result += stukString;

    }
    return result;
}