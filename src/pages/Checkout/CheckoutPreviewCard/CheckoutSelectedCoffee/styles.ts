import styled from "styled-components";

export const CheckoutDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme["base-button"]};
`;

export const CheckoutSelectedCoffeeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;


  > p {
    font: ${(props) => props.theme["text-m-bold"]};
    color: ${(props) => props.theme["base-text"]};
  }

  > div {
    display: flex;
    gap: 1.25rem;
    align-items: center;
    justify-content: flex-start;

    img {
      width: 4rem;
      height: 4rem;
    }

    > div {
      display: flex;
      gap: .5rem;
      flex-direction: column;

      h4 {
        font: ${(props) => props.theme["text-m"]};
        color: ${(props) => props.theme["base-subtitle"]};
      }
    }
  }
`;

export const CheckoutSelectedCoffeeButtons = styled.div`
  display: flex;
  gap: .5rem;
  align-items: stretch;

  > button {
    background-color: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme["base-text"]};
    font: ${(props) => props.theme["button-g"]};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    border: none;
    gap: .25rem;
    border-radius: 6px;
    transition: background-color .1s;
    cursor: pointer;

    svg {
      color: ${(props) => props.theme["purple-500"]}
    }

    &:hover {
      background-color: ${(props) => props.theme["base-hover"]};
    }
  }
`;
