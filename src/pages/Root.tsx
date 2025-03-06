import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.tsx';
import Footer from '../components/Footer.tsx';
import Scrollbar from '../components/Scrollbar.tsx';

import { PageLoadProvider } from '../utils/contexts/PageLoadContext.tsx';

export default function Root() {

    return(
        <PageLoadProvider>
            <Scrollbar />
            <Navbar />
            <Outlet />
            <Footer />
        </PageLoadProvider>
    );
}