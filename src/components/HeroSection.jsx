import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../context";

import { Button } from "../styles/Button";

const HeroSection = () => {
  const {name,image} = useGlobalContext();

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">This is me </p>
          <h1 className="hero-heading">{name}</h1>
          <p className="hero-para">
            I'm {name}. A Full stack Developer, youtuber and freelancer. A
            full stack Development, from our youtube library and freelancer.
          </p>
          <Button className="btn hireme-btn">
            <NavLink to="/contact">hire me </NavLink>
          </Button>
        </div>

        {/* for image */}

        <div className="section-hero-image">
          <picture>
            <img className="hero-img" src={image} alt="" />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: start;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
    font-size: 1.5rem;
  }
  .section-hero-image {
    display: flex;
    justify-content: end;
    align-items: end;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 100%;
    border-radius: 5%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid{
      gap: 7.2rem;
    }

  }
`;

export default HeroSection;
