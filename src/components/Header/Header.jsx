import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <a href="/" className="link-logo">
        <img
          src="https://oceanbrasil.com/assets/logo.svg"
          alt="Logo da Ocean"
        />
      </a>
      <nav>
        <a href="/">Home</a>
        <a href="/character-create">Criar Personagem</a>
      </nav>
    </header>
  );
}
