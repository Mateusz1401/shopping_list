import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import PropTypes from 'prop-types';

import { Colors } from '../../styles/colors';
import styles from './style';

const Loader = ({ size, color }) => (
  <View style={styles.container}>
    <ActivityIndicator
      size={size}
      color={color}
    />
  </View>
);

Loader.propTypes = {
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
};

Loader.defaultProps = {
  size: 'small',
  color: Colors.mediumOrange,
};

export default Loader;
