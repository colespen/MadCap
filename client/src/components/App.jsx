import { useState, useRef, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';

import Welcome from "./Welcome";
import Lobby from "./Lobby";
import Game from "./Game"
import useVisualMode from "../hooks/useVisualMode";
import { generateRandomString } from '../helpers/helpers';

import './App.css';

export default function App(props) {

  const url = useRef(generateRandomString()).current;

  const WELCOME = "WELCOME";
  const LOBBY = "LOBBY";
  const GAME = "GAME";

  useEffect(() => {
    transition(host ? props.mode : WELCOME)
  }, [props.mode])

  useEffect(() => {
    setHost(props.host)
  }, [props.host])

   const { mode, transition } = useVisualMode(WELCOME);

  const [name, setName] = useState("");
  const [host, setHost] = useState(false);

  let loader_url;

 loader_url = useLoaderData().url;

  const handleName = (e) => {
    setName(e.target.value);
  };



  function handleJoin(id, name, color) {
    axios.post(`/api/games/1/users`, {
      name: 'shelly',
      color: 'purple'
    })
      .then(() => transition(LOBBY))
      .catch(err => console.log(err));
  }

  function handleStart() {
    transition(GAME);
  }


  // const handleMakeGame = () => {
  //  transition(LOBBY)
  // };


  return (
    <div className="App">
      {/* Welcome is default */}
      {mode === WELCOME && (
        <Welcome
          url={url}
          name={name}
          // avatar={avatar}
          handleName={handleName}
          setHost={setHost}
          handleJoin={handleJoin}
        />
      )}
      {mode === LOBBY && (
        <Lobby
          name={name}
          url={loader_url}
          handleStart={handleStart}
        />)}
         
      {mode === "GAME" && <Game />}
    </div>
  );
}