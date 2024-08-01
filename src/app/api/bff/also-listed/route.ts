import createClient from "@/lib/client/api/mock.client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const client = await createClient();
  const body = await client.getAlsoListed();
  return NextResponse.json(body);
}
