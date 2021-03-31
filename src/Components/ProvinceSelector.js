import React, {useState} from 'react';
import acronymToFullName from '../Util/stateAcronyms';

function ProvinceSelector({provinceList, handleChange, province}) {
    let [internalProvince, changeInternalProvince] = useState(province || '');

    var handler = (e) => {
        handleChange(e.target.value);
        changeInternalProvince(e.target.value);
    }
    
    return (
        <>
            {provinceList && (
                <select value={internalProvince} onChange={handler}>
                    {provinceList.map(val => <option value={val.state} key={val.state}>{acronymToFullName(val.state)}</option>)}
                </select>
            )}
        </>
    );
}

export default ProvinceSelector;