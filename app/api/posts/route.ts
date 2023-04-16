import {NextResponse} from 'next/server'
import {getPosts,postPosts} from "@lib/mongodb/form"



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
    const newPost : Post= {
      title,
      content,
      author,
      createdDate:new Date()
    }
    const response = await postPosts(newPost)

    return NextResponse.json({message:"Successfully Posted",response:response}, {status: 201})
  }catch(e){
    return NextResponse.json({message:"An Error Occured"},{status:500})
  }
}

type Post = {
   title:String;
   author:String;
   content:String;
   createdDate:Date
}






