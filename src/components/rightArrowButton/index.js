import React from 'react';
import {
  TouchableOpacity, Text, Image, View,
} from 'react-native';
import PropTypes from 'prop-types';

import moveIcon from '../../assets/icons/move-to-next.png';
import styles from './styles';

const RigtArrowButton = ({ title, onPress, style, titleStyle }) => (
  <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
    <Text style={[styles.text, titleStyle]}>
      {title}
    </Text>
    <View style={styles.image}>
      <Image source={moveIcon} />
    </View>
  </TouchableOpacity>
);

RigtArrowButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.shape(),
  titleStyle: PropTypes.shape(),
};

RigtArrowButton.defaultProps = {
  style: null,
  titleStyle: null,
};


export default RigtArrowButton;
