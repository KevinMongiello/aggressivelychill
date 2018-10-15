import React from "react";
import BackgroundSlideshow from 'react-background-slideshow'
import image1 from "../images/landscape/image1.jpg"
import image2 from "../images/landscape/image2.jpg"
import image3 from "../images/landscape/image3.jpg"
import image4 from "../images/landscape/image4.jpg"
import image5 from "../images/landscape/image5.jpg"
import image6 from "../images/landscape/image6.jpg"

import portrait1 from "../images/portrait/image1.jpg"
import portrait2 from "../images/portrait/image2.jpg"
import portrait3 from "../images/portrait/image3.jpg"
import portrait4 from "../images/portrait/image4.jpg"
import portrait5 from "../images/portrait/image5.jpg"
import portrait6 from "../images/portrait/image6.jpg"
import portrait7 from "../images/portrait/image7.jpg"

class TileImageSlider extends React.Component {
  constructor(props) {
    super(props);
    let width;
    let isMobile;

    if (typeof window !== "undefined") {
      width = window.innerWidth;
      isMobile = width < 667;
    }

    const mobileImages = [ portrait1, portrait2, portrait3, portrait4, portrait5, portrait6 ];
    const desktopImages = [ image1, image2, image3, image4, image5, image6 ];
    const images = (isMobile)
      ? mobileImages
      : desktopImages;

    this.state = { images };

    this.step = () => {
      if (Date.now() - this.mostRecentCall > 150) {
        const newWidth = typeof window !== "undefined" && window.innerWidth;
        const newIsMobile = newWidth < 667;
        if (newIsMobile && !isMobile) {
          isMobile = true;
          this.setState({ images: mobileImages });
        } else if (isMobile && !newIsMobile) {
          isMobile = false;
          this.setState({ images: desktopImages });
        }

        this.isAnimating = false;
      } else {
        requestAnimationFrame(this.step);
      }
    }

    this.onResize = () => {
      this.mostRecentCall = Date.now();

      if (!this.isAnimating) {
        requestAnimationFrame(this.step);
        this.isAnimating = true;
      }
    }

    typeof window !== "undefined" && window.addEventListener('resize', this.onResize);
  }

  render() {
    return (
      <>
        <BackgroundSlideshow
          images={this.state.images}
        />
        <div className="overlay cover-title">
          Coming Soon!
        </div>
      </>
    );
  }
}

export default TileImageSlider
