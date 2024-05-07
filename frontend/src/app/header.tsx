import Link from "next/link";
import Container from "./container";

const Header = () => {
    return (
        <header className="header">
            <Container classNames="header-container">
                <div className="header-div">
                    <Link href="/">Logo</Link>
                    <nav>
                        <ul className="header-nav">
                            <li><Link href="/">Home</Link> </li>
                            <li><Link href="/#about">About</Link></li>
                            <li><Link href="/#contact">Contact Us</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="header-div">
                    <Link href="/">Login</Link>
                    <Link href="/#about">Sign Up</Link>
                </div>
            </Container>
        </header>
    )
}

export default Header;