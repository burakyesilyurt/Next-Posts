import { ErrorPage } from "@/components/error-page"
import { Metadata } from 'next';

export async function generateMetadata(
  { searchParams }: QueryString,
): Promise<Metadata> {
  const title = searchParams.title;
  return {
    title: title,
  };
}

export default function Post({ searchParams: { title, author, content, createdDate, id } }: QueryString) {



  if (!title || !author || !content || !createdDate || !id) return <ErrorPage />



  return (
    <div className='grow flex min-h-screen flex-col items-center mt-24'>
      <div className="max-w-2xl lg:w-full rounded overflow-hidden shadow-lg bg-gray-700 my-6 shadow-gray-800 w-4/5">
        <div className="px-6 py-4">
          <div className="flex justify-between font-bold text-xl mb-2">
            <h1>{title}</h1>
            <span className="mr-5">Yazar: {author}</span>
          </div>
          <p className="text-base mt-5">
            {content}
          </p>
          <span>{ }</span>
        </div>

      </div>
    </div>
  )
}



type QueryString = {
  searchParams: { title: string; content: string; author: string; createdDate: string; id: string }
}





