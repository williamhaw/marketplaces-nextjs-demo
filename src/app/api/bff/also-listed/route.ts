import createClient from "@/lib/client/api/mock.client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  const client = await createClient();

  if (!id) return NextResponse.json({});

  const body = await client.getAlsoListed(id);
  return NextResponse.json(body);
}
