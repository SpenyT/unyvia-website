import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.tsx';

import '../styles/root.css'

export default function Root() {

    return(
        <>
            <Navbar />
            <Outlet />
        </>
    );
}