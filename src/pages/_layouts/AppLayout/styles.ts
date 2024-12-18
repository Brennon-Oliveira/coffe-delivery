import styled from "styled-components";

export const AppLayoutContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content:center;
  flex-direction: column;
`;

export const AppHeader = styled.header`
  max-width: ${(props) => props.theme["max-width"]};
  margin: 0 auto;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 2%;

  > div {
    display: flex;
    align-items: center;
    gap: .75rem;
  }
`;

const BaseButton = styled.button`
  border: none;
  background-color: transparent;
  font: ${(props) => props.theme["text-s"]};
  cursor: pointer;
  padding: .5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: .25rem;
  transition: filter .1s;

  &:hover {
    filter: brightness(98%);
  }
`;

export const LocationButton = styled(BaseButton)`
  background-color: ${(props) => props.theme["purple-300"]};
  color: ${(props) => props.theme["purple-700"]};

`;

export const CartButton = styled(BaseButton)`
  background-color: ${(props) => props.theme["yellow-300"]};
  color: ${(props) => props.theme["yellow-700"]};
  position: relative;

  span {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    background-color: ${(props) => props.theme["yellow-700"]};
    color: ${(props) => props.theme.white};
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font: ${(props) => props.theme["text-xs"]};
  }
`;
