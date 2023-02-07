import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Limit the middleware to paths starting with `/api/`
export const config = {
  matcher: '/pokemon/:function*',
};

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const url = 'https://pokeapi.co/api/v2' + request.nextUrl.pathname;

  return NextResponse.rewrite(url);
}
