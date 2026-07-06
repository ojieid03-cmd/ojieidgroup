import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const session = request.cookies.get("admin_session");

  if (
    request.nextUrl.pathname.startsWith("/4link/admin") &&
    !session
  ) {
    return NextResponse.redirect(
      new URL("/4link/login", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/4link/admin/:path*"],
};