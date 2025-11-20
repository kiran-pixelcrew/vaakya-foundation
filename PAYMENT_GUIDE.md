# Razorpay Payment Integration Guide

## Overview

This project integrates Razorpay to accept payments/donations. The flow:

1. User visits `/payments` and enters amount + details.
2. Client requests `/api/razorpay/create-order` with amount.
3. Server creates an order via Razorpay SDK and returns `{ order, key }`.
4. Client loads Razorpay Checkout script and opens the modal.
5. On success, Razorpay returns payment identifiers to `handler`.
6. Client calls `/api/razorpay/verify` which validates signature with secret.
7. (Optional) Razorpay sends webhook to `/api/razorpay/webhook` for asynchronous events.

## Environment Variables

Configure in `.env`:

```
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_public
RAZORPAY_KEY_SECRET=secret_value
RAZORPAY_WEBHOOK_SECRET=optional_webhook_secret
```

`NEXT_PUBLIC_RAZORPAY_KEY_ID` is exposed to the client. Keep `RAZORPAY_KEY_SECRET` private.

## API Routes

- `POST /api/razorpay/create-order` Body: `{ amount: number, name?: string, email?: string }` (amount in INR major units). Returns `{ order, key }`.
- `POST /api/razorpay/verify` Body: `{ razorpay_order_id, razorpay_payment_id, razorpay_signature }`. Returns `{ valid: boolean }`.
- `POST /api/razorpay/webhook` Raw JSON body from Razorpay. Uses `x-razorpay-signature` header for verification.

## Adding More Logic

Persist orders and payments in a database by storing the order id + user details after creation and updating after verification/webhook events.

## Security Notes

- Never expose `RAZORPAY_KEY_SECRET` or webhook secret.
- Always verify signatures for both checkout and webhooks.
- Validate and sanitize user inputs on amount, name, email.

## Extending

- Email receipts after successful payment.
- Admin dashboard for payment history.
- Minimum/maximum amount enforcement.

## Troubleshooting

| Issue              | Suggestion                                                                    |
| ------------------ | ----------------------------------------------------------------------------- |
| SDK not loading    | Check network; ensure script URL correct.                                     |
| Verification fails | Confirm secrets match Razorpay dashboard; log expected vs received signature. |
| Webhook not firing | Ensure webhook URL and secret configured in Razorpay dashboard.               |

---

Generated integration scaffolding. Extend as needed for persistence and analytics.
