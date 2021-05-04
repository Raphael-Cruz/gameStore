import React, { Component } from "react";
import { FlatList } from "react-native";
import { View } from "react-native";
import { ListItem, Card } from "react-native-elements";
import { HOMELIST } from "../shared/homelist";
import { TOPFIVE } from "../shared/topfivelist";
import { baseUrl } from "../shared/baseUrl";
import { ScrollView } from "react-native-gesture-handler";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homelist: HOMELIST,
      topfive: TOPFIVE,
    };
  }

  static navigationOptions = {
    title: "Home",
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderHomeGames = ({ item }) => {
      return (
        <ScrollView>
          <Card containerStyle={{ padding: 10, backgroundColor: "#dee2e6" }}>
            <ListItem
              title={item.name}
              style={{ flex: 1, backgroundColor: "#dee2e6" }}
              onPress={() => navigate("CampsiteInfo", { campsiteId: item.id })}
              leftAvatar={{
                source: { uri: baseUrl + item.image },
                containerStyle: {
                  height: 120,
                  width: 120,
                },
              }}
            />
          </Card>
        </ScrollView>
      );
    };

    const renderHomeConsoles = ({ item }) => {
      return (
        <ListItem
          title={item.console}
          containerStyle={{
            paddingTop: 40,
            paddingBottom: 40,
            backgroundColor: "#dee2e6",
          }}
          onPress={() => {
            navigate("Games", { console: item.console });
          }}
          leftAvatar={{
            source: { uri: baseUrl + item.image },
            containerStyle: {
              height: 60,
              width: 60,
            },
          }}
        />
      );
    };

    return (
      <ScrollView>
        <FlatList
          style={{ paddingTop: "5%" }}
          data={this.state.homelist}
          horizontal={true}
          renderItem={renderHomeConsoles}
          keyExtractor={(item) => item.console}
        />
        <View>
          <FlatList
            style={{ paddingTop: "5%" }}
            data={this.state.topfive}
            horizontal={false}
            renderItem={renderHomeGames}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </ScrollView>
    );
  }
}

export default Home;
