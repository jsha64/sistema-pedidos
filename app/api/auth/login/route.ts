import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

const SECRET_KEY = process.env.JWT_SECRET || "clave_super_secreta";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Faltan datos" }, { status: 400 });
    }

    // Generar el token JWT
    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });

    // Configurar cookie segura
    const serialized = serialize("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
    });

    const response = NextResponse.json({ success: true, token });
    response.headers.set("Set-Cookie", serialized);

    return response;
  } catch (error) {
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}