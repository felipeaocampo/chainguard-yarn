import type { NextApiRequest, NextApiResponse } from "next";
import { COOKIE_NAME_PRERENDER_BYPASS } from "next/dist/server/api-utils";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;

  console.log("preview-blog triggered");

  res.setDraftMode({ enable: true });
  const headers = res.getHeader("Set-Cookie");
  if (Array.isArray(headers)) {
    res.setHeader(
      "Set-Cookie",
      headers.map((cookie) => {
        if (cookie.includes(COOKIE_NAME_PRERENDER_BYPASS)) {
          return cookie.replace("SameSite=Lax", "SameSite=None; Secure");
        }
        return cookie;
      })
    );
  }

  res.setPreviewData({});
  const url = `/unchained/${slug}`;

  res.setHeader("Location", url);
  res.status(307).end();
}
