import React, { useState } from 'react';
import { Box, TextField, IconButton, Paper, Button, Typography } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ImageIcon from '@mui/icons-material/Image';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import MicIcon from '@mui/icons-material/Mic';

export default function ChatInput({ onSendMessage, disabled }) {
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (!input.trim() || disabled) return;
        onSendMessage(input);
        setInput('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <Box sx={{ width: '100%', maxWidth: 800, mx: 'auto', px: 2 }}>
            <Paper
                elevation={0}
                sx={{
                    p: 1.5,
                    borderRadius: 4,
                    bgcolor: '#fafafa',
                    border: '1px solid #f1f5f9',
                    mb: 1
                }}
            >
                <TextField
                    fullWidth
                    placeholder="Ask me anything..."
                    multiline
                    maxRows={3}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={disabled}
                    variant="standard"
                    InputProps={{ disableUnderline: true, style: { fontSize: '0.95rem', color: '#1e293b' } }}
                    sx={{ mb: 1 }}
                />

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                        <Button
                            variant="outlined"
                            size="small"
                            startIcon={<AutoAwesomeIcon />}
                            sx={{ borderRadius: 2, textTransform: 'none', borderColor: '#d8b4fe', color: '#a855f7', bgcolor: '#fcebfa' }}
                        >
                            Deeper Research
                        </Button>
                        <IconButton size="small"><ImageIcon fontSize="small" /></IconButton>
                        <IconButton size="small"><LightbulbOutlinedIcon fontSize="small" /></IconButton>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                        <IconButton size="small"><SettingsOutlinedIcon fontSize="small" /></IconButton>
                        <IconButton size="small"><LanguageOutlinedIcon fontSize="small" /></IconButton>
                        <Box onClick={handleSend} sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '50%', bgcolor: input.trim() ? '#111827' : '#d8b4fe', color: '#fff', transition: 'all 0.2s' }}>
                            <MicIcon fontSize="small" />
                        </Box>
                    </Box>
                </Box>
            </Paper>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#000' }}>
                    <AutoAwesomeIcon fontSize="small" sx={{ color: '#a855f7' }} />
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>Saved prompts</Typography>
                </Box>
                <Button
                    size="small"
                    startIcon={<AttachFileIcon />}
                    sx={{ textTransform: 'none', color: '#1e293b', border: '1px solid #e2e8f0', borderRadius: 6, px: 2 }}
                >
                    Attach file
                </Button>
            </Box>
        </Box>
    );
}
