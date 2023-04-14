
import {postPosts} from "@lib/mongodb/form"
import {NextResponse} from 'next/server'

export async function POST(request: Request,{params}:Params) { 
 
  try{
  const response = await postPosts(params)

  return NextResponse.json({message:"Successfully Posted",response:response}, {status: 201})
}catch(e){
  return NextResponse.json({message:"An Error Occured"},{status:500})
}
}

type Params = {
  params:{
    author:string;
    title:string;
    content:string;
  }
}

