import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '옥찌 포트폴리오',
  description: 'html5, css3, javascript, React.js, Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
