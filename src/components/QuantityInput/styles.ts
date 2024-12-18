import styled from "styled-components";

interface QuantityInputContainerProps {
	inputLength: number;
}

export const QuantityInputContainer = styled.div<QuantityInputContainerProps>`
  display: flex;
  background-color: ${(props) => props.theme["base-button"]};
  border-radius: 6px;
  width: fit-content;
  padding: .5rem;
  gap: .25rem;

  &:has(input:focus), &:has(button:focus){
    box-shadow: 0 0 0 2px ${(props) => props.theme["yellow-500"]};
  }

  button {
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme["purple-500"]};
    cursor: pointer;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input {
    background-color: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme["base-title"]};
    font: ${(props) => props.theme["text-m"]};
    -moz-appearance: textfield;
    border: none;
    width: ${(props) => (props.inputLength || 1) * 9}px;
  }
`;
