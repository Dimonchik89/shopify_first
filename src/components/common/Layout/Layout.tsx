'use client';
import React, { PropsWithChildren } from 'react';
import s from './Layout.module.css';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { Sidebar } from '@components/ui';
import { CartSidebar } from '@components/cart';
import { useUi } from '@components/ui/context';

interface LayoutProps extends PropsWithChildren {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { isSidebarOpen, closeSidebar } = useUi();

    return (
        <div className={s.root}>
            <Navbar />
            <Sidebar
                isOpen={isSidebarOpen}
                onClose={closeSidebar}
            >
                <CartSidebar />
            </Sidebar>
            <main className="fit">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
