export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 text-center">

      {/* Hero Header */}
      <h1 className="text-5xl font-bold text-red-700 mb-6">
        Redheaded Stepchild Tech
      </h1>

{/* Why RST Section */}
<section className="max-w-5xl mx-auto px-6 py-20 text-center">

  <h2 className="text-3xl font-bold text-gray-800 mb-6">
    Why RST?
  </h2>

  <p className="text-lg text-gray-700 leading-relaxed mb-10">
    Because most systems today are built backwards — complicated first, people second.
    Redheaded Stepchild Tech flips that. We build tools that treat people with dignity,
    respect their time, and actually solve the problems they face. No corporate layers.
    No confusing interfaces. No “click here to continue” nightmares.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">

    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-red-700 mb-3">Dignity‑First Design</h3>
      <p className="text-gray-700">
        Every system starts with one question: “How do we make this easier for the person
        using it?” Not the company. Not the bureaucracy. The person.
      </p>
    </div>

    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-red-700 mb-3">Replace Clunky Systems</h3>
      <p className="text-gray-700">
        We rebuild outdated tools — donation platforms, purchasing systems, community
        exchanges — into clean, modern, Montana‑built solutions.
      </p>
    </div>

    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-red-700 mb-3">Small Team, Big Impact</h3>
      <p className="text-gray-700">
        We’re not a corporation. We’re a small shop that moves fast, listens closely, and
        builds things that actually work in the real world.
      </p>
    </div>

    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-red-700 mb-3">Real‑World Problems</h3>
      <p className="text-gray-700">
        Our systems come from lived experience — homelessness, crisis, broken government
        tools, and communities that need better options.
      </p>
    </div>

    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-red-700 mb-3">Montana Built</h3>
      <p className="text-gray-700">
        We’re based in Helena Valley. We build with the honesty, grit, and practicality
        that Montana is known for.
      </p>
    </div>

    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-red-700 mb-3">Tools That Matter</h3>
      <p className="text-gray-700">
        Dream Funnel, Swapmeet, MORES, Stories, and the Flying Magnetometer — each one
        solves a real problem with clarity and compassion.
      </p>
    </div>

  </div>
</section>

      {/* Tagline */}
      <p className="text-xl text-gray-700 mb-10 leading-relaxed">
        Building dignity‑first tools for people who’ve been overlooked.
        Clean systems. Real impact. Montana built.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">

        <a
          href="/products"
          className="bg-red-700 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-red-800 transition"
        >
          Our Products
        </a>

{/* Product Cards Section */}
<section className="max-w-6xl mx-auto px-6 py-20">

  <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
    Our Systems
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

    {/* Dream Funnel */}
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-red-700 mb-3">Dream Funnel</h3>
      <p className="text-gray-700 mb-4">
        A dignity-first donation and support platform for people in crisis.
      </p>
      <a href="/products" className="text-red-700 font-medium hover:underline">
        Learn more →
      </a>
    </div>

    {/* Swapmeet */}
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-red-700 mb-3">Swapmeet</h3>
      <p className="text-gray-700 mb-4">
        A clean, structured community exchange system replacing messy classifieds.
      </p>
      <a href="/products" className="text-red-700 font-medium hover:underline">
        Learn more →
      </a>
    </div>

    {/* MORES */}
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-red-700 mb-3">MORES</h3>
      <p className="text-gray-700 mb-4">
        A modern purchasing and resource system replacing outdated government tools.
      </p>
      <a href="/products" className="text-red-700 font-medium hover:underline">
        Learn more →
      </a>
    </div>

    {/* Stories */}
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-red-700 mb-3">Stories</h3>
      <p className="text-gray-700 mb-4">
        A narrative-first platform for authentic community storytelling.
      </p>
      <a href="/products" className="text-red-700 font-medium hover:underline">
        Learn more →
      </a>
    </div>

    {/* Flying Magnetometer */}
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-red-700 mb-3">Flying Magnetometer</h3>
      <p className="text-gray-700 mb-4">
        A drone-based geophysical survey system replacing expensive legacy tools.
      </p>
      <a href="/products" className="text-red-700 font-medium hover:underline">
        Learn more →
      </a>
    </div>

  </div>
</section>

        <a
          href="/about"
          className="bg-gray-200 text-gray-800 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-300 transition"
        >
          About Us
        </a>

        <a
          href="/contact"
          className="bg-gray-200 text-gray-800 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-300 transition"
        >
          Contact
        </a>
      </div>

{/* Who We Are Section */}
<section className="max-w-5xl mx-auto px-6 py-20">

  <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
    Who We Are
  </h2>

  <p className="text-lg text-gray-700 leading-relaxed text-center mb-12">
    Redheaded Stepchild Tech is a small Montana software shop built by people who’ve lived
    through broken systems, bad tools, and moments where the world didn’t show up the way
    it should. We build because we’ve been there. We fix things because we know what it’s
    like when nobody else will.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      <h3 className="text-xl font-semibold text-red-700 mb-3">We’ve Seen the Gaps</h3>
      <p className="text-gray-700">
        Crisis systems that confuse people. Government tools that break. Donation platforms
        that bury stories. Community exchanges that turn into chaos. We’ve lived through
        all of it — and we decided to build something better.
      </p>
    </div>

    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      <h3 className="text-xl font-semibold text-red-700 mb-3">We Build With Purpose</h3>
      <p className="text-gray-700">
        Every system we create starts with a real person in mind. Someone who needs help,
        clarity, dignity, or a tool that actually works. We don’t build for corporations.
        We build for people.
      </p>
    </div>

    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      <h3 className="text-xl font-semibold text-red-700 mb-3">Small Team, Real Impact</h3>
      <p className="text-gray-700">
        We’re not a giant company. We’re a small, focused team that moves fast, listens
        closely, and builds systems that solve real problems without the layers of
        bureaucracy.
      </p>
    </div>

    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      <h3 className="text-xl font-semibold text-red-700 mb-3">Montana Roots</h3>
      <p className="text-gray-700">
        We’re based in Helena Valley — a place where people help each other, tools are
        built to last, and honesty matters. Our work reflects that same spirit.
      </p>
    </div>

  </div>

</section>

{/* Future of RST Section */}
<section className="max-w-5xl mx-auto px-6 py-20">

  <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
    The Future of RST
  </h2>

  <p className="text-lg text-gray-700 leading-relaxed text-center mb-12">
    We’re just getting started. Redheaded Stepchild Tech is building a future where
    everyday people have tools that actually help — tools that simplify life, protect
    dignity, and replace the broken systems the world forgot about. Here’s where we’re
    heading next.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

    {/* RST 1.0 */}
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      <h3 className="text-xl font-semibold text-red-700 mb-3">RST 1.0 — The Foundation</h3>
      <p className="text-gray-700">
        Our current systems — Dream Funnel, Swapmeet, MORES, Stories, and the Flying
        Magnetometer — form the backbone of RST. Clean interfaces, simple workflows, and
        tools built for real people. This is the base everything else grows from.
      </p>
    </div>

    {/* RST 2.0 */}
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      <h3 className="text-xl font-semibold text-red-700 mb-3">RST 2.0 — The Form Filler Outer</h3>
      <p className="text-gray-700">
        A talking cyber pal that helps people fill out forms, navigate confusing systems,
        and get through bureaucratic nightmares with clarity and confidence. No more
        guessing. No more overwhelm. Just help that makes sense.
      </p>
    </div>

{/* Mission & Values Section */}
<section className="max-w-5xl mx-auto px-6 py-20">

  <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
    Our Mission & Values
  </h2>

  <p className="text-lg text-gray-700 leading-relaxed text-center mb-12">
    Our mission is simple: build tools that restore dignity, reduce chaos, and give people
    clarity in moments where life feels overwhelming. We believe technology should help
    people, not confuse them — and that small, focused teams can build systems that make a
    real difference.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      <h3 className="text-xl font-semibold text-desertRed mb-3">Dignity First</h3>
      <p className="text-gray-700">
        Every tool we build starts with the person who needs it most. We design for clarity,
        simplicity, and respect — because people deserve better than confusing systems and
        corporate indifference.
      </p>
    </div>

    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      <h3 className="text-xl font-semibold text-desertRed mb-3">Real Problems</h3>
      <p className="text-gray-700">
        Our systems come from lived experience — crisis, broken tools, and moments where
        help was needed but nowhere to be found. We build solutions that actually work in
        the real world.
      </p>
    </div>

    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      <h3 className="text-xl font-semibold text-desertRed mb-3">No Nonsense</h3>
      <p className="text-gray-700">
        No layers of bureaucracy. No corporate jargon. No “click here to continue” nightmares.
        Just clean engineering and straightforward tools that get the job done.
      </p>
    </div>

    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      <h3 className="text-xl font-semibold text-desertRed mb-3">Built With Purpose</h3>
      <p className="text-gray-700">
        We’re a small shop with a big mission: build systems that help people who’ve been
        overlooked, ignored, or left behind. Every line of code has a reason.
      </p>
    </div>

  </div>

</section>

    {/* RST 3.0 */}
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      <h3 className="text-xl font-semibold text-red-700 mb-3">RST 3.0 — The Advocate</h3>
      <p className="text-gray-700">
        A full digital advocate that stands beside people who’ve been left behind —
        helping them navigate housing, medical systems, legal processes, and crisis
        situations. A real support system for people who need one.
      </p>
    </div>

    {/* Hardware + Field Tools */}
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      <h3 className="text-xl font-semibold text-red-700 mb-3">Next‑Gen Field Tools</h3>
      <p className="text-gray-700">
        Expanding our hardware line — including advanced magnetometer systems, drone
        integrations, and field-ready geophysical tools. Built for rugged environments and
        real-world work.
      </p>
    </div>

    {/* Community Systems */}
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      <h3 className="text-xl font-semibold text-red-700 mb-3">Community Platforms</h3>
      <p className="text-gray-700">
        More tools for local communities — resource sharing, crisis support, storytelling,
        and systems that help people stay connected without relying on broken social media
        platforms.
      </p>
    </div>

    {/* Dignity Tools */}
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      <h3 className="text-xl font-semibold text-red-700 mb-3">Dignity‑First AI Tools</h3>
      <p className="text-gray-700">
        AI systems designed to help people, not replace them — tools that simplify life,
        protect privacy, and give people clarity in moments where everything feels
        overwhelming.
      </p>
    </div>

  </div>

</section>


      {/* Subtext */}
      <p className="text-gray-600 text-lg">
        Dream Funnel • Swapmeet • MORES • Stories • Flying Magnetometer
      </p>
    </div>
  );
}
