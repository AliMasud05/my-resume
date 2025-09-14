const techCategories = [
  {
    title: "Frontend",
    description: "Building sleek, responsive, and accessible user interfaces.",
    technologies:
      "JavaScript, TypeScript, React, Next.js, HTML, CSS, TailwindCSS",
    icon: "💻",
    color: "border-pink-500/30 bg-pink-500/10",
  },
  {
    title: "Databases",
    description: "Managing structured & unstructured data with reliability.",
    technologies: "MongoDB, PostgreSQL, Prisma",
    icon: "🗄️",
    color: "border-blue-500/30 bg-blue-500/10",
  },
  {
    title: "Backend",
    description: "Creating APIs and server-side logic that scale.",
    technologies: "Node.js, Express.js",
    icon: "⚙️",
    color: "border-green-500/30 bg-green-500/10",
  },
  {
    title: "Authentication",
    description: "Secure login & role-based access made simple.",
    technologies: "Firebase, JWT",
    icon: "🔐",
    color: "border-purple-500/30 bg-purple-500/10",
  },
  {
    title: "Payments",
    description: "Seamless checkout and payment integration.",
    technologies: "Stripe, PayPal",
    icon: "💳",
    color: "border-yellow-500/30 bg-yellow-500/10",
  },
];

export function TechToolbox() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Badge */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 mb-8">
            <span className="text-pink-400 text-sm font-medium">
              Skills & Tech Stack
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-balance">
            MY TECH TOOLBOX
          </h2>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Frontend - Large Card */}
          <div className="md:col-span-2 lg:col-span-1 lg:row-span-2">
            <div
              className={`h-full p-8 rounded-xl border ${techCategories[0].color} backdrop-blur-sm`}
            >
              <div className="text-4xl mb-4">{techCategories[0].icon}</div>
              <h3 className="text-2xl font-bold text-pink-400 mb-4">
                {techCategories[0].title}
              </h3>
              <p className="text-gray-300 mb-6 italic">
                {techCategories[0].description}
              </p>
              <p className="text-sm text-gray-400">
                {techCategories[0].technologies}
              </p>
            </div>
          </div>

          {/* Databases */}
          <div className="md:col-span-1">
            <div
              className={`h-full p-6 rounded-xl border ${techCategories[1].color} backdrop-blur-sm`}
            >
              <div className="text-3xl mb-3">{techCategories[1].icon}</div>
              <h3 className="text-xl font-bold text-pink-400 mb-3">
                {techCategories[1].title}
              </h3>
              <p className="text-gray-300 text-sm mb-4 italic">
                {techCategories[1].description}
              </p>
              <p className="text-xs text-gray-400">
                {techCategories[1].technologies}
              </p>
            </div>
          </div>

          {/* Backend */}
          <div className="md:col-span-1">
            <div
              className={`h-full p-6 rounded-xl border ${techCategories[2].color} backdrop-blur-sm`}
            >
              <div className="text-3xl mb-3">{techCategories[2].icon}</div>
              <h3 className="text-xl font-bold text-pink-400 mb-3">
                {techCategories[2].title}
              </h3>
              <p className="text-gray-300 text-sm mb-4 italic">
                {techCategories[2].description}
              </p>
              <p className="text-xs text-gray-400">
                {techCategories[2].technologies}
              </p>
            </div>
          </div>

          {/* Authentication */}
          <div className="md:col-span-1">
            <div
              className={`h-full p-6 rounded-xl border ${techCategories[3].color} backdrop-blur-sm`}
            >
              <div className="text-3xl mb-3">{techCategories[3].icon}</div>
              <h3 className="text-xl font-bold text-pink-400 mb-3">
                {techCategories[3].title}
              </h3>
              <p className="text-gray-300 text-sm mb-4 italic">
                {techCategories[3].description}
              </p>
              <p className="text-xs text-gray-400">
                {techCategories[3].technologies}
              </p>
            </div>
          </div>

          {/* Payments */}
          <div className="md:col-span-1">
            <div
              className={`h-full p-6 rounded-xl border ${techCategories[4].color} backdrop-blur-sm`}
            >
              <div className="text-3xl mb-3">{techCategories[4].icon}</div>
              <h3 className="text-xl font-bold text-pink-400 mb-3">
                {techCategories[4].title}
              </h3>
              <p className="text-gray-300 text-sm mb-4 italic">
                {techCategories[4].description}
              </p>
              <p className="text-xs text-gray-400">
                {techCategories[4].technologies}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
