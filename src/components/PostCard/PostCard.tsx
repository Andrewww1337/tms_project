import "./postCard.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemContext } from "../../App";

type PostCardProps = {
  title: string;
  year: string;
  imdbID: string;
  type: string;
  poster: string;
  rating: string;
};

export const PostCard = ({
  title,
  year,
  imdbID,
  type,
  poster,
  rating,
}: PostCardProps) => {
  const { theme, setTheme } = useContext(ThemContext);
  return (
    <div className="postCard">
      <img src={poster} alt="no" className="cardImage" />
      <Link className="link" to={`/post/${imdbID}`}>
        <span className={`filmName filmName--${theme}`}>{title}</span>
      </Link>
      <span className="filmGenre">{type}</span>
      <span className="rating">7.6</span>
    </div>
  );
};
