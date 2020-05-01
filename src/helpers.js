export const formatDate = (date) => 
date.toLocalDateDtring(undefined, { day: 'numeric', month: 'long' });

export const formatTemperature = (temperature, isMetric) => {
    let displayTemp = temperature;
    if (!isMetric) {
        returnTemp = (temperature - 32) * (5 / 9);
    }
    return Math.round(displayTemp);
}