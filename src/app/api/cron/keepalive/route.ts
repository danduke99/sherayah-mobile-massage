import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  // Optional: protect this endpoint with a secret
  const secret = process.env.CRON_SECRET;
  if (secret) {
    const url = new URL(req.url);
    if (url.searchParams.get("secret") !== secret) {
      return NextResponse.json({ ok: false }, { status: 401 });
    }
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!, // server-only
    { auth: { persistSession: false } }
  );

  // Minimal “touch” query
  const { error } = await supabase
    .from("reviews")
    .select("id", { count: "exact", head: true })
    .limit(1);

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
