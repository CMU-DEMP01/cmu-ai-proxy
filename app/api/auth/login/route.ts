import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;
const CLIENT_USER = process.env.CLIENT_USER!;
const CLIENT_PASS = process.env.CLIENT_PASS!;

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (username === CLIENT_USER && password === CLIENT_PASS) {
    const token = jwt.sign(
      { sub: username, scopes: ["ai_access"] },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    return NextResponse.json({ token });
  }

  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}
