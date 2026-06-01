import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, budget, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // ================================================================
    // OPTION 1: Email via Nodemailer / SendGrid / Resend
    // Uncomment and configure your preferred email service:
    //
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'SAAN Digital Solutions <noreply@saandigital.com>',
    //   to: ['hello@saandigital.com'],
    //   subject: `New Lead: ${name} — ${service}`,
    //   html: `<h2>New Contact Form Submission</h2>
    //          <p><strong>Name:</strong> ${name}</p>
    //          <p><strong>Email:</strong> ${email}</p>
    //          <p><strong>Phone:</strong> ${phone}</p>
    //          <p><strong>Service:</strong> ${service}</p>
    //          <p><strong>Budget:</strong> ${budget}</p>
    //          <p><strong>Message:</strong> ${message}</p>`
    // });
    //
    // ================================================================
    // OPTION 2: Save to database (e.g., Supabase, MongoDB, PostgreSQL)
    //
    // import { createClient } from '@supabase/supabase-js';
    // const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);
    // await supabase.from('leads').insert([{ name, email, phone, service, budget, message, created_at: new Date() }]);
    //
    // ================================================================
    // OPTION 3: Send to Slack webhook
    //
    // await fetch(process.env.SLACK_WEBHOOK_URL!, {
    //   method: 'POST',
    //   body: JSON.stringify({ text: `🚀 New lead from ${name} (${email}): ${service} — ${budget}` })
    // });
    // ================================================================

    // For now, log to console (replace with real integration above)
    console.log("New contact submission:", { name, email, phone, service, budget, message, timestamp: new Date().toISOString() });

    return NextResponse.json({ success: true, message: "Message received! We'll be in touch within 2 hours." });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to process submission" }, { status: 500 });
  }
}
