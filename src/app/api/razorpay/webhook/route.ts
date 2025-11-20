import { NextResponse } from "next/server";
import { verifyWebhook } from "../../../../lib/razorpay";

interface RazorpayWebhookEvent {
  event?: string;
  payload?: {
    payment?: { entity?: { id?: string; [k: string]: unknown } };
    [k: string]: unknown;
  };
  [k: string]: unknown;
}

export async function POST(req: Request) {
  try {
    const signature = req.headers.get("x-razorpay-signature");
    // Raw body needed for signature verification
    const rawBody = await req.text();
    const verified = verifyWebhook(rawBody, signature);

    if (!verified) {
      return NextResponse.json(
        { received: false, error: "Invalid signature" },
        { status: 400 }
      );
    }

    // Parse event after verification
    const event = JSON.parse(rawBody) as RazorpayWebhookEvent;
    // Minimal handling; extend with DB persistence as needed
    console.log(
      "Razorpay webhook event:",
      event.event,
      event.payload?.payment?.entity?.id
    );

    return NextResponse.json({ received: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Server error";
    console.error("Webhook error", err);
    return NextResponse.json(
      { received: false, error: message },
      { status: 500 }
    );
  }
}
