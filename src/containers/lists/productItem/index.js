import React from 'react';
import PropTypes from 'prop-types';
import {
  Text, View, TouchableOpacity, Image,
} from 'react-native';
import { connect } from 'react-redux';

import tickIcon from '../../../assets/icons/tick.png';
import styles from './styles';

const ProductItem = ({ item, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.container, item.done && styles.done]}
  >
    <View style={{ flexDirection: 'row' }}>
      <Text style={styles.text}>
        {item.name}
      </Text>
      <Text style={styles.quantity}>
        {item.quantity}
      </Text>
      {
        item.done ? (
          <View style={styles.image}>
            <Image source={tickIcon} />
          </View>
        )
          : <View style={styles.image} />
      }
    </View>
  </TouchableOpacity>
);

ProductItem.propTypes = {
  item: PropTypes.PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  onPress: PropTypes.func.isRequired,
};

const mapStateToProps = ({ newList: { productsList } }) => ({
  productsList,
});

export default connect(mapStateToProps, null)(ProductItem);
