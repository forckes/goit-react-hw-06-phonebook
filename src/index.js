import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.jsx";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				{/* <PersistGate loading={null} persistor={persistor}> */}
				<App />
				{/* </PersistGate> */}
			</ThemeProvider>
		</Provider>
	</React.StrictMode>
);
