import { ErrorPage } from "@/components/error-page"
import { Metadata } from 'next';
import CardTime from "@/components/card-time"
import { FixedLayout } from "@/components/fixed-layout"
import { ActionButton } from "@/components/action-button"
import CommentAdd from "@/components/comment-add"
import { CommentCard } from "@/components/comment-card"
import { BackArrow } from "@/components/back-arrow"

export async function generateMetadata(
  { searchParams }: QueryString,
): Promise<Metadata> {
  const title = searchParams.title;
  return {
    title: title,
  };
}

export default async function Post({ searchParams: { title, author, content, createdDate, id } }: QueryString) {

  if (!title || !author || !content || !createdDate || !id) return <ErrorPage />
  const commentsData = await getComments(id)
  return (
    <>
      <BackArrow />
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
        {commentsData.length !== 0 && <div className="max-w-2xl lg:w-full overflow-hidden border-b-2 border-indigo-500 pb-5 w-4/5 text-center">Yorumlar</div>}
      </div>

      <div id="commentTrigger" className="target:block hidden">
        <CommentAdd id={id} />
      </div>

      {commentsData && commentsData.map((comment: Comment) => (
        <CommentCard author={comment.data.author} content={comment.data.content} date={comment.data.createdDate} key={comment.id} />
      )).reverse()}
      <FixedLayout>
        <a href="#commentTrigger">
          <ActionButton comment="Yorum Yap" />
        </a>
      </FixedLayout>
    </>

  )
}

const getComments = async (id: string) => {
  const url = `http://${process.env.URL || "localhost:3000"}/api/posts/comments?id=${id}`;
  const data = await fetch(url, { cache: "no-store" });
  const res = await data.json();
  return res.data[0].comments;
}

type QueryString = {
  searchParams: { title: string; content: string; author: string; createdDate: string; id: string }
}
type Comment = {
  data: {
    content: string;
    author: string;
    createdDate: string;
  }
  id: string
}





