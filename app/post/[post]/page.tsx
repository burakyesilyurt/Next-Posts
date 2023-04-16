import { ErrorPage } from "@/components/error-page"

export const metadata = {
  title: 'Test',
}

export default function Post({ searchParams: { title, author, content, createdDate, id } }: QueryString) {

  if (!title || !author || !content || !createdDate || !id) return <ErrorPage />

  return (
    <div className="grow flex min-h-screen flex-col items-center p-24">

      <h1>{title}</h1>
      <h1>{author}</h1>
      <h1>{content}</h1>
    </div>
  )
}


type QueryString = {
  searchParams: { title: string; content: string; author: string; createdDate: string; id: string }
}