import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Limit the middleware to paths starting with `/pokemon/` , `/foo`
export const config = {
  matcher: ['/pokemon/:function*', '/foo/:function*'],
};

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/pokemon')) {
    const url = 'https://pokeapi.co/api/v2' + pathname;
    return NextResponse.rewrite(url);
  }

  if (pathname.startsWith('/foo')) {
    console.log('/foo with method: ', request.method);

    const newPath = '/api' + pathname + request.nextUrl.search;
    return NextResponse.rewrite(new URL(newPath, request.url));
  }
}
