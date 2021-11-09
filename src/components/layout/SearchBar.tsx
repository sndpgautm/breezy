import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import CityList from '../city/CityList';

// Material UI
import { Paper, InputBase, Popper, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { getCitiesWithPrefix } from '../../redux/actions/city';
import { RootState } from '../../types';

const style = {
  backgroundColor: '#dbe1d5',
};

const SearchBar = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const timer = useRef() as any;

  const cities = useSelector((state: RootState) => state.cityReducer.cities);

  const handleChange = (event: any) => {
    setAnchorEl(
      !event.target.value ? null : event.currentTarget.parentNode.parentNode
    );

    // Clear the timeout if it has already been set.
    // This will prevent the previous change from executing axios call if it has been less than 1001 ms.
    clearTimeout(timer.current);
    // Set a new timeout to make axios call
    timer.current = setTimeout(() => {
      if (event.target.value !== '') {
        dispatch(getCitiesWithPrefix(event.target.value));
      }
    }, 1001);
  };

  const open = Boolean(anchorEl);

  return (
    <Paper
      component='div'
      sx={{
        ...style,
        p: '0.8rem 1rem',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
      }}>
      <InputBase
        sx={{ ...style, ml: 1, flex: 1 }}
        placeholder='Search for a city '
        inputProps={{ 'aria-label': 'Search for a city' }}
        onChange={(event) => {
          handleChange(event);
        }}
      />
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement='bottom-start'
        disablePortal
        style={{ zIndex: 100 }}>
        <Paper
          component='div'
          sx={{
            bgcolor: 'background.paper',
            minWidth: 1152,
            p: '0.4rem 1.2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          {cities.length === 0 ? (
            <Typography variant='subtitle2'>
              No Cities Found. Make sure the city name is correct.
            </Typography>
          ) : (
            <CityList cities={cities} />
          )}
        </Paper>
      </Popper>
      <SearchIcon sx={{ ...style }} />
    </Paper>
  );
};

export default SearchBar;
