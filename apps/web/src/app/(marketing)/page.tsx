import { HowItWorks } from "@/components/marketing/how-it-works";

// Hero Section Component
function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-24 text-center md:py-32">
      <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
        Open-source uptime monitoring and status pages
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Monitor your APIs and websites, get notified when they go down, and keep
        your users informed with beautiful status pages.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <a
          href="/app/sign-up"
          className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Get Started
        </a>
        <a
          href="https://github.com/openstatusHQ/openstatus"
          className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          View on GitHub
        </a>
      </div>
    </section>
  );
}

// Features Section Component
function Features() {
  const features = [
    {
      title: "Global Monitoring",
      description:
        "Monitor your services from multiple regions around the world to ensure global availability.",
    },
    {
      title: "Incident Management",
      description:
        "Track and manage incidents with automatic detection and manual reporting capabilities.",
    },
    {
      title: "Custom Status Pages",
      description:
        "Create beautiful, branded status pages that keep your users informed in real-time.",
    },
    {
      title: "API & Webhooks",
      description:
        "Integrate with your existing tools using our comprehensive API and webhook support.",
    },
    {
      title: "Team Collaboration",
      description:
        "Invite your team members and collaborate on incident response together.",
    },
    {
      title: "Open Source",
      description:
        "Self-host on your own infrastructure or use our managed cloud service.",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Everything you need
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Powerful features to monitor, alert, and communicate with your users
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border bg-card p-6 shadow-sm"
            >
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function MarketingPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <HowItWorks />
      <Features />
    </main>
  );
}
