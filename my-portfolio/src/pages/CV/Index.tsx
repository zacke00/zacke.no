import React from "react";

const CV = () => {
  return (
    <div className="w-[90%] mx-auto py-12 space-y-12 text-black dark:text-white">
      {/* Hero / Header */}
      <section className="text-center space-y-2">
        <h1 className="text-4xl md:text-5xl font-bold">Zakaria Berglund</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Frontend Developer • UI/UX Designer
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Passionate about building clean, responsive web, mobile, and backend solutions.
        </p>
      </section>

      {/* Contact Info */}
      <section className="text-center text-sm md:text-base text-gray-700 dark:text-gray-300 space-y-1">
        <p>📍 Oslo, Norway</p>
        <p>📧 zakaria.berglund.dev@gmail.com</p>
        <p>📱 +47 974 28 885</p>
        <p>🔗 <a href="https://www.berglundweb.no" className="text-blue-500 dark:text-blue-400 underline">www.berglundweb.no</a></p>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Skills & Technologies</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-gray-700 dark:text-gray-300">
          <li>React / React Native</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>.NET / C#</li>
          <li>Firebase</li>
          <li>Node.js</li>
          <li>MongoDB / MySQL</li>
          <li>Swift / Kotlin</li>
          <li>Figma</li>
          <li>Adobe Illustrator</li>
        </ul>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <div>
            <h3 className="text-lg font-semibold">Resthon AS – Assistant General Manager</h3>
            <p className="text-sm">2021 – Present</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Beer Palace – General Manager</h3>
            <p className="text-sm">2020 – 2021</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">The Pub – Manager</h3>
            <p className="text-sm">2018 – 2020</p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div className="text-gray-700 dark:text-gray-300">
          <h3 className="text-lg font-semibold">Bachelor in Frontend & Mobile Development</h3>
          <p className="text-sm">Høyskolen Kristiania • 2021 – 2024</p>
        </div>
      </section>

      {/* Languages */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Languages</h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
          <li>Norwegian (Fluent)</li>
          <li>Swedish (Fluent)</li>
          <li>English (Professional)</li>
        </ul>
      </section>
    </div>
  );
};

export default CV;
