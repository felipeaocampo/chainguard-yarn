import type { NextApiRequest, NextApiResponse } from "next";

const BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log("inside twitter");
  //   const { tweetId } = req.query;
  const tweetId = "1768370760190505370";

  if (!tweetId) {
    return res.status(400).json({ error: "Tweet ID is required" });
  }

  console.log("token: ", BEARER_TOKEN);
  try {
    const resp = await fetch(`https://api.twitter.com/2/tweets/${tweetId}`, {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    });

    const data = await resp.json();

    // res.status(200).json(data);
    console.log(data);
    res.status(200).json({ name: "John Doe" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
