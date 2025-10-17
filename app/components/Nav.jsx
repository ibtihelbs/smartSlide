import Image from "next/image";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-var-border backdrop-blur-md sticky top-0 bg-var-bg/70 z-50">
      <div className="text-sm font-semibold flex gap-0.5 items-center">
        <Image
          src="images/presentation.svg"
          alt="presentation-logo"
          height={32}
          width={32}
        />{" "}
        SmartSlide
      </div>
      <ul className="hidden md:flex gap-8 text-sm">
        <li>
          <a href="#features" className="hover:text-var-accent">
            Features
          </a>
        </li>
        <li>
          <a href="#how" className="hover:text-var-accent">
            How It Works
          </a>
        </li>
        <li>
          <a href="#waitlist" className="hover:text-var-accent">
            Join Waitlist →
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
