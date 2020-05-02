import React from 'react';
import { UnitStyling, Toggle } from './UnitStyling';

const Unit = ({ metric, setMetric }) => (
    <UnitStyling>
        <label htmlFor='cel'>°C</label>
        <Toggle metric={metric} onClick={() => setMetric((prev) => !prev)} />
        <label htmlFor='fah'>°F</label>
    </UnitStyling>
)

export default Unit;