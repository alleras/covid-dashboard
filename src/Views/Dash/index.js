import React, { useEffect, useState } from 'react';
//Utils
import acronymToFullName from 'Util/stateAcronyms';
// Views
import CumulativeCasesChart from './DashElements/CumulativeCases';
import NewCasesChart from './DashElements/NewCases';
import InfoDashboard from './DashElements/InfoDashboard';
import StatusIndicator from './DashElements/StatusIndicator';
// Components
import ProvinceSelector from 'Components/ProvinceSelector';

// API
import {API_KEY} from 'settings';

// Style
import style from './index.module.scss';

function Dash({province, provinceList, provinceHandler}){

  let [dataSet, setData] = useState(null);
  let [originalData, setOriginalData] = useState(null);

  let provinceName = acronymToFullName(province);

  useEffect(() => {    
      async function fetchData() {
        let result = false;
        
        console.log('Fetching data for: ' + province);
  
        try{
          result = await (await fetch(`https://api.covidactnow.org/v2/state/${province}.timeseries.json?apiKey=${API_KEY}`)).json();
        }
        catch(error){
          console.log('Could not retrieve data. Error: ' + error);
          return;
        }
  
        // Original information in case we need it.
        setOriginalData(result);
  
        // We only need the timeseries section of the API call result for the graphs.
        // Skip the data that's null
        let timeSeries = result.actualsTimeseries.filter(el => el.newCases !== null || el.cases !== null); 
  
        const formattedResult = timeSeries.map(curr => {
          // JS Dates' parse method is not recommended anymore, so I manually insert the values onto a new Date object.
          const ds = curr.date.toString();
          // The format the API provides is YYYY-MM-DD
          const formattedDate = new Date(ds.slice(0,4), ds.slice(5,7) - 1 /*Month should be 0-indexed */, ds.slice(8,10));
  
          return {...curr, date: formattedDate,}
        });
  
        setData(formattedResult);
        }
        
        fetchData();
  }, [province]);

  const severityThemeCorrelation = [
    {
      level: 'low',
      style: style.low
    },
    {
      level: 'medium',
      style: style.medium
    },
    {
      level: 'high',
      style: style.high
    },
    {
      level: 'critical',
      style: style.critical
    },
    {
      level: 'severe',
      style: style.severe
    },  
  ];

  return(
      <>
      {provinceList && dataSet ? (
          <>
            {/* TODO: Make this its own element? */}
            <div className={style.top + ' ' + severityThemeCorrelation[originalData ? originalData.riskLevels.overall : null].style}>
              <h1>Covid-19 in {provinceName}</h1>
              <StatusIndicator severity={originalData ? originalData.riskLevels.overall : null} />

              <div>If you want to see the data from another state, select it here: </div>
              <ProvinceSelector province={province} provinceList={provinceList} handleChange={provinceHandler} />

              <div className={style.graphGroup}>
                <div className={style.graphContainer}>
                  <NewCasesChart data={dataSet} provinceName={provinceName} style={style} />
                </div>
                <div className={style.graphContainer}>
                  <CumulativeCasesChart data={dataSet} provinceName={provinceName} style={style} />
                </div>
              </div>
            </div>

            <div className={style.bottom}>
              <InfoDashboard data={dataSet} additionalData={originalData ? originalData.metrics : null} />
            </div>
          </>
        ) : (
          <>Loading...</>
        )}
      </>
  );
}

export default Dash;