import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import fundezerLogo from "@/assets/fundezer-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FundEzer Donor Portal — Give with confidence" },
      { name: "description", content: "Support verified healthcare campaigns in Nigeria and follow the progress your giving makes possible." },
      { property: "og:title", content: "FundEzer Donor Portal — Give with confidence" },
      { property: "og:description", content: "Support verified healthcare campaigns and follow every milestone your giving helps reach." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Landing() {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    let active = true;
    supabase.auth.getSession().then(({ data }) => {
      if (!active) return;
      if (data.session) navigate({ to: "/portal", replace: true });
      else setChecking(false);
    });
    return () => {
      active = false;
    };
  }, [navigate]);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="flex h-[88px] items-center justify-between border-b border-border px-5 sm:px-10">
        <img src={fundezerLogo.url} alt="FundEzer" className="h-10 w-[112px] object-contain object-left" />
        <Button asChild size="sm" className="rounded-lg">
          <Link to="/auth">Sign in</Link>
        </Button>
      </header>
      <main className="mx-auto flex w-full max-w-[900px] flex-1 flex-col justify-center px-5 py-16 sm:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.13em] text-primary">Donor space</p>
        <h1 className="mt-3 text-[34px] font-semibold leading-tight tracking-[-0.03em] sm:text-[46px]">
          Your giving, connected to real treatment progress.
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
          Support verified healthcare campaigns, keep a clear record of every gift, and follow privacy-safe updates from the
          hospitals providing care.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="h-11 rounded-lg px-5">
            <Link to="/auth">
              {checking ? "Continue" : "Sign in to your donor space"} <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "Verified campaigns", copy: "Only campaigns approved for public sharing are shown." },
            { icon: Sparkles, title: "Real progress", copy: "Follow funding and treatment milestones as they happen." },
            { icon: HeartHandshake, title: "Private by design", copy: "Patient identity and your own details stay protected." },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-card p-5">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-brand-soft text-primary">
                <item.icon className="h-[17px] w-[17px]" />
              </div>
              <p className="mt-4 text-sm font-semibold">{item.title}</p>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">{item.copy}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
