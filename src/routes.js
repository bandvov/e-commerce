import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";

export const ROUTES = [
  {
    path: "/",
    Component: HomePage,
    exact: true,
  },
  { path: "/about", Component: AboutPage },
  { path: "/products", Component: ProductsPage },
];
