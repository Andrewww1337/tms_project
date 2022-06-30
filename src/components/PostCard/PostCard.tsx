import "./PostCard.css";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

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
      <span className="filmName">{title}</span>
      <span className="filmGenre">{type}</span>
      <span className="rating">7.6</span>
    </div>
  );
};
