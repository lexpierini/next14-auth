import AuthService from "@/modules/auth/services/authService";
import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  AuthService.destroySession()
  return NextResponse.redirect(new URL('/portal/login', req.url))
}