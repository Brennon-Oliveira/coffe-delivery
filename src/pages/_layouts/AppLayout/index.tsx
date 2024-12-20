import { Outlet } from "react-router-dom";
import {
	AppHeader,
	AppLayoutContainer,
	CartButton,
	LocationButton,
} from "./styles";
import logo from "@assets/images/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { AppContext } from "@/contexts/AppContext";

export function AppLayout() {
	const { products } = useContext(AppContext);

	const cartItems = products.length;

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
					<CartButton to="/checkout">
						<ShoppingCart weight="fill" size={"1.375rem"} />
						{cartItems !== 0 && <span>{cartItems}</span>}
					</CartButton>
				</div>
			</AppHeader>
			<Outlet />
		</AppLayoutContainer>
	);
}
