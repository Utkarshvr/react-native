import {View, ScrollView} from "react-native";
import React from "react";
import FlatCards from "./src/components/FlatCards";
import ElevatedCards from "./src/components/ElevatedCards";
import FancyCard from "./src/components/FancyCard";
import ActionCard from "./src/components/ActionCard";

const App = () => {
  return (
    <View>
      <ScrollView>
        <FlatCards />
        {/* <ElevatedCards />
        <FancyCard /> */}
        <ActionCard />
      </ScrollView>
    </View>
  );
};

export default App;
