import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.tsx';
import Footer from '../components/Footer.tsx';

export default function RootLayout() {

    return(
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}