import React, { PropsWithChildren } from 'react';
import s from './Layout.module.css';
import Footer from '../Footer';
import Navbar from '../Navbar';

interface LayoutProps extends PropsWithChildren {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={s.root}>
            <Navbar />
            <main className="fit">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
