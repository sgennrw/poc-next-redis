import type { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';
import * as cacheService from '@/services/cacheService';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { formToken, data } = req.body;

  res.setHeader(
    'Set-Cookie',
    cookie.serialize('formToken', formToken, {
      httpOnly: true, // no JS running on the browser will be able to read this cookie at all
      secure: process.env.NODE_ENV !== 'development', // only send this cookie over https connection
      maxAge: 60 * 60, // 1 hour
      sameSite: 'strict', // super fucking secure
      path: '/', // cookie will be available on `/` = everywhere
    })
  );

  await cacheService.set(formToken, data);

  res.status(200).json(data);
};

// call an API to completely create Form
// delete cokkie
// res.setHeader(
//   'Set-Cookie',
//   cookie.serialize('token', "", {
//     httpOnly: true, // no JS running on the browser will be able to read this cookie at all
//     secure: process.env.NODE_ENV !== 'development', // only send this cookie over https connection
//     expires: new Date(0),
//     sameSite: 'strict', // super fucking secure
//     path: '/', // cookie will be available on `/` = everywhere
//   })
// );
