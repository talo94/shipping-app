"use client";
import React, { useRef } from "react";

const Search = () => {
  const guideRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const guideNumber = guideRef.current ? guideRef.current.value : "";
  };

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={handleSubmit} className="mt-8">
        <label
          htmlFor="guideNumber"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Guía
        </label>
        <div className="relative mt-0 rounded-md shadow-sm">
          <input
            type="text"
            name="guideNumber"
            id="guideNumber"
            ref={guideRef}
            className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Número de guía"
          />
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
