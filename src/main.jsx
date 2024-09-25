import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

// import './assets/css/style.css';
// import './assets/css/bootstrap.min.css';

import App from "~/App";
import { store } from "~/store";
import { I18nextProvider } from "react-i18next";
import i18n from "~/utils/i18n";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Provider>
  </StrictMode>
);
