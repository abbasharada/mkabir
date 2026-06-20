export default function Footer() {
  return (
    <footer className="w-full mt-16 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black">
      
      <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left side */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Team Web Project
          </h2>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            Built by Musa Intern • Abdullahi Intern • Naima Intern
          </p>

          <p className="text-xs text-gray-500 mt-1">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>

        {/* Right side (icons) */}
        <div className="flex items-center gap-6">

          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.7.5.7 5.7.7 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.7 2 .7 2 1.2.2 2.5-.8 2.8-1.5.1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.4 1.3 1-.3 2-.4 3-.4s2 .1 3 .4c2.4-1.6 3.4-1.3 3.4-1.3.6 1.6.2 2.9.1 3.2.8.9 1.2 2 1.2 3.3 0 4.5-2.7 5.5-5.3 5.8.5.4.9 1.1.9 2.2v3.2c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.3 5.7 18.3.5 12 .5z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.5-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </a>

        </div>
      </div>
    </footer>
  );
}