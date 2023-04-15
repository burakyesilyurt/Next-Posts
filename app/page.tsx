import { Inter } from 'next/font/google'
import { Card } from "@/components/card"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className='grow flex min-h-screen flex-col items-center sm:py-24 md:p-24'>
        <Card title='The Coldest Sunset' content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.' />
        <Card title='lorem sadsa' content='lorem asdsad' />
      </div>
    </>
  )
}
