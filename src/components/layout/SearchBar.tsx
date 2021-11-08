// Material UI
import { Paper, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const style = {
  backgroundColor: '#dbe1d5',
};

const SearchBar = () => {
  return (
    <Paper
      component='div'
      sx={{
        ...style,
        p: '0.4rem 0.8rem',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
      }}>
      <InputBase
        sx={{ ...style, ml: 1, flex: 1 }}
        placeholder='Search for a city '
        inputProps={{ 'aria-label': 'Search for a city' }}
      />
      <SearchIcon sx={{ ...style }} />
    </Paper>
  );
};

export default SearchBar;
