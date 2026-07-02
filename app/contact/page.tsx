export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold text-red-700 mb-6">
        Contact Us
      </h1>

      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        If you need to reach us, you’re not a bother. You’re the reason this exists.
        Whether you have a question, an idea, or something isn’t working, we’re here.
      </p>

      {/* Contact Info */}
      <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Get in Touch
        </h2>

        <p className="text-gray-700 mb-3">
          <span className="font-semibold text-red-700">Phone:</span> (406) 437-2008
        </p>

        <p className="text-gray-700 mb-3">
          <span className="font-semibold text-red-700">Email:</span> support@rsttech.com
        </p>

        <p className="text-gray-700">
          <span className="font-semibold text-red-700">Location:</span> Helena Valley, Montana
        </p>
      </div>

      {/* Contact Form */}
      <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Send a Message
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Name (optional)</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">What’s going on?</label>
            <textarea
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 h-32"
              placeholder="Tell us what’s happening..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-red-700 text-white px-6 py-2 rounded-md hover:bg-red-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      <p className="text-gray-600 text-sm mt-6">
        We read every message. Thank you for trusting us.
      </p>

    </div>
  );
}
