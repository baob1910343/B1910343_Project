import Links from "./Links";
import Social from "./Socials";
import NewsLetter from "./NewsLetter";
import Payment from "./Payment";
import Copyright from "./Copyright";

export default function Footer({ country }) {
  return (
    <footer className="container">
      <div>
        <Links />
        <Social />
        <NewsLetter />
        <Payment />
        <Copyright country={country} />
      </div>
    </footer>
  );
}
