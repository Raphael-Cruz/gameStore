import React, { Component } from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { baseUrl } from "../shared/baseUrl";
import { SNES } from "../shared/sneslist";

class Snes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snes: SNES,
    };
  }

  static navigationOptions = {
    title: "SnesInfo",
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderSNESItems = ({ item }) => {
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
        data={this.state.snes}
        renderItem={renderSNESItems}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
}

export default Snes;
