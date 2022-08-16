import React from 'react';
import { Box } from '@mui/material';
import Header from '@components/Layout/Header';
import Nav from '@components/Layout/Nav';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Box>
      <Header />
      <div className="flex min-h-[calc(100%-86px)] overflow-auto">
        <Nav />
        {children}
      </div>
    </Box>
  );
}

export default Layout;
