import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Server-only client using service role (bypasses RLS).
// Use ONLY in server routes (e.g., /api/*).
export const supabaseServer = createClient(url, serviceRoleKey, {
  auth: { persistSession: false },
});
