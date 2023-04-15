import Link from "next/link"


export const Card = ({ title, content }: Prop) => {
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
          <div className="flex items-center sm:flex-col lg:flex-row">
            <Link href={{
              pathname: `/post/${"id"}`,
              query: { name: "test" }
            }}>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Devamını Oku</span></Link>
            <button className="sm:mt-5 lg:mt-0">
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Yanıt Ver</span>
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
}