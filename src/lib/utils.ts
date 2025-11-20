import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Dynamically load an external script if not already present */
export async function loadScript(src: string): Promise<boolean> {
  if (typeof window === "undefined") return false;
  return new Promise((resolve) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${src}"]`
    );
    if (existing) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export function formatCurrency(
  amountInPaise: number,
  currency: string = "INR"
) {
  const amount = amountInPaise / 100;
  return new Intl.NumberFormat("en-IN", { style: "currency", currency }).format(
    amount
  );
}

export function toPaise(amount: number): number {
  return Math.round(amount * 100);
}
