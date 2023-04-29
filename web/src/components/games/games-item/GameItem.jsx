import { Link } from "react-router-dom";

function GameItem({ name, gameImg, id }) {
  return (
    <div>
      <div>
        <h1 className="text-2xl text-[#FF9677]">
          <Link to={`/games/${id}`}>{name}</Link>
        </h1>
      </div>
      <Link to={`/games/${id}`}>
        <img className="object-cover" src={gameImg} alt="game" />
      </Link>
    </div>
  );
}

export default GameItem;
