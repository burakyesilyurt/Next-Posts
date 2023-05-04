"use client";
import { useRouter } from 'next/navigation';
const CommentAdd = ({ id }: { id: string }) => {
  const router = useRouter()

  const handleSubmit = async (e: any) => {

    e.preventDefault()
    const data: Data = {
      author: e.target.author.value,
      content: e.target.content.value,
      id: id
    }


    const JSONdata = JSON.stringify(data)
    const endpoint = '/api/posts/comments'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }

    const response = await fetch(endpoint, options)

    const result = await response.json()
    if (result.status == 201) {
      e.target.author.value = ""
      e.target.content.value = ""
      window.location.replace(window.location.href.split("#")[0]);


    }
  }

  return (
    <div className='flex flex-col items-center'>
      <div className="max-w-2xl lg:w-full rounded overflow-hidden shadow-lg bg-gray-700 my-6 shadow-gray-800 w-4/5 p-2">
        <form className="space-y-6" method="post" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="textName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Yazar Adı</label>
            <input type="text" name="author" id="textName" className="outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 dark:border-gray-500 placeholder-gray-400 dark:text-white" required />
          </div>
          <div>
            <label htmlFor="textContent" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">İçerik</label>
            <textarea id="textContent" name="content" rows={3} className="outline-none resize-none block p-2.5 w-full text-sm  bg-gray-50 rounded-lg border  dark:bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required placeholder="Düşüncelerini buraya yaz..."></textarea>
          </div>
          <div className="flex flex-col gap-4 md:flex-none md:flex-row">
            <button type="reset" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Temizle</button>

            <button type="submit" className="md:w-1/4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Yorum Yap</button>
          </div>
        </form>
      </div>
    </div>
  )
}

type Data = {
  author: string;
  content: string;
  id: string
}

export default CommentAdd