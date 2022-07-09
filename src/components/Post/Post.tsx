import "./post.css";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getOnePost } from "../../features/posts";
import { ButtonsGroup } from "../ButtonsGroup";
import { PostCard } from "../PostCard";
import { Arrow } from "../Arrow";
type PostsProps = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};
export const Post = () => {
  const post = useAppSelector((state) => state.posts.onePost);
  const [search, setSearch] = useState(1);
  useEffect(() => {
    dispatch(getOnePost(String(id)));
  }, [search]);
  const posts = useAppSelector((state) => state.posts.content);
  const dispatch = useAppDispatch();
  const { id } = useParams();

  console.log(post?.Title);

  return (
    post && (
      <div className="post">
        <div className="contentPost">
          <img src={post?.Poster} alt="no" className="postImage" />
          <ButtonsGroup
            onClickFirstButton={() => setSearch(2)}
            onClickSecondButton={() => console.log("text2")}
            disabled={false}
          ></ButtonsGroup>
        </div>
        <div className="postInfo">
          <h4>{post?.Genre}</h4>
          <h1 className="titlePost">{post?.Title}</h1>
          <div className="ratingPost">
            {post?.imdbRating} IMDb {post?.imdbRating} {post?.Runtime}
          </div>
          <h4 className="plotPost">{post?.Plot}</h4>
          <div className="aboutFilm">
            <div>
              <h4>Year</h4>
              <h4>Realised</h4>
              <h4>BoxOffice</h4>
              <h4>Country</h4>
              <h4>Production</h4>
              <h4>Actors</h4>
              <h4>Director</h4>
              <h4>Writers</h4>
            </div>
            <div className="aboutFilmFromServer">
              <h4>{post?.Year}</h4>
              <h4>{post?.Released}</h4>
              <h4>{post?.BoxOffice}</h4>
              <h4>{post?.Country}</h4>
              <h4>{post?.Production}</h4>
              <h4> {post?.Actors}</h4>
              <h4>{post?.Director}</h4>
              <h4>{post?.Writer}</h4>
            </div>
          </div>
          <div className="recomendationPosts">
            <h2>Recomendation</h2>
            <div className="arrowRecomendationPosts">
              <Arrow
                vector="left"
                onClick={() => {
                  console.log("arrowLeft");
                }}
              ></Arrow>
              <Arrow
                vector=""
                onClick={() => {
                  console.log("arrowRigth");
                }}
              ></Arrow>
            </div>
          </div>
          <div className="posts">
            {posts
              ?.slice(1, 5)
              .map(({ Title, Year, imdbID, Type, Poster }: PostsProps) => (
                <div onClick={() => setSearch(search + 1)} className="card">
                  <PostCard
                    title={Title}
                    year={Year}
                    imdbID={imdbID}
                    type={Type}
                    poster={Poster}
                    rating="7.6"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    )
  );
};
