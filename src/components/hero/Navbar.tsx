import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
    { label: "Solutions", href: "#solutions" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
    return (
        <nav
            className="rounded-pill bg-surface flex items-center justify-between py-2 px-3 gap-14"
            aria-label="Main navigation"
        >
            {/* Logo */}
            <Link href="/" className="flex items-center">
                <Image
                    src="/tickki-logo.svg"
                    alt="Tickki — Inbox · Chat · Support"
                    width={119}
                    height={35}
                    priority
                />
            </Link>

            {/* Nav Links */}
            <ul className="hidden md:flex items-center gap-3 list-none m-0 p-0">
                {NAV_LINKS.map(({ label, href }) => (
                    <li key={href}>
                        <Link
                            href={href}
                            className="text-sm tracking-tight leading-5 text-brand-dark hover:text-brand-primary transition-colors"
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4">
                <Link
                    href="#get-started"
                    className="h-9 shadow-btn rounded-md bg-brand-primary text-surface text-sm font-medium tracking-tight leading-5 flex items-center justify-center px-4 hover:opacity-90 transition-opacity"
                >
                    Get Started
                </Link>
                <Link
                    href="#login"
                    className="h-9 shadow-btn rounded-md bg-surface text-brand-dark border border-border-default text-sm font-medium tracking-tight leading-5 flex items-center justify-center px-4 hover:bg-surface-light transition-colors"
                >
                    Login
                </Link>
            </div>
        </nav>
    );
}
