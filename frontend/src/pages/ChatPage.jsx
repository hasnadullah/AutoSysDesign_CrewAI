import React, { useEffect, useRef } from 'react';
import { Box, Typography, Button, IconButton, Grid, Paper } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import GetAppIcon from '@mui/icons-material/GetApp';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import { useChat } from '../hooks/useChat';
import ChatMessage from '../components/Chat/ChatMessage';
import ChatInput from '../components/Chat/ChatInput';
import Layout from '../components/ChatLayout/Layout';

// Simple pulsing dot skeleton
function TypingSkeleton() {
    return (
        <Box sx={{ display: 'flex', gap: 1, p: 2 }}>
            <Box sx={{ width: 8, height: 8, bgcolor: '#d8b4fe', borderRadius: '50%', animation: 'pulse 1.5s infinite ease-in-out' }} />
            <Box sx={{ width: 8, height: 8, bgcolor: '#d8b4fe', borderRadius: '50%', animation: 'pulse 1.5s infinite ease-in-out 0.2s' }} />
            <Box sx={{ width: 8, height: 8, bgcolor: '#d8b4fe', borderRadius: '50%', animation: 'pulse 1.5s infinite ease-in-out 0.4s' }} />
            <style>{`@keyframes pulse { 0%, 100% { opacity: 0.3; transform: scale(0.8); } 50% { opacity: 1; transform: scale(1.2); } }`}</style>
        </Box>
    );
}

function SuggestionCard({ icon, title, desc }) {
    return (
        <Paper elevation={0} sx={{ p: 1.5, borderRadius: 3, height: '100%', border: '1px solid #f1f5f9', cursor: 'pointer', transition: 'all 0.2s', '&:hover': { bgcolor: '#f8fafc', borderColor: '#e2e8f0', transform: 'translateY(-1px)' } }}>
            <Box sx={{ color: '#475569', mb: 0.5 }}>{icon}</Box>
            <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5, color: '#1e293b' }}>{title}</Typography>
            <Typography variant="caption" sx={{ color: '#94a3b8', lineHeight: 1.2, display: 'block' }}>{desc}</Typography>
        </Paper>
    );
}

export default function ChatPage() {
    const { messages, sendMessage, loading, error } = useChat();
    const bottomRef = useRef(null);

    useEffect(() => {
        if (bottomRef.current) bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [messages, loading]);

    return (
        <Layout>
            {/* Topbar: Must not shrink */}
            <Box sx={{ flexShrink: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 1.5, px: 3, borderBottom: messages.length > 0 ? '1px solid #f1f5f9' : 'none' }}>
                <Button endIcon={<ExpandMoreIcon />} sx={{ textTransform: 'none', color: '#1e293b', fontWeight: 600, fontSize: '1.1rem', bgcolor: '#f8fafc', borderRadius: 8, px: 2 }}>
                    AutoSysDesign
                </Button>
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                    <IconButton size="small"><MoreHorizIcon /></IconButton>
                    <IconButton size="small"><LinkIcon /></IconButton>
                    <Button variant="outlined" startIcon={<GetAppIcon />} sx={{ textTransform: 'none', borderRadius: 8, ml: 1, borderColor: '#e2e8f0', color: '#1e293b' }}>
                        Export chat
                    </Button>
                    <Button variant="contained" sx={{ textTransform: 'none', borderRadius: 8, bgcolor: '#111827', color: '#fff', '&:hover': { bgcolor: '#000' } }}>
                        Upgrade
                    </Button>
                </Box>
            </Box>

            {/* Scrollable middle container */}
            <Box sx={{ flexGrow: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', minHeight: 0 }}>
                <Box sx={{ width: '100%', maxWidth: 840, mx: 'auto', p: { xs: 1, sm: 2 }, flexGrow: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
                    {messages.length === 0 ? (
                        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 2, pb: 1, m: 'auto' }}>
                            <Box className="gradient-orb" sx={{ mb: 2 }} />
                            <Typography variant="h5" sx={{ fontWeight: 400, color: '#a855f7', mb: 0.5, textAlign: 'center' }}>
                                Hello, Jackson
                            </Typography>
                            <Typography variant="h4" sx={{ fontWeight: 800, color: '#1e293b', textAlign: 'center', letterSpacing: '-0.5px', mb: 3 }}>
                                How can I assist you today?
                            </Typography>

                            {/* Suggestions forced into horizontal row */}
                            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 1.5, width: '100%', mb: 1 }}>
                                <Box sx={{ flex: 1 }}>
                                    <SuggestionCard icon={<MoreHorizIcon />} title="Synthesize Data" desc="Turn my meeting notes into 5 key bullet points for the team." />
                                </Box>
                                <Box sx={{ flex: 1 }}>
                                    <SuggestionCard icon={<LightbulbOutlinedIcon />} title="Creative Brainstorm" desc="Generate 3 taglines for a new sustainable fashion brand." />
                                </Box>
                                <Box sx={{ flex: 1 }}>
                                    <SuggestionCard icon={<MoreHorizIcon />} title="Check Facts" desc="Compare key differences between GDPR and CCPA." />
                                </Box>
                            </Box>
                        </Box>
                    ) : (
                        <Box sx={{ flexGrow: 1 }}>
                            {messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
                            {loading && <Box sx={{ mb: 3 }}><TypingSkeleton /></Box>}
                            {error && <Typography color="error" sx={{ textAlign: 'center', my: 2 }}>{error}</Typography>}
                        </Box>
                    )}

                    <div ref={bottomRef} />
                </Box>
            </Box>

            {/* Frozen Footer Box */}
            <Box sx={{ flexShrink: 0, pt: 1, pb: 0, width: '100%', maxWidth: 840, mx: 'auto', position: 'relative', zIndex: 10 }}>
                <ChatInput onSendMessage={sendMessage} disabled={loading} />

                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 1.5, position: 'relative' }}>
                    <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                        Join the valerius community for more insights <span style={{ color: '#a855f7', cursor: 'pointer', textDecoration: 'underline' }}>Join Discord</span>
                    </Typography>
                    <Box sx={{ position: 'absolute', right: 16, display: 'flex', gap: 1 }}>
                        <IconButton size="small" sx={{ border: '1px solid #e2e8f0' }}><LanguageOutlinedIcon fontSize="small" /></IconButton>
                        <IconButton size="small" sx={{ border: '1px solid #e2e8f0' }}><HelpOutlineOutlinedIcon fontSize="small" /></IconButton>
                    </Box>
                </Box>
            </Box>
        </Layout>
    );
}
