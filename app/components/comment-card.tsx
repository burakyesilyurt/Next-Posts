export const CommentCard = () => {

  return (
    <div className='flex flex-col items-center'>
      <div className="max-w-2xl lg:w-full rounded overflow-hidden shadow-lg bg-gray-700 my-6 shadow-gray-800 w-4/5 p-2">
        <div className="px-9 py-2">
          <div className="flex justify-between">
            <p className="font-bold mb-2">Yazar</p>
            <span>Saat</span>
          </div>
          <p className="text-base mt-5">Content</p>
        </div>
      </div>
    </div>
  )
}