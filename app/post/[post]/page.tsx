

export const metadata = {
  title: 'Test',
}

export default function Post({ params: { id }, searchParams: { title, author, content } }: QueryString) {

  return (
    <div className="grow flex min-h-screen flex-col items-center p-24">

      <h1>{title}</h1>
      <h1>{author}</h1>
      <h1>{content}</h1>
    </div>
  )
}


type QueryString = {
  params: { id: string };
  searchParams: { title: string; content: string; author: string }
}