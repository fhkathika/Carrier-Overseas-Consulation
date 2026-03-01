import { NextResponse } from "next/server";

export async function GET(request){
   const cookie=request.cookies.get("admin-auth")
   if(!cookie){
    return NextResponse.json({loggedIn:false})
   }
 
    return NextResponse.json({loggedIn:true})
}