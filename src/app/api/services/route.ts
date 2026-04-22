import { NextResponse } from "next/server";
import { supabaseServer } from "../../lib/supabaseServer";
import {
  DEFAULT_SERVICE_OPTIONS,
  SERVICE_OPTIONS_BY_SLUG,
} from "../../lib/service-options";
import type { Service } from "../../lib/service-types";

export const dynamic = "force-dynamic";

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

type ServiceRow = {
  id: string;
  title: string;
  slug: string | null;
  description: string | null;
  image_key: string | null;
};

type ServiceOptionRow = {
  service_id: string;
  label: string;
  duration_minutes: number;
  price: number | string;
  is_active: boolean;
};

export async function GET() {
  const { data: servicesData, error: servicesError } = await supabaseServer
    .from("services")
    .select("id, title, slug, description, image_key")
    .eq("is_active", true)
    .order("created_at", { ascending: true });

  if (servicesError) {
    console.error("[services] Fetch error:", servicesError.message);
    return NextResponse.json({ services: [] }, { status: 200 });
  }

  const rows = (servicesData ?? []) as ServiceRow[];
  const serviceIds = rows.map((s) => s.id);

  const { data: optionsData, error: optionsError } = serviceIds.length
    ? await supabaseServer
        .from("service_options")
        .select("service_id, label, duration_minutes, price, is_active")
        .in("service_id", serviceIds)
        .eq("is_active", true)
    : { data: [], error: null };

  if (optionsError) {
    console.error("[services] Options fetch error:", optionsError.message);
  }

  const optionsByServiceId = new Map<string, Service["options"]>();

  for (const option of (optionsData ?? []) as ServiceOptionRow[]) {
    const current = optionsByServiceId.get(option.service_id) ?? [];
    current.push({
      label: option.label,
      duration: option.duration_minutes as 60 | 90,
      price: Number(option.price),
    });
    optionsByServiceId.set(option.service_id, current);
  }

  const services: Service[] = rows.map((row) => {
    const slug = row.slug?.trim() || slugify(row.title);
    const optionsFromDb = (optionsByServiceId.get(row.id) ?? []).sort(
      (a, b) => a.duration - b.duration
    );

    return {
      id: row.id,
      slug,
      title: row.title,
      description: row.description ?? "",
      imageKey: row.image_key ?? "",
      options:
        optionsFromDb.length > 0
          ? optionsFromDb
          : SERVICE_OPTIONS_BY_SLUG[slug] ?? DEFAULT_SERVICE_OPTIONS,
    };
  });

  return NextResponse.json({ services }, { status: 200 });
}