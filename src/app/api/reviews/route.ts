import { NextResponse } from "next/server";
import { supabaseServer } from "../../lib/supabaseServer";

export const dynamic = "force-dynamic";

export async function GET() {
  const { data, error } = await supabaseServer
    .from("reviews")
    .select("id, name, rating, comment, service, created_at")
    .order("created_at", { ascending: false })
    .limit(50);

  if (error) {
    return NextResponse.json({ reviews: [] }, { status: 200 });
  }

  // Map to match your existing frontend shape (createdAt vs created_at)
  const reviews = (data ?? []).map((r) => ({
    id: r.id,
    name: r.name,
    rating: r.rating,
    comment: r.comment,
    service: r.service ?? undefined,
    createdAt: r.created_at,
  }));

  return NextResponse.json({ reviews }, { status: 200 });
}
