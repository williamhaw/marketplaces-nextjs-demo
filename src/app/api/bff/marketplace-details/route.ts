import createClient from "@/lib/client/api/mock.client";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const client = await createClient();
  const body = await client.getMarketplaceDetails();
  return NextResponse.json(body);
}
