import { createCheckoutSession } from "@/actions/createCheckoutSession";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const url = await createCheckoutSession(body.items, body.metadata);

    return NextResponse.json({ url });
  } catch (error) {
    console.error("Stripe session error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
