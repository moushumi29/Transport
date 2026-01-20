"use client"

import React from 'react';
import Header from '@src/components/dashboard/header'
import Sidebar from '@src/components/dashboard/Sidebar';
import DashboardContent from '@src/components/dashboard/DashboardContent';

const DashboardPage = () => {
    return (
        <>
            <DashboardContent />
        </>
    )
}

DashboardPage.layout = 'DefaultLayout';

export default DashboardPage
