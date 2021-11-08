import { Box } from '@mui/material';

const style = {
  mt: 3,
  mb: 4,
};

const Header = () => {
  return (
    <Box
      component='img'
      sx={{
        ...style,
        height: 80,
        width: 200,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      alt='Ambine Logo'
      src='/assets/logo.png'></Box>
  );
};

export default Header;
