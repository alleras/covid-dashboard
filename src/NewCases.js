import React from 'react';

import * as d3 from 'd3';
import TimevsCasesChart from './Chart/TimevsCasesChart';

function NewCasesChart (props) {
    
    var get7DayAverage = (data, index) => {
        let newData = data.slice(index - 3, index + 3)
            .filter(el => el.positive !== 0)  
            .map(el => el.positiveIncrease);

        let mean = d3.mean(newData);
        return mean === undefined ? 0 : mean;
    };

    const getSimpleData = () => props.data.map((val, i) => (
      {
          cases: val.positiveIncrease, 
          date: val.date, 
          average: get7DayAverage(props.data, i)
      })
    );

    const margin = {top: 10, bottom: 30, left: 60, right: 30};
    const height = 400 - margin.top - margin.bottom;
    const width = 800 - margin.right - margin.left;

    return (
        <>
        <div>New Daily Covid-19 cases in {props.provinceName}</div>
        {props.data ? (
        <TimevsCasesChart 
            data={getSimpleData()}
            width={width}
            height={height}
            margin={margin}>
        </TimevsCasesChart>
        ) : <small>No data available. Please try again later</small>}
        </>
    );
}

export default NewCasesChart;