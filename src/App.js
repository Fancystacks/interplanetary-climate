import React, { useState, useEffect } from 'react';
import { formatDate } from './helpers';
import { API_URL } from './api';
import ClimateData from './components/ClimateData';
import Info from './components/Info';
import Unit from './components/Unit';
import Previous from './components/Previous';
import { AppWrapper, GlobalStyle, MarsClimate, InfoWrapper } from './AppStyles';


const App = () => {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);
  const [selectSol, setSelectedSol] = useState();
  const [metric, setMetric] = useState(true);
  const [previous, setPrevious] = useState(false);

  useEffect(() => {

  }, [])
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <MarsClimate>
          {loading ? <div>Searching . . .</div> : (
            <>
            <h1 className="main-title">Latest Conditions at ___ </h1>
            <ClimateData/>
            <InfoWrapper>
              <Info/>
              <Unit/>
            </InfoWrapper>
            </>
          )}
        </MarsClimate>
        <Previous/>
      </AppWrapper>
    </>
  );
}

export default App;
