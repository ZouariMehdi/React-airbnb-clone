import data from "./data";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
export default function App() {
  const cards = data.map(function (card) {
    return (
      <Card
        img={card.coverImgUrl}
        rating={card.stats.rating}
        reviewCont={card.stats.reviewCount}
        location={card.location}
        title={card.title}
        price={card.price}
        openSpots={card.openSpots}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <div className="cards">{cards}</div>
    </div>
  );
}
