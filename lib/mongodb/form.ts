
import clientPromise from "./mongodb";
import {Query} from "@/types/queryTypes"

export const getPosts = async() =>{
try {
  const client = await clientPromise;
  const db = client.db("nextform");

    const result= await db
      .collection("form")
      .find({})
      .sort({createdDate:-1})
      .limit(10)
      .toArray();
  return result;
  } catch (error) {
    console.error(error);
    return {error:"Failed to fetch data"}
  }
}

export const postPosts = async(query:Query) =>{

  try {
    const client = await clientPromise;
    const db = client.db("nextform");
    const data = query;
    //const post:Post = {author:"burak",title:"test",content:"test1"}
    const result= await db
        .collection("form")
        .insertOne(data);

        return {result:result}
        
  } catch (e) {
      console.error(e);
      return {error:"an error ocurred"}
  }
}

 