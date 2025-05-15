import { createBrowserRouter } from 'react-router-dom';

import Home from "./pages/Home.tsx";
import Root from './pages/RootLayout.tsx';


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
        ]
    }
]);

export default router;