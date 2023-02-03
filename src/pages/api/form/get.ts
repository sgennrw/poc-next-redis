// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import * as cacheService from '@/services/cacheService';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.body?.formToken) {
    res.status(400);
  }

  const cached = await cacheService.get(req.body.formToken);

  if (cached) {
    res.status(200).json(JSON.parse(cached));
  }

  // const formData = body.data; // get from API
  // await cacheService.set(body.id, formData);

  res.status(200).json({ step1: {}, step2: {} });
};
