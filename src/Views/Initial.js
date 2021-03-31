import React, {useState} from 'react';

// Components
import ReverseGeolocation from 'Components/ReverseGeolocation';
import ProvinceSelector from 'Components/ProvinceSelector';

function Initial({provinceHandler, provinceList}){
    let [useGeolocation, setGeolocation] = useState(false);
    return (
      <>
        Select a state from the list: {' '}
        <ProvinceSelector provinceList={provinceList} handleChange={provinceHandler} />
        {' '} or {' '} 
        <a href='#' onClick={() => setGeolocation(true)}>Click here to determine your location</a>

        {useGeolocation && (<ReverseGeolocation handler={provinceHandler} />)}
      </>
    );
}

export default Initial;