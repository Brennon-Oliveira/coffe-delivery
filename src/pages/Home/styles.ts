import styled from "styled-components";
import type { defaultTheme } from "@styles/themes/default";
import bannerBackground from "@assets/images/background.svg";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

export const BannerExternalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  position: relative;
  padding: 6.75rem 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    
    display: block;
    background-image: url(${bannerBackground});
    background-size:contain;
    width: 100%;
    height: 100%;

    -webkit-filter: blur(4px);
    -moz-filter: blur(4px);
    -o-filter: blur(4px);
    -ms-filter: blur(4px);
    filter: blur(4px);
  }
`;

export const BannerInternalContainer = styled.div`
  max-width: ${(props) => props.theme["max-width"]};
  width: 100%;
  padding: 0 2%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 3.5rem;

  > img {
    grid-column: span 2;
    max-width: 100%;
  }
`;

export const BannerContent = styled.div`
  grid-column: span 3;
  display: flex;
  flex-direction: column;
  gap: 4.125rem;

  > div:first-of-type {
    display: flex;
    gap: 1rem;
    flex-direction: column;

    h1 {
      font: ${(props) => props.theme["title-xl"]};
      color: ${(props) => props.theme["base-title"]};
    }

    p {
      font: ${(props) => props.theme["text-l"]};
      color: ${(props) => props.theme["base-subtitle"]};
    }
  }

  > div:last-of-type {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
  }
`;

type BannerItemVariants = "orange" | "yellow" | "gray" | "purple";

interface BannerItemsProps {
	$variant: BannerItemVariants;
}

const colorFromVariant: Record<BannerItemVariants, keyof typeof defaultTheme> =
	{
		orange: "yellow-700",
		yellow: "yellow-500",
		gray: "base-text",
		purple: "purple-500",
	} as const;

export const BannerItem = styled.p<BannerItemsProps>`
  display: flex;
  gap: .75rem;
  align-items: center;
  justify-content: flex-start;

  font: ${(props) => props.theme["text-m"]};
  color: ${(props) => props.theme["base-text"]};

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    background-color: ${(props) => props.theme[colorFromVariant[props.$variant]]};
    color: ${(props) => props.theme.white};
    font-size: 1rem;
    border-radius: 100%;
  }
`;
