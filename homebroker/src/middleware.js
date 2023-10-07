import { NextResponse } from "next/server";

const middleware = (request) => {
    console.log("middleware");
    if (request.nextUrl.pathname != "/login")
        return NextResponse.redirect(new URL("/login", request.url))
}

export default middleware

export const config = {
    matcher: ["/about/:path*", "/studentlist/:path*"]
}