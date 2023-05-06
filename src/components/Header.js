import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
const Header = ({ title, handleClick, wantToAddTask }) => {
  return (
    <header style={headerStyle}>
      <h1>{title}</h1>
      <Button
        color={wantToAddTask ? "red" : "green"}
        text={wantToAddTask ? "Close" : "Add"}
        handleClick={handleClick}
      ></Button>
    </header>
  );
};

Header.defaultProps = {
  title: "Hello default",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

const headerStyle = {
  color: "red",
};

export default Header;
