"use client";
import React from "react";

export default function Header() {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="logo"
            />
          </a>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
            Rastrear paquete
          </a>
          <a
            href="/contact"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Contacto
          </a>
          <a
            href="/company"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Nosotros
          </a>
        </div>
      </nav>
    </header>
  );
}
