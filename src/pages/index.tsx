import React from "react";

// Images
import Circle from "../assets/images/bg-pattern-circles.svg";
import DesignDesktop from "../assets/images/illustration-editor-desktop.svg";
import DesignMobile from "../assets/images/illustration-editor-mobile.svg";
import LaptopMobile from "../assets/images/illustration-laptop-mobile.svg";
import LaptopDesktop from "../assets/images/illustration-laptop-desktop.svg";
import Phones from "../assets/images/illustration-phones.svg";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      {/* Hero section */}
      <section className="min-h-[calc(100vh-4rem)] h-full bg-gradient-to-r from-lightRed to-lighterRed bg-opacity-20 rounded-bl-[6rem] sm:rounded-bl-[10rem] ">
        {/* Container */}
        <div className="flex justify-center ite">
          <div className="flex flex-col justify-center items-center">
            {/* <h1>A modern publishing platform</h1>
            <p>Grow your audience and build your online brand</p> */}

            {/* Buttons container */}
            {/* <div className="flex gap-6">
              <button>Start for Free</button>

              <button>Learn More</button>
            </div> */}
          </div>
        </div>
      </section>

      {/* Designed for the future section */}
      <section className="py-16 max-w-6xl mx-auto">
        <h2 className="text-darkBlue font-semibold text-xl text-center mb-8 md:text-3xl">
          Designed for the future
        </h2>

        {/* Container */}
        <div className="grid space-y-10 md:grid-cols-2 md:space-y-0 md:gap-6">
          {/* Image container */}
          <div className="grid order-1">
            <img
              className="justify-self-center md:h-[30rem]"
              src={DesignMobile}
              alt="Circle with a window"
            />
          </div>

          {/* Paragraphs container */}
          <div className="space-y-10">
            {/* Paragraph 1 */}
            <div className="space-y-3">
              <h3 className="md:text-left text-darkBlue px-10 text-2xl text-center font-semibold md:px-0">
                Introducing an extensible editor
              </h3>
              <p className="md:text-left text-center text-darkGrayishBue px-4 md:px-0">
                Blogr features an exceedingly intuitive interface which lets you
                focus on one thing: creating content. The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images, videos, and Markdown.Extensibility with
                blugins and functionality or change the looks of a blog.
              </p>
            </div>

            {/* Paragraph 2 */}
            <div className="space-y-3">
              <h3 className="md:text-left text-darkBlue px-8 text-2xl text-center font-semibold md:px-0">
                Robust content management
              </h3>
              <p className="md:text-left text-center text-darkGrayishBue px-4 md:px-0">
                Flexible content management enables users to easily move through
                posts, Increase the usability of your blog by adding customized
                categories, sections, format, or flow. With this functionality,
                you're in full control.
              </p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
