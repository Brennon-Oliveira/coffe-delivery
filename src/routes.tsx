import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "@/pages/_layouts/AppLayout";
import { Home } from "./pages/Home";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
		],
	},
]);
