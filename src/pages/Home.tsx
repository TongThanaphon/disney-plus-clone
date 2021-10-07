import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { ImageSlice } from "../components/ImageSlice";
import { Viewer } from "../components/Viewer";
import { MovieSection } from "../components/MovieSection";

import {
  selectNewDisney,
  selectOriginal,
  selectRecommend,
  selectTrending,
  setMovies,
} from "../redux/movie/movieSlice";
import { selectUserName } from "../redux/user/userSlice";

import db from "../firebase";

const ImageSliceItems = [
  "/images/slider-badging.jpg",
  "/images/slider-scale.jpg",
  "/images/slider-badag.jpg",
  "/images/slider-scales.jpg",
];

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const recommend = useSelector(selectRecommend);
  const newDisney = useSelector(selectNewDisney);
  const original = useSelector(selectOriginal);
  const trending = useSelector(selectTrending);

  useEffect(() => {
    let recommends: any[] = [];
    let newDisneys: any[] = [];
    let originals: any[] = [];
    let trendings: any[] = [];

    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trendings = [...trendings, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trendings,
        })
      );
    });
  }, [userName]);

  return (
    <Container>
      <ImageSlice items={ImageSliceItems} />
      <Viewer />
      <MovieSection title="Recommended for You" movies={recommend} />
      <MovieSection title="New to Disney+" movies={newDisney} />
      <MovieSection title="Original" movies={original} />
      <MovieSection title="Trending" movies={trending} />
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  display: block;

  position: relative;
  top: 72px;

  min-height: calc(100vh - 250px);
  padding: 0 calc(3.5vw + 5px);

  overflow-x: hidden;

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;

    content: "";

    position: absolute;
    inset: 0;
    z-index: -1;
  }
`;
