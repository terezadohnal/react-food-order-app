import { Fragment } from "react";

import HeaderCartBtn from "./HeaderCartBtn";

import mealsImg from "./../../assets/meals.png";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartBtn onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="A table full of good food!" />
      </div>
    </Fragment>
  );
};

export default Header;
