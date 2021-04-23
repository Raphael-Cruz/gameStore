import React, { Component } from "react";
import { Text, View } from "react-native";
import { Card, Icon } from "react-native-elements";

import { GAMELIST } from "../shared/gamelist";

function RenderCampsite(props) {
  const { gamelist } = props;

  if (gamelist) {
    return (
      <Card
        featuredTitle={gamelist.name}
        image={require("./images/castlevaniaSOTNCover.jpg")}
      >
        <Text style={{ margin: 10 }}>{gamelist.console}</Text>
        <Text style={{ margin: 10 }}>{gamelist.year}</Text>
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

export default CampsiteInfo;
