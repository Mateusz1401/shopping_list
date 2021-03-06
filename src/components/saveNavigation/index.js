import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Actions } from "react-native-router-flux";

import { translate } from "../../utils/translation";
import styles from "./styles";
import { clearNewList } from "../../actions/newList";
import { saveNewList, editList } from "../../actions/lists";
import { formatDateString } from "../../selectors/date";
import { guid } from "../../selectors/guid";

class SaveNavigation extends Component {
  saveNewList = () => {
    const {
      id_editing,
      clearNewList,
      editList,
      listShop,
      productsList,
      saveNewList,
    } = this.props;

    if (!id_editing) {
      saveNewList({
        id: guid(),
        shop: listShop,
        products: productsList,
        date: formatDateString(String(new Date())),
      });
      clearNewList();
      Actions.welcome();
    } else {
      editList({
        id_editing: id_editing,
        shop: listShop,
        products: productsList,
      });
      clearNewList();
      Actions.lists();
    }
  };

  render() {
    return (
      <TouchableOpacity onPress={this.saveNewList} style={styles.container}>
        <Text style={styles.text}>{translate("save")}</Text>
      </TouchableOpacity>
    );
  }
}

SaveNavigation.propTypes = {
  clearNewList: PropTypes.func.isRequired,
  saveNewList: PropTypes.func.isRequired,
  editList: PropTypes.func.isRequired,
  listShop: PropTypes.string.isRequired,
  productsList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      done: PropTypes.bool.isRequired,
    })
  ).isRequired,
  id_editing: PropTypes.string.isRequired,
};

const mapStateToProps = ({
  newList: { listShop, productsList, id_editing },
}) => ({
  listShop,
  productsList,
  id_editing,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      clearNewList,
      saveNewList,
      editList,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SaveNavigation);
