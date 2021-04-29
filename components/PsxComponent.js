import React, { Component } from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { baseUrl } from "../shared/baseUrl";
import { PSX } from "../shared/psxlistlist";

class Psx extends Component {
  constructor(props) {
    super(props);
    this.state = {
      psx: PSX,
    };
  }

  static navigationOptions = {
    title: "PsxInfo",
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderPSXItems = ({ item }) => {
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
        data={this.state.psx}
        renderItem={renderPSXItems}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
}

export default Psx;
