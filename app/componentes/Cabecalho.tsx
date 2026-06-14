"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", rotulo: "Início" },
  { href: "/biografias", rotulo: "Nomes e histórias" },
  { href: "/mapa", rotulo: "Mapa" },
  { href: "/transparencia", rotulo: "Transparência" },
  { href: "/manifesto", rotulo: "Manifesto Projeto Bacuri" },
];

/**
 * Navegação compartilhada entre as páginas do projeto.
 * Nome do projeto à esquerda (como um logotipo) e links à direita,
 * com foco visível, sem ícones decorativos. O link da página atual
 * fica destacado para orientar o visitante.
 */
export default function Cabecalho() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navegação principal"
      className="border-b-4 border-verde-950 px-4 py-3 sm:px-6 dark:border-verde-700"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <Link
          href="/"
          className="font-serif text-base font-semibold tracking-tight text-verde-950 dark:text-creme-50"
        >
          Projeto Bacuri
        </Link>
        <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
          {LINKS.map((link) => {
            const ativo =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={ativo ? "page" : undefined}
                  className={`inline-block rounded px-1 py-0.5 font-medium underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde-700 ${
                    ativo
                      ? "underline text-verde-950 dark:text-creme-50"
                      : "text-verde-800 dark:text-neutral-300"
                  }`}
                >
                  {link.rotulo}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
