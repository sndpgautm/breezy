import { useState } from 'react';
// Material UI
import { Icon, Paper, Typography, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import moment from 'moment';

const WeatherWidgetItem = () => {
  const [show, setShow] = useState(false);
  const handleMouseOver = () => {
    setShow(true);
  };
  const handleMouseOut = () => {
    setShow(false);
  };
  const data = {
    weather: [
      {
        id: 501,
        main: 'Rain',
        description: 'moderate rain',
        icon: '10n',
      },
    ],
    main: {
      temp: 3.94,
      feels_like: 0.54,
    },
    dt: 1636491405,
    timezone: 7200,
    sys: {
      country: 'FI',
    },
    name: 'Helsinki',
  };
  const iconClass = `wi-owm-${data.weather[0].id}`;
  return (
    <Paper
      component='div'
      sx={{
        p: '0.8rem 1.4rem',
        display: 'flex',
        flexDirection: 'column',
        width: 300,
        mr: 5,
        mb: 5,
        position: 'relative',
        zIndex: 1,
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}>
      <Box
        sx={{
          display: 'flex',
        }}>
        <Typography variant='h4' sx={{ ml: 0, flex: 1, fontWeight: '1000' }}>
          {Math.round(data.main.temp)}&deg;C
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}>
          <Typography
            variant='subtitle2'
            sx={{ fontWeight: '800', fontSize: '1rem' }}>
            {data.name}
          </Typography>
          <Typography variant='body1' sx={{ fontSize: '0.8rem' }}>
            {moment()
              .utcOffset(data.timezone / 60)
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
          {data.weather[0].main}
        </Typography>
      </Box>
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
