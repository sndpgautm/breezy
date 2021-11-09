// Components
import WeatherWidgetItem from './WeatherWidgetItem';

// Material UI

import { Container } from '@mui/material';

const WeatherWidgetList = () => {
  return (
    <Container
      component='div'
      sx={{
        mt: '3rem',
        p: '0.4rem 1rem',
        display: 'flex',
        justifyContent: 'center',
      }}>
      <WeatherWidgetItem />
      <WeatherWidgetItem />
    </Container>
  );
};

export default WeatherWidgetList;
