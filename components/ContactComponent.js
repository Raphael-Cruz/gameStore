import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
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
            <Text>1 Nucamp Way Seattle, WA 98001 U.S.A.</Text>
            <Text>Phone: 1-206-555-1234</Text>
            <Text style={{ marginBottom: 10 }}>Email: campsites@nucamp.co</Text>
          </Card>
        </View>
      </ScrollView>
    );
  }
}

export default Contact;
