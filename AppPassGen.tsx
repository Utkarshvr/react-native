import React from "react";
import PassGenerator from "./src/Screens/PassGenerator";
import {StatusBar} from "react-native";

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={"#111"} />
      <PassGenerator />
    </>
  );
};

export default App;
