import Link from "next/link"


export const Card = ({ title, content, author, createdDate, _id }: Prop) => {
  return (
    <>
      <div className="max-w-2xl w-6/12 lg:w-full rounded overflow-hidden shadow-lg bg-gray-700 my-6 shadow-gray-800">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
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
            <button className="mb-5 sm:mb-0 sm:mr-5 lg:mt-0 pt-2 md:pt-0">
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Yanıt Ver</span>
            </button>
          </div>
          <span className="text-xs py-1 text-slate-300">Date Here</span>
        </div>
      </div>
    </>
  )
}

type Prop = {
  title: string;
  content: string;
  author: string;
  createdDate: Date;
  _id: string
}