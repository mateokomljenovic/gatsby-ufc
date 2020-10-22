import React from "react";
import { graphql } from "gatsby";
import FighterList from "../components/FighterList";

export default function FightersPage({data}) {
  const fighters = data.fighters.nodes
  return (
    <>
    <FighterList fighters={fighters}/>
    </>
  );
}

export const query = graphql`
  query FightersQuery {
    fighters: allSanityFighter {
      nodes {
        name
        id
        price
        slug {
          current
        }
        division {
          id
          name
        }
        image {
          asset {
            fluid(maxWidth: 400){
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
