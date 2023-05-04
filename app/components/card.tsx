import Link from "next/link"
import dynamic from 'next/dynamic'
const CardTimeHeavy = dynamic(() => import('./card-time'), { ssr: false })
export const Card = ({ title, content, author, createdDate, _id }: Prop) => {

  return (
    <>
      <div className="max-w-2xl w-6/12 lg:w-full rounded overflow-hidden shadow-lg bg-gray-700 my-6 shadow-gray-800">
        <div className="px-6 py-4">
          <div className="flex justify-between font-bold text-xl mb-2 flex-col md:flex-row">
            <h1>{title}</h1>
            <span className="mr-5">Yazar: {author}</span>
          </div>
          <p className=" text-base">
            {content}
          </p>
        </div>
        <div className="px-6 pt-4 pb-5 border-t border-solid border-slate-400 flex justify-between">
          <div className="flex flex-col items-center md:flex-row">
            <Link className="mb-5 sm:mb-0 sm:mr-5" href={{
              pathname: `/post/${_id}`,
              query: {
                title: title,
                content: content,
                author: author,
                createdDate: createdDate.toString(),
                id: _id
              }
            }}>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ">Devamını Oku</span></Link>
            <CardTimeHeavy date={createdDate} />
          </div>

        </div>
      </div>
    </>
  )
}


type Prop = {
  title: string;
  content: string;
  author: string;
  createdDate: string;
  _id: string
}