import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(
    `https://api.sunrise-sunset.org/json?lat=50.633333&lng=3.066667&formatted=0`
  ).then((res) => res.json());

  res.status(200).json(response);
};

export default handler;
