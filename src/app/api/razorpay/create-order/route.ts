import { NextResponse } from "next/server";
import { createOrder } from "../../../../lib/razorpay";
import { toPaise } from "../../../../lib/utils";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { amount, name, email } = data as {
      amount: number;
      name?: string;
      email?: string;
    };

    if (!amount || typeof amount !== "number" || amount <= 0) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    const amountInPaise = toPaise(amount);
    const receipt = `rcpt_${Date.now()}`;
    const notes: Record<string, string> = {};
    if (name) notes.name = String(name);
    if (email) notes.email = String(email);

    const order = await createOrder({
      amount: amountInPaise,
      currency: "INR",
      receipt,
      notes,
    });

    const key =
      process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID;

    return NextResponse.json({ order, key });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Server error";
    console.error("Create order error", err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
