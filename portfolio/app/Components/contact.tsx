"use client";

export default function Contact() {
  return (
    <div className="max-w-2xl w-full p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
        Contactez-moi
      </h2>
      <form className="space-y-6">
        {/* Prénom et Nom */}
        <div className="grid md:grid-cols-2 md:gap-6">
          {/* Prénom */}
          <div className="relative z-0 w-full group">
            <input
              type="text"
              name="prenom"
              id="prenom"
              placeholder=" "
              required
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 dark:text-white focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-blue-500"
            />
            <label
              htmlFor="prenom"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600 dark:peer-focus:text-blue-500"
            >
              Prénom
            </label>
          </div>

          {/* Nom */}
          <div className="relative z-0 w-full group">
            <input
              type="text"
              name="nom"
              id="nom"
              placeholder=" "
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 dark:text-white focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-blue-500"
            />
            <label
              htmlFor="nom"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600 dark:peer-focus:text-blue-500"
            >
              Nom
            </label>
          </div>
        </div>

        {/* Téléphone */}
        <div className="relative z-0 w-full group">
          <input
            type="tel"
            name="telephone"
            id="telephone"
            placeholder=" "
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 dark:text-white focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-blue-500"
          />
          <label
            htmlFor="telephone"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600 dark:peer-focus:text-blue-500"
          >
            Téléphone
          </label>
        </div>

        {/* Email */}
        <div className="relative z-0 w-full group">
          <input
            type="email"
            name="email"
            id="email"
            placeholder=" "
            required
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 dark:text-white focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-blue-500"
          />
          <label
            htmlFor="email"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600 dark:peer-focus:text-blue-500"
          >
            Adresse email *
          </label>
        </div>

        {/* Objet */}
        <div className="relative z-0 w-full group">
          <input
            type="text"
            name="objet"
            id="objet"
            placeholder=" "
            required
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 dark:text-white focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-blue-500"
          />
          <label
            htmlFor="objet"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600 dark:peer-focus:text-blue-500"
          >
            Objet *
          </label>
        </div>

        {/* Message */}
        <div className="relative z-0 w-full group">
          <textarea
            name="message"
            id="message"
            required
            rows={4}
            placeholder=" "
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 dark:text-white focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-blue-500 resize-none"
          ></textarea>
          <label
            htmlFor="message"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600 dark:peer-focus:text-blue-500"
          >
            Message *
          </label>
        </div>

        {/* Bouton */}
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 px-5 py-2.5 text-sm font-medium text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
