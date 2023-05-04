import { Inter } from 'next/font/google'
import { Card } from "@/components/card"
import { FixedLayout } from "@/components/fixed-layout"
import AddPost from "@/components/add-post-popup"


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
      <FixedLayout>
        <AddPost comment='Post Ekle' />
      </FixedLayout>
    </>
  )
}

const getPosts = async () => {
  const url = `${process.env.URL}/api/posts`;
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