"use client";

import { useEffect, useRef, useState } from "react";
import type { Service } from "@/app/lib/service-types";
import { fallbackServices } from "@/app/components/services/fallbackServices";

type ServicesResponse = {
  services?: Service[];
};

const PING_INTERVAL_MS = 5 * 60 * 1000; // 5 minutes

async function pingSupabase() {
  try {
    await fetch("/api/ping", { cache: "no-store" });
  } catch {
    // Silent — ping failures should never affect the UI
  }
}

async function fetchServices(): Promise<Service[]> {
  const res = await fetch("/api/services", { cache: "no-store" });
  if (!res.ok) throw new Error(`Services fetch failed: ${res.status}`);
  const data = (await res.json()) as ServicesResponse;
  return Array.isArray(data.services) && data.services.length > 0
    ? data.services
    : [];
}

export function useServices() {
  // Start with empty so the skeleton shows — hardcoded data is only a true last resort
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const pingIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function load() {
      setIsLoading(true);
      setIsError(false);

      // Wake Supabase before fetching
      await pingSupabase();

      try {
        const data = await fetchServices();
        if (!isMounted) return;

        if (data.length > 0) {
          // Supabase data wins — never overridden by hardcoded fallback
          setServices(data);
        } else {
          // Supabase returned empty — use hardcoded as true last resort
          console.warn("[useServices] Supabase returned no services, using fallback.");
          setServices(fallbackServices);
        }
      } catch (err) {
        if (!isMounted) return;
        console.error("[useServices] Failed to fetch services:", err);
        setIsError(true);
        // Only fall back to hardcoded on a network/parse error
        setServices(fallbackServices);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    load();

    // Keep Supabase alive every 5 minutes while the page is open
    pingIntervalRef.current = setInterval(pingSupabase, PING_INTERVAL_MS);

    return () => {
      isMounted = false;
      if (pingIntervalRef.current) clearInterval(pingIntervalRef.current);
    };
  }, []);

  return { services, isLoading, isError };
}
