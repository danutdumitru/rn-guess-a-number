import React from "react";
import { Appbar } from "react-native-paper";
import PropTypes from "prop-types";

const Header = props => {
  return (
      <Appbar.Header>
        <Appbar.Content title={props.title} />
      </Appbar.Header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
