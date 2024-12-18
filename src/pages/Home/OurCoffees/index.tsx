import { useState } from "react";
import { ourCoffeesMock } from "./our-coffees-mock";
import { CoffeeItem } from "./CoffeeItem";
import { OurCoffeesContainer, OurCoffeesListContainer } from "./styles";

export function OurCoffees() {
	const [coffees, setCoffees] = useState(ourCoffeesMock);

	return (
		<OurCoffeesContainer>
			<h2>Nossos Cafés</h2>
			<OurCoffeesListContainer>
				{coffees.map((coffee) => (
					<CoffeeItem
						title={coffee.title}
						description={coffee.description}
						priceInCents={coffee.priceInCents}
						tags={coffee.tags}
						image={coffee.image}
						key={coffee.title}
					/>
				))}
			</OurCoffeesListContainer>
		</OurCoffeesContainer>
	);
}
