import React from "react";
import Roadmap from "./Roadmap";
import SimpleGrid from "./SimpleGrid";
import MeetTheTeam from "./MeetTheTeam";
import EcoSystem from "./EcoSystem";

/*
import {
  TextSection,
  Quote,
  FullWidthImage,
  ImageGallery,
  ImageHighlight
} from './' */

const SliceZone = ({ sliceZone }) => (
  <>
    {sliceZone.map((slice, index) => {
      switch (slice.slice_type) {
        case "roadmap":
          return <Roadmap slice={slice} key={`slice-${index}`} />;
        case "simple_grid":
          return <SimpleGrid slice={slice} key={`slice-${index}`} />;
        case "meet_the_team":
          return <MeetTheTeam slice={slice} key={`slice-${index}`} />;
        case ('ecosystem'):
          return <EcoSystem slice={slice} key={`slice-${index}`} />
        /*case ('image_gallery'):
          return <ImageGallery slice={slice} key={`slice-${index}`} />
        case ('image_highlight'):
          return <ImageHighlight slice={slice} key={`slice-${index}`} />*/
        default:
          return null;
      }
    })}
  </>
);

export default SliceZone;
