import { render, screen } from '@testing-library/react';
import Footer from '.';


describe('Footer', () => {
  it('renders without crashing', () => {
    render(<Footer />);
    expect(screen.getByText('Institucional')).toBeInTheDocument();
    expect(screen.getByText('Atendimento')).toBeInTheDocument();
    expect(screen.getByText('Formas de pagamento')).toBeInTheDocument();
    expect(screen.getByText('Redes Sociais')).toBeInTheDocument();
  });

  it('has correct links', () => {
    render(<Footer />);
    expect(screen.getByText('Sobre a loja').closest('a')).toHaveAttribute('href', '/home');
    expect(screen.getByText('Politica de troca').closest('a')).toHaveAttribute('href', '/about');
    expect(screen.getByText('Politica de preço').closest('a')).toHaveAttribute('href', '/contact');
  });
});
