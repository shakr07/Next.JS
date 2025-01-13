import { NextResponse } from "next/server";

export async function GET(request) {
    return  NextResponse.json({name:"Anila",age:28});
  }
  