import React, { Component } from "react";
import styled from "styled-components";
import st from "./Counter.module.css";
class Counter extends Component {
  state = {
    myCount: this.props.initial,
  };

  componentDidMount() {
    this.props.getTotal(this.state.myCount);
  }

  increment = () => {
    this.setState((prevState) => ({
      myCount: prevState.myCount + (this.props.initial || 1),
    }));
    this.props.getTotal(this.props.initial || 1);
  };

  decrement = () => {
    if (this.state.myCount - this.props.initial > 0) {
      this.setState((prevState) => ({
        myCount: prevState.myCount - this.props.initial,
      }));
      this.props.getTotal(-this.props.initial);
    }
  };

  render() {
    const Container = styled.div`
      position: relative;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 190px;
      font-weight: 700;
    `;

    return (
      <Container>
        <button className={st.plus} onClick={this.increment}>
          +
        </button>
        <p>{this.state.myCount}</p>
        <button className={st.min} onClick={this.decrement}>
          -
        </button>
      </Container>
    );
  }
}

export default Counter;
