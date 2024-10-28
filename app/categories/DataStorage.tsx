import React from 'react';
import UnitConverter from '../components/unit-converter/UnitConverter';

const DataStorage: React.FC = () => {
    const extraInfo = 'Data storage units are used to measure the capacity of storage devices such as hard drives, SSDs, and memory cards. The most commonly used units are bytes, kilobytes, megabytes, gigabytes, and terabytes. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  return <UnitConverter unitCategory="dataStorage" extraInfo={extraInfo} />;
};

export default DataStorage;

