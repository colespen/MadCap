// import { useState } from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export default function UserName(props) {
  // const [name, setName] = useState("");

  // const handleName = (e) => {
  //   setName(e.target.value)
  //   console.log(name)
  // }

  const UserTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'firebrick',
      },
      '&:hover fieldset': {
        borderColor: 'orange',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  });

  return (
    <UserTextField
      label="ENTER YOUR NAME"
      id="enter-username"
      autoComplete="off"
      onChange={props.handleName}
      value={props.name}
      autoFocus={true}
      sx={{
        fontSize: '55px',
        m: 1,
        width: 380,
        my: 1.5,
        '& .MuiInputBase-input': {
          caretColor: 'transparent',
          caretHeight: 2,
          fontSize: 40,
          py: 0,
          height: 53
        }
      }}
    />
  );
}