const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events", "Help center"],
  },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <h2 className="text-xl font-bold">Mon Portfolio</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {LINKS.map(({ title, items }) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-gray-500 mb-2 uppercase">
                {title}
              </h3>
              <ul className="space-y-1">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 border-t pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p>&copy; {currentYear} Mon Portfolio. Tous droits réservés.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-900">
            Facebook
          </a>
          <a href="#" className="hover:text-gray-900">
            Twitter
          </a>
          <a href="#" className="hover:text-gray-900">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
