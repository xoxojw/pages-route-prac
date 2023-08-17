import { useRouter } from "next/router";
import React from "react";

const Posts = () => {
  const router = useRouter();
  return <div>Posts : {router.query.postId}</div>;
};

export default Posts;
