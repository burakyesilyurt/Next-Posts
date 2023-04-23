import { ErrorPage } from "@/components/error-page"
import { Metadata } from 'next';
import CardTime from "@/components/card-time"
import { FixedLayout } from "@/components/fixed-layout"
import { ActionButton } from "@/components/action-button"

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
    <>
      <div className='grow flex flex-col items-center mt-24'>
        <div className="max-w-2xl lg:w-full rounded overflow-hidden shadow-lg bg-gray-700 my-6 shadow-gray-800 w-4/5">
          <div className="px-6 py-4">
            <div className="flex justify-between font-bold text-xl mb-2">
              <h1>{title}</h1>
              <span className="mr-5">Yazar: {author}</span>
            </div>
            <p className="text-base mt-5">
              {content}
            </p>
          </div>

          <div className="flex justify-end mr-5 pb-5">
            <CardTime date={createdDate} />
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center'>
        <div className="max-w-2xl lg:w-full rounded overflow-hidden shadow-lg bg-gray-700 my-6 shadow-gray-800 w-4/5 p-2">
          <div className="px-9 py-2">
            <div className="flex justify-between">
              <p className="font-bold mb-2">Yazar</p>
              <span>Saat</span>
            </div>
            <p className="text-base mt-5">Content</p>
            <div id="commentTrigger" className="target:block hidden">Bingo!</div>
          </div>
        </div>
      </div>
      <FixedLayout>
        <a href="#commentTrigger">
          <ActionButton comment="Yorum Yap" />
        </a>
      </FixedLayout>

    </>

  )
}



type QueryString = {
  searchParams: { title: string; content: string; author: string; createdDate: string; id: string }
}





