import * as d3 from 'd3';

function getPositivityRate(dailyTests, dailyNewCases) {
    let totalTests = 0;
    let totalNewCases = 0;

    for (let i = 0; i < dailyNewCases.length; i++) {
        if (dailyTests[i] <= 0 || dailyNewCases[i] <= 0)
            continue;
        totalTests += dailyTests[i];
        totalNewCases += dailyNewCases[i];
    }

    return (totalNewCases / totalTests) * 100;
}
/*
    Gets the seven day average of a specified key in an array of objects.
*/
function get7DayAverageKey(data, index, key) {
    let newData = data.slice(index - 3, index + 3)
        .map(el => el[key]);

    let mean = d3.mean(newData);
    return mean === undefined ? 0 : mean;
}

export {getPositivityRate, get7DayAverageKey}