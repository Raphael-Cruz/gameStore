import React, { Component } from "react";
import { Text, View } from "react-native";
import { Card, Icon } from "react-native-elements";
import { CAMPSITES } from "../shared/campsites";

function RenderCampsite(props) {
  const { campsite } = props;

  if (campsite) {
    return (
      <Card
        featuredTitle={campsite.name}
        image={require("./images/react-lake.jpg")}
      >
        <Text style={{ margin: 10 }}>{campsite.description}</Text>
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
      campsites: CAMPSITES,

      favorite: false,
    };
  }

  static navigationOptions = {
    title: "Campsite Information",
  };

  markFavorite() {
    this.setState({ favorite: true });
  }

  render() {
    const campsiteId = this.props.navigation.getParam("campsiteId");
    const campsite = this.state.campsites.filter(
      (campsite) => campsite.id === campsiteId
    )[0];
    return (
      <RenderCampsite
        campsite={campsite}
        favorite={this.state.favorite}
        markFavorite={() => this.markFavorite()}
      />
    );
  }
}

export default CampsiteInfo;
