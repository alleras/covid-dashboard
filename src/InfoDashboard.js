import React, { useEffect, useState, useRef } from 'react';

// Util
import {getPositivityRate} from './Util/dataCalculations';
import {round} from './Util/numberStuff';

function InfoDashboard(props){

    let dataSet = props.data;
    // Dashboard Data variables
    let [positivity, setPositivity] = useState(100);


    useEffect(() => {
        if(!dataSet) return; 
        
        // Good for 7-Day rolling averages
        let last7Days = dataSet.slice(dataSet.length - 7, dataSet.length);
        console.log(last7Days);

        // For our Percentage Positive calculations I'm using a 7 day average
        let roundedPositivity = round(getPositivityRate(
            last7Days.map(t => t.totalTestResultsIncrease), 
            last7Days.map(t => t.positiveIncrease)), 1)   
        setPositivity(roundedPositivity);
                    
    }, [dataSet]);

    return (
        <>
            {dataSet ? (
                <p>Positivity rate: {positivity}%</p>
            ) : (
                <>Loading...</>
            )}
        </>
    );
}

export default InfoDashboard;