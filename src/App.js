import React, { useEffect, useState } from 'react';
// Styling
import style from './App.module.scss';
// Views
import Initial from './Views/Initial';
import Dash from './Views/Dash/';
import Footer from './Views/Footer';

/**
 TODO: CHANGE BACKGROUND COLOR DEPENDING ON SEVERITY LEVEL!!!
 TODO: Organize folders with views, components, etc
 TODO: Add spinner next to location selector when it's loading the data
 TODO: Handle errors that could happen with ReverseGeocoding
 TODO: Add spinner to get location button
 */

 const API_KEY = 'b702d2590f054d019dd497ca87fc7de5';

function App() {
  let sessionProvince = sessionStorage.getItem('province');
  let [province, setCurrentProvince] = useState(sessionProvince || null);
  let [provinceList, setProvinces] = useState(null);
  
  useEffect(() => {
    async function fetchProvinces() {
      let provinces = await (await fetch(`https://api.covidactnow.org/v2/states.json?apiKey=${API_KEY}`)).json();
      setProvinces(provinces);
    }

    fetchProvinces();
  }, []);
  
  return (
    <div className={style.App}>
      {!province ? (
        <Initial provinceList={provinceList} provinceHandler={setCurrentProvince} />
      ) : (
        <>
          <Dash province={province} provinceList={provinceList} provinceHandler={setCurrentProvince} API_KEY={API_KEY} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
