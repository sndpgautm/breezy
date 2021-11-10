import { useSelector } from 'react-redux';

// Components
import WeatherWidgetItem from './WeatherWidgetItem';

// Material UI

import { Container, Typography } from '@mui/material';
import { RootState } from '../../types';

const WeatherWidgetList = () => {
  const favCities = useSelector(
    (state: RootState) => state.cityReducer.favCities
  );

  return (
    <Container
      component='div'
      sx={{
        mt: '3rem',
        p: '0.4rem 1rem',
        display: 'flex',
        justifyContent: 'center',
      }}>
      {favCities.length === 0 ? (
        <Typography variant='subtitle2'>
          Search and Add a city as favourite to continue...
        </Typography>
      ) : (
        favCities.map((city, index) => (
          <WeatherWidgetItem key={index} {...city} />
        ))
      )}
    </Container>
  );
};

export default WeatherWidgetList;
