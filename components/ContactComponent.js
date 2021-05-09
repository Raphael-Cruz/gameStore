import React, { Component } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { Card } from "react-native-elements";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    title: "Contact Us",
  };

  render() {
    return (
      <ScrollView>
        <View>
          <Card wrapperStyle={{ margin: 20 }} title={"Contact Information"}>
            <Text style={styles.bold}>Raphael da Cruz </Text>
            <View style={{ marginTop: 20 }}>
              <Text style={styles.text}>Github:</Text>
              <Text style={styles.text}>My Portfolio Webpage: </Text>
              <Text style={styles.text}>LinkedIn: </Text>
              <Text style={{ marginBottom: 10 }} style={styles.text}>
                Email: rcrossdev@gmail.com
              </Text>
            </View>
          </Card>
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
  bold:
    Platform.OS === "ios"
      ? {
          fontFamily: "fontFamily",
          fontWeight: "bold",
        }
      : {
          fontWeight: "bold",
          textAlign: "center",
          fontSize: 20,
        },
});

export default Contact;
