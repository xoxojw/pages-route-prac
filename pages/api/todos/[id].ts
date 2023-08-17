import { NextApiRequest, NextApiResponse } from "next";

const todoApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req;
  const { id } = query;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );

  const todo = await response.json();

  res.status(200).json(todo);
};

export default todoApi;