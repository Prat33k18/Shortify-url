import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  FormControl,
  TextField,
  Typography,
  Card,
  CardContent,
  Fade,
  Slide
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { shortUrl, Redirecter } from '../Redux/Action';
import background from '../assets/transparent-bg.png';


const marquee = keyframes`
  0%   { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;


const MarqueeText = styled(Typography)(({ theme }) => ({
  display: 'inline-block',
  whiteSpace: 'nowrap',
  animation: `${marquee} 15s linear infinite`,
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}));

const UI = () => {
  const [url, setUrl] = useState('');
  const [warning, setWarning] = useState('');
  const [showCard, setShowCard] = useState(false);

  const dispatch = useDispatch();
  const { url: shortenedUrl, loading, error } = useSelector((state) => state.url);


  useEffect(() => {
    setShowCard(true);
  }, []);

  const urlChecker = () => {
    if (url.length > 2048) {
      setWarning('URL is too long. Please keep it under 2048 characters.');
    } else if (!/^https?:\/\//.test(url)) {
      setWarning('URL must start with http:// or https://');
    } else {
      setWarning('');
      dispatch(shortUrl(url));
    }
  };

  const urlRedirecter = () => {
    if (!url.startsWith('P18')) {
      setWarning('Short URL must start with “P18”');
    } else {
      setWarning('');
      dispatch(Redirecter(url));
    }
  };

  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        py: 6,
        px: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

    <Box 
    sx={{ width: '100%', overflowX: 'hidden', 
           display: 'block' 
     }}
     >
    <MarqueeText variant="h6">
    Tip: Paste your long URL (http/https) or short code (P18…) above, then click Shorten or Redirect!
     </MarqueeText>
     </Box>
      
      <Fade in={showCard} timeout={800}>
        <Card
          sx={{
            width: '100%',
            maxWidth: 600,
            bgcolor: 'rgba(255,255,255,0.85)',
            boxShadow: 4,
            borderRadius: 3,
            transform: showCard ? 'scale(1)' : 'scale(0.95)',
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h3" align="center" color="primary" gutterBottom>
              URL Shortener ✨
            </Typography>

            <Typography variant="body1" align="center" mb={4}>
              Enter a long URL to shorten it, or paste your P18… code and hit Redirect.
            </Typography>

            <FormControl fullWidth sx={{ gap: 3 }}>
              {/* Input */}
              <Box>
                <Typography variant="h6">Your URL / Short Code</Typography>
                <TextField
                  placeholder="https://example.com or P181234XYZ"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  fullWidth
                  sx={{ mt: 1 }}
                  inputProps={{ 'aria-label': 'URL or short code input' }}
                />
                {warning && (
                  <Typography color="error" sx={{ mt: 1 }}>
                    {warning}
                  </Typography>
                )}
              </Box>

             
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2,
                  mt: 1,
                }}
              >
                <Slide in={showCard} direction="left">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={urlChecker}
                    disabled={loading}
                    fullWidth
                    sx={{ py: 1.5 }}
                  >
                    {loading ? 'Submitting…' : 'Shorten'}
                  </Button>
                </Slide>

                <Slide in={showCard} direction="right">
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={urlRedirecter}
                    fullWidth
                    sx={{ py: 1.5 }}
                  >
                    Redirect
                  </Button>
                </Slide>
              </Box>
 
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6">Result</Typography>
                <TextField
                  value={shortenedUrl || ''}
                  placeholder="Your shortened URL will appear here"
                  fullWidth
                  sx={{ mt: 1 }}
                  InputProps={{ readOnly: true, 'aria-label': 'Shortened URL output' }}
                />
                {error && (
                  <Typography color="error" sx={{ mt: 1 }}>
                    {error}
                  </Typography>
                )}
              </Box>

              <Typography
                variant="caption"
                align="center"
                color="textSecondary"
                sx={{ mt: 3, display: 'block' }}
              >
                To **redirect**, paste your code (e.g. <strong>P181234XYZ</strong>) above and click Redirect.
              </Typography>
            </FormControl>
          </CardContent>
        </Card>
      </Fade>
    </Box>
  );
};

export default UI;
