"use client";

import React from 'react';
import {
  LayoutDashboard,
  Truck,
  Users,
  Settings,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const SidebarItem = ({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) => {
    const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition
        ${
          isActive
            ? "bg-green-50 text-green-600"
            : "text-gray-600 hover:bg-green-50 hover:text-green-600"
        }
      `}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </Link>
  );
};


const Sidebar = () => {
  return (
    <div className=' w-64 bg-white border-r border-gray-200 shadow-md flex flex-col'>
      <nav className="flex-1 px-4 space-y-3 py-6">
        <SidebarItem icon={<LayoutDashboard />} label="Dashboard" href="/dashboard" />
        <SidebarItem icon={<Truck />} label="Builtys" href="/builtys" />
        <SidebarItem icon={<Users />} label="Drivers" href="/drivers" />
        <SidebarItem icon={<Settings />} label="Settings" href="/settings" />
      </nav>

      {/* Logout */}
      <div className="px-4 py-12 ">
        <button className="flex items-center gap-3 text-green-600 hover:bg-green-50 hover:text-green-700 transition w-full px-3 py-2 rounded-lg">
          <LogOut size={24} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  )
}

export default Sidebar
