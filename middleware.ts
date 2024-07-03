import axios from "axios";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedPaths = ["/courses"];

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("jwt-token")?.value;
  // console.log("token", token);

  if (protectedPaths.some((path) => request.nextUrl.pathname.startsWith(path))) {
    if(!token)
      return NextResponse.redirect(new URL("/", request.url));
    
    //check if the token has access to the paltform

    const res = await axios.get(process.env.NEXT_PUBLIC_BACKEND_BASE + "/profile", {
      headers: {
        Authorization: `Bearer ${token}`
      },
    })
    //   .then((response) => {
    //   console.log("response", response.data);
    //   const inviteId = response.data.invitationCodeId
    //   console.log(inviteId)
    //   if (!inviteId) return NextResponse.redirect(new URL("/invite", request.url));
    // }).catch((error) => {
    //   console.error("Error validating token:", error);
    //   return NextResponse.redirect(new URL("/", request.url));
    // });
    const inviteId = res.data.invitationCodeId
    console.log(inviteId)
    if (!inviteId) return NextResponse.redirect(new URL("/invite", request.url));

    return NextResponse.next();
  }


  // if (request.nextUrl.pathname.startsWith("/courses") && !token) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }

  return NextResponse.next();
}
