import React from 'react';
import { Box, Button } from '@mui/material';
import { Logo } from '@constants/icons';

function Header() {
  return (
    <div className="sticky top-0 w-full p-24 bg-white border-b-1 border-grey-4 z-10">
      <Box className="justify-between flex items-center">
        <Box className="flex items-center">
          <Logo />
          <p className="ml-8">ADMIN</p>
        </Box>
        <Button>로그인</Button>
      </Box>
    </div>
  );
}

export default Header;
