import {NextResponse} from 'next/server'
import {getComments,postComment} from "@lib/mongodb/form"
import {CommentQuery} from "@/types/queryTypes"

export async function GET(request: Request) { 
  try{
    const {id} = await request.json()
    const data = await getComments(id)
    return NextResponse.json(({data:data}),{status:200})
  }catch(error){
    return NextResponse.json({message:"An Error Occured"},{status:500})
  }
}

export async function POST(request: Request) { 
  try{
    const {title,content,author,id}= await request.json()
    console.log(title,content,author)
    const newComment : CommentQuery= {
      content,
      author,
      createdDate:new Date(),
    }
    const response = await postComment(id,newComment)

    return NextResponse.json({message:"Successfully Posted",status:201,response:response}, {status: 201})
  }catch(e){
    return NextResponse.json({message:"An Error Occured",status:500},{status:500})
  }
}