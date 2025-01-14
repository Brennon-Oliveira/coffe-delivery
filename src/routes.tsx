import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "@/pages/_layouts/AppLayout";
import { Home } from "./pages/Home";
import { Checkout } from "@/pages/Checkout";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/checkout",
				element: <Checkout />,
			},
		],
	},
]);
