import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import { GAMELIST } from "../shared/gamelist";

class GameFiltred extends Component {
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
    return <ScrollView />;
  }
}

export default GameFiltred;
