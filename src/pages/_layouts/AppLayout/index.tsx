import { Outlet } from "react-router-dom";
import {
	AppHeader,
	AppLayoutContainer,
	CartButton,
	LocationButton,
} from "./styles";
import logo from "@assets/images/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useState } from "react";

export function AppLayout() {
	const [cartItems, setCartItems] = useState(4 as number | null);

	return (
		<AppLayoutContainer>
			<AppHeader>
				<img
					src={logo}
					alt="Copo de café roxo com um foguete branco dentro, com o texto Coffee deleivry"
				/>
				<div>
					<LocationButton>
						<MapPin weight="fill" size={"1.375rem"} /> Ponta Grossa, PR
					</LocationButton>
					<CartButton>
						<ShoppingCart weight="fill" size={"1.375rem"} />
						{cartItems && <span>{cartItems}</span>}
					</CartButton>
				</div>
			</AppHeader>
			<Outlet />
		</AppLayoutContainer>
	);
}
