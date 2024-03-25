import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Meus livros" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <h1>Acervo</h1>
      <div>
        <ul>
          <li>Livro 1</li>
          <li>Livro 2</li>
        </ul>
      </div>
    </>
  );
}
