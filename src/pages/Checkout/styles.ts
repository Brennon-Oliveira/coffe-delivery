import styled, { css, type RuleSet } from "styled-components";

export const CheckoutContainer = styled.section`
  max-width: ${(props) => props.theme["max-width"]};
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;
  padding: 0 2%;
`;

export const CheckoutBlock = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;

  h2 {
    font: ${(props) => props.theme["title-xs"]};
    color: ${(props) => props.theme["base-subtitle"]};
  }

  &:first-child {
    grid-column: span 7 ;

  }

  &:last-child {
    grid-column: span 5 ;
  }
`;

const baseCheckoutCardStyle = css`
  background-color: ${(props) => props.theme["base-card"]};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  `;

export const CheckoutAddressForm = styled.form`
  ${baseCheckoutCardStyle}
  border-radius: 6px;

  > div {
    width: 100%;
    display: grid;
    grid-template:  "a a a . . . ."
                    "b b b b b b b"
                    "c c c d d d d"
                    "e e e f f f g";
    gap: 1rem;
  }
`;

export const CheckoutAddressFormInput = styled.input`
  ${["a", "b", "c", "d", "e", "f", "g"].map(
		(letter, index) => css`
    &:nth-child(${index + 1}) {
      grid-area: ${letter};
    }
  `,
	)}
  width: 100%;
  height: 2.625rem;
  padding: .75rem;
  background-color: ${(props) => props.theme["base-input"]};
  border: 1px solid ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-text"]};
  font: ${(props) => props.theme["text-s"]};

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }
`;

export const CheckoutFormHeader = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: .5rem;

  color: ${(props) => props.theme["yellow-700"]};

  > div {
    display: flex;
    flex-direction: column;
    gap: .125rem;

    h3 {
      font: ${(props) => props.theme["text-m"]};
      color: ${(props) => props.theme["base-subtitle"]};
    }

    p {
      font: ${(props) => props.theme["text-s"]};
      color: ${(props) => props.theme["base-text"]};
    }
  }
`;

export const CheckoutPaymentTypeForm = styled.form`
  ${baseCheckoutCardStyle}
  border-radius: 6px;

  ${CheckoutFormHeader} {
    color: ${(props) => props.theme["purple-500"]};
  }
`;

export const CheckoutPaymentTypesContainer = styled.div`
  display: grid;
  gap: .75rem;
  grid-template-columns: repeat(3, 1fr);
`;

export const CheckoutPaymentType = styled.label`
  background-color: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-text"]};
  padding: 1rem;
  cursor: pointer;
  border-radius: 6px;
  font: ${(props) => props.theme["button-g"]};
  display: flex;
  gap: .75rem;

  svg {
    color: ${(props) => props.theme["purple-500"]};
  }

  input {
    display: none;
  }

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }

  &:has(input:checked) {
    border: 1px solid ${(props) => props.theme["purple-500"]};
    background-color: ${(props) => props.theme["purple-300"]};
  }
`;
