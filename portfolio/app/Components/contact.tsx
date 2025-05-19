// components/Contact.tsx

"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // ➤ Tu peux envoyer les données ici vers une API ou service (Formspree, Resend, etc.)
    console.log("Form submitted:", form);
    setSubmitted(true);
  };

  return (
    <section className="max-w-xl mx-auto p-6 bg-white shadow rounded mt-10">
      <h2 className="text-2xl font-semibold mb-4">Contactez-moi</h2>
      {submitted ? (
        <p className="text-green-600">Merci ! Votre message a été envoyé.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={form.name}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={form.email}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />
          <textarea
            name="message"
            placeholder="Votre message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="border p-2 rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
          >
            Envoyer
          </button>
        </form>
      )}
    </section>
  );
}
