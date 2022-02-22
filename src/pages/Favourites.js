import React from "react";
import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import MeetUpList from "../components/meetup/MeetUpList";
function Favourites() {
  const favoriteContext = useContext(FavoritesContext);

  let content;

  if (favoriteContext.totalFavorites === 0) {
    content = <p>There is no favorites</p>;
  } else {
    content = <MeetUpList meetups={favoriteContext.favorites} />;
  }

  return (
    <section>
      <h1>Favorites</h1>
      {content}
    </section>
  );
}

export default Favourites;
