
import clientPromise from "./mongodb";

export const getPosts = async() =>{
try {
  const client = await clientPromise;
  const db = client.db("nextform");

    const result= await db
      .collection("form")
      .find({})
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
    data.createdDate = new Date();
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

 type Query = {
   title:String;
   author:String;
   content:String;
   createdDate?:Date
 }
