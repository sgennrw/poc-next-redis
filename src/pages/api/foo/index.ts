// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  id: string;
  name: string;
  // hello: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query as { id: string };

  console.log('/api/foo headers[x-foo-id] =', req.headers['x-foo-id']);

  res.status(200).json({
    id,
    name: 'Get Foo',
  });
}
