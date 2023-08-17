# Page와 Routes
### 안동훈 튜터님 수업

## 서버 컴포넌트
<img src="https://github.com/xoxojw/pages-route-prac/assets/124491335/81f2c879-bd27-45aa-9c39-35d4e64fc8b5" width="500px" />

<br>

## SSR(Server-Side Rendering) - `getServerSideProps`
- `getServerSideProps` 함수는 Server에서만 실행된다. Broswer에서는 실행되지 않는다.
- `getServerSideProps` 함수는 **runtime**에서만 실행된다.
- `getServerSideProps`에서는 context 객체를 통해, Post Page에서는 next router를 통해 URL Query 파라미터에 접근이 가능하다.
- `getServerSideProps`의 반환 값은 Post page의 props로 전달된다.

```tsx
// pages/ssr/[id].js
import { useRouter } from "next/router";

const Post = ({ post }) => {
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

export async function getServerSideProps(context) {
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
```

<br>

## SSG(Static-Site Generation) - `getStaticProps`, `getStaticPaths`
> ✅ 따로 설정이 없으면 Next.js는 프로젝트 빌드 시 페이지를 기본적으로 Static Generation한다.

<br>

## ISR(Incremental Static Regeneration)
- `getStaticProps`에 `revalidate` 속성을 추가하면 ISR로 사용할 수 있다.
```tsx
export async function getStaticProps() {
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // 10초 뒤에 해당 페이지를 다시 한 번 빌드한다.
  }
}
```