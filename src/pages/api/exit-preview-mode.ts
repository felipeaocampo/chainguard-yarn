// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;
  console.log("reached the api", slug);

  res.clearPreviewData();
  res.setDraftMode({ enable: false });
  res.writeHead(307, { Location: slug });
  res.end();
}
