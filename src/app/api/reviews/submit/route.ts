import { NextResponse } from "next/server";
import { supabaseServer } from "../../../lib/supabaseServer";

export const dynamic = "force-dynamic";

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function clampRating(n: number) {
  if (!Number.isFinite(n)) return 0;
  return Math.max(1, Math.min(5, Math.floor(n)));
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      name?: unknown;
      rating?: unknown;
      comment?: unknown;
      service?: unknown;
    };

    const name = isNonEmptyString(body.name) ? body.name.trim() : "";
    const comment = isNonEmptyString(body.comment) ? body.comment.trim() : "";
    const service = isNonEmptyString(body.service) ? body.service.trim() : null;
    const rating = clampRating(Number(body.rating));

    if (!name || name.length > 60) {
      return NextResponse.json(
        { error: "Name is required and must be 60 characters or fewer." },
        { status: 400 }
      );
    }

    if (!comment || comment.length < 10 || comment.length > 500) {
      return NextResponse.json(
        { error: "Comment must be between 10 and 500 characters." },
        { status: 400 }
      );
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json({ error: "Rating must be between 1 and 5." }, { status: 400 });
    }

    // Insert as unapproved by default (approved=false default)
    const { data, error } = await supabaseServer
      .from("reviews")
      .insert({
        name,
        rating,
        comment,
        service,
        // approved omitted intentionally
      })
      .select("id, name, rating, comment, service, approved, created_at")
      .single();

    if (error || !data) {
      return NextResponse.json({ error: "Unable to submit review." }, { status: 400 });
    }

    return NextResponse.json(
      {
        review: {
          id: data.id,
          name: data.name,
          rating: data.rating,
          comment: data.comment,
          service: data.service ?? undefined,
          approved: data.approved,
          createdAt: data.created_at,
        },
        message: "Submitted. Pending approval.",
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
