import styled from "styled-components";

export const OurCoffeesContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: ${(props) => props.theme["max-width"]};
  width: 100%;
  padding: 0 2%;
  margin: 0 auto;

  > h2 {
    color: ${(props) => props.theme["base-subtitle"]};
    font: ${(props) => props.theme["title-l"]}
  }
`;

export const OurCoffeesListContainer = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(4, 1fr);
  padding: 2rem 0;
`;
