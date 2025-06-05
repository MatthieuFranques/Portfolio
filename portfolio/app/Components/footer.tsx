const currentYear = new Date().getFullYear();
import Contact from "@/app/Components/contact";

export function Footer() {
  return (
    <footer className="bg-gradient-dark">
      <Contact />

      {/* Partie basse avec icônes */}
      <div className="border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between text-sm">
          <p className="dark:text-white/80 text-gray-800">
            © {currentYear} Matthieu Franques
          </p>

          <div className="mt-4 sm:mt-0 flex space-x-6">
            <a
              href="https://www.linkedin.com/in/matthieu-franques-35a8121b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.452 20.452h-3.554v-5.569c0-1.327-.027-3.036-1.849-3.036-1.852 0-2.136 1.445-2.136 2.939v5.666H9.359V9h3.413v1.561h.049c.476-.9 1.637-1.849 3.368-1.849 3.598 0 4.263 2.368 4.263 5.451v6.289zM5.337 7.433a2.065 2.065 0 1 1 0-4.13 2.065 2.065 0 0 1 0 4.13zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.553C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.276V1.723C24 .771 23.2 0 22.222 0z" />
              </svg>
            </a>

            <a
              href="https://github.com/MatthieuFranques"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477
                0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627
                2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1
                1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2
                -.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0
                0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962
                0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1
                2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525
                4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012
                2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
