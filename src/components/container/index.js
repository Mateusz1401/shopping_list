import { View } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const Container = ({ style, children }) => (
  <View style={[styles.container, style]}>
    {children}
  </View>
);

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  style: PropTypes.shape(),
};

Container.defaultProps = {
  style: null,
};

export default Container;
