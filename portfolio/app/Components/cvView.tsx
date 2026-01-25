import { useState } from "react";

export default function CVViewer() {
  const [open, setOpen] = useState(false);

  return (
    /* On retire min-h-screen et justify-center pour que ça ne prenne que la place nécessaire */
    <div className="p-8 flex flex-col items-center font-mono">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition rounded-md"
      >
        {open ? "Fermer la visualisation" : "Visualiser mon CV.pdf"}
      </button>

      {open && (
        <div className="mt-8 w-full max-w-6xl h-[95vh] border bg-blue-500 rounded-lg shadow-2xl overflow-hidden bg-gray-900">
          <iframe src="/cv.pdf" className="w-full h-full" title="Mon CV" />
        </div>
      )}
    </div>
  );
}
