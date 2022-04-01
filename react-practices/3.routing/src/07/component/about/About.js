import React from 'react';
import SiteLayout from "../../layout/SiteLayout";
import Navigation from './Navigation';
import { Outlet } from 'react-router';

export default function About() {
    return (
        <SiteLayout>
            <Navigation />
            <Outlet />
        </SiteLayout>
    );
}