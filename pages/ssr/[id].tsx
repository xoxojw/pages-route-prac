import { useRouter } from "next/router";

const Post = ({ post }: any) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      Post: {id}
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;

// getServerSideProps 함수는 server에서만 실행되기 때문에 API key 등을 활용할 수 있다.
export async function getServerSideProps(context: any) {
  const { params } = context;
  const { id } = params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = await response.json();

  return {
    props: {
      post,
    }, // will be passed to the page component as props
  };
}