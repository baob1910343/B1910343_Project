import Links from "./Links";
import Social from "./Socials";
import NewsLetter from "./NewsLetter";
import Payment from "./Payment";
import Copyright from "./Copyright";

export default function Footer({ country }) {
  return (
    <footer className="container border-top rounded shadow-sm bg-light pt-5 mt-5">
      <div className="">
        <Links />
        <Social />
        <NewsLetter />
        <Payment />
        <Copyright country={country} />
      </div>
    </footer>
  );
}
