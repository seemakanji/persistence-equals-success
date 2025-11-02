"use client";
import { useState } from "react";
import { motion } from "framer-motion";


const IMAGE_URL = "/assets/seema-headshot-1200x1600.jpg";
const MAILING_LIST_ACTION = "#"; // replace later with your newsletter form action
const COVER_URL = "/assets/book-cover-v1.jpg";
const SHOW_PRAISE = false;


export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-sky-50 text-slate-800 text-[1.05rem] leading-relaxed">
      <Nav />
      <Hero />
      <CoverReveal />
      <AboutBook />
      <Timeline />
      <Author />
      {SHOW_PRAISE && <Praise />}
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#top" className="font-semibold text-lg tracking-tight">
          Persistence Equals Success
        </a>
        <button
          className="md:hidden rounded-xl px-3 py-2 border border-slate-300 shadow-sm"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          Menu
        </button>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a className="hover:text-rose-600" href="#about">About</a>
          <a className="hover:text-rose-600" href="#timeline">Journey</a>
          <a className="hover:text-rose-600" href="#author">Author</a>
          <a className="hover:text-rose-600" href="#contact">Contact</a>
        </nav>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200">
          <div className="mx-auto max-w-6xl px-4 py-4 grid gap-3 text-sm">
            <a className="hover:text-rose-600" href="#about" onClick={() => setOpen(false)}>About</a>
            <a className="hover:text-rose-600" href="#timeline" onClick={() => setOpen(false)}>Journey</a>
            <a className="hover:text-rose-600" href="#author" onClick={() => setOpen(false)}>Author</a>
            <a className="hover:text-rose-600" href="#contact" onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 items-center gap-10">
        <div>
          <p className="uppercase tracking-widest text-xs text-rose-600 font-semibold">New Book</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-extrabold leading-tight">
            Persistence Equals Success
          </h1>
          <p className="mt-2 text-lg text-slate-600 italic">My Journey to Motherhood</p>
          <p className="mt-6 text-slate-700">
            A courageous memoir about resisting expectations, choosing education and autonomy,
            and the long road through infertility, surrogacy and adoption, to a family formed by love through persistence and strength.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#about" className="rounded-2xl bg-rose-600 text-white px-5 py-3 shadow-md hover:shadow-lg">Read about the book</a>
            <a href="#contact" className="rounded-2xl border border-rose-600 px-5 py-3 text-rose-700 hover:bg-rose-50">Join the list</a>
          </div>
        </div>

        {/* ROUND PORTRAIT */}
        <div className="flex justify-center">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl ring-2 ring-rose-200">
            <img
              src={IMAGE_URL}
              alt="Author headshot of Seema Kanji"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CoverReveal() {
  return (
    <section className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-2 items-center gap-10">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold">Cover Reveal</h2>
          <p className="mt-4 text-slate-700">
            Here’s the first look at the memoir cover for <em>Persistence Equals Success (My Journey to Motherhood)</em>.
            This artwork mirrors the heart of the book: a mother and child silhouette rising from challenges into hope.
          </p>
          <p className="mt-3 text-slate-700">
            Sign up below to get launch updates, early chapters, and event invites.
          </p>
        </div>

        {/* Scaled, rounded cover image */}
        <div className="order-1 md:order-2 flex justify-center">
          <motion.img
            src={COVER_URL}
            alt="Persistence Equals Success book cover"
            className="w-64 md:w-72 lg:w-80 h-auto rounded-xl shadow-2xl ring-1 ring-slate-200 object-contain bg-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          />
        </div>
      </div>
    </section>
  );
}



function AboutBook() {
  return (
    <section id="about" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold">About the Book</h2>
        <p className="mt-4 text-slate-700 leading-relaxed">
          <em>Persistence Equals Success (My Journey to Motherhood)</em> traces Seema Kanji’s path
          from a strict Indian upbringing in Canada, where expectations of an arranged marriage felt
          inescapable, to forging her own future through education and the law. Disowned in 1992 for
          refusing an arranged marriage, Seema worked at a bank, studied for the LSAT, and earned
          admission to both UVic and UBC—ultimately attending UBC Law School in 1998. What followed
          was marriage to a wonderful man then an eight-year struggle with infertility, four failed IVF cycles, and finally success through
          surrogacy and adoption—until joy arrived in 2014 with the birth of her daughter in Anand,
          India, and again in 2018 with the adoption of her son from a Casablanca orphanage.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <InfoCard title="Category" body="Memoir · Women’s Stories · Immigration & Family · Reproductive Journeys" />
          <InfoCard title="Ideal Readers" body="Mothers by IVF, adoption, or surrogacy; infertile couples; resilience seekers; women in law and business." />
          <InfoCard title="Status" body="Manuscript in progress. Sign up for updates, early chapters, and launch events." />
        </div>
      </div>
    </section>
  );
}

function InfoCard({ title, body }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <p className="text-sm uppercase tracking-wide text-slate-500">{title}</p>
      <p className="mt-2 font-medium text-slate-800">{body}</p>
    </div>
  );
}

function Timeline() {
  const events = [
    { year: "Childhood", text: "Raised in a strict home; witnessed persistent domestic violence; expected to accept an arranged marriage." },
    { year: "1992", text: "Disowned for choosing independence after university instead of an arranged marriage." },
    { year: "1998", text: "Began studies at UBC Law after working at a bank and preparing for the LSAT." },
    { year: "2006", text: "Married; began a long season of fertility treatments and dashed hopes." },
    { year: "2013–2014", text: "Surrogacy in Anand, India; daughter Ayana born January 2014." },
    { year: "2015", text: "Second surrogacy attempt ends in miscarriage in June 2015." },
    { year: "2017", text: "Decide as a family to grow no further—only to receive an unexpected call months later." },
    { year: "2018", text: "Travel to Morocco; adopt Soufiane from Casablanca and bring him home in July 2018." },
  ];
  return (
    <section id="timeline" className="scroll-mt-16 bg-white/70">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold">Journey Highlights</h2>
        <ol className="mt-8 relative border-s border-slate-300 pl-6">
          {events.map((e, i) => (
            <li key={i} className="mb-8">
              <div className="absolute -left-2 mt-1 h-4 w-4 rounded-full bg-rose-600" aria-hidden />
              <p className="text-sm text-slate-500">{e.year}</p>
              <p className="mt-1 text-lg font-medium">{e.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Author() {
  return (
    <section id="author" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold">About Seema Kanji</h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            Seema is a lawyer, licensed insurance agent, and now author based in Vancouver, Canada. She brings legal
            rigor and deep empathy to her storytelling, illuminating how persistence—through cultural
            pressure, infertility, international surrogacy, and foreign adoption—shaped a resilient family and a
            purposeful career.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <Fact label="Profession" value="Lawyer · Insurance Agent · Author" />
            <Fact label="Education" value="UBC Law (2001)" />
            <Fact label="Location" value="Canada" />
          </div>
        </div>

        {/* ROUND PORTRAIT IN AUTHOR SECTION */}
        <div className="md:order-first">
          <div className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl ring-2 ring-rose-200 mx-auto">
            <img
              src={IMAGE_URL}
              alt="Seema Kanji headshot"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Fact({ label, value }) {
  return (
    <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200 shadow-sm">
      <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-1 font-medium">{value}</p>
    </div>
  );
}

function Praise() {
  return (
    <section id="praise" className="scroll-mt-16 bg-gradient-to-r from-rose-50 to-sky-50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold">Advance Praise (coming soon)</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <blockquote key={i} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-slate-700">“Add your early reader or media quote here.”</p>
              <footer className="mt-3 text-sm text-slate-500">— Name, Title</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="scroll-mt-16">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h2 className="text-3xl font-bold">Get updates & launch invites</h2>
        <p className="mt-3 text-slate-700">Join Seema’s list for chapter previews, behind-the-scenes notes, and events.</p>
        <form
          className="mt-8 grid sm:grid-cols-[1fr_auto] gap-3 justify-center"
          action={MAILING_LIST_ACTION}
          method="post"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Your email address"
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
          />
          <button type="submit" className="rounded-2xl bg-rose-600 text-white px-6 py-3 font-medium shadow-md hover:shadow-lg">
            Notify Me
          </button>
        </form>
        <div className="mt-10 grid md:grid-cols-3 gap-6 text-left">
          <ContactCard title="Speaking & Media" body="Invite Seema for interviews, speaking engagements, podcasts, or panels on law, resilience, and routes to motherhood." />
          <ContactCard title="Rights & Permissions" body="Inquiries about publishing, excerpts, and foreign rights." />
          <ContactCard title="Book Clubs" body="Request a discussion guide or virtual Q&A with your club." />
        </div>
      </div>
    </section>
  );
}

function ContactCard({ title, body }) {
  return (
    <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-slate-700 text-sm">{body}</p>
      <a href="mailto:seema@persistencesuccess.com" className="mt-4 inline-block text-rose-700 hover:underline">
        Email Seema
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <p className="font-semibold">Persistence Equals Success</p>
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Seema Kanji. All rights reserved.</p>
        </div>
        <div className="md:text-right text-sm text-slate-500">
          <a className="hover:text-rose-700" href="#about">About</a>
          <span className="mx-2">·</span>
          <a className="hover:text-rose-700" href="#author">Author</a>
          <span className="mx-2">·</span>
          <a className="hover:text-rose-700" href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
