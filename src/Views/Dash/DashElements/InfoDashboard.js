import React, { useEffect, useState} from 'react';

// Components
import InfoItem from './InfoItem';
// Util
import {getPositivityRate} from 'Util/dataCalculations';
import {round} from 'Util/numberStuff';

// Style
import style from './InfoDashboard.module.scss';

function InfoDashboard(props){

    let dataSet = props.data;
    let addtlData = props.additionalData;

    // Dashboard Data variables
    let [positivity, setPositivity] = useState(100);
    // All stats below are arrays of length 2 with the format [current, previous]
    let [hospitalized, setHospitalized] = useState([0, 0]);
    let [inICU, setICU] = useState([0,0]);
    let [deceased, setDeceased] = useState([0,0]);

    useEffect(() => {
        if(!dataSet) return;

        // Good for 7-Day rolling averages
        let last7Days = dataSet.slice(dataSet.length - 7, dataSet.length);
        
        // For our Percentage Positive calculations I'm using a 7 day average
        let roundedPositivity = round(getPositivityRate(
            last7Days.map(t => t.positiveTests + t.negativeTests), 
            last7Days.map(t => t.positiveTests)), 1)   
        setPositivity(roundedPositivity);


        setHospitalized(
            dataSet
                .map(el => el.hospitalBeds.currentUsageCovid) // Extract the proper field
                .filter(el => el !== null) // Sometimes the latest data is null, we account for that
                .slice(-2) // Get the last two elements
        );

        // Same process as above
        setICU(
            dataSet
                .map(el => el.icuBeds.currentUsageCovid)
                .filter(el => el !== null)
                .slice(-2)
        );

        setDeceased(dataSet.map(el => el.deaths).slice(-2));

    }, [dataSet]);

    let vaccinated = addtlData ? addtlData.vaccinationsInitiatedRatio * 100 : null;

    return (
        <>
            {dataSet && (
                <div className={style.infoDashboard}>
                    <InfoItem 
                        icon={'infected-lungs.svg'} 
                        title={'Positivity Rate'} 
                        description={'The percentage of positive tests results out of all Covid-19 tests done.'}
                        current={positivity} />                    
                    <InfoItem 
                        icon={'hospital.svg'} 
                        title={'Currently Hospitalized'} 
                        current={hospitalized[1]} 
                        description={'Current amount of people hospitalized due to Covid-19.'} />
                    <InfoItem 
                        icon={'ventilator.svg'} 
                        title={'In ICU'}
                        description={'Current amount of patients with the disease using ICU beds.'}
                        current={inICU[1]} />
                    <InfoItem 
                        icon={'death.svg'} 
                        title={'Deaths'}
                        description={'Covid-19 related deaths.'}
                        current={deceased[1]} />
                    <InfoItem
                        icon={'vaccine.svg'}
                        title={'Population Vaccinated (1st dose)'}
                        description={"Percentage of the state's population that has received at least one dose of the Covid-19 vaccine."}
                        current={vaccinated.toFixed(1)} 
                        suffix={'%'} />
                </div>
            )}
        </>
    );
}

export default InfoDashboard;