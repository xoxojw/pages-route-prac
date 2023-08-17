import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Todo = () => {
  const [title, setTitle] = useState("");
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;
    if (id) {
      fetch(`/api/todos/${id}`)
        .then((res) => res.json())
        .then((json) => setTitle(json.title))
        .catch((error) => console.error(error));
    }
  }, [router.query.id]);

  return <div>Todo: {title}</div>;
};

export default Todo;