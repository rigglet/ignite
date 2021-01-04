import styled from "styled-components";
import { motion } from "framer-motion";

//redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { smallImage } from "../util";

const GameDetail = () => {
  const history = useHistory();

  const { screenshot, game, isLoading } = useSelector((state) => state.detail);
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <CardDetail>
            <Stats>
              <div className="rating">
                <h3>{game.name}</h3>
                <p>{game.rating}</p>
              </div>
            </Stats>
            <Info>
              <h3>Platforms</h3>
              <Platforms>
                {game.platforms.map((data) => (
                  <h3 key={data.platform.id}>{data.platform.name}</h3>
                ))}
              </Platforms>
            </Info>
            <Media>
              <img src={smallImage(game.background_image, 1280)} alt="game" />
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

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
