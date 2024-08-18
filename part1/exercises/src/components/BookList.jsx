export default function BookList() {
  let pageTitle = "Books currently being Read";
  let book1 =
    "https://th.bing.com/th/id/R.fe9f95855b6c100df06d2a26c362dcc1?rik=xD026m%2ba3V%2fPmw&riu=http%3a%2f%2fwww.cultureaddicthistorynerd.com%2fwordpress%2fwp-content%2fuploads%2f2015%2f08%2fdune-frankherbert.jpg&ehk=8eF2hMP4iMJekcQOCRr%2frObgxC2LvigiKgutkFp3yIU%3d&risl=&pid=ImgRaw&r=0";
  let book2 =
    "https://i5.walmartimages.com/asr/62a1b700-e0eb-4cd0-8e5b-40b74f3e9545_1.7cce8decc3cec86fdd12105c6bd743f8.jpeg";
  let book3 =
    "https://th.bing.com/th/id/OIP.914eajO6J6qw72TJ7GmpJQHaLH?rs=1&pid=ImgDetMain";

  return (
    <div>
      <h3>{pageTitle}</h3>
      <img src={book1} alt="Dune" />
      <img src={book2} alt="Berserk" />
      <img src={book3} alt="Fire & Blood" />
    </div>
  );
}
