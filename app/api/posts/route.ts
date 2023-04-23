import {NextResponse} from 'next/server'
import {getPosts,postPosts} from "@lib/mongodb/form"
import {Query} from "@/types/queryTypes"


export async function GET(request: Request) { 
  try{
  const data = await getPosts()
  return NextResponse.json(({data:data}),{status:200})
  }catch(error){
    return NextResponse.json({message:"An Error Occured"},{status:500})
  }
}


export async function POST(request: Request) { 
  try{
    const {title,content,author}= await request.json()
    console.log(title,content,author)
    const newPost : Query= {
      title,
      content,
      author,
      createdDate:new Date()
    }
    const response = await postPosts(newPost)

    return NextResponse.json({message:"Successfully Posted",status:201,response:response}, {status: 201})
  }catch(e){
    return NextResponse.json({message:"An Error Occured",status:500},{status:500})
  }
}





