import React, { useState } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
            <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} isMobile={isMobile} />

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    width: { sm: `calc(100% - 280px)` },
                    p: { xs: 1, sm: 2, md: 3 },
                    minHeight: 0
                }}
            >
                <Box sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: '#ffffff',
                    borderRadius: 4,
                    boxShadow: '0px 10px 40px rgba(0,0,0,0.05)',
                    overflow: 'hidden',
                    position: 'relative',
                    border: '1px solid rgba(0,0,0,0.03)',
                    minHeight: 0
                }}>
                    {children}
                </Box>
            </Box>
        </Box>
    );
}
