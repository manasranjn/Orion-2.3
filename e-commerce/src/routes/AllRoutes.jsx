import Home from "../Screens/User/Home.jsx";
import About from "../Screens/User/About.jsx";
import SellYourBook from "../Screens/User/SellYourBook.jsx";
import ProductDetails from "../Screens/User/ProductDetails.jsx";

export const userRoutes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/sell-books',
        element: <SellYourBook />,
    },
    {
        path: '/details',
        element: <ProductDetails />,
    },
];
