import  './Header.css';

export default function Header() {
    return (
        
        <header className='header'>
            <span>Carlos Antonino.dev</span>
            <nav>
                <a href="/">Home</a>
                <a href="/sobre">Sobre</a>
                <a href="/projetos">Projetos</a>
                <a href="/contatos">Contatos</a>
            </nav>
        </header>
    );
}