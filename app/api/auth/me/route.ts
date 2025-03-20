import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { parse } from "cookie";

const SECRET_KEY = process.env.JWT_SECRET || "clave_super_secreta";

export async function GET(req: Request) {
    try {
      const cookies = req.headers.get("cookie");
      if (!cookies) {
        return NextResponse.json({ error: "No autenticado" }, { status: 401 });
      }
  
      const parsedCookies = parse(cookies);
      const token = parsedCookies.authToken;
  
      if (!token) {
        return NextResponse.json({ error: "No autenticado" }, { status: 401 });
      }
  
      // Verificar el token
      const decoded = jwt.verify(token, SECRET_KEY) as { email: string };
  
      return NextResponse.json({ success: true, email: decoded.email });
    } catch (error) {
      return NextResponse.json({ error: "Token inválido" }, { status: 401 });
    }
  }