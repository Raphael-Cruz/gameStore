import React, { Component } from "react";
import { FlatList } from "react-native";
import { View } from "react-native";
import { ListItem } from "react-native-elements";
import { HOMELIST } from "../shared/homelist";

import { baseUrl } from "../shared/baseUrl";
import { ScrollView } from "react-native-gesture-handler";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homelist: HOMELIST,
    };
  }

  static navigationOptions = {
    title: "Home",
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderHomeItem = ({ item }) => {
      return (
        <ListItem
          title={item.console}
          style={{ flex: 0 }}
          horizontal={true}
          onPress={() => navigate("GameFiltred", { consoleInfo: item.type })}
          leftAvatar={{ source: { uri: baseUrl + item.image } }}
        />
      );
    };

    return (
      <ScrollView>
        <FlatList
          style={{ paddingTop: "3%" }}
          data={this.state.homelist}
          horizontal={true}
          renderItem={renderHomeItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </ScrollView>
    );
  }
}

export default Home;
