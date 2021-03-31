import React, { useEffect, useState} from 'react';

import style from './InfoItem.module.scss';

function InfoItem(props) {

    const getArrowStyle = (val) => {
        if(val > 0) return style.up;
        if(val === 0) return style.noChange;
        if(val < 0) return style.down;
    };

    const getColor = (val, isIncreaseGood) => {
        if(isIncreaseGood && val > 0) return 'green';
        if(!isIncreaseGood && val > 0) return 'red';
        else return 'red';
    }
    
    return (
        <div className={style.infoItem}>
            <div className={style.icon}>
                <img src={`covid-icons/${props.icon}`}></img>
            </div>
            <div className={style.text}>
                <div className={style.title}>{props.title}</div>
                <div className={style.description}>{props.description}</div>
            </div>
            <div className={style.amount}>
                <span>{props.current}{props.suffix}</span>
            </div>
        </div>
    )
}

export default InfoItem;