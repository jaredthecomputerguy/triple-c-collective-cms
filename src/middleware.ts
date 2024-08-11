import { NextRequest, NextResponse } from "next/server";
import { env } from "./env";

const allowedOrigins =
  env.NODE_ENV === "development" ? ["*"] : ["www.triple-c-collective.com"];

const corsOptions = {
  "Access-Control-Allow-Methods": "GET",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export function middleware(request: NextRequest) {
  // Check the origin from the request
  const origin = request.headers.get("origin") ?? "";
  const isAllowedOrigin = allowedOrigins.includes(origin);

  // Handle simple requests
  const response = NextResponse.next();

  if (isAllowedOrigin) {
    response.headers.set("Access-Control-Allow-Origin", origin);
  }

  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}

export const config = {
  matcher: "/api/:path*",
};
