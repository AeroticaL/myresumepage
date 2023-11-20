import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(
    // pour le statut ligne/en ligne
    `https://api.lanyard.rest/v1/users/264852636375842816`
  ).then((res) => res.json());

  res.status(200).json(response);
};

export default handler;
