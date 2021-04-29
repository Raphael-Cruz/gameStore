import React, { Component } from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { baseUrl } from "../shared/baseUrl";

import { GAMELIST } from "../shared/gamelist";

class Games extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gamelist: GAMELIST,
    };
  }

  static navigationOptions = {
    title: "Games",
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderGamesItem = ({ item }) => {
      return (
        <ListItem
          title={item.name}
          subtitle={item.console}
          onPress={() => navigate("CampsiteInfo", { campsiteId: item.id })}
          leftAvatar={{
            source: { uri: baseUrl + item.image },
            containerStyle: {
              height: 200,
              width: 200,
            },
          }}
        />
      );
    };

    return (
      <FlatList
        data={this.state.gamelist}
        renderItem={renderGamesItem}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
}

export default Games;
