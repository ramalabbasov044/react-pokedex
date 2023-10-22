/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import HeadTitle from "../../components/Statics/HeadTitle/HeadTitle";
import CardBody from "../../components/Statics/Card/CardBody";
import pokedoxData from "../../services/pokedox/pokedoxData.json";
import PokedexHeadTitle from "../../services/pokedox/headTitle.json";
import { useState } from "react";

const Homepage = () => {
  let [pokedoxHeadTitle, setPokedoxHeadTitle] = useState(PokedexHeadTitle);
  let [pokedoxDataArr, setPokedoxDataArr] = useState(pokedoxData)
  let [firstTeam, setFirstTeam] = useState();
  let [lastTeam, setLastTeam] = useState();

  let startGame = () => {
    let newFirstTeam = [...pokedoxDataArr];
    let newLastTeam = [];
  
    for (let i = 0; i < newFirstTeam.length; i++) {
      let randomIndex = Math.floor(Math.random() * newFirstTeam.length);
      let rmvPokemon = newFirstTeam.splice(randomIndex, 1);
      newLastTeam.push(rmvPokemon[0]);
    }
  
    setFirstTeam(newFirstTeam);
    setLastTeam(newLastTeam);
  };
  
  let firstTeamPoint = firstTeam?.reduce((sum, item) => sum + item.base_experience,0);
  let lastTeamPoint = lastTeam?.reduce((sum, item) => sum + item.base_experience,0);

  return (
    <>
      <main>
        <button onClick={() => startGame()}>Start Game</button>
        <HeadTitle headTitle={pokedoxHeadTitle[0].title} />

        <CardBody isWin={firstTeamPoint > lastTeamPoint} data={firstTeam} />
        <CardBody isWin={lastTeamPoint > firstTeamPoint} data={lastTeam} />
      </main>
    </>
  );
};

export default Homepage;
