import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: space-around;
  margin-left: 20px;
  font-family: Roboto;
  font-size: 40px;
  font-weight: 200;
  line-height: 40px;
  border-bottom: 1px solid #fff;
  text-decoration: none;
  line-height: 30px;
  transition: 1.2s;
  &:hover {
    border-bottomColor: #333;
    font-size: 80px;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
    color: palevioletred;
  }
`;

const Comp = styled.div`animation: ${fadeIn} 2s linear;`;
const Appear = styled.div`animation: ${fadeIn} 2s alternate infinite;`;

class App extends Component {
  render() {
    return (
      <H1>
        Hallo {`     `}
        <Appear> Joris</Appear>
      </H1>
    );
  }
}

export default App;
