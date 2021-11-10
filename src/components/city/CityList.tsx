import { useDispatch, useSelector } from 'react-redux';
// Material UI
import { Box, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { addCityAsFav } from '../../redux/actions/city';
import { RootState, City } from '../../types';

export type CityListProps = {
  cities: City[];
  resetSearchField: () => void;
};

const CityList = ({ cities, resetSearchField }: CityListProps) => {
  const dispatch = useDispatch();
  const favCities: City[] = useSelector(
    (state: RootState) => state.cityReducer.favCities
  );

  // Disable add button if city is already in favourite cities list
  const isCityOnFavList = (city: City) => {
    const item = favCities.find((item) => item.id === city.id);
    return item && true;
  };
  return (
    <>
      {cities.map((city, index) => (
        <Box
          component='div'
          key={index}
          sx={{
            bgcolor: 'background.paper',
            p: '0.2rem 0rem',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
          }}>
          <Typography variant='subtitle2' sx={{ ml: 1, flex: 1 }}>
            {city.name}, {city.country}
          </Typography>
          <Button
            variant='contained'
            color='primary'
            size='small'
            endIcon={<AddIcon />}
            disabled={isCityOnFavList(city)}
            onClick={() => {
              dispatch(addCityAsFav(city));
              resetSearchField();
            }}>
            Add
          </Button>
        </Box>
      ))}
    </>
  );
};

export default CityList;
