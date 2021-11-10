import { Alert, Box } from '@mui/material';

type errorMsgPropType = {
  errorMessage: String;
};

const ErrorMessage = ({ errorMessage }: errorMsgPropType) => {
  return (
    <Box sx={{ mb: '1rem' }}>
      <Alert variant='outlined' severity='error' sx={{ fontSize: '1rem' }}>
        {errorMessage}
      </Alert>
    </Box>
  );
};

export default ErrorMessage;
