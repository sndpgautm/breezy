import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Material UI
import { Icon, Paper, Typography, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import moment from 'moment';
import { City, CityWeatherInfo, RootState } from '../../types';
import { getWeatherInfo } from '../../redux/actions/weather';

const WeatherWidgetItem = (city: City) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleMouseOver = () => {
    setShow(true);
  };
  const handleMouseOut = () => {
    setShow(false);
  };

  const weatherInfos: CityWeatherInfo[] = useSelector(
    (state: RootState) => state.weatherReducer.weatherInfos
  );

  let currentCityWeather;
  // Get weather info props city name
  if (weatherInfos.length !== 0 && weatherInfos !== null) {
    currentCityWeather = weatherInfos.find(
      (item) => item.name === city.name && item.sys.country === city.countryCode
    );
  }

  let iconClass;
  if (currentCityWeather !== undefined) {
    iconClass = `wi-owm-${currentCityWeather.weather[0].id}`;
  }

  useEffect(() => {
    dispatch(getWeatherInfo(city.name, city.countryCode));
  }, [dispatch, city.name, city.countryCode]);

  return (
    <Paper
      component='div'
      sx={{
        p: '0.8rem 1.2rem',
        display: 'flex',
        flexDirection: 'column',
        minWidth: 250,
        maxWidth: 250,
        minHeight: 150,
        mr: 5,
        mb: 5,
        position: 'relative',
        zIndex: 1,
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}>
      {currentCityWeather === undefined ? (
        <Typography variant='subtitle2'>
          No Weather data found for {city.name}
        </Typography>
      ) : (
        <>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}>
            <Typography variant='h4' sx={{ ml: 0, fontWeight: '1000' }}>
              {Math.round(currentCityWeather.main.temp)}&deg;C
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                textAlign: 'right',
              }}>
              <Typography
                variant='subtitle2'
                sx={{ fontWeight: '800', fontSize: '0.8rem' }}>
                {city.name}, {city.country}
              </Typography>
              <Typography variant='body1' sx={{ fontSize: '0.8rem' }}>
                {moment()
                  .utcOffset(currentCityWeather.timezone / 60)
                  .format('h:mm A')}
              </Typography>
            </Box>
          </Box>
          <Icon
            baseClassName='wi'
            className={iconClass}
            color='secondary'
            sx={{ fontSize: 120, mt: 1, mb: 3 }}></Icon>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}>
            <Typography variant='body1' sx={{ fontSize: '1rem' }}>
              {currentCityWeather.weather[0].main}
            </Typography>
          </Box>
        </>
      )}
      <IconButton
        sx={{
          position: 'absolute',
          bottom: '8px',
          right: '8px',
          display: show ? 'block' : 'none',
        }}
        size='small'>
        <DeleteIcon />
      </IconButton>
    </Paper>
  );
};

export default WeatherWidgetItem;
