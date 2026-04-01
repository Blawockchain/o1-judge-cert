import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, instagram, expertise, experience, motivation } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      // If Supabase isn't configured, still let user through (graceful degradation)
      console.warn("Supabase not configured — submission not stored.");
      return NextResponse.json({ ok: true });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase.from("submissions").insert([
      {
        name,
        email,
        instagram: instagram || null,
        expertise: expertise || null,
        experience: experience ? Number(experience) : null,
        motivation: motivation || null,
        submitted_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: "Failed to save submission." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Submit route error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
