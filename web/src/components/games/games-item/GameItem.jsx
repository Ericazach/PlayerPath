import { Link } from "react-router-dom";

function GameItem({ name, gameImg, id }) {
  return (
    <div className="text-center ">
      {/* <h1 className="text-2xl mb-4 text-[#FF9677]">
        <Link to={`/games/${id}`}>{name}</Link>
      </h1> */}
      <Link to={`/games/${id}`}>
        <img
          className=" mb-6 object-cover w-[300px] h-[380px] max-w-full rounded-lg border"
          src={gameImg}
          alt="game"
        />
      </Link>
    </div>
  );
}

export default GameItem;
