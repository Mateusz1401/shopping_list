import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, View } from 'react-native';

import styles from './styles';

const ShopItem = ({ item, onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.closeButton} onPress={onPress}>
      <Text style={styles.textClose}>
        {'x'}
      </Text>
    </TouchableOpacity>
    <Text style={styles.text}>
      {item}
    </Text>
  </View>
);

ShopItem.propTypes = {
  item: PropTypes.PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default ShopItem;
