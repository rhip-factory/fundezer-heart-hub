import { createMiddleware } from "@tanstack/react-start";
import { supabase } from "./client";

// Attaches the signed-in donor's bearer token to every server function call so
// protected handlers can act as that user (RLS applies).
export const attachSupabaseAuth = createMiddleware({ type: "function" }).client(async ({ next }) => {
  const { data } = await supabase.auth.getSession();
  const token = data.session?.access_token;
  return next(token ? { headers: { Authorization: `Bearer ${token}` } } : {});
});
