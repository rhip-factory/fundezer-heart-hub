import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ArrowRight, LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import fundezerLogo from "@/assets/fundezer-logo.png.asset.json";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign in — FundEzer Donor Portal" },
      { name: "description", content: "Sign in to your FundEzer donor space to give, track donations and follow campaign updates." },
      { property: "og:title", content: "Sign in — FundEzer Donor Portal" },
      { property: "og:description", content: "Access your donor space to give and follow campaign progress." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/portal", replace: true });
    });
    const { data: sub } = supabase.auth.onAuthStateChange((event, session) => {
      if (session && (event === "SIGNED_IN" || event === "INITIAL_SESSION")) navigate({ to: "/portal", replace: true });
    });
    return () => sub.subscription.unsubscribe();
  }, [navigate]);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setBusy(true);
    try {
      if (mode === "signup") {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin, data: { full_name: fullName } },
        });
        if (error) throw error;
        if (!data.session) {
          toast.success("Check your email to confirm your account", { description: "We sent you a confirmation link." });
          return;
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "We couldn't sign you in");
    } finally {
      setBusy(false);
    }
  };

  const google = async () => {
    try {
      await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Google sign-in is unavailable");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-5 py-12">
      <div className="w-full max-w-[420px]">
        <img src={fundezerLogo.url} alt="FundEzer" className="mx-auto h-11 w-[124px] object-contain" />
        <div className="mt-8 rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h1 className="text-[22px] font-semibold tracking-tight">
            {mode === "signin" ? "Welcome back" : "Create your donor space"}
          </h1>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {mode === "signin"
              ? "Sign in to continue your giving journey."
              : "A few details and your giving history stays with you."}
          </p>

          <Button variant="outline" onClick={google} className="mt-6 h-11 w-full rounded-lg">
            Continue with Google
          </Button>
          <div className="my-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
            <span className="h-px flex-1 bg-border" /> or <span className="h-px flex-1 bg-border" />
          </div>

          <form onSubmit={submit} className="space-y-4">
            {mode === "signup" && (
              <label className="block space-y-2">
                <span className="text-xs font-semibold">Full name</span>
                <input
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  required
                  className="h-11 w-full rounded-lg border border-input bg-card px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
              </label>
            )}
            <label className="block space-y-2">
              <span className="text-xs font-semibold">Email address</span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="h-11 w-full rounded-lg border border-input bg-card px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </label>
            <label className="block space-y-2">
              <span className="text-xs font-semibold">Password</span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                minLength={6}
                className="h-11 w-full rounded-lg border border-input bg-card px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </label>
            <Button type="submit" disabled={busy} className="h-11 w-full rounded-lg">
              {mode === "signin" ? "Sign in" : "Create account"} <ArrowRight className="h-4 w-4" />
            </Button>
          </form>

          <button
            type="button"
            onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
            className="mt-5 w-full text-center text-xs font-semibold text-primary"
          >
            {mode === "signin" ? "New to FundEzer? Create a donor account" : "Already have an account? Sign in"}
          </button>
          <p className="mt-6 flex items-start gap-2 text-[11px] leading-5 text-muted-foreground">
            <LockKeyhole className="mt-0.5 h-3.5 w-3.5 shrink-0" /> Your email, phone and payment details are never shown
            publicly.
          </p>
        </div>
      </div>
    </div>
  );
}
