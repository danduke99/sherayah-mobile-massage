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

function asOptionalUuid(v: unknown): string | null {
  if (typeof v !== "string") return null;
  const value = v.trim();
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(value) ? value : null;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      name?: unknown;
      rating?: unknown;
      comment?: unknown;
      service?: unknown;
      serviceId?: unknown;
    };

    const name = isNonEmptyString(body.name) ? body.name.trim() : "";
    const comment = isNonEmptyString(body.comment) ? body.comment.trim() : "";
    const serviceId =
      asOptionalUuid(body.serviceId) ?? asOptionalUuid(body.service);
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

    // Avoid chaining `.select()` here because it can fail when RLS allows INSERT
    // but does not allow SELECT on the same rows.
    const { error } = await supabaseServer
      .from("reviews")
      .insert({
        name,
        rating,
        comment,
        service_id: serviceId,
        is_approved: true,
      });

    if (error) {
      console.error("Review submit error:", {
        message: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint,
      });
      const message =
        error.message ||
        error.details ||
        error.hint ||
        "Unable to submit review.";
      return NextResponse.json({ error: message }, { status: 400 });
    }

    return NextResponse.json(
      {
        message: "Submitted successfully.",
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
