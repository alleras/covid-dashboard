import React, { useEffect, useState } from 'react';

// Styling
import './App.scss';

// Components
import NewCasesChart from './NewCases';
import CumulativeCasesChart from './CumulativeCases';
import InfoDashboard from './InfoDashboard';

/* 
 TODO: !!!! Add dashboard with important information about the data, including notes.
  TODO: For this previous TODO, add the trend from the past 7 days, 21 days and 3 months.

 TODO: Add ability to turn off rolling average or normal data.

 TODO: Add a small window for the information of a specific day when chart is hovered.
*/

function App() {
  let [province, setCurrentProvince] = useState('sc');
  let [provinceList, setProvinces] = useState(null);
  let [dataSet, setData] = useState(null);
  let [notes, setNotes] = useState(null);
  
  useEffect(() => {
    async function fetchProvinces() {
      let provinces = await (await fetch('https://api.covidtracking.com/v1/states/info.json')).json();
      setProvinces(provinces.map(province => ({...province, state: province.state.toLowerCase()})));
    }

    fetchProvinces();
  }, []);
  
  useEffect(() => {    
    async function fetchData() {
      let result = false;

      try{
        result = await (await fetch(`https://api.covidtracking.com/v1/states/${province}/daily.json`)).json();
      }
      catch(error){
        console.log('Could not retrieve data. Error: ' + error);
        return;
      }

      // Cases are provided by the API sorted from newest to oldest. I find it easier to sort it in a chronological way
      // for the processing of the rolling average.
      result = result.reverse();

      const formattedResult = result.map(curr => {
        // JS Dates' parse method is not recommended anymore, so I manually insert the values onto a new Date object.
        let ds = curr.date.toString();
        // The format the API provides is YYYYMMDD
        let formattedDate = new Date(ds.slice(0,4), ds.slice(4,6) - 1 /*Month is 0-indexed */, ds.slice(6,8));
        
        return {
          ...curr,
          date: formattedDate,
        }
      });

      console.log('Fetching data for: ' + province);

      setData(formattedResult);
      }
      
      fetchData();
  }, [province]);

  useEffect(() => {
      async function fetchNotes() {
        const notesResult = await (await fetch(`https://api.covidtracking.com/v1/states/${province}/info.json`)).json();
        console.log('Fetching notes...');
        setNotes(notesResult);
      }

      fetchNotes();

  }, [province]);

  
  var handleChange = (e) => {
    setCurrentProvince(e.target.value);
  }

  let provinceName = notes && notes.name;
  return (
    <div className="App">
      <div>We determined your state with your location</div>
      <div>if you want to see data for another state, select your state</div>

      {provinceList && (
        <select value={province} onChange={handleChange}>
          {provinceList.map(val => <option value={val.state} key={val.state}>{val.name}</option>)}
        </select>
      )}

      <InfoDashboard data={dataSet} />
      <NewCasesChart data={dataSet} provinceName={provinceName} />

      <CumulativeCasesChart data={dataSet} provinceName={provinceName} />
    </div>
  );
}

export default App;
