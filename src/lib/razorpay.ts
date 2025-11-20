import Razorpay from "razorpay";
import crypto from "crypto";

let razorpayInstance: Razorpay | null = null;

export function getRazorpay() {
  if (razorpayInstance) return razorpayInstance;
  const key_id =
    process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID; // allow fallback
  const key_secret = process.env.RAZORPAY_KEY_SECRET;
  if (!key_id || !key_secret) {
    throw new Error(
      "Razorpay environment variables not set: RAZORPAY_KEY_ID & RAZORPAY_KEY_SECRET"
    );
  }
  razorpayInstance = new Razorpay({ key_id, key_secret });
  return razorpayInstance;
}

export interface CreatedOrder {
  id: string;
  amount: number; // in paise
  currency: string;
  receipt?: string;
  status: string;
}

export interface CreateOrderInput {
  amount: number; // in paise
  currency?: string; // default INR
  receipt?: string;
  notes?: Record<string, string>;
}

export async function createOrder({
  amount,
  currency = "INR",
  receipt,
  notes,
}: CreateOrderInput) {
  const razorpay = getRazorpay();
  if (!amount || amount < 100) {
    throw new Error("Minimum amount is 100 paise (₹1.00)");
  }
  const order = await razorpay.orders.create({
    amount,
    currency,
    receipt,
    notes,
  });
  return order as CreatedOrder;
}

export interface VerifyPayload {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

export function verifySignature({
  razorpay_order_id,
  razorpay_payment_id,
  razorpay_signature,
}: VerifyPayload): boolean {
  const secret = process.env.RAZORPAY_KEY_SECRET;
  if (!secret) return false;
  const expected = crypto
    .createHmac("sha256", secret)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");
  return expected === razorpay_signature;
}

/** Verify webhook body using X-Razorpay-Signature header */
export function verifyWebhook(body: string, signature: string | null): boolean {
  if (!signature) return false;
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  if (!secret) return false;
  const expected = crypto
    .createHmac("sha256", secret)
    .update(body)
    .digest("hex");
  return expected === signature;
}
