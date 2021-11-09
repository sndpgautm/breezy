import './App.css';

//Material UI
import { Container, Typography } from '@mui/material';

// Components
import Header from './components/layout/Header';
import SearchBar from './components/layout/SearchBar';
import WeatherWidgetList from './components/weather/WeatherWidgetList';

function App() {
  return (
    <Container
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Header />
      <Typography
        variant='h1'
        sx={{ fontWeight: '1000', fontSize: '4.5rem', mb: 4 }}>
        Weather
      </Typography>
      <SearchBar />
      <WeatherWidgetList />
    </Container>
  );
}

export default App;
