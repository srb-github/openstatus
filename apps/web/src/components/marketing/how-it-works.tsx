import { ArrowRight, Bell, Globe, Monitor } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Add your monitors",
    description:
      "Connect your websites and APIs in seconds. Set your check frequency and regions.",
    icon: Monitor,
  },
  {
    number: 2,
    title: "Get notified instantly",
    description:
      "Receive alerts via email, Slack, or SMS the moment downtime is detected.",
    icon: Bell,
  },
  {
    number: 3,
    title: "Share your status",
    description:
      "Publish a beautiful public status page to keep your users informed.",
    icon: Globe,
  },
];

export function HowItWorks() {
  return (
    <section className="not-prose -mx-4 my-12 w-[calc(100%+2rem)] bg-muted/50 py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-4">
        {/* Header */}
        <div className="mb-10 flex flex-col items-center text-center md:mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            How it works
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Get started in minutes with our simple three-step setup
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {/* Connecting line for desktop */}
          <div
            className="absolute left-[16.67%] right-[16.67%] top-[4.5rem] hidden border-t-2 border-dashed border-border md:block"
            aria-hidden="true"
          />

          {steps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col items-center">
              {/* Card */}
              <div className="flex w-full flex-col items-center rounded-xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                {/* Number badge */}
                <div className="absolute -top-3 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-4 mt-2 flex h-14 w-14 items-center justify-center rounded-lg bg-muted">
                  <step.icon className="h-7 w-7 text-foreground" />
                </div>

                {/* Title */}
                <h3 className="mb-2 text-center text-lg font-semibold">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-center text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>

              {/* Arrow connector for mobile */}
              {index < steps.length - 1 && (
                <div className="my-4 flex items-center justify-center md:hidden">
                  <ArrowRight className="h-5 w-5 rotate-90 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
