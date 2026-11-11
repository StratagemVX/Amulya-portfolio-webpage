import { describe, expect, it } from "vitest";
import { resolveSupabaseConfig } from "./security";

describe("resolveSupabaseConfig", () => {
  it("accepts valid HTTPS Supabase URL and publishable key", () => {
    expect(
      resolveSupabaseConfig({
        VITE_SUPABASE_URL: "https://example.supabase.co/",
        VITE_SUPABASE_PUBLISHABLE_KEY: "public-anon-key-placeholder",
      })
    ).toEqual({
      url: "https://example.supabase.co",
      key: "public-anon-key-placeholder",
    });
  });

  it("rejects missing or non-HTTP URLs", () => {
    expect(() => resolveSupabaseConfig({})).toThrow(/Missing Supabase configuration/);
    expect(() =>
      resolveSupabaseConfig({
        VITE_SUPABASE_URL: "ftp://example.supabase.co",
        VITE_SUPABASE_PUBLISHABLE_KEY: "key",
      })
    ).toThrow(/Unsupported Supabase URL protocol/);
  });
});
