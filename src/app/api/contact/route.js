import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    message: "form submit success....",
    status: true,
  });
}
