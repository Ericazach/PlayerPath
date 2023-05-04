import { Link } from "react-router-dom";

function OwnGameItem({ name, gameImg, id }) {
  return (
    <div className="text-center ">
      <Link to={`/ownGames/${id}`}>
        <img
          className="object-cover w-[300px] h-[380px] max-w-full rounded-lg border"
          src={gameImg}
          alt="ownGame"
        />
      </Link>
    </div>
  );
}

export default OwnGameItem;
