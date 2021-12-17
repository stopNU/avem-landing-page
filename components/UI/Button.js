import React from "react";
import { default as NextLink } from "next/link";
import { Link } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";
import { MdChevronRight } from "react-icons/md";

// Main DocLink component function for generating links to other pages on this site
const DocLink = ({ children, link, isPrimary }) => {
  const isButtonPrimary = isPrimary ? "primary" : "secondary";

  if (link) {
    // If the link is an internal link, then return a NextLink
    if (link.link_type && link.link_type === "Document") {
      return (
        <NextLink href={linkResolver(link)}>
          <a className={`btn ${isButtonPrimary}`}>{children}</a>
        </NextLink>
      );
    }

    // Otherwise return a normal anchor element
    return (
      <div className={`btn ${isButtonPrimary}`}>
        {!isPrimary && <MdChevronRight />}
        <a href={Link.url(link)} target={link.target}>
          {children}
        </a>
      </div>
    );
  }
  return null;
};

export default DocLink;
