"use client";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("matthieufranques@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // message disparaît après 2s
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      id="contact"
    >
      <div className="max-w-3xl w-full bg-gray-800 rounded-lg p-8 shadow-lg font-mono text-gray-200">
        <h1 className="text-2xl font-bold mb-6 text-green-400">
          /* Contact */
        </h1>

        <pre className="bg-gray-900 p-6 rounded-lg overflow-x-auto text-sm">
          <code>
            <span className="text-purple-400">const</span>{" "}
            <span className="text-blue-400">contact</span> = {"{"}
            {"\n"}
            {"  "}email:{" "}
            <span
              onClick={copyEmail}
              className="text-yellow-300 cursor-pointer hover:underline"
              title="Cliquez pour copier"
            >
              "matthieufranques@gmail.com"
            </span>
            ,{"\n"}
            {"  "}linkedin:{" "}
            <a
              href="https://www.linkedin.com/in/matthieu-franques-35a8121b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-300 hover:underline"
            >
              "https://www.linkedin.com/in/matthieu-franques-35a8121b7/"
            </a>
            ,{"\n"}
            {"  "}github:{" "}
            <a
              href="https://github.com/MatthieuFranques"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-300 hover:underline"
            >
              "https://github.com/MatthieuFranques"
            </a>
            {"\n"}
            {"};\n\n"}
            <span className="text-green-400">console</span>.log(
            <span className="text-pink-400">
              "Vous pouvez copier l'email ou cliquer sur les liens ci-dessus !"
            </span>
            );
          </code>
        </pre>

        {copied && (
          <p className="mt-2 text-green-400 text-sm italic">
            Email copié dans le presse-papiers ✅
          </p>
        )}

        <p className="mt-4 text-gray-500 text-sm italic">
          /* Style code pour les devs */
        </p>
      </div>
    </div>
  );
}
