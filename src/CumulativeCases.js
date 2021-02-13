import React from 'react';
import TimevsCasesChart from './Chart/TimevsCasesChart';


function NewCasesChart (props) {
    const getSimpleData = () => props.data.map((val, i) => (
      {
          cases: val.positive, 
          date: val.date, 
      })
    );

    const margin = {top: 10, bottom: 30, left: 60, right: 30};
    const height = 400 - margin.top - margin.bottom;
    const width = 800 - margin.right - margin.left;

    return (
        <>
        <div>Cumulative Covid-19 cases in {props.provinceName}</div>
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