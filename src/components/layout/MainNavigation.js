import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
  const favoriteContext = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}> MeetME</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All meetups</Link>
          </li>
          <li>
            <Link to="/favourites">
              Favorites
              <span className={classes.badge}>
                {favoriteContext.totalFavorites}
              </span>
            </Link>
          </li>
          <li>
            <Link to="/new-meet-up">New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
