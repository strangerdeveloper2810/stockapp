import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import localFont from 'next/font/local';
import TanstackProvider from '@/app/Provider/TanstackProvider';
import AppProvider from './context/AppProvider';
import './globals.css';
import { ACCESS_TOKEN } from '@/utils/settings';
import HomeLayout from '@/layouts/HomeLayout';
import AuthLayout from '@/layouts/AuthLayout';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'XNO Application',
  description: 'XNO Application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get(ACCESS_TOKEN)?.value ?? '';
  const renderLayout = () =>
    !accessToken ? (
      <HomeLayout>{children}</HomeLayout>
    ) : (
      <AuthLayout>{children}</AuthLayout>
    );
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950`}
        suppressHydrationWarning
      >
        <TanstackProvider>
          <AppProvider initialValue={accessToken}>{renderLayout()}</AppProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
