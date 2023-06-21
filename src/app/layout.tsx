import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Demo App for a job Portal',
  description: 'Using Nextjs and some of its core features such as the Image, Link and font components',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>A demo job portal</title>
        <meta property="og:title" content={metadata.title} key="title" />
        <meta property="og:description" content={metadata.description} key="description" />
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}