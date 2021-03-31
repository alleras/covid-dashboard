import React from 'react';
import {SeverityDefinitions} from 'constants.js';

function StatusIndicator({severity}) {

    let severityObj = SeverityDefinitions[severity];

    return(
        <>
            <h3>Risk level - {severityObj.mainText}</h3> <h4>{severityObj.subText}</h4>
        </>
    )
}

export default StatusIndicator;