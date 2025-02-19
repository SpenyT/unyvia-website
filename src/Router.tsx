import { createBrowserRouter } from 'react-router-dom';

import Home from "./pages/Home.tsx";
import Lighting from './pages/Lighting.tsx';
import Hvac from "./pages/Hvac.tsx"
import AboutUs from "./pages/AboutUs.tsx";
import Root from './pages/Root.tsx';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
                index: true,
            },
            {
                path: "/lighting",
                element: <Lighting />,
            },
            {
                path: "/hvac",
                element: <Hvac />
            },
            {
                path: "/about-us",
                element: <AboutUs />
            }
        ]
    }
]);

export default router;