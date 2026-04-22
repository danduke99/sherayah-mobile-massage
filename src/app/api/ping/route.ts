import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
  {
    auth: { persistSession: false },
  }
);

export async function GET() {
  const startedAt = new Date().toISOString();

  const { error, count } = await supabase
    .from("services")
    .select("id", { count: "exact", head: true })
    .eq("is_active", true);

  if (error) {
    console.error("[ping] Supabase ping failed:", error.message);
    return NextResponse.json(
      {
        ok: false,
        startedAt,
        error: error.message,
      },
      { status: 500 }
    );
  }

  return NextResponse.json({
    ok: true,
    startedAt,
    touchedTable: "services",
    activeCount: count ?? 0,
  });
}