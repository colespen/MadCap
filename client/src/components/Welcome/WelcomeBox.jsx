import { Fragment } from "react";
import Box from '@mui/material/Box';

import Avatar from './Avatar';
import UserName from './UserName';
import ActionButton from "./ActionButton";

export default function WelcomeBox(props) {
 

  // const MAKE = "MAKE";
  // const JOIN = "JOIN";
  // if no link use MAKE (default state)
  // if there is a custom link use JOIN


  return (
    <Fragment>
      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 2,
          my: 1,
          px: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minWidth: 406,
          maxWidth: 750,
          height: 340,
          width: '70%'
        }}>
        <Avatar />
        <UserName
          handleName={props.handleName}
          name={props.name} />
        <ActionButton
          onClick={props.onClick} 
          message="Make New Game" />
        {/* {btnState === JOIN && <ActionButton message="Join the Game!" />} */}
      </Box>
    </Fragment>
  );
}