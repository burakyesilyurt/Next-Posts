import './globals.css'
import { Header } from "@/components/layout/header"

export const metadata = {
  title: 'Next Form',
  description: 'Created by Burak Yeşilyurt',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className='flex h-full flex-col'>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
