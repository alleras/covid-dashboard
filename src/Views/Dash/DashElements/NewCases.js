import React from 'react';

import TimevsCasesChart from 'Components/TimevsCasesChart';

import {get7DayAverageKey} from 'Util/dataCalculations';

function NewCasesChart (props) {

    const getSimpleData = () => props.data.map((val, i) => (
      {
          cases: val.newCases,  // New Cases
          date: val.date, 
          average: get7DayAverageKey(props.data, i, 'newCases')
      })
    );

    const margin = {top: 10, bottom: 30, left: 60, right: 30};

    return (
        <>
        <div>New Daily Covid-19 cases in {props.provinceName}</div>
        {props.data ? (
        <TimevsCasesChart 
            data={getSimpleData()}
            margin={margin}
            id={props.id}
            style={props.style}>
        </TimevsCasesChart>
        ) : <small>No data available. Please try again later</small>}
        </>
    );
}

export default NewCasesChart;