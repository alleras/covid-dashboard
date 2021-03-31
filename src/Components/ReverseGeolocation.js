import { useEffect, useState } from 'react';

function ReverseGeolocation({handler, mock}){
    // TODO: Get the API Key  out of here
    let KEY = 'AIzaSyD7AUSyC4Ywj6PETcxb3VoRJuCvyJabJaQ';
    let API_LINK = 'https://maps.googleapis.com/maps/api/geocode/json';

    let mockData = {coords: {latitude: 40.714224, longitude: -73.961452}};
    let [stateCode, setStateCode] = useState(null);
    
    async function reverseGeoloc(position){
        let coords = position.coords;
        let locationData = await (await fetch(`${API_LINK}?latlng=${coords.latitude},${coords.longitude}&key=${KEY}`)).json();

        let stateResult = null;

        if(locationData.status === 'OK'){
            let result = locationData.results[0];
            for (var i = 0, len = result.address_components.length; i < len; i++) {
                var ac = result.address_components[i];
                if (ac.types.indexOf("administrative_area_level_1") >= 0) stateResult = ac.short_name;
            }
        }
        console.log('Detected state : ' + stateResult);
        setStateCode(stateResult);
    }

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(reverseGeoloc);
        } else { 
            console.log('Geolocation is not supported by this browser');
        }
    }

    useEffect(() => {
        if(mock){
            reverseGeoloc(mockData);
            return true;
        }
    
        getLocation();
    }, []);

    useEffect(() => {
        if(!stateCode) return;
        
        sessionStorage.setItem('province', stateCode);
        handler(stateCode);

    }, [stateCode]);

    return null;
}

export default ReverseGeolocation;