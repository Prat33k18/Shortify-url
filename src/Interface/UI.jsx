import { Button, FormControl, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirecter, shortUrl } from '../Redux/Action';

const UI = () => {
  const [url, setUrl] = useState('');
  const [warning, setWarning] = useState('');
  const dispatch = useDispatch();
  const shortenedUrl = useSelector((state) => state.url.url);
  const loading = useSelector((state) => state.url.loading);
  const error = useSelector((state) => state.url.error);

  const urlChecker = () => {
    if (url.length > 2048) { 
      setWarning('URL is too long. Please enter a valid URL within 2048 characters.');
    } else if(!(url.includes('http://') || url.includes('https://'))) {
      setWarning('Please enter a valid URL starting with http or https');
    } else {
      setWarning('');
      dispatch(shortUrl(url));
    }
  };

  const urlRedirecter = () => {
    if (!url.includes('P18')) {
      setWarning('Please enter a valid Short URL starting with P18');
    } else {
      setWarning('');
      dispatch(Redirecter(url));
    }
  };

  return (
    <div  className='flex flex-col items-center p-6'>
      <div className='mt-10'>
        <h1 className='text-red-700 text-3xl font-bold'>Welcome to URL Shortener Application ✨</h1>
      </div>
      <div className='w-full max-w-md mt-6'>
        <FormControl className='flex flex-col items-center gap-6'>
          <div className='flex flex-col w-full'>
            <h2 className='text-lg'>Enter URL:</h2>
            <TextField
              className='border-2 border-cyan-300 w-full mt-2'
              variant='outlined'
              placeholder='Enter your URL here'
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            {warning && <p className='text-red-500 mt-2'>{warning}</p>}
          </div>
          <Button
            variant='contained'
            className='flex w-full bg-blue-500 text-white mt-4 py-2'
            onClick={urlChecker}
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </Button>
          <Button
            variant='contained'
            className='flex w-full bg-blue-500 text-white mt-4 py-2'
            onClick={urlRedirecter}
          >
            Redirect
          </Button>
          <div className='flex flex-col w-full'>
            <h2 className='text-lg'>Result:</h2>
            <TextField
              className='border-2 border-cyan-300 w-full mt-2'
              variant='outlined'
              placeholder='Shortened URL will appear here'
              value={shortenedUrl || ''}
              
            />
            {error && <p className='text-red-500 mt-2'>{error}</p>}
          </div>
        </FormControl>
      </div>
    </div>
  );
};

export default UI;