export default function Header({ LinkComponent }) {
  return (
    <header>
      <h1>Sistema de Pedidos</h1>
      <nav>
        <LinkComponent to="/">Inicio</LinkComponent>
      </nav>
    </header>
  );
}
