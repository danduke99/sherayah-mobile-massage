import { NextResponse } from "next/server";
import { supabaseServer } from "../../lib/supabaseServer";

export const dynamic = "force-dynamic";

type ReviewRow = {
  id: string;
  name: string;
  rating: number;
  comment: string;
  service_id: string | null;
  created_at: string;
  services: { title: string } | { title: string }[] | null;
};

export async function GET() {
  const { data, error } = await supabaseServer
    .from("reviews")
    .select("id, name, rating, comment, service_id, created_at, services(title)")
    .order("created_at", { ascending: false })
    .limit(50);

  if (error) {
    return NextResponse.json({ reviews: [] }, { status: 200 });
  }

  // Map to match your existing frontend shape (createdAt vs created_at)
  const reviews = ((data ?? []) as ReviewRow[]).map((r) => ({
    id: r.id,
    name: r.name,
    rating: r.rating,
    comment: r.comment,
    service:
      r.services && !Array.isArray(r.services)
        ? r.services.title
        : Array.isArray(r.services) && r.services[0]
          ? r.services[0].title
          : undefined,
    serviceId: r.service_id ?? undefined,
    createdAt: r.created_at,
  }));

  return NextResponse.json({ reviews }, { status: 200 });
}
