import { NextResponse } from "next/server";

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const company = String(body.company || "").trim();
    const message = String(body.message || "").trim();

    if (name.length < 2) {
      return NextResponse.json(
        { error: "Please enter your name." },
        { status: 400 },
      );
    }

    if (!isEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: "Please enter a short message (at least 10 characters)." },
        { status: 400 },
      );
    }

    // TODO: Replace with email delivery (SendGrid/SES/etc.) or CRM integration.
    console.log("Contact submission", {
      name,
      email,
      phone,
      company,
      message,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      message: "Thanks for reaching out. We’ll get back to you shortly.",
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request. Please try again." },
      { status: 400 },
    );
  }
}
