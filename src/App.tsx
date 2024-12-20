import { defaultTheme } from "@styles/themes/default";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { routes } from "./routes";
import { GlobalStyles } from "./styles/global";
import { AppContextProvider } from "./contexts/AppContext";

export function App() {
	return (
		<AppContextProvider>
			<ThemeProvider theme={defaultTheme}>
				<RouterProvider router={routes} />
				<GlobalStyles />
			</ThemeProvider>
		</AppContextProvider>
	);
}
