import { useState } from 'react';
// Material UI
import {
  Paper,
  InputBase,
  Popper,
  Box,
  Typography,
  Button,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

const style = {
  backgroundColor: '#dbe1d5',
};

const SearchBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const cities = [
    {
      id: 3290155,
      city: 'Ab Hazar Helleh',
      name: 'Ab Hazar Helleh',
      country: 'Iran',
    },
    {
      id: 3069020,
      city: 'Avesnes-sur-Helpe',
      name: 'Avesnes-sur-Helpe',
      country: 'France',
    },
    {
      id: 3223274,
      city: 'Aybak, Helmand',
      name: 'Aybak, Helmand',
      country: 'Afghanistan',
    },
    {
      id: 2991763,
      city: 'Boulogne-sur-Helpe',
      name: 'Boulogne-sur-Helpe',
      country: 'France',
    },
    {
      id: 3377784,
      city: 'Bute Helu',
      name: 'Bute Helu',
      country: 'Kenya',
    },
    {
      id: 128571,
      city: 'Casa de Oro-Mount Helix',
      name: 'Casa de Oro-Mount Helix',
      country: 'United States of America',
    },
  ];
  const handleChange = (event: any) => {
    setAnchorEl(
      !event.target.value ? null : event.currentTarget.parentNode.parentNode
    );
    console.log(event.target.value, event.currentTarget.parentNode.parentNode);
  };

  const open = Boolean(anchorEl);

  return (
    <>
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
          disablePortal>
          <Paper
            component='div'
            sx={{
              bgcolor: 'background.paper',
              width: 1152,
              p: '0.4rem 1.2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            {cities.map((item, index) => (
              <Box
                component='div'
                sx={{
                  bgcolor: 'background.paper',
                  p: '0.2rem 0rem',
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                }}>
                <Typography variant='subtitle2' sx={{ ml: 1, flex: 1 }}>
                  {item.city}, {item.country}
                </Typography>
                <Button
                  variant='contained'
                  color='primary'
                  size='small'
                  endIcon={<AddIcon />}>
                  Add
                </Button>
              </Box>
            ))}
          </Paper>
        </Popper>

        <SearchIcon sx={{ ...style }} />
      </Paper>
    </>
  );
};

export default SearchBar;
