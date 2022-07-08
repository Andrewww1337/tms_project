import "./postCard.css";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Link } from "react-router-dom";

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
  return (
    <div className="postCard">
      <img src={poster} alt="no" className="cardImage" />
      <Link to={`/post/${imdbID}`}>
        <span className="filmName">{title}</span>
      </Link>
      <span className="filmGenre">{type}</span>
      <span className="rating">7.6</span>
    </div>
  );
};
