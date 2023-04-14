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
        <main className='grow flex min-h-screen flex-col items-center justify-between p-24'>{children}</main>
      </body>
    </html>
  )
}
