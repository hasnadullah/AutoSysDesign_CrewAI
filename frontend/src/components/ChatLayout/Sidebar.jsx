import React from 'react';
import { Drawer, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Divider, IconButton, TextField, InputAdornment, Avatar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FolderIcon from '@mui/icons-material/Folder';
import HistoryIcon from '@mui/icons-material/History';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAppContext } from '../../context/AppContext';

export default function Sidebar({ mobileOpen, handleDrawerToggle, isMobile }) {
    const { chats, setCurrentChatId, currentChatId } = useAppContext();

    const drawerContent = (
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: 'transparent', p: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box sx={{ width: 28, height: 28, borderRadius: 1.5, bgcolor: '#d8b4fe', mr: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1rem', fontWeight: 'bold' }}>
                    +
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: '-0.5px' }}>
                    Cortex
                </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
                <ListItemButton
                    onClick={() => { setCurrentChatId(null); if (isMobile) handleDrawerToggle(); }}
                    sx={{
                        borderRadius: '24px',
                        bgcolor: '#111827',
                        color: '#fff',
                        py: 1,
                        '&:hover': { bgcolor: '#000' }
                    }}
                >
                    <ListItemIcon sx={{ minWidth: 32, color: '#fff' }}><AddIcon fontSize="small" /></ListItemIcon>
                    <ListItemText primary="New chat" primaryTypographyProps={{ fontWeight: 500, fontSize: '0.9rem' }} />
                </ListItemButton>
            </Box>

            <TextField
                fullWidth
                size="small"
                placeholder="Search"
                variant="outlined"
                sx={{ mb: 3, '& .MuiOutlinedInput-root': { borderRadius: 2, bgcolor: '#f1f5f9', border: 'none', '& fieldset': { border: 'none' } } }}
                InputProps={{
                    startAdornment: <InputAdornment position="start"><SearchIcon sx={{ color: '#94a3b8' }} fontSize="small" /></InputAdornment>,
                }}
            />

            <List sx={{ px: 0, pt: 0, mb: 1 }}>
                <ListItem disablePadding sx={{ mb: 0.5 }}>
                    <ListItemButton sx={{ borderRadius: 2, py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 36, color: '#64748b' }}><LanguageIcon fontSize="small" /></ListItemIcon>
                        <ListItemText primary="Explore" primaryTypographyProps={{ fontSize: '0.9rem', fontWeight: 500 }} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 0.5 }}>
                    <ListItemButton sx={{ borderRadius: 2, py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 36, color: '#64748b' }}><MenuBookIcon fontSize="small" /></ListItemIcon>
                        <ListItemText primary="Library" primaryTypographyProps={{ fontSize: '0.9rem', fontWeight: 500 }} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 0.5 }}>
                    <ListItemButton sx={{ borderRadius: 2, py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 36, color: '#64748b' }}><FolderIcon fontSize="small" /></ListItemIcon>
                        <ListItemText primary="Files" primaryTypographyProps={{ fontSize: '0.9rem', fontWeight: 500 }} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ mb: 0.5 }}>
                    <ListItemButton sx={{ borderRadius: 2, py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 36, color: '#64748b' }}><HistoryIcon fontSize="small" /></ListItemIcon>
                        <ListItemText primary="History" primaryTypographyProps={{ fontSize: '0.9rem', fontWeight: 500 }} />
                    </ListItemButton>
                </ListItem>
            </List>

            <List sx={{ flexGrow: 1, overflowY: 'auto', px: 0 }}>
                {chats.length > 0 && (
                    <Typography variant="caption" sx={{ px: 2, py: 1, color: '#94a3b8', fontWeight: 600, display: 'block' }}>
                        Today
                    </Typography>
                )}
                {chats.map((chat) => (
                    <ListItem key={chat.id} disablePadding sx={{ mb: 0 }}>
                        <ListItemButton
                            selected={currentChatId === chat.id}
                            onClick={() => { setCurrentChatId(chat.id); if (isMobile) handleDrawerToggle(); }}
                            sx={{ borderRadius: 2, py: 0.5, bgcolor: currentChatId === chat.id ? 'rgba(0,0,0,0.04)' : 'transparent' }}
                        >
                            <ListItemText
                                primary={chat.title || "New Conversation"}
                                primaryTypographyProps={{ noWrap: true, fontSize: '0.85rem', color: currentChatId === chat.id ? '#000' : '#475569' }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <Box sx={{ mt: 'auto', pt: 2, display: 'flex', alignItems: 'center', p: 1, borderRadius: 2, bgcolor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                <Avatar src="https://i.pravatar.cc/150?img=11" sx={{ width: 36, height: 36, mr: 1.5 }} />
                <Box sx={{ flexGrow: 1 }}>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 600 }}>Emerson Sterling</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#94a3b8' }}>sterlingr@gmail.com</Typography>
                </Box>
                <IconButton size="small">
                    <LogoutIcon fontSize="small" sx={{ color: '#64748b' }} />
                </IconButton>
            </Box>
        </Box>
    );

    const drawerWidth = 280;

    return (
        <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
            <Drawer
                variant={isMobile ? "temporary" : "permanent"}
                open={isMobile ? mobileOpen : true}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                        borderRight: 'none',
                        bgcolor: 'transparent'
                    },
                }}
            >
                {drawerContent}
            </Drawer>
        </Box>
    );
}
