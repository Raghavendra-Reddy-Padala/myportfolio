"use client"

import type React from "react"

import Head from "next/head"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  ExternalLink,
  Send,
  Code,
  Award,
  ChevronRight,
  Menu,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Accent presets (Industrial Yellow default)
const ACCENTS = [
  { name: "Industrial Yellow", value: "#FFD400" },
  { name: "Neon Green", value: "#39FF14" },
  { name: "Electric Blue", value: "#00FFFF" },
  { name: "Hot Pink", value: "#FF1493" },
] as const

function useAccent() {
  type AccentColor = typeof ACCENTS[number]["value"]
  const [accent, setAccent] = useState<AccentColor>(ACCENTS[0].value)
  useEffect(() => {
    const initial = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim()
    const next = (initial as AccentColor) || ACCENTS[0].value
    document.documentElement.style.setProperty("--accent", next)
    setAccent(next)
  }, [])
  useEffect(() => {
    document.documentElement.style.setProperty("--accent", accent)
  }, [accent])
  return { accent, setAccent }
}

function AccentToggle({ defaultLabel = "ACCENT" }: { defaultLabel?: string }) {
  const { accent, setAccent } = useAccent()
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-black tracking-widest">{defaultLabel}:</span>
      {ACCENTS.map((a) => (
        <button
          key={a.value}
          type="button"
          aria-label={`Switch accent to ${a.name}`}
          className={cn(
            "h-6 w-6 border-[3px] border-black shadow-[3px_3px_0_0_#000]",
            "focus:outline-none focus-visible:ring-4 focus-visible:ring-black",
            "hover:scale-110 transition-transform",
            "rounded-none",
          )}
          style={{ backgroundColor: a.value, outlineOffset: "2px" }}
          onClick={() => setAccent(a.value)}
          data-active={accent === a.value}
          title={a.name}
        />
      ))}
    </div>
  )
}

function SocialLink({
  href = "#",
  label = "Social",
  icon: Icon,
}: {
  href?: string
  label?: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className={cn(
        "group inline-flex items-center justify-center h-12 w-12 border-[4px] border-black bg-white text-black",
        "hover:bg-black hover:text-white transition-all duration-150",
        "shadow-[6px_6px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0_0_#000]",
        "hover:ring-4 hover:ring-[var(--accent)] ring-offset-2 ring-offset-white rounded-none",
        "hover:rotate-3 hover:scale-105 hover:animate-jolt",
      )}
    >
      <Icon className="h-6 w-6" />
    </a>
  )
}

function SectionHeader({
  id = "",
  title = "SECTION",
  kicker = "",
}: {
  id?: string
  title?: string
  kicker?: string
}) {
  return (
    <header id={id} className="mb-8">
      {!!kicker && (
        <div
          className="inline-block px-3 py-1 border-[4px] border-black bg-[var(--accent)] text-black font-black uppercase tracking-[0.2em] text-xs rounded-none shadow-[4px_4px_0_0_#000]"
          aria-hidden="true"
        >
          {kicker}
        </div>
      )}
      <div
        className="mt-3 h-3 w-28 bg-[var(--accent)] border-[4px] border-black shadow-[4px_4px_0_0_#000] rounded-none"
        aria-hidden="true"
      />
      <h2
        className={cn(
          "mt-4 font-black uppercase",
          "text-[clamp(2rem,6vw,3.5rem)] leading-[0.95] tracking-[-0.02em]",
          "border-b-[5px] border-black pb-2",
        )}
      >
        {title}
      </h2>
    </header>
  )
}

function ProjectCard({
  title = "PROJECT TITLE",
  description = "Concise project description that states the outcome and impact.",
  bullets = ["Key feature A", "Key feature B", "Result C"],
  tech = ["TechOne", "TechTwo"],
  demoHref = "#",
  githubHref = "#",
}: {
  title?: string
  description?: string
  bullets?: string[]
  tech?: string[]
  demoHref?: string
  githubHref?: string
}) {
  return (
    <div
      className={cn(
        "group relative p-5 md:p-6 bg-white border-[5px] border-black",
        "shadow-[10px_10px_0_0_#000] rounded-none",
        "transition-transform duration-150 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[14px_14px_0_0_#000]",
        "hover:skew-y-[0.5deg]",
      )}
    >
      <div
        className="absolute -top-3 -left-3 -right-3 h-6 bg-[var(--accent)] border-[4px] border-black shadow-[5px_5px_0_0_#000] rounded-none"
        aria-hidden="true"
      />
      <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">{title}</h3>
      <p className="mt-2 text-base md:text-lg leading-snug">{description}</p>
      {bullets?.length ? (
        <ul className="mt-3 space-y-1">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-[var(--accent)] mt-[2px]" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {tech?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <span
              key={i}
              className={cn(
                "rounded-none border-[3px] border-black bg-white text-black shadow-[3px_3px_0_0_#000] font-bold text-xs px-2 py-1",
                "transition-transform hover:-translate-y-[2px] hover:shadow-[5px_5px_0_0_#000] hover:bg-[var(--accent)]",
              )}
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}
      <div className="mt-5 flex items-center gap-3">
        {demoHref ? (
          <a
            href={demoHref}
            target="_blank"
            rel="noreferrer noopener"
            className="group/btn inline-flex items-center gap-2 px-4 py-2 border-[4px] border-black bg-[var(--accent)] text-black font-black uppercase tracking-wider rounded-none shadow-[6px_6px_0_0_#000] hover:bg-black hover:text-white transition"
          >
            <ExternalLink className="h-5 w-5 transition-transform group-hover/btn:translate-x-0.5" />
            Demo
          </a>
        ) : null}
        {githubHref ? (
          <a
            href={githubHref}
            target="_blank"
            rel="noreferrer noopener"
            className="group/btn inline-flex items-center gap-2 px-4 py-2 border-[4px] border-black bg-white text-black font-black uppercase tracking-wider rounded-none shadow-[6px_6px_0_0_#000] hover:bg-black hover:text-white transition"
          >
            <Github className="h-5 w-5 transition-transform group-hover/btn:-translate-y-0.5" />
            Code
          </a>
        ) : null}
      </div>
    </div>
  )
}

// Small skill tile with icon
function SkillTile({ label, src }: { label: string; src: string }) {
  const [err, setErr] = useState(false)
  return (
    <div
      className={cn(
        "group flex items-center gap-3 p-4 border-[5px] border-black bg-white rounded-none",
        "shadow-[8px_8px_0_0_#000] transition-transform hover:-translate-y-[3px] hover:shadow-[10px_10px_0_0_#000]",
      )}
    >
      {err ? (
        <div className="h-10 w-10 grid place-items-center border-[3px] border-black bg-[var(--accent)] font-black">
          {label?.[0] || "?"}
        </div>
      ) : (
        <img
          src={src || "/placeholder.svg"}
          alt={`${label} logo`}
          className="h-10 w-10 object-contain border-[3px] border-black bg-white"
          onError={() => setErr(true)}
        />
      )}
      <span className="font-black uppercase tracking-tight">{label}</span>
    </div>
  )
}

export default function Page() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [error, setError] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

   useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
      document.documentElement.classList.add("menu-open")
    } else {
      document.body.style.overflow = ""
      document.documentElement.classList.remove("menu-open")
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = ""
      document.documentElement.classList.remove("menu-open")
    }
  }, [mobileOpen])

  // Measure header height for anchor offset and mobile drawer
  const headerRef = useRef<HTMLElement>(null)
  const [headerH, setHeaderH] = useState(64)
  useEffect(() => {
    const update = () => {
      const h = headerRef.current?.offsetHeight || 64
      setHeaderH(h)
      document.documentElement.style.setProperty("--header-h", `${h}px`)
    }
    update()
    const ro = new ResizeObserver(update)
    if (headerRef.current) ro.observe(headerRef.current)
    window.addEventListener("resize", update)
    return () => {
      ro.disconnect()
      window.removeEventListener("resize", update)
    }
  }, [])

  const navLinks: Array<{ label: string; href: string }> = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Certs", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ]

  const handleNavClick = useCallback((href: string) => {
    const el = document.querySelector(href)
    if (el) {
      ;(el as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setMobileOpen(false)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")
    setError(null)
    const fd = new FormData(e.currentTarget)
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      message: String(fd.get("message") || ""),
    }
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error("Failed to send")
      setStatus("success")
      e.currentTarget.reset()
    } catch (err: any) {
      setStatus("error")
      setError(err?.message || "Something went wrong")
    }
  }

  const nowYear = useMemo(() => new Date().getFullYear(), [])

  // Skills data (icons in /public/icons)
  const skillsPrimary = [
    { label: "Python", src: "/icons/python.png" },
    { label: "C", src: "/icons/c.png" },
    { label: "Java", src: "/icons/java.png" },
    { label: "Flutter", src: "/icons/flutter.png" },
    { label: "Dart", src: "/icons/dart.png" },
    { label: "Firebase", src: "/icons/firebase.png" },
    { label: "MongoDB", src: "/icons/mongodb.png" },
    { label: "Express", src: "/icons/express.png" },
    { label: "Node.js", src: "/icons/nodejs.png" },
    { label: "React.js", src: "/icons/react.png" },
    { label: "Git", src: "/icons/git.png" },
    { label: "GitHub", src: "/icons/github.png" },
  ]
  const skillsTools = [
    { label: "VS Code", src: "/icons/vscode.png" },
    { label: "GitLab", src: "/icons/gitlab.png" },
    { label: "Material UI", src: "/icons/materialui.png" },
  ]

  // External links
  const LINKEDIN_URL = "https://www.linkedin.com/in/raghavendra-reddy-28bbb6256/"
  const GITHUB_URL = "https://github.com/Raghavendra-Reddy-Padala"

  return (
    <main className="min-h-screen bg-transparent text-black scroll-smooth overflow-x-hidden">
      <Head>
        <title>{`Raghavendra Reddy Padala — Brutalist Portfolio`}</title>
        <meta name="description" content="Neobrutalist developer portfolio." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700;900&family=IBM+Plex+Mono:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Header: sticky (no spacer needed) */}
     <header
        ref={headerRef}
        className={cn(
          "sticky top-0 bg-[#f5f5f5]/95 backdrop-blur border-b-[5px] border-black",
          "shadow-[0_6px_0_0_#000]",
        )}
        style={{ zIndex: 300 }} // Lower than mobile menu
      >
        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-8">
          <div className="flex items-center justify-between py-3 gap-2">
            <button
              onClick={() => handleNavClick("#hero")}
              className="inline-flex items-baseline gap-3 group"
              aria-label="Go to Hero"
            >
              <span
                className={cn(
                  "px-2 py-1 border-[4px] border-black bg-[var(--accent)] rounded-none",
                  "font-black tracking-widest text-xs shadow-[4px_4px_0_0_#000]",
                )}
              >
                DEV
              </span>
            </button>

            <nav className="hidden md:flex items-center gap-3 md:gap-4">
              {navLinks.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => handleNavClick(href)}
                  className={cn(
                    "px-3 py-2 border-[4px] border-black bg-white rounded-none group",
                    "font-black uppercase text-xs tracking-widest",
                    "shadow-[4px_4px_0_0_#000] transition",
                    "hover:bg-[var(--accent)] hover:text-black hover:-translate-y-[2px] hover:shadow-[6px_6px_0_0_#000] hover:animate-jolt",
                  )}
                >
                  <span className="inline-block">{label}</span>
                </button>
              ))}
              <div className="hidden lg:block">
                <AccentToggle />
              </div>
            </nav>

            {/* Mobile controls */}
               <div className="flex items-center gap-2 md:hidden">
              <AccentToggle />
              <button
                className={cn(
                  "inline-flex items-center gap-2 px-3 py-2 border-[4px] border-black rounded-none",
                  "font-black uppercase text-xs tracking-widest shadow-[4px_4px_0_0_#000]",
                  mobileOpen 
                    ? "bg-[var(--accent)] text-black shadow-[2px_2px_0_0_#000] translate-x-[2px] translate-y-[2px]" 
                    : "bg-white text-black hover:bg-[var(--accent)]",
                  "hover:animate-jolt transition-all relative"
                )}
                style={{ zIndex: mobileOpen ? 10001 : 301 }}
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
                onClick={() => setMobileOpen((s) => !s)}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                <span className="hidden xs:inline">Menu</span>
              </button>
            </div>
          </div>
        </div>

        {/* FIXED Mobile Nav Overlay - All menu items visible without scrolling */}
     {/* Mobile Nav Overlay - All menu items visible */}
{mobileOpen && (
  <div
    id="mobile-nav" 
    className="fixed inset-0 bg-white border-t-[5px] border-black shadow-[0_10px_0_0_#000] flex flex-col"
    style={{
      paddingTop: headerH,
      zIndex: 9999
    }}
    aria-modal="true"
    role="dialog"
  >
    {/* White Container Wrapper */}
    <div className="flex-1 p-3 flex flex-col justify-start bg-white">
      {/* Inner White Container with Border */}
      <div className="bg-white border-[3px] border-black shadow-[5px_5px_0_0_#000] rounded-none p-4 w-full max-w-sm mx-auto">
        
        {/* Navigation Links - Compact Grid */}
        <div className="grid grid-cols-1 gap-2 w-full">
          {navLinks.map(({ label, href }, index) => (
            <button
              key={href}
              onClick={() => handleNavClick(href)}
              className={cn(
                "w-full text-center px-3 py-2.5 border-[3px] border-black bg-white rounded-none",
                "font-black uppercase tracking-wide text-sm shadow-[3px_3px_0_0_#000]",
                "hover:bg-[var(--accent)] hover:animate-jolt transition-all duration-200",
                "active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0_0_#000]",
                "flex items-center justify-between group"
              )}
            >
              <span className="flex-1">{label}</span>
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          ))}
        </div>
        
        {/* Social Links - Compact */}
        <div className="mt-4 pt-3 border-t-[2px] border-black w-full">
          <h3 className="font-black uppercase tracking-widest text-xs mb-2 text-center">Connect</h3>
          <div className="flex justify-center gap-2">
            <SocialLink href={LINKEDIN_URL} label="LinkedIn" icon={Linkedin} />
            <SocialLink href={GITHUB_URL} label="GitHub" icon={Github} />
          </div>
        </div>
        
        {/* Contact Info - Compact */}
        <div className="mt-3 p-2 border-[2px] border-black bg-[#f5f5f5] rounded-none w-full">
          <p className="font-mono text-xs text-center">
            <a 
              href="mailto:raghavareddy696969@gmail.com"
              className="underline decoration-[var(--accent)] decoration-2"
            >
              raghavareddy696969@gmail.com
            </a>
          </p>
        </div>
        
      </div>
    </div>
  </div>
)}
      </header>

      {/* HERO with visible grid + diagonal overlay that reaches the header */}
      <section id="hero" className="relative border-b-[5px] border-black">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="h-full w-full opacity-[0.12] bg-[linear-gradient(0deg,#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:20px_20px]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 opacity-[0.10] mix-blend-multiply bg-[repeating-linear-gradient(135deg,transparent_0,transparent_12px,var(--accent)_12px,var(--accent)_16px)]"
            aria-hidden="true"
          />
        </div>

        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-8 py-12 sm:py-14 md:py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-black uppercase leading-[0.95] tracking-[-0.02em] text-[clamp(2.4rem,8vw,5rem)]">
              Raghavendra Reddy
              <br />
              Padala
            </h1>

            <p className="mt-4 text-base sm:text-lg md:text-xl max-w-prose mx-auto">
              Mobile and AI-focused developer building{" "}
              <span className="font-bold underline decoration-[var(--accent)] decoration-[6px] underline-offset-[6px]">
                high-performance applications
              </span>{" "}
              with{" "}
              <span className="font-bold underline decoration-[var(--accent)] decoration-[6px] underline-offset-[6px]">
                Flutter, React, and cloud services
              </span>
              . I turn ideas into reliable, scalable products—shipping fast while maintaining clean architecture and
              robust engineering practices.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick("#contact")
                }}
                className={cn(
                  "group inline-flex items-center gap-3 px-6 py-3 border-[5px] border-black bg-[var(--accent)] text-black",
                  "font-black uppercase tracking-widest rounded-none",
                  "shadow-[8px_8px_0_0_#000] hover:bg-black hover:text-white transition hover:animate-jolt",
                )}
              >
                <Mail className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
                Contact Me
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick("#projects")
                }}
                className={cn(
                  "group inline-flex items-center gap-3 px-6 py-3 border-[5px] border-black bg-white text-black",
                  "font-black uppercase tracking-widest rounded-none",
                  "shadow-[8px_8px_0_0_#000] hover:bg-black hover:text-white transition hover:animate-jolt",
                )}
              >
                <Code className="h-5 w-5 transition-transform group-hover:rotate-3" />
                View Work
              </a>
            </div>

            <div className="mt-6 flex items-center justify-center gap-3">
              <SocialLink href={LINKEDIN_URL} label="LinkedIn" icon={Linkedin} />
              <SocialLink href={GITHUB_URL} label="GitHub" icon={Github} />
            </div>

            <div className="mt-4">
              <span className="font-mono text-sm">
                Email:{" "}
                <a
                  className="underline decoration-[var(--accent)] decoration-4 underline-offset-4 hover:text-white hover:bg-black"
                  href="mailto:raghavareddy696969@gmail.com"
                >
                  raghavareddy696969@gmail.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto max-w-7xl px-3 sm:px-4 md:px-8 py-12 md:py-16 scroll-mt-28 md:scroll-mt-32"
      >
        <SectionHeader title="About Me" kicker="PROFILE" />
        <div className="grid md:grid-cols-2 gap-6 md:gap-12">
          {/* Portrait card */}
          <div className="relative group">
            <div
              className="pointer-events-none absolute -top-6 -right-6 h-14 w-14 sm:h-16 sm:w-16 md:h-24 md:w-24 bg-white border-[5px] border-black shadow-[10px_10px_0_0_#000] rotate-[10deg] rounded-none transition-transform duration-200 ease-out group-hover:translate-x-3 group-hover:translate-y-3"
              aria-hidden="true"
            />
            <div className="relative z-10 p-4 border-[5px] border-black bg-white shadow-[8px_8px_0_0_#000] rounded-none transition-transform duration-200 ease-out group-hover:-translate-y-[6px] group-hover:-translate-x-[2px] group-hover:shadow-[12px_12px_0_0_#000]">
              <img
                src="/images/my.png"
                alt="Portrait photo"
                className="w-full aspect-square object-cover border-[5px] border-black rounded-none shadow-[6px_6px_0_0_#000] transition-transform duration-200 ease-out group-hover:-translate-y-[2px]"
              />
              <div className="mt-3 inline-block px-2 py-1 border-[4px] border-black bg-[var(--accent)] font-black uppercase tracking-widest text-xs rounded-none shadow-[4px_4px_0_0_#000] transition-transform duration-200 ease-out group-hover:-translate-y-[2px]">
                Raghavendra Reddy Padala
              </div>
            </div>
            <div
              className="pointer-events-none absolute -bottom-6 -left-6 h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 bg-[var(--accent)] border-[5px] border-black shadow-[10px_10px_0_0_#000] rotate-[-8deg] rounded-none transition-transform duration-200 ease-out group-hover:translate-y-3 group-hover:-translate-x-3"
              aria-hidden="true"
            />
          </div>

          {/* Bio card */}
          <div>
            <div className="p-5 border-[5px] border-black bg-white shadow-[8px_8px_0_0_#000] rounded-none transition-transform hover:-translate-y-[3px] hover:shadow-[10px_10px_0_0_#000]">
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-2">Bio</h3>
              <p className="leading-relaxed text-base sm:text-lg">
                I am a developer specializing in mobile app development (Flutter) and applied ML. I design and deliver
                production-grade experiences with a brutalist visual language, focusing on performance, reliability, and
                maintainable code. Currently, I'm building AI-powered features, real-time systems, and scalable backends
                that turn concepts into shipped products.
              </p>
              <div className="mt-4">
                <AccentToggle defaultLabel="Accent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE (no bg on the section so global pattern shows) */}
      <section
        id="experience"
        className="mx-auto max-w-7xl px-3 sm:px-4 md:px-8 py-12 md:py-16 border-y-[5px] border-black scroll-mt-28 md:scroll-mt-32"
      >
        <SectionHeader title="Experience" kicker="TRACK RECORD" />
        <div className="grid gap-6">
          <article className="p-5 border-[5px] border-black bg-[#f5f5f5] shadow-[8px_8px_0_0_#000] rounded-none transition-transform hover:-translate-y-[3px] hover:shadow-[10px_10px_0_0_#000]">
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
              App Development Intern — Coffecodes Agency
            </h3>
            <div className="font-mono text-sm mt-1">Feb 2025 - Present</div>
            <ul className="mt-3 space-y-2">
              <li className="flex gap-2">
                <ChevronRight className="h-5 w-5 text-[var(--accent)]" />
                Built scalable mobile features and flows in Flutter aligned to client requirements
              </li>
              <li className="flex gap-2">
                <ChevronRight className="h-5 w-5 text-[var(--accent)]" />
                Collaborated across design and backend to deliver robust, testable experiences
              </li>
            </ul>
          </article>

          <article className="p-5 border-[5px] border-black bg-[#f5f5f5] shadow-[8px_8px_0_0_#000] rounded-none transition-transform hover:-translate-y-[3px] hover:shadow-[10px_10px_0_0_#000]">
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
              Technical Lead & Cultural Head — EETA
            </h3>
            <div className="font-mono text-sm mt-1">Nov 2024 - Present</div>
            <ul className="mt-3 space-y-2">
              <li className="flex gap-2">
                <ChevronRight className="h-5 w-5 text-[var(--accent)]" />
                Developed and maintained the club's website and event flows
              </li>
              <li className="flex gap-2">
                <ChevronRight className="h-5 w-5 text-[var(--accent)]" />
                Managed cultural and technical events end-to-end
              </li>
            </ul>
          </article>

          <article className="p-5 border-[5px] border-black bg-[#f5f5f5] shadow-[8px_8px_0_0_#000] rounded-none transition-transform hover:-translate-y-[3px] hover:shadow-[10px_10px_0_0_#000]">
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
              Mobile App Developer Intern — TechMocha
            </h3>
            <div className="font-mono text-sm mt-1">2024</div>
            <ul className="mt-3 space-y-2">
              <li className="flex gap-2">
                <ChevronRight className="h-5 w-5 text-[var(--accent)]" />
                Led a small team and owned client deliverables end‑to‑end
              </li>
              <li className="flex gap-2">
                <ChevronRight className="h-5 w-5 text-[var(--accent)]" />
                Architected scalable Flutter modules and state management
              </li>
              <li className="flex gap-2">
                <ChevronRight className="h-5 w-5 text-[var(--accent)]" />
                Coordinated directly with clients on scope, iterations, and QA
              </li>
              <li className="flex gap-2">
                <ChevronRight className="h-5 w-5 text-[var(--accent)]" />
                Integrated multiple APIs and streamlined release processes
              </li>
            </ul>
          </article>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="mx-auto max-w-7xl px-3 sm:px-4 md:px-8 py-12 md:py-16 scroll-mt-28 md:scroll-mt-32"
      >
        <SectionHeader title="Skills" kicker="STACK" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skillsPrimary.map((s) => (
            <SkillTile key={s.label} label={s.label} src={s.src} />
          ))}
        </div>

        <h3 className="mt-10 text-xl font-black uppercase tracking-tight">Tools</h3>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skillsTools.map((s) => (
            <SkillTile key={s.label} label={s.label} src={s.src} />
          ))}
        </div>

        <div className="mt-6 text-sm font-mono">Other: Data Structures & Algorithms, State Management</div>
      </section>

      {/* PROJECTS (no bg so pattern shows) */}
      <section
        id="projects"
        className="mx-auto max-w-7xl px-3 sm:px-4 md:px-8 py-12 md:py-16 border-y-[5px] border-black scroll-mt-28 md:scroll-mt-32"
      >
        <SectionHeader title="Projects" kicker="FEATURED" />
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <ProjectCard
            title="Kaizen — AI Health Monitoring Platform"
            description="An AI-powered app that turns daily inputs into actionable health insights with engaging, gamified experiences."
            bullets={[
              "Health prediction using ML algorithms",
              "Vision-based analysis to identify healthy habits",
              "Gamification mechanics to increase adherence",
            ]}
            tech={["Flutter", "Firebase", "ML", "Vision"]}
            demoHref="https://kaizen-vr.web.app/"
            githubHref="https://github.com/Raghavendra-Reddy-Padala"
          />

          <ProjectCard
            title="EETA — College Club Management App"
            description="End-to-end club operations: registrations, events, past events, certificates, and an admin panel for CRUD."
            bullets={[
              "Admin tools for events, members, and announcements",
              "Simple one-click certificate generation",
              "Fast, clean, and usable UI for students and admins",
            ]}
            tech={["Flutter", "Firebase"]}
            demoHref="https://eeta-club.web.app/"
            githubHref="https://github.com/Raghavendra-Reddy-Padala?tab=repositories"
          />

          <ProjectCard
            title="YARRO — Referral Deals App"
            description="A consumer app (internship project at Coffecodes) for discovering and redeeming referral codes similar to Magicpin/CashKaro."
            bullets={[
              "Implemented core front-end flows with senior dev guidance",
              "Integrated multiple APIs and built resilient error states",
              "Code access subject to company policy (available upon request)",
            ]}
            tech={["Flutter", "GetX", "Node.js", "Express", "PostgreSQL"]}
            demoHref="#"
            githubHref="#"
          />

          <ProjectCard
            title="Mjollionr — Cycle Rental App"
            description="A production app for a Hyderabad-based cycle rental company handling rentals, payments, and customer operations."
            bullets={[
              "Built user flows for rentals and payments",
              "Reliable state management and API error handling",
              "Code restricted by policy; store listing available",
            ]}
            tech={["Flutter", "GetX", "Node.js", "Express", "PostgreSQL"]}
            demoHref="https://play.google.com/store/apps/details?id=com.projectRcode"
            githubHref="#"
          />

          <ProjectCard
            title="SocioSphere — Full-Stack Social Platform"
            description="A social platform to share, engage, and chat with a performant backend and clean front-end."
            bullets={[
              "Real-time engagement and chat features",
              "RESTful APIs with secure backend services",
              "Production build and hosting pipeline",
            ]}
            tech={["React", "REST APIs", "Spring Boot", "MongoDB"]}
            demoHref="https://shareandengagehub.vercel.app/"
            githubHref="https://github.com/Raghavendra-Reddy-Padala/shareandengagehub"
          />

          <ProjectCard
            title="Atomic Flow — Habit Builder & Tracker"
            description="An all-in-one habit and productivity app inspired by Atomic Habits—habits, Pomodoro, rooms, todos, and notes."
            bullets={[
              "Daily habit tracking with reminders",
              "Pomodoro timer, social rooms, and progress insights",
              "Clean state management and modular architecture",
            ]}
            tech={["Flutter", "Dart", "Riverpod", "Firebase"]}
            demoHref="https://habtrackoo.web.app/"
            githubHref="https://github.com/Raghavendra-Reddy-Padala/AtomicFlow"
          />

          <ProjectCard
            title="T7 — Real-time Chat App"
            description="A feature-complete chat application with modern UI and reliable messaging."
            bullets={[
              "Authentication, chat rooms, and typing indicators",
              "Image/file sharing via MERN stack APIs",
              "Responsive and accessible UI patterns",
            ]}
            tech={["Flutter", "MERN", "Realtime"]}
            demoHref="https://team07-chatapp.web.app/"
            githubHref="https://github.com/Raghavendra-Reddy-Padala/chatapp"
          />

          <ProjectCard
            title="Practice Apps — WeatherNow, FitFlow, TaskMaster"
            description="A collection of small apps built during my learning journey, focusing on fundamentals and UI polish."
            bullets={["Hands-on exploration of APIs, state, and UI", "Iterative improvements and refactors"]}
            tech={["Flutter", "React", "REST APIs"]}
            demoHref="https://github.com/Raghavendra-Reddy-Padala?tab=repositories"
            githubHref="https://github.com/Raghavendra-Reddy-Padala?tab=repositories"
          />
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section
        id="certifications"
        className="mx-auto max-w-7xl px-3 sm:px-4 md:px-8 py-12 md:py-16 scroll-mt-28 md:scroll-mt-32"
      >
        <SectionHeader title="Certifications" kicker="CRED" />
        <ul className="grid md:grid-cols-2 gap-6">
          {[
            ["Flutter Development — Simplilearn", "2025"],
            ["DSA with JAVA — Codedamn", "2024"],
            ["Joy of Computing with Python — NPTEL", "2023"],
            ["Machine Learning Fundamentals — Camplin", "2023"],
          ].map(([title, year]) => (
            <li
              key={title}
              className="p-5 border-[5px] border-black bg-white shadow-[8px_8px_0_0_#000] rounded-none flex items-center justify-between gap-4 transition-transform hover:-translate-y-[3px] hover:shadow-[10px_10px_0_0_#000]"
            >
              <div className="flex items-center gap-3">
                <Award className="h-7 w-7 text-[var(--accent)]" />
                <span className="font-black uppercase tracking-tight">{title}</span>
              </div>
              <span className="font-mono font-bold">{year}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto max-w-7xl px-3 sm:px-4 md:px-8 py-12 md:py-16 scroll-mt-28 md:scroll-mt-32"
      >
        <SectionHeader title="Contact" kicker="GET IN TOUCH" />
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="font-black uppercase tracking-widest text-sm">
                Name
              </label>
              <Input
                id="name"
                name="name"
                required
                placeholder="Your Name"
                className="rounded-none border-[5px] border-black bg-white h-12 shadow-[6px_6px_0_0_#000] focus-visible:ring-0 focus-visible:outline focus-visible:outline-4 focus-visible:outline-[var(--accent)]"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="font-black uppercase tracking-widest text-sm">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="rounded-none border-[5px] border-black bg-white h-12 shadow-[6px_6px_0_0_#000] focus-visible:ring-0 focus-visible:outline focus-visible:outline-4 focus-visible:outline-[var(--accent)]"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="font-black uppercase tracking-widest text-sm">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Tell me about your project..."
                className="rounded-none border-[5px] border-black bg-white min-h-[140px] shadow-[6px_6px_0_0_#000] focus-visible:ring-0 focus-visible:outline focus-visible:outline-4 focus-visible:outline-[var(--accent)]"
              />
            </div>
            <Button
              type="submit"
              disabled={status === "loading"}
              className={cn(
                "group rounded-none border-[5px] border-black bg-[var(--accent)] text-black hover:bg-black hover:text-white",
                "font-black uppercase tracking-widest h-12 px-6 shadow-[8px_8px_0_0_#000] hover:animate-jolt",
              )}
            >
              {status === "loading" ? (
                <>
                  <span className="mr-2 inline-block h-4 w-4 border-[3px] border-black border-t-transparent animate-spin rounded-none" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2 transition-transform group-hover:translate-x-0.5" />
                  Send Message
                </>
              )}
            </Button>
            {status === "success" && (
              <div className="p-3 border-[4px] border-black bg-[var(--accent)] shadow-[4px_4px_0_0_#000] font-black uppercase rounded-none">
                Message sent! I will get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="p-3 border-[4px] border-black bg-white shadow-[4px_4px_0_0_#000] font-black uppercase rounded-none">
                Failed to send: {error}
              </div>
            )}
          </form>

          <div className="p-5 border-[5px] border-black bg-white shadow-[8px_8px_0_0_#000] rounded-none space-y-4 transition-transform hover:-translate-y-[3px] hover:shadow-[10px_10px_0_0_#000]">
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight">Contact Info</h3>
            <div className="space-y-2 font-mono">
              <div>
                Email:{" "}
                <a
                  className="underline decoration-[var(--accent)] decoration-4 underline-offset-4"
                  href="mailto:raghavareddy696969@gmail.com"
                >
                  raghavareddy696969@gmail.com
                </a>
              </div>
              <div>
                LinkedIn:{" "}
                <a
                  className="underline decoration-[var(--accent)] decoration-4 underline-offset-4"
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/raghavendra-reddy-28bbb6256
                </a>
              </div>
              <div>
                GitHub:{" "}
                <a
                  className="underline decoration-[var(--accent)] decoration-4 underline-offset-4"
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/Raghavendra-Reddy-Padala
                </a>
              </div>
            </div>
            <img
              src="/brutalist-divider.png"
              alt="Decorative brutalist divider"
              className="w-full border-[5px] border-black rounded-none"
            />
          </div>
        </div>
      </section>

      {/* FOOTER (transparent so pattern shows) */}
      <footer className="border-t-[5px] border-black">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-8 py-8">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            <div>
              <div className="inline-block px-2 py-1 border-[4px] border-black bg-[var(--accent)] rounded-none shadow-[4px_4px_0_0_#000] font-black text-xs uppercase tracking-widest">
                Available
              </div>
              <p className="mt-3 font-mono text-sm">
                Building scalable apps with Flutter, React, and AI. Open to internships and freelance projects.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <SocialLink href={LINKEDIN_URL} label="LinkedIn" icon={Linkedin} />
              <SocialLink href={GITHUB_URL} label="GitHub" icon={Github} />
            </div>
            <div className="md:text-right">
              <div className="font-mono text-sm">© {nowYear} Raghavendra Reddy Padala.</div>
            </div>
          </div>
        </div>
      </footer>

      {/* Global brutalist styles and site-wide background */}
      <style jsx global>{`
        :root {
          --accent: #ffd400; /* Industrial Yellow as default */
        }
        html,
        body,
        main {
          font-family: "Roboto Condensed", ui-sans-serif, system-ui, -apple-system, Segoe UI, Arial, "Apple Color Emoji",
            "Segoe UI Emoji";
        }
        body {
          overflow-x: hidden;
          background-color: #f5f5f5;
        }

        /* Site-wide pattern (visible on every section now that main is transparent) */
        body::before {
          content: "";
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background-image:
            linear-gradient(#00000014 1px, transparent 1px),
            linear-gradient(90deg, #00000014 1px, transparent 1px),
            repeating-linear-gradient(135deg, transparent 0, transparent 12px, var(--accent) 12px, var(--accent) 16px);
          background-size: 20px 20px, 20px 20px, auto;
          opacity: 0.05; /* lighter so it doesn't overpower content */
        }

        html.menu-open body::before {
          opacity: 0; /* hide pattern when the mobile menu is open */
        }

        /* Keep all content above the pattern */
        main,
        header,
        section,
        footer {
          position: relative;
          z-index: 1;
        }

        /* Anchor offset for sticky header */
        section[id] {
          scroll-margin-top: calc(var(--header-h, 64px) + 16px) !important;
        }

        .hover\\:animate-jolt:hover {
          animation: jolt 140ms ease-in-out 1;
        }
        .hover\\:animate-wiggle:hover {
          animation: wiggle 180ms ease-in-out 1;
        }
        @keyframes jolt {
          0% {
            transform: translate(0, 0);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          70% {
            transform: translate(2px, 2px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
        @keyframes wiggle {
          0% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(0.6deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </main>
  )
}