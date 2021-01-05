import axios from "axios";
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchedGameURL,
} from "../api";

export const loadGames = () => async (dispatch) => {
  //FETCH with axios
  const popularData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      newGames: newGamesData.data.results,
      upcoming: upcomingData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  //FETCH with Axios
  const searchedData = await axios.get(searchedGameURL(game_name));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: { searched: searchedData.data.results },
  });
};
