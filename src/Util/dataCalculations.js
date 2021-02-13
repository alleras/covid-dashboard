var getPositivityRate = (dailyTests, dailyNewCases) => {
    let totalTests = 0;
    let totalNewCases = 0;

    for(let i=0; i<dailyNewCases.length;i++){
        if(dailyTests[i] < 0 || dailyNewCases[i] < 0) continue;
        console.log(dailyTests[i], dailyNewCases[i])
        totalTests += dailyTests[i];
        totalNewCases += dailyNewCases[i];
    }
    console.log(totalTests, totalNewCases)
    return (totalNewCases / totalTests) * 100;
}

export {getPositivityRate}