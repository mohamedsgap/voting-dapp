import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Modal from "../elements/Modal";
import Image from "../elements/Image";

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
};

const defaultProps = {
  ...SectionProps.defaults,
  split: false
};

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {
  const outerClasses = classNames(
    "cta section center-content-mobile reveal-from-bottom",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "cta-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider",
    split && "cta-split"
  );
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = e => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = e => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <div className="cta-slogan">
            <h3 className="m-0">
              Take a look at live vote transaction! [QUICK DEMO]
            </h3>
          </div>
        </div>
        <div
          className="hero-figure reveal-from-bottom illustration-element-01"
          data-reveal-value="20px"
          data-reveal-delay="800"
        >
          <a
            data-video="https://player.vimeo.com/video/174002812"
            href="#0"
            aria-controls="video-modal"
            onClick={openModal}
          >
            <Image
              className="has-shadow"
              src={require("./../../assets/images/video-placeholder.jpg")}
              alt="Hero"
              width={1100}
              height={350}
            />
          </a>
        </div>
        <Modal
          id="video-modal"
          show={videoModalActive}
          handleClose={closeModal}
          video="https://player.vimeo.com/video/174002812"
          videoTag="iframe"
        />
      </div>
    </section>
  );
};

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;
