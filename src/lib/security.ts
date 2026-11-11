interface SupabaseEnv {
  VITE_SUPABASE_URL?: string;
  VITE_SUPABASE_PUBLISHABLE_KEY?: string;
  VITE_SUPABASE_ANON_KEY?: string;
}

export interface SupabaseConfig {
  url: string;
  key: string;
}

/**
 * Resolve and validate public client Supabase configuration so the app
 * fails fast instead of initializing against empty or malformed URLs.
 */
export function resolveSupabaseConfig(env: SupabaseEnv = import.meta.env): SupabaseConfig {
  const url = env.VITE_SUPABASE_URL?.trim();
  const key = (env.VITE_SUPABASE_PUBLISHABLE_KEY ?? env.VITE_SUPABASE_ANON_KEY)?.trim();

  if (!url || !key) {
    throw new Error(
      "Missing Supabase configuration. Set VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY in your environment."
    );
  }

  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    throw new Error(`Invalid VITE_SUPABASE_URL: "${url}".`);
  }

  if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
    throw new Error(`Unsupported Supabase URL protocol: "${parsed.protocol}".`);
  }

  return { url: parsed.toString().replace(/\/+$/, ""), key };
}
