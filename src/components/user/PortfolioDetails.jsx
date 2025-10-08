import React, { useEffect } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

const PortfolioDetails = () => {
  const { portfolioData } = useOutletContext();
  const { id } = useParams(); // now `filter` is actually the index value
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Convert the param to a number and find the item by index
  const index = Number(id);
  const item =
    !isNaN(index) && portfolioData.items[index]
      ? portfolioData.items[index]
      : null;
  if (!item) return <p>Project not found.</p>;

  return (
    <section id="portfolio-details" className="portfolio-details section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {/* Left: Image Slider */}
          <div className="col-lg-8">
            <Swiper
              loop={true}
              speed={600}
              autoplay={{ delay: 5000 }}
              slidesPerView="auto"
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination]}
              className="portfolio-details-slider"
            >
              {item.images && item.images.length > 0 ? (
                item.images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img src={img.url} alt={img.title} className="img-fluid" />
                  </SwiperSlide>
                ))
              ) : (
                <SwiperSlide>
                  <img
                    src="https://via.placeholder.com/800x600?text=No+Image"
                    alt="No image"
                    className="img-fluid"
                  />
                </SwiperSlide>
              )}
            </Swiper>
          </div>

          {/* Right: Info Section */}
          <div className="col-lg-4">
            <div
              className="portfolio-info"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3>{item.title}</h3>
              <ul>
                <li>
                  <strong>Category</strong>: {item.category || "N/A"}
                </li>
                <li>
                  <strong>Client</strong>: {item.client || "N/A"}
                </li>
                <li>
                  <strong>Project date</strong>: {item.ProjectDate || "N/A"}
                </li>
                <li>
                  <strong>Project URL</strong>:{" "}
                  <a href={item.project_url || "#"} target="_blank" rel="noreferrer">
                    {item.project_url || "No link"}
                  </a>
                </li>
              </ul>
            </div>

            <div
              className="portfolio-description"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h2>{item.subtitle || "Project Overview"}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioDetails;
