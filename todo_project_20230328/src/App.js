import { Global } from "@emotion/react";
import React from "react";
import MainAside from "./components/Aside/MainAside";
import { reset } from "./styles/Global/reset";

function Test1(){
  return (<h1>Test1</h1>)
}

function Test2(){
  return (<h1>Test2</h1>)
}

function App() {
  return (
    <>
      <Global styles = {reset} />
      <MainAside />

    </>
  );
}

export default App;
