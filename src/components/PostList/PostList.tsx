import React, { useEffect, useState } from "react";
import { getPost, delProps } from "../../features/posts";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { PostCard } from "../PostCard";
import { delPost } from "../../features/posts";
import "./postList.css";

export const PostList = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState(2);

  const postSearch = useAppSelector((state) => state.posts.postSearch);
  const numPage = useAppSelector((state) => state.posts.num);

  const clearPage = () => {
    dispatch(delProps(String(Number(numPage) + 1)));
  };

  const getNewPost = () => {
    dispatch(getPost(String(postSearch.split("page=")[0] + `page=${numPage}`)));
  };
  useEffect(() => {
    dispatch(delPost(null));
    dispatch(getPost(String(postSearch)));
  }, []);

  const post = useAppSelector((state) => state.posts.content);

  type PostProps = {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  };
  return (
    <div className="postList">
      <>
        {post?.map(({ Title, Year, imdbID, Type, Poster }: PostProps) => (
          <div className="card">
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
      </>
      <div className="buttonSpiner">
        <button
          className="buttonShowMore"
          onClick={(e) => {
            clearPage();
            getNewPost();
          }}
        >
          Show more
        </button>
      </div>
    </div>
  );
};
