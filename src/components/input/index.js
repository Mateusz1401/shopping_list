import { TextInput } from "react-native";
import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles";

const Input = ({ style, onChangeText, value }) => (
  <TextInput
    underlineColorAndroid="transparent"
    style={[styles.input, style]}
    onChangeText={onChangeText}
    value={value}
  />
);

Input.propTypes = {
  style: PropTypes.shape().isRequired,
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string,
};

Input.defaultProps = {
  value: "",
};

export default Input;
