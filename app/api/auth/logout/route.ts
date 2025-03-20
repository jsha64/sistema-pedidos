import { NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST() {
  // Eliminar la cookie estableciendo un token vacío y expirando de inmediato
  const serialized = serialize("authToken", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    expires: new Date(0),
  });

  const response = NextResponse.json({ success: true });
  response.headers.set("Set-Cookie", serialized);

  return response;
}