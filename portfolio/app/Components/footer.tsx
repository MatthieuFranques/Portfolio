const currentYear = new Date().getFullYear();
import Contact from "@/app/Components/contact";

export function Footer() {
  return (
    <footer className="contact-section border-t border-gray-300 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Contact />

      {/* Partie basse avec icônes */}
      <div className="border-t border-gray-200 dark:border-gray-800  transition-colors duration-300">
        <div className="mx-auto max-w-screen-xl px-4 py-8 flex flex-col sm:flex-row items-center justify-between text-sm">
          <p className="font-medium">© {currentYear} Matthieu Franques</p>

          <div className="mt-6 sm:mt-0 flex space-x-8">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/matthieu-franques-35a8121b7/"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-blue-600 dark:hover:text-blue-400 transition-all transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.452 20.452h-3.554v-5.569c0-1.327-.027-3.036-1.849-3.036-1.852 0-2.136 1.445-2.136 2.939v5.666H9.359V9h3.413v1.561h.049c.476-.9 1.637-1.849 3.368-1.849 3.598 0 4.263 2.368 4.263 5.451v6.289zM5.337 7.433a2.065 2.065 0 1 1 0-4.13 2.065 2.065 0 0 1 0 4.13zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.553C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.276V1.723C24 .771 23.2 0 22.222 0z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/MatthieuFranques"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-110"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 4.238 9.617 10.05 10.874.6.113.82-.258.82-.577 0-.285-.011-1.04-.015-2.043-3.338.724-4.042-1.61-4.042-1.61C4.222 17.37 3.633 16.7 3.633 16.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C19.765 21.91 24 17.595 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
