import { FiArrowRight, FiMail } from "react-icons/fi";
import { Button } from "@/components/ui";

export function CTASection() {
  return (
    <section className="section-xl border-t border-white/[0.06]">
      <div className="site-container">
        <div className="relative overflow-hidden border border-teal-border bg-ink-800/60">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(0,212,170,0.08) 0%, transparent 70%)",
            }}
          />
          <div className="absolute inset-0 grid-bg opacity-30" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center p-10 md:p-16 lg:p-20 xxxl:p-24 xl3:p-28 xl4:p-32">
            {/* Left — message */}
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 xl4:py-4 border border-teal-border bg-teal-subtle">
                <span className="w-1.5 h-1.5 xl4:w-2.5 xl4:h-2.5 bg-teal animate-pulse-slow" />
                <span className="text-teal text-xs xxxl:text-[14px] xl3:text-[16px] xl4:text-[17px] font-mono">
                  Open to collaboration
                </span>
              </div>

              <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] xxxl:text-[3.8rem] xl3:text-[4rem] xl4:text-[4.5rem] text-white font-bold leading-tight max-w-xl">
                Ready to build something{" "}
                <em className="text-gradient not-italic">exceptional?</em>
              </h2>

              <p className="text-slate text-base md:text-lg xxxl:text-xl xl3:text-[22px] xl4:text-[25px] max-w-lg xxxl:max-w-xl xl4:max-w-2xl leading-relaxed xl3:leading-[2rem] xl4:leading-[2.5rem]">
                Whether you have a fully scoped product or just an idea,
                we&apos;d love to hear about it. Let&apos;s build something
                worth remembering.
              </p>
            </div>

            {/* Right — actions */}
            <div className="flex flex-col items-center lg:items-start gap-5 xl4:gap-7 lg:border-l lg:border-white/[0.08] lg:pl-16">
              <Button
                href="/contact"
                size="lg"
                variant="primary"
                className="w-full lg:w-auto justify-center"
              >
                Start a Conversation{" "}
                <FiArrowRight className="text-[15px] xxxl:text-lg xl3:text-[19px] xl4:text-[20px]" />
              </Button>
              <a
                href="mailto:ifeanyihm@gmail.com"
                className="flex items-center gap-2 text-slate hover:text-white transition-colors duration-200 text-sm xxxl:text-[15px] xl3:text-[17px] xl4:text-[19px] font-mono"
              >
                <FiMail className="text-[15px] xxxl:text-lg xl3:text-[19px] xl4:text-[20px] text-teal/70" />
                ifeanyihm@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
