import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.tsx';
import Footer from '../components/Footer.tsx';
import ScrollBar from '../components/scrollBar.tsx';

import { PageLoadProvider } from '../utils/contexts/PageLoadContext.tsx';

export default function Root() {

    return(
        <PageLoadProvider>
            <Navbar />
            <Outlet />
            <Footer />
            <ScrollBar />
        </PageLoadProvider>
    );
}