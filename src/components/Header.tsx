import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { auth, provider } from "../firebase";

import { LoginButton } from "./LoginButton";
import { NavMenuItem } from "./NavMenuItem";
import { UserMenu } from "./UserMenu";

import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setUserSignOut,
} from "../redux/user/userSlice";

const navMenuItems = [
  {
    text: "HOME",
    src: "/images/home-icon.svg",
    href: "/home",
  },
  {
    text: "SEARCH",
    src: "/images/search-icon.svg",
    href: "/search",
  },
  {
    text: "WATCHLIST",
    src: "/images/watchlist-icon.svg",
    href: "/watchlist",
  },
  {
    text: "ORIGINALS",
    src: "/images/original-icon.svg",
    href: "/originals",
  },
  {
    text: "MOVIES",
    src: "/images/movie-icon.svg",
    href: "/movies",
  },
  {
    text: "SERIES",
    src: "/images/series-icon.svg",
    href: "/series",
  },
];

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((res) => {
          handleSetUser(res.user);
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      auth
        .signOut()
        .then(() => {
          dispatch(setUserSignOut());
          history.push("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  const handleSetUser = (user: any) => {
    dispatch(
      setUserLogin({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        handleSetUser(user);
        if (location.pathname === "/") history.push("/home");
      } else {
        history.push("/");
      }
    });
  }, [userName]);

  return (
    <Navbar>
      <Logo>
        <img src="/images/logo.svg" alt="" />
      </Logo>
      {userName ? (
        <>
          <NavMenu>
            {navMenuItems.map((item, index) => (
              <NavMenuItem key={index} {...item} />
            ))}
          </NavMenu>
          <UserMenu photo={userPhoto} onSignOut={handleAuth} />
        </>
      ) : (
        <>
          <LoginButton onClick={handleAuth} />
        </>
      )}
    </Navbar>
  );
};

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;

  height: 70px;
  padding: 0 36px;

  background-color: #090b13;

  display: flex;
  justify-content: space-between;
  align-items: center;

  letter-spacing: 16px;
`;

const Logo = styled.div`
  display: inline-block;

  width: 80px;
  max-height: 70px;
  margin-top: 4px;

  > img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;

  height: 100%;
  margin: 0 auto 0 25px;
  padding: 0;

  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`;
