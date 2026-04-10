import {
  Dumbbell,
  Target,
  ClipboardList,
  Flame,
  Phone,
  ChevronRight,
  Clock,
  Users,
  Award,
} from "lucide-react";
import { ContactForm as ContactFormClient } from "@/components/contact-form";

/* ─── NAVBAR ─── */
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Dumbbell className="w-6 h-6 text-accent" />
          <span className="font-bold text-lg tracking-tight uppercase">
            Mateo<span className="text-accent">.</span>Fitness
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted">
          <a href="#o-mnie" className="hover:text-foreground transition-colors">
            O mnie
          </a>
          <a
            href="#jak-dzialamy"
            className="hover:text-foreground transition-colors"
          >
            Jak działamy
          </a>
          <a href="#efekty" className="hover:text-foreground transition-colors">
            Efekty
          </a>
          <a
            href="#kontakt"
            className="bg-accent text-background font-semibold px-5 py-2 rounded hover:bg-accent-dark transition-colors"
          >
            Bezpłatna konsultacja
          </a>
        </div>
        <a
          href="#kontakt"
          className="md:hidden bg-accent text-background font-semibold px-4 py-2 text-sm rounded"
        >
          Bezpłatna konsultacja
        </a>
      </div>
    </nav>
  );
}

/* ─── HERO (SEKCJA 1) ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Accent glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-surface-light border border-white/10 rounded-full px-4 py-1.5 text-sm text-muted mb-8">
          <Flame className="w-4 h-4 text-accent" />
          Trener personalny &mdash; Warszawa
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.95] tracking-tight mb-6">
          Przestań zgadywać
          <br />
          <span className="text-accent">zacznij działać</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted max-w-xl mx-auto mb-10 leading-relaxed">
          Dołącz do 500+ osób, które zmieniły swoje ciało i nawyki. Bez
          cudownych diet, bez ściemy &mdash; tylko plan, który działa.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#kontakt"
            className="cta-pulse bg-accent text-background font-bold text-lg px-8 py-4 rounded flex items-center gap-2 hover:bg-accent-dark transition-colors"
          >
            Bezpłatna konsultacja
            <ChevronRight className="w-5 h-5" />
          </a>
          <a
            href="#o-mnie"
            className="border border-white/15 text-foreground font-medium px-8 py-4 rounded hover:bg-white/5 transition-colors"
          >
            Dowiedz się więcej
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex items-center justify-center gap-8 mt-14 text-sm text-muted">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-accent" />
            500+ klientów
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-accent" />
            8 lat doświadczenia
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-accent" />
            90 dni do efektów
          </div>
        </div>
      </div>

    </section>
  );
}

/* ─── O MNIE (SEKCJA 2) ─── */
function About() {
  return (
    <section id="o-mnie" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="relative bg-surface rounded-lg overflow-hidden border border-white/5">
            <img
              src="/mateo-trener.png"
              alt="Mateo — trener personalny"
              className="w-full h-auto object-cover"
            />
            {/* Accent corner */}
            <div className="absolute bottom-0 left-0 w-24 h-1 bg-accent" />
            <div className="absolute bottom-0 left-0 w-1 h-24 bg-accent" />
          </div>

          {/* Text */}
          <div>
            <div className="accent-line mb-6" />
            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight mb-6">
              Nie jestem od pilnowania
              <br />
              <span className="text-accent">
                żebyś &quot;pocisnął&quot;
              </span>
            </h2>
            <div className="space-y-5 text-muted leading-relaxed text-lg">
              <p>
                Jestem od tego, żebyś wiedział <strong className="text-foreground">co robisz, po co</strong> i dlaczego
                to działa.
              </p>
              <p>
                Od 8 lat pracuję z ludźmi, którzy próbowali &quot;sami&quot; &mdash;
                apki, YT, diety z Instagrama &mdash; i dalej stoją w miejscu.
              </p>
              <p>
                Problem nigdy nie był w braku motywacji.{" "}
                <strong className="text-foreground">
                  Problemem był brak konkretnego planu.
                </strong>
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-surface-light border-2 border-background flex items-center justify-center text-xs text-muted"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted">
                <span className="text-foreground font-semibold">500+</span>{" "}
                osób już mi zaufało
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="#kontakt"
            className="cta-pulse inline-flex items-center gap-2 bg-accent text-background font-bold text-lg px-8 py-4 rounded hover:bg-accent-dark transition-colors"
          >
            Bezpłatna konsultacja
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── DLA KOGO (SEKCJA 3) ─── */
function ForWhom() {
  const personas = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Chcesz schudnąć",
      desc: "Ale każda dieta kończy się efektem jo-jo po 2 tygodniach. Potrzebujesz systemu, nie kolejnej diety.",
    },
    {
      icon: <Dumbbell className="w-6 h-6" />,
      title: "Ćwiczysz, ale bez efektów",
      desc: "Chodzisz na siłownię, robisz \u201Ecoś\u201D \u2014 ale nie wiesz, czy to działa. Czas na plan, który naprawdę pracuje.",
    },
    {
      icon: <Flame className="w-6 h-6" />,
      title: "Zaczynasz od zera",
      desc: "Nie wiesz od czego zacząć, czujesz się zagubiony na siłowni. Poprowadzę Cię krok po kroku.",
    },
    {
      icon: <ClipboardList className="w-6 h-6" />,
      title: "Brakuje Ci systematyczności",
      desc: "Zaczynasz z energią, po 2 tygodniach odpuszczasz. Pomogę Ci zbudować nawyk, który zostanie.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
            Dla kogo <span className="text-accent">to jest</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Jeśli coś z tego brzmi znajomo &mdash; jesteś we właściwym miejscu.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {personas.map((p, i) => (
            <div key={i} className="glow-card rounded-lg p-8">
              <div className="w-12 h-12 bg-accent/10 rounded flex items-center justify-center text-accent mb-5">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-muted leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#kontakt"
            className="cta-pulse inline-flex items-center gap-2 bg-accent text-background font-bold text-lg px-8 py-4 rounded hover:bg-accent-dark transition-colors"
          >
            Bezpłatna konsultacja
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── JAK DZIAŁAMY (SEKCJA 4) ─── */
function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Rozmawiamy",
      desc: "Na bezpłatnej konsultacji poznaję Twój cel, historię treningową, tryb życia i ograniczenia. Bez zobowiązań.",
      icon: <Phone className="w-5 h-5" />,
    },
    {
      num: "02",
      title: "Planuję",
      desc: 'Dostajesz program treningowy i wytyczne żywieniowe skrojone pod siebie, nie pod "przeciętnego klienta".',
      icon: <ClipboardList className="w-5 h-5" />,
    },
    {
      num: "03",
      title: "Działamy",
      desc: "Trenujemy razem. Kontroluję postępy, dostosowuję plan i jestem dostępny między sesjami.",
      icon: <Flame className="w-5 h-5" />,
    },
  ];

  return (
    <section id="jak-dzialamy" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
            Jak to <span className="text-accent">wygląda</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            3 proste kroki od pierwszego kontaktu do realnych efektów.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-white/10 to-transparent z-0" />
              )}

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl font-black text-accent/20">
                    {s.num}
                  </span>
                  <div className="w-10 h-10 bg-accent rounded flex items-center justify-center text-background">
                    {s.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#kontakt"
            className="cta-pulse inline-flex items-center gap-2 bg-accent text-background font-bold text-lg px-8 py-4 rounded hover:bg-accent-dark transition-colors"
          >
            Bezpłatna konsultacja
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── SOCIAL PROOF (SEKCJA 5) ─── */
function SocialProof() {
  const stats = [
    { value: "500+", label: "Zadowolonych klientów", icon: <Users className="w-6 h-6" /> },
    { value: "8", label: "Lat doświadczenia", icon: <Award className="w-6 h-6" /> },
    { value: "90", label: "Dni do realnych efektów", icon: <Clock className="w-6 h-6" /> },
  ];

  const screenshots = [
    { src: "/opinia-1.png", alt: "Opinia klientki o różnorodności ćwiczeń i widocznych zmianach sylwetki" },
    { src: "/opinia-2.png", alt: "Opinia klienta trenującego 10 miesięcy — pełne wsparcie i stały progres" },
    { src: "/opinia-3.png", alt: "Opinia klientki — wiedza, determinacja i nastawienie na najwyższym poziomie" },
    { src: "/opinia-4.png", alt: "Opinia klientki — czysta przyjemność, motywacja i coraz lepsze wyniki" },
    { src: "/opinia-5.jpg", alt: "Opinia klientki — Mateo motywacją do oderwania się od biurka, widoczne efekty i poprawa kondycji" },
    { src: "/opinia-6.png", alt: "Opinia klientki — spersonalizowane podejście, więcej energii, wyniki w krótkim czasie" },
    { src: "/opinia-7.png", alt: "Opinia klienta — poprawa w treningach biegowych i lepsze wyniki w półmaratonach" },
    { src: "/opinia-8.png", alt: "Opinia klienta — trening medyczny, ustąpił ból, mobilność wróciła, profesjonalizm z luzem" },
    { src: "/opinia-9.png", alt: "Opinia klientki — fajne odczucie po treningu, tam gdzie trzeba to mile boli" },
    { src: "/opinia-10.png", alt: "Opinia klientki — ogromna wiedza, zaangażowanie, dostosowanie treningów do celów i możliwości" },
  ];

  return (
    <section id="efekty" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
            Co mówią <span className="text-accent">moi klienci</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Prawdziwe wiadomości od prawdziwych ludzi &mdash; bez filtra.
          </p>
        </div>

        {/* Screenshot testimonials — masonry columns */}
        <div className="columns-1 sm:columns-2 gap-6 space-y-6 mb-20">
          {screenshots.map((s, i) => (
            <div
              key={i}
              className="glow-card rounded-lg p-3 break-inside-avoid"
            >
              <img
                src={s.src}
                alt={s.alt}
                className="rounded-md w-full h-auto"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex sm:flex-col items-center sm:text-center gap-4 sm:gap-0 p-5 sm:p-8 rounded-lg border border-white/5 bg-background"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0 sm:mx-auto sm:mb-4">
                {s.icon}
              </div>
              <div className="flex items-baseline gap-2 sm:block">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-accent sm:mb-2">
                  {s.value}
                </div>
                <div className="text-muted text-sm uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#kontakt"
            className="cta-pulse inline-flex items-center gap-2 bg-accent text-background font-bold text-lg px-8 py-4 rounded hover:bg-accent-dark transition-colors"
          >
            Bezpłatna konsultacja
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── FORMULARZ (SEKCJA 6) ─── */
function ContactSection() {
  return (
    <section id="kontakt" className="py-24 lg:py-32">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
            Zarezerwuj bezpłatną{" "}
            <span className="text-accent">konsultację</span>
          </h2>
          <p className="text-muted text-lg">
            Wypełnij formularz &mdash; odezwę się w ciągu 24h, żeby ustalić termin.
          </p>
        </div>
        <ContactFormClient />
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Dumbbell className="w-5 h-5 text-accent" />
          <span className="font-bold uppercase tracking-tight">
            Mateo<span className="text-accent">.</span>Fitness
          </span>
        </div>
        <p className="text-muted text-sm">
          © {new Date().getFullYear()} Mateo Fitness. Wszystkie prawa
          zastrzeżone.
        </p>
      </div>
    </footer>
  );
}

/* ─── PAGE ─── */
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ForWhom />
      <HowItWorks />
      <SocialProof />
      <ContactSection />
      <Footer />
    </>
  );
}
