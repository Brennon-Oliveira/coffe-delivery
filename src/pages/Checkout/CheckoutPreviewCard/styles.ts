import styled, { css, type RuleSet } from "styled-components";

export const CheckoutPreviewCardContainer = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem;
`;

type CheckoutPriceTableItemVariant = "normal" | "total";

interface CheckoutPriceTableItemProps {
	$variant?: CheckoutPriceTableItemVariant;
}

const checkoutPriceTableItemVariants: Record<
	CheckoutPriceTableItemVariant,
	RuleSet<object>
> = {
	normal: css`
    font: ${(props) => props.theme["text-s"]};
    color: ${(props) => props.theme["base-text"]};
  `,
	total: css`
    font: ${(props) => props.theme["text-l-bold"]};
    color: ${(props) => props.theme["base-subtitle"]};
  `,
} as const;

export const CheckoutPriceTable = styled.table`
  tbody {
    display: flex;
    flex-direction: column;
    gap: .75rem;
  }
`;

export const CheckoutPriceTableItem = styled.tr<CheckoutPriceTableItemProps>`
  ${(props) =>
		props.$variant
			? checkoutPriceTableItemVariants[props.$variant]
			: checkoutPriceTableItemVariants.normal}
  display: flex;
  justify-content: space-between;

  td:first-child {
    text-align: start;
  }

  td:last-child {
    text-align: end;
  }
`;

export const CheckoutConfirmButton = styled.button`
  background-color: ${(props) => props.theme["yellow-500"]};
  color: ${(props) => props.theme.white};
  font: ${(props) => props.theme["button-g"]};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .75rem;
  border: none;
  gap: .25rem;
  border-radius: 6px;
  transition: background-color .1s;
  width: 100%;
  cursor: pointer;
  
  &:hover {
    background-color: ${(props) => props.theme["yellow-700"]};
  }
`;
