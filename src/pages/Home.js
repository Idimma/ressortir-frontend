import React, { Component, useState } from "react";
import Layout from "../components/Layout";
import { isMobileOnly } from "react-device-detect";
import { NavLink } from "react-router-dom";
import { Carousel, CarouselIndicators, CarouselItem } from "reactstrap";

const items = [
  // {
  //     src: 'images/sliders/s-1.jpg',
  //     altText: 'Slide 0',
  // },
  // {
  //     src: 'images/sliders/s-diesel.jpg',
  //     altText: 'Slide 1',
  // },
  // {
  //     src: 'images/sliders/bdressortir-team.jpg',
  //     altText: 'Slide 1',
  // },

  {
    src: "images/sliders/s-diesel-2.jpg",
    altText: "Slide 3"
  },
  {
    src: "images/sliders/s-freight.jpg",
    altText: "Slide 4"
  },
  {
    src: "images/sliders/s-diesel-m.jpg",
    altText: "Slide 4"
  },
  // {
  // src: 'images/sliders/bd.res.banner2.jpg',
  // altText: 'Slide 1',
  // },
  {
    src: "images/sliders/workers.png",
    altText: "Slide 1"
  },
  {
    src: "images/sliders/s-lpg.jpg",
    altText: "Slide 2"
  }
];

const Sliders = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item, index) => {
    return (
      <CarouselItem
        className={"slide-show w-100 position-relative"}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        slide
      >
        <div className="slide-show-item w-100 bg-overlay">
          <div className="slide-show-img w-100">
            <img
              src={item.src}
              className="imager"
              width="100%"
              height="100%"
              alt="slide img"
            />
          </div>
          <div className="container d-flex align-items-center h-100">
            {index === 0 ? (
              <div className=" col-lg-12 ">
                {/* <h2 className="slide__title">Fast and efficient energy & logistics services.</h2> */}
                <div className="slide-img" />
                <h1 className="sliderdesc d-none d-md-block">
                  Welcome to Ressortir Global.
                </h1>

                {/* <a href="#" className="btn btn__primary btn__hover2 mr-30">Our Services</a> */}
              </div>
            ) : index === 1 ? (
              <div className="col-sm-12 col-md-12 col-lg-8 ">
                {/* <h2 className="slide__title">Fast and efficient energy & logistics services.</h2> */}
                <div className="slide-img" />
                <p className="sliderdesc d-none d-md-block">
                  Our core business at Ressortir is the sole-distribution of
                  Automotive Gas Oil and Liquefied Petroleum Gas. In addition,
                  Ressortir offers freight distribution across cities in
                  Nigeria.
                </p>
                <p className="sliderdesc d-none d-md-block">
                  With reputable years of experience and reliable channel of
                  distribution across the country, we always ensure fast and
                  accurate delivery of your products. We can handle long and
                  short term contracts for restaurants, factories, schools,
                  offices, and other multinationals.
                </p>

                {/* <a href="#" className="btn btn__primary btn__hover2 mr-30">Our Services</a> */}
              </div>
            ) : (
              <div style={{ height: 286 }} />
            )}
          </div>
        </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      interval={3000}
      previous={previous}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      {/*<CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}/>*/}

      {/*<CarouselControl direction="next" directionText="Next" onClickHandler={next}/>*/}
    </Carousel>
  );
};

class HomePage extends Component {
  componentDidMount() {}

  render() {
    return (
      <Layout innerClass="w-100" home noSideBar noBg>
        <section
          id="slider2"
          style={{ marginTop: isMobileOnly ? 65 : 0 }}
          className="slider p-0 w-100 slider-2"
        >
          <Sliders />
        </section>
        <div className="container   ">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8 ">
              {/* <h2 className="slide__title">Fast and efficient energy & logistics services.</h2> */}
              <h1 className="sliderdesc d-block d-md-none">
                Welcome to Ressortir Global.
              </h1>
              <p className="sliderdesc d-block d-md-none">
                Our core business at Ressortir is the sole-distribution of
                Automotive Gas Oil and Liquefied Petroleum Gas. In addition,
                Ressortir offers freight distribution across cities in Nigeria.
              </p>
              <p className="sliderdesc d-block d-md-none">
                With reputable years of experience and reliable channel of
                distribution across the country, we always ensure fast and
                accurate delivery of your products. We can handle long and short
                term contracts for restaurants, factories, schools, offices, and
                other multinationals.
              </p>
              {/* <a href="#" className="btn btn__primary btn__hover2 mr-30">Our Services</a> */}
            </div>
          </div>
        </div>
        <section className="p-0">
          <h2 className="services-title">Our Services</h2>
          <div className="container">
            <div className="row text-center justify-content-sm-center">
              <div className="col-sm-6 col-md-4">
                <div className="service-item service-item-1">
                  <div className="service__icon">
                    <i className="service__icon-diesel" />
                    <h1 className="service__title">Diesel Supply</h1>
                  </div>
                  <div className="service__content">
                    <NavLink
                      to="/diesel"
                      className="btn btn__white"
                      title="Diesel Supply"
                    >
                      <span>Request</span>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="service-item service-item-2">
                  <div className="service__icon">
                    <i className="service__icon-gas" />
                    <h1 className="service__title">Domestic Gas Refill</h1>
                  </div>
                  <div className="service__content">
                    <NavLink
                      to="/gas"
                      className="btn btn__white"
                      title="Domestic Gas Refill"
                    >
                      <span>Request</span>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="service-item service-item-1">
                  <div className="service__icon">
                    <i className="service__icon-lpg" />
                    <h1 className="service__title">LPG Tank Refill</h1>
                  </div>
                  <div className="service__content">
                    <NavLink
                      to="/lpg"
                      className="btn btn__white"
                      title="LPG Tank Refill"
                    >
                      <span>Request</span>
                    </NavLink>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-4">
                <div className="service-item service-item-2">
                  <div className="service__icon">
                    <i className="service__icon-freight" />
                    <h1 className="service__title">Freight Distribution</h1>
                  </div>
                  <div className="service__content">
                    <NavLink
                      to="/freight"
                      className="btn btn__white"
                      title="Freight Distribution"
                    >
                      <span>Request</span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mission pt-40 pb-30">
          <div className="container">
            <div className="row heading heading-2">
              <div className="col-12">
                <h2 className="heading__title">
                  <i className="heading__title-icon-mission" /> Our Mission
                </h2>
              </div>
              <div className="col-12">
                <p className="heading__desc pb-2">
                  Our mission statement is simple, yet the foundation of
                  everything we do at Ressortir , to provide outstanding
                  services.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="mission" className="mission pt-30 pb-60">
          <div className="container">
            <div className="row heading heading-2">
              <div className="col-12">
                <h2 className="heading__title">
                  <i className="heading__title-icon-policy" /> Company Policy
                </h2>
              </div>
              <div className="col-12">
                <p className="heading__desc pb-2">
                  Cooperate Style of leadership with the greatest possible
                  individual autonomy for our employees
                </p>
                <p className="heading__desc pb-2">
                  Satisfied Customers and employees are prime company targets
                </p>

                <p className="heading__desc pb-2">
                  Permanent innovative adaption to industry changes and economic
                  development
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default HomePage;
