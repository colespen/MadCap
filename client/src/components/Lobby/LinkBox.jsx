import { useLoaderData } from 'react-router-dom';
import { useState, useEffect, Fragment } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TextField, Snackbar } from '@mui/material';


export default function LinkBox(props) {

  const { url_path } = useLoaderData();
  const [url, setUrl] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setUrl(`${props.url}`);
  }, []);

  const test_url = 'https://www.madcap.ninja/0erjCnF23'

  const handleCopy = () => {
    setOpen(true);
    navigator.clipboard.writeText(url);
  };

  const CopyButton = () => (
    <Button text="copy" size="small"
      variant="outlined"
      sx={{ height: 30, pt: '6px' }}
    >
      copy
    </Button>
  );
  return (
    <Fragment>
      <Box
        component="form"
        sx={{
          width: '100%',
          pl: '4px',
          // ml: '6px',
          '& > :not(style)': { m: 1, width: '93%' }
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          variant="outlined"
          InputProps={{ endAdornment: <CopyButton /> }}
          value={test_url.slice(24)}
          onClick={handleCopy}
          disabled
        />
      </Box>
      <Snackbar
        message="Copied to clipboard"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={100}
        onChange={() => setOpen(false)}
        open={open}
        sx={{'& .MuiPaper-root': {display: 'flex',
    justifyContent: 'center'}}}
      />
    </Fragment>
  );
}