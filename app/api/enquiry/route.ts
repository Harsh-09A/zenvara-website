import { NextResponse } from "next/server";

// Receives the contact form (POST /api/enquiry).
//
// TODO before launch: right now the enquiry is only printed in the server console.
// Send it to your email or CRM here, for example with Resend, Nodemailer or a Google Sheet.

export async function POST(request: Request) {
  const data = await request.json().catch(() => null);

  const name = typeof data?.name === "string" ? data.name.trim() : "";
  const phone = typeof data?.phone === "string" ? data.phone : "";

  if (name.length < 2) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (phone.replace(/\D/g, "").length < 10) {
    return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
  }

  console.log("New enquiry:", data);

  return NextResponse.json({ ok: true });
}
