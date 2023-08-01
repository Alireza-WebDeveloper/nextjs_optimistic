import { Box, Typography } from '@mui/material';
import Link from 'next/link';

const Logo = () => {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
      }}
    >
      <Link href="/">
        <Typography
          variant="h6"
          component="h1"
          fontWeight={'bold'}
          sx={{ color: (theme) => theme.palette.primary.main }}
        >
          server action
        </Typography>
      </Link>
    </Box>
  );
};

export default Logo;
