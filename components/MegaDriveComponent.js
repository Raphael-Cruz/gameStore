import React, { Component } from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { baseUrl } from "../shared/baseUrl";
import { MEGADRIVE } from "../shared/megadrive";

class Megadrive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      megadrive: MEGADRIVE,
    };
  }

  static navigationOptions = {
    title: "MegadriveInfo",
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderMEGAItems = ({ item }) => {
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
        data={this.state.megadrive}
        renderItem={renderMEGAItems}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
}

export default Megadrive;
