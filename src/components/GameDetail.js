import styled from "styled-components";
import { motion } from "framer-motion";

//redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { smallImage } from "../util";

//import images
import steam from "../img/steam.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import nintendo from "../img/nintendo.svg";
import playstation from "../img/playstation.svg";
import xbox from "../img/xbox.svg";

//import images
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetail = ({ pathId }) => {
  const history = useHistory();
  const { screenshot, game, isLoading } = useSelector((state) => state.detail);

  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  //get platform images
  const getPlatformImage = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "PlayStation 5":
        return playstation;
      case "Xbox One":
        return xbox;
      case "Xbox Series S/X":
        return xbox;
      case "Xbox S":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "ioS":
        return apple;
      default:
        return gamepad;
    }
  };

  const getStarRating = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i < rating) {
        stars.push(<img alt="star" src={starFull} key={i}></img>);
      } else {
        stars.push(<img alt="star" src={starEmpty} key={i}></img>);
      }
    }
    return stars;
  };
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <CardDetail layoutId={pathId}>
            <Header>
              <Stats>
                <div className="rating">
                  <motion.h3 layoutId={`title ${pathId}`}>
                    {game.name}
                  </motion.h3>
                  <p>{game.rating}</p>
                  {getStarRating()}
                </div>
              </Stats>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <>
                      <img
                        key={data.platform.id}
                        src={getPlatformImage(data.platform.name)}
                        alt={data.platform.name}
                      ></img>
                      <h4>{data.platform.name}</h4>
                    </>
                  ))}
                </Platforms>
              </Info>
            </Header>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={smallImage(game.background_image, 1280)}
                alt="game"
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screenshot.results.map((screen) => (
                <img
                  src={smallImage(screen.image, 1280)}
                  alt="game screenshot"
                  key={screen.id}
                />
              ))}
            </div>
          </CardDetail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  z-index: 998;
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #db25a5;
    border-radius: 3rem;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
`;

const CardDetail = styled(motion.div)`
  z-index: 999;
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Header = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
    height: 50px;
    width: 50px;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default GameDetail;
