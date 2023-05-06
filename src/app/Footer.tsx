import Image from "next/image";
import LogoImage from "~/../public/logo.png";

export default function Footer(): JSX.Element {
  return (
    <footer className="footer bg-neutral p-10 text-neutral-content">
      <div>
        <Image src={LogoImage} alt="logo" width={64} />
        <p>F1 Almanac</p>
      </div>
      <div>
        <span className="footer-title">Built using</span>
        <a
          className="link-hover link"
          href="https://react.dev/"
          target="_blank"
          rel="nofollow"
        >
          React
        </a>

        <a
          className="link-hover link"
          href="https://nextjs.org/"
          target="_blank"
          rel="nofollow"
        >
          Next.js
        </a>

        <a
          className="link-hover link"
          href="https://trpc.io/"
          target="_blank"
          rel="nofollow"
        >
          tRPC
        </a>

        <a
          className="link-hover link"
          href="https://tailwindcss.com/"
          target="_blank"
          rel="nofollow"
        >
          Tailwind CSS
        </a>

        <a
          className="link-hover link"
          href="https://create.t3.gg/"
          target="_blank"
          rel="nofollow"
        >
          Create T3 App
        </a>
      </div>

      <div>
        <span className="footer-title">Data sources</span>
        <a
          className="link-hover link"
          href="http://ergast.com/mrd/"
          target="_blank"
          rel="nofollow"
        >
          Ergast Developer API
        </a>

        <a
          className="link-hover link"
          href="https://www.wikipedia.org/"
          target="_blank"
          rel="nofollow"
        >
          Wikipedia
        </a>
      </div>
    </footer>
  );
}
