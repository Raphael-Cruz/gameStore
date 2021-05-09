import React, { Component } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { Card } from "react-native-elements";

function Mission() {
  return (
    <Card wrapperStyle={{ margin: 20 }} title={"About Me"}>
      <Text style={{ marginBottom: 10 }} style={styles.text}>
        Hi, my name is Raphael da Cruz, I am a FullStack Developer, this app was
        developed during my coding bootcamp as my portfolio project, feel free
        to use my code, with time I will be updating more components and
        diferent things.
      </Text>
    </Card>
  );
}

class About extends Component {
  static navigationOptions = {
    title: "About Us",
  };

  render() {
    return (
      <ScrollView>
        <View>
          <Mission />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "#336666",
    backgroundColor: "transparent",
    fontSize: 17,
  },
});

export default About;
