import { Inter } from 'next/font/google'
import { Card } from "@/components/card"

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const res = await getPosts();

  return (
    <>
      <div className='grow flex min-h-screen flex-col items-center mt-24'>

        {res.data.map((post: Post) => (
          <Card content={post.content} title={post.title} author={post.author} createdDate={post.createdDate} key={post._id} _id={post._id} />
        )
        )}
      </div>
    </>
  )
}

const getPosts = async () => {
  const url = "http://localhost:3000/api/posts";
  const data = await fetch(url, { cache: "no-store" });
  const res = await data.json();
  return res;
}

type Post = {
  _id: string;
  author: string;
  title: string;
  content: string;
  createdDate: string
}