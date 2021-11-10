import { useSelector } from 'react-redux';
import { RootState } from './types';

import './App.css';
//Material UI
import { Container, Typography } from '@mui/material';

// Components
import Header from './components/layout/Header';
import SearchBar from './components/layout/SearchBar';
import WeatherWidgetList from './components/weather/WeatherWidgetList';
import ErrorMessage from './components/layout/ErrorMessage';

function App() {
  const errorMessage = useSelector(
    (state: RootState) => state.errorReducer.message
  );
  return (
    <Container
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Header />
      <Typography
        variant='h1'
        sx={{ fontWeight: '1000', fontSize: '4.5rem', mb: 4 }}>
        Weather
      </Typography>
      {errorMessage !== '' && <ErrorMessage errorMessage={errorMessage} />}
      <SearchBar />
      <WeatherWidgetList />
    </Container>
  );
}

export default App;
