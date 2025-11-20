import { NextResponse } from "next/server";
import { verifySignature } from "../../../../lib/razorpay";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      body as {
        razorpay_order_id: string;
        razorpay_payment_id: string;
        razorpay_signature: string;
      };

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { valid: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    const valid = verifySignature({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });
    return NextResponse.json({ valid });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Server error";
    console.error("Verify error", err);
    return NextResponse.json({ valid: false, error: message }, { status: 500 });
  }
}
