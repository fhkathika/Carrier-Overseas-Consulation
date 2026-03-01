import { NextResponse } from "next/server"

export function middleware(request) {
  const { pathname } = request.nextUrl
  console.log("Middleware running:", pathname)  // ✅ Add here
  const isAdminRoute = pathname.startsWith("/admin")
  const isLoginPage = pathname === "/admin/login"

  const cookie = request.cookies.get("admin-auth")

 if (pathname !== "/admin/login" && !request.cookies.get("admin-auth")) {
  return NextResponse.redirect(new URL("/admin/login", request.url))
}

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}


