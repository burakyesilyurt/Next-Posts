import {NextResponse} from 'next/server'
import {getPosts} from "@lib/mongodb/form"



export async function GET(request: Request) { 
  try{
  const data = await getPosts()
  return NextResponse.json(({data:data}),{status:200})
  }catch(error){
    return NextResponse.json({message:"An Error Occured"},{status:500})
  }
}


