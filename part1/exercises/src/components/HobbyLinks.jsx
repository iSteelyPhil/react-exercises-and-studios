export default function HobbyLinks() {
  let hobbyLinks = [
    "https://www.dndbeyond.com/",
    "https://www.usagundamstore.co",
  ];

  return (
    <div>
      <a href={hobbyLinks[0]}>Dungeons and Dragons </a>
      <br></br>
      <a href={hobbyLinks[1]}>Gundam model Kits</a>
    </div>
  );
}
