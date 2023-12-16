import {View, ScrollView} from "react-native";
import React from "react";
import FlatCards from "./src/components/FlatCards";

const App = () => {
  return (
    <View>
      <ScrollView>
        <FlatCards />
      </ScrollView>
    </View>
  );
};

export default App;
