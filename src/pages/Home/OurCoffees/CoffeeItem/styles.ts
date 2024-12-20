import styled from "styled-components";

export const CoffeeItemContainer = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  padding: 1.25rem;

  border-bottom-left-radius: 36px;
  border-top-right-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  > img {
    margin-top: -38px;
    margin-bottom: 0.75rem;
  }

  > h3 {
    margin-bottom: .5rem;
    color: ${(props) => props.theme["base-title"]};
    font: ${(props) => props.theme["title-s"]}
  }

  > p {
    margin-bottom: 2rem;
    color: ${(props) => props.theme["base-label"]};
    font: ${(props) => props.theme["text-s"]}
  }
`;

export const CoffeeItemTagContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  gap: .25rem;

  span {
    padding: .25rem .5rem;
    background-color: ${(props) => props.theme["yellow-300"]};
    color: ${(props) => props.theme["yellow-700"]};
    border-radius: 100px;
    font: ${(props) => props.theme.tag};
    text-transform: uppercase;
  }
`;

export const CoffeeItemFooter = styled.footer`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    gap: .5rem;
    justify-content: center;
    align-items: center;
  }
`;

export const CoffeeItemPrice = styled.p`
  color: ${(props) => props.theme["base-text"]};
  span:first-of-type {
    font: ${(props) => props.theme["text-s"]}
  }

  span:last-of-type {
    font: ${(props) => props.theme["title-m"]}
  }
`;

export const CoffeeItemAddCartButton = styled.button`
  padding: .5rem;
  background-color: ${(props) => props.theme["purple-700"]};
  color: ${(props) => props.theme.white};
  transition: background-color .1s;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  
  &:hover {
    background-color: ${(props) => props.theme["purple-500"]};
  }
`;
