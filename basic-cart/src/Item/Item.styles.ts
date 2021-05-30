/** @format */

import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  border: 1px solid black;
  border-radius: 10px;
  background-color: lightblue;
  margin: 1rem;
  max-height: 50rem;
  height: 100%;
  max-width: 30rem;
  width: 100%;

  p {
    color: #111;
  }

  button {
    background-color: black;
    color: #fff;
    border-radius: 10px;
  }

  button:hover {
    background-color: gray;
    color: black;
    border-radius: 10px;
  }

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    padding: 1rem;
    margin-top: 3rem;
    background-color: #fff;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
  }
`;
