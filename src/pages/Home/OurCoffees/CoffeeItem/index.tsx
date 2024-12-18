import { Minus, Plus, ShoppingCart } from "phosphor-react";
import {
	QuantityInput,
	QuantityInputProvider,
} from "@/components/QuantityInput";
import {
	CoffeeItemAddCartButton,
	CoffeeItemContainer,
	CoffeeItemFooter,
	CoffeeItemPrice,
} from "./styles";

interface CoffeeItemProps {
	tags: string[];
	title: string;
	description: string;
	priceInCents: number;
	image: string;
}

export function CoffeeItem({
	title,
	description,
	priceInCents,
	tags,
	image,
}: CoffeeItemProps) {
	return (
		<QuantityInputProvider>
			<CoffeeItemContainer>
				<img src={image} alt="" />
				<div>
					{tags.map((tag) => (
						<span key={tag}>{tag}</span>
					))}
				</div>
				<h3>{title}</h3>
				<p>{description}</p>
				<CoffeeItemFooter>
					<CoffeeItemPrice>
						<span>R$</span>
						<span>{(priceInCents / 100).toFixed(2)}</span>
					</CoffeeItemPrice>
					<div>
						<QuantityInput />
						<CoffeeItemAddCartButton type="button">
							<ShoppingCart weight="fill" />
						</CoffeeItemAddCartButton>
					</div>
				</CoffeeItemFooter>
			</CoffeeItemContainer>
		</QuantityInputProvider>
	);
}
