import { headers } from "next/headers";
import "./globals.scss";
import AuthLayout from "@src/layouts/auth";
import DefaultLayout from "@src/layouts/default";
import ReduxProvider from "./providers";



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
    const pathname = headersList.get("x-pathname") || "";

  const isAuthRoute =
    pathname.startsWith("/login") ||
    pathname.startsWith("/register") ||
    pathname.startsWith("/forgot-password");

  const Layout = isAuthRoute ? AuthLayout : DefaultLayout;
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
       <ReduxProvider>
         <Layout>
          {children}
        </Layout>
       </ReduxProvider>
      </body>
    </html>
  );
}
