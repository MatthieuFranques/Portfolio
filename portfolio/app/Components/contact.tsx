"use client";

export default function Contact() {
  return (
    <div className="mx-auto max-w-screen-md px-4 py-16 sm:px-6 lg:px-8">
      {/* Formulaire de contact */}
      <div className="text-center">
        <h2
          id="contact"
          className="text-3xl font-extrabold sm:text-5xl text-gray-900 dark:text-white"
        >
          Contactez-moi
        </h2>
        <p className="mx-auto mt-4 max-w-sm text-gray-700 dark:text-white/80">
          N'hésitez pas à me contacter, je suis à votre disposition pour plus
          d'informations.
        </p>
      </div>

      <form className="mt-8 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-900 dark:text-white">
            Nom
          </label>
          <input
            type="text"
            className="w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900 placeholder-gray-500 dark:border-white/30 dark:bg-white/10 dark:text-white dark:placeholder-white/50"
            placeholder="Votre nom"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 dark:text-white">
            Mail
          </label>
          <input
            type="email"
            className="w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900 placeholder-gray-500 dark:border-white/30 dark:bg-white/10 dark:text-white dark:placeholder-white/50"
            placeholder="votre@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 dark:text-white">
            Message
          </label>
          <textarea
            rows={6}
            className="w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900 placeholder-gray-500 dark:border-white/30 dark:bg-white/10 dark:text-white dark:placeholder-white/50"
            placeholder="Votre message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="inline-block rounded-full border-2 border-gray-900 bg-white px-10 py-3 text-sm font-semibold text-gray-900 transition hover:bg-pink-600 hover:text-white dark:border-white dark:bg-transparent dark:text-white"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
