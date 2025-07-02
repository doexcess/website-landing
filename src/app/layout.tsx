import type { Metadata } from 'next';
// import { Geist, Geist_Mono } from "next/font/google";
import './globals.css';
import { Provider } from '@/components/ui/provider';
import localFont from 'next/font/local';
import ReduxProvider from '@/redux/redux-provider';

const Gilroy = localFont({
  src: [
    {
      path: './(fonts)/gilroy/Gilroy-Light.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './(fonts)/gilroy/Gilroy-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './(fonts)/gilroy/Gilroy-Medium.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './(fonts)/gilroy/Gilroy-Bold.ttf',
      weight: '800',
      style: 'bold',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Doexcess',
  description: 'Automate Business Processes & Streamline Workflows',
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <html lang='en'>
        <body
          // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          className={`${Gilroy.className} antialiased`}
          style={{ backgroundColor: '#fff' }}
        >
          <Provider>{children}</Provider>
        </body>
      </html>
    </ReduxProvider>
  );
}
