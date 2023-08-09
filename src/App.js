import React, { Component } from "react";
import styled from "styled-components";
import { Counter } from "./Components";

const Container = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
class App extends Component {
  state = {
    total: 0,
  };

  componentDidMount() {
    this.setState({ total: 0 });
  }

  render() {
    const getTotal = (num) => {
      console.log("exixude getTotal ", num);
      this.setState((prevState) => ({
        total: prevState.total + num,
      }));
    };
    // hello
    return (
      <Container>
        <Counter initial={2} getTotal={getTotal} />
        <Counter initial={4} getTotal={getTotal} />
        <Counter initial={1} getTotal={getTotal} />
        <p>total : {this.state.total}</p>
      </Container>
    );
  }
}

export default App;
