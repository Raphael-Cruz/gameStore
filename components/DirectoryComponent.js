import React, { Component } from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";

import { GAMELIST } from "../shared/gamelist";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gamelist: GAMELIST,
    };
  }

  static navigationOptions = {
    title: "Directory",
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderDirectoryItem = ({ item }) => {
      return (
        <ListItem
          title={item.name}
          subtitle={item.console}
          onPress={() => navigate("CampsiteInfo", { campsiteId: item.id })}
          leftAvatar={{ source: require("./images/psxIcon.png") }}
        />
      );
    };

    return (
      <FlatList
        data={this.state.gamelist}
        renderItem={renderDirectoryItem}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
}

export default Directory;
