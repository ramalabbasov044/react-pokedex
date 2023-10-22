import React from "react";
import "./style.css";

const Card = ({ isWin , data }) => {
  // img url
  let cardImgApi = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"

  // functions
  let findImgId = (id) => {
    switch (id.toString().length){
      case 1:
        return String(id).padStart(3, '0');
      case 2:
        return String(id).padStart(3, '0');
      default:
        return String(id);
    }
  }
  let renderCard = () => {
    if (data && Array.isArray(data)) {
      return data.map((item) => (
        <div className="pokedoxCard" key={item.id}>
          <img className="productCardImage" src={cardImgApi + `${findImgId(item.id)}.png`} alt="" />
          <div className="productCardAbout">
            <p className="pokedoxCardTitle">
              {item.name}
            </p>

            <p className="pokedoxCardPrice">
              Type: {item.type}
            </p>

            <p className="pokedoxCardPrice">
              Exp: {item.base_experience}
            </p>
          </div>
        </div>
      )) 
    }
  }

  return (
    <>
          <div className="pokedexTitle">
              {
                isWin ? 'Win' : 'Lose'
              }
          </div>
      <div className="pokedoxCardBody">
        {
          renderCard()
        }
      </div>
    </>
  );
};

export default Card;
