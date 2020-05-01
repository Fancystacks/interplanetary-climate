export const formatDate = (date) => 
date.toLocaleDateString(undefined, { day: 'numeric', month: 'long' });

export const formatTemperature = (temperature, isMetric) => {
    let displayTemp = temperature;
    if (!isMetric) {
        displayTemp = (temperature - 32) * (5 / 9);
    }
    return Math.round(displayTemp);
}