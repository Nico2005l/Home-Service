// src/styles/tailwindStyles.js

export const containerStyle =
  "min-h-screen bg-white text-black p-8 flex flex-col lg:flex-row gap-8 max-w-screen-xl mx-auto";

export const imageBoxStyle =
  "flex flex-col items-center w-full lg:w-1/2 space-y-2";

export const imagePreviewStyle =
  "w-full aspect-[4/3] bg-[url('/grid.png')] bg-cover flex items-center justify-center border rounded";

export const formBoxStyle =
  "w-full lg:w-1/2 space-y-4 flex flex-col justify-start";

export const labelStyle = "text-sm font-medium mb-2";

export const inputStyle =
  "w-full border border-gray-300 p-3 rounded text-black";

export const textareaStyle =
  "w-full border border-gray-300 p-3 rounded text-black resize-none";

export const buttonPrimary =
  "bg-black text-white py-3 px-6 rounded hover:opacity-80 transition self-end";

export const buttonSecondary =
  "bg-green-100 text-green-800 px-4 py-2 rounded hover:brightness-95 transition";

export const buttonDanger =
  "bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition";

export const messageStyle = "text-sm mt-2 text-center";
