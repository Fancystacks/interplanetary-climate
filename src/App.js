import React, { useState, useEffect } from 'react';
import { formatDate } from './helpers';
import { API_URL } from './api';
import ClimateData from './components/ClimateData';
import Info from './components/Info';
import Unit from './components/Unit';
import Previous from './components/Previous';
import { AppWrapper, GlobalStyle, MarsClimate, InfoWrapper } from './AppStyles';
import { Toggle } from './components/UnitStyling';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);
  const [selectSol, setSelectedSol] = useState();
  const [metric, setMetric] = useState(true);
  const [previous, setPrevious] = useState(false);
  console.log(weather);

  useEffect(() => {
    const getFromApi = async () => {
      const weather = await (await fetch(API_URL)).json();
      const marsWeather = weather.sol_keys.map(solKey => {
        return {
          sol: solKey,
          // es2020 optional chaining, if found? || otherwise "no data"
          maxTemp: weather[solKey].AT?.mx || 'No data was found',
          minTemp: weather[solKey].AT?.mn || 'No data was found',
          windSpeed: Math.round(weather[solKey].HWS?.av || 0),
          windDirection: weather[solKey].WD?.most_uncommon?.compass_degrees || 0,
          date: formatDate(new Date(weather[solKey].First_UTC))
        }
      });
      setWeather(marsWeather);
      setSelectedSol(marsWeather.length - 1);
      setLoading(false);
    }

    getFromApi();

  }, [])
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <MarsClimate>
          {loading ? <div>Searching . . .</div> : (
            <>
            <h1 className="main-title">Current Martian Atmospheric Conditions </h1>
            <ClimateData sol={weather[selectSol]} isMetric={metric}/>
            <InfoWrapper>
              <Info/>
              <Unit metric={metric} setMetric={setMetric}/>
            </InfoWrapper>
            </>
          )}
        </MarsClimate>
        <Previous
        weather={weather}
        previous={previous}
        setPrevious={setPrevious}
        setSelectedSol={setSelectedSol}
        isMetric={metric}/>
      </AppWrapper>
    </>
  );
}

export default App;
