import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card, Icon } from "react-native-elements";
import { baseUrl } from "../shared/baseUrl";
import { GAMELIST } from "../shared/gamelist";

function RenderCampsite(props) {
  const { gamelist } = props;

  if (gamelist) {
    return (
      <View>
        <Card
          style={styles.card}
          image={{
            style: styles.image,
            uri: baseUrl + gamelist.image,
            resizeMode: "cover",
          }}
        >
          <Text style={{ padding: 10 }}>{gamelist.name}</Text>
          <Text style={{ padding: 10 }}>{gamelist.console}</Text>
          <Text style={{ padding: 10 }}>{gamelist.year}</Text>
          <Text style={{ margin: 10 }}>{gamelist.genre}</Text>
          <Icon
            name={props.favorite ? "heart" : "heart-o"}
            type="font-awesome"
            color="#f50"
            raised
            reverse
            onPress={() =>
              props.favorite
                ? console.log("Already set as a favorite")
                : props.markFavorite()
            }
          />
        </Card>
      </View>
    );
  }
  return <View />;
}

class CampsiteInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gamelist: GAMELIST,

      favorite: false,
    };
  }

  static navigationOptions = {
    title: "Game Information",
  };

  markFavorite() {
    this.setState({ favorite: true });
  }

  render() {
    const campsiteId = this.props.navigation.getParam("campsiteId");
    const campsite = this.state.gamelist.filter(
      (gamelist) => gamelist.id === campsiteId
    )[0];
    return (
      <RenderCampsite
        gamelist={campsite}
        favorite={this.state.favorite}
        markFavorite={() => this.markFavorite()}
      />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    borderWidth: 3,
    borderRadius: 3,
    borderColor: "#000",
    width: 300,
    height: 300,
    padding: 10,
  },
  card: {
    borderWidth: 3,
    borderRadius: 3,
    borderColor: "#000",
    width: 300,
    height: 300,
    padding: 10,
  },
});
export default CampsiteInfo;
