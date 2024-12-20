import { useState } from "react";
import { ourCoffeesMock } from "./our-coffees-mock";
import { CoffeeItem } from "./CoffeeItem";
import { OurCoffeesContainer, OurCoffeesListContainer } from "./styles";
import { QuantityInputProvider } from "@/components/QuantityInput";

export function OurCoffees() {
	const [coffees, setCoffees] = useState(ourCoffeesMock);

	return (
		<OurCoffeesContainer>
			<h2>Nossos Cafés</h2>
			<OurCoffeesListContainer>
				{coffees.map((coffee) => (
					<QuantityInputProvider key={coffee.title}>
						<CoffeeItem
							id={coffee.id}
							title={coffee.title}
							description={coffee.description}
							priceInCents={coffee.priceInCents}
							tags={coffee.tags}
							image={coffee.image}
						/>
					</QuantityInputProvider>
				))}
			</OurCoffeesListContainer>
		</OurCoffeesContainer>
	);
}
