import Header from "@src/components/dashboard/header";
import Sidebar from "@src/components/dashboard/Sidebar";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
     <div className='h-screen flex flex-col overflow-hidden'>
            <Header />
            <div className='flex flex-1 overflow-hidden'>
                <Sidebar />
                <div className='flex-1 bg-gray-50 p-6 overflow-auto'>
                    {/* Main Content Area */}
                    {children}
                </div>
            </div>
        </div>
  );
}
