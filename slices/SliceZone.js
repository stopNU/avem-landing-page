import React from "react";
import Roadmap from "./Roadmap";
//import Quote from './Quote'

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
        /*case ('quote'):
          return <Quote slice={slice} key={`slice-${index}`} />
        case ('full_width_image'):
          return <FullWidthImage slice={slice} key={`slice-${index}`} />
        case ('image_gallery'):
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
