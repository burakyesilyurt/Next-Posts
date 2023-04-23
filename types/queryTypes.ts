export type Query = {
  title:String;
  author:String;
  content:String;
  createdDate:Date;
  comments:[]

}

export type CommentQuery = {
  author:String;
  content:String;
  createdDate:Date;
}
