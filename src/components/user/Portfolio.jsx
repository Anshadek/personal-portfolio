import React, { useEffect } from "react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import { Link } from "react-router-dom";

const Portfolio = ({ portfolioData }) => {
  const { categories, items } = portfolioData;

  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
      zoomable: true,
    });

    return () => {
      lightbox.destroy();
    };
  }, [items]);

  return (
    <section id="portfolio" className="portfolio section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>
          Explore a collection of my work that showcases creativity, technical
          skills, and attention to detail.
        </p>
      </div>

      <div className="container">
        <div
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          {/* Filter Buttons */}
          <ul
            className="portfolio-filters isotope-filters"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <li data-filter="*" className="filter-active">
              All
            </li>
            {categories.map((category) => (
              <li key={category.id} data-filter={`.filter-${category.id}`}>
                {category.name}
              </li>
            ))}
          </ul>

          {/* Grid */}
          <div
            className="row gy-4 isotope-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {items.map((item, index) => {
              const imageUrl =
                item.images && item.images.length > 0
                  ? item.images[0].url
                  : "https://via.placeholder.com/400x300?text=No+Image";

              return (
                <div
                  key={index}
                  className={`col-lg-4 col-md-6 portfolio-item isotope-item ${item.filter}`}
                >
                  <div className="portfolio-content h-100">
                    <img
                      src={imageUrl}
                      className="img-fluid"
                      alt={item.title}
                      style={{ objectFit: "cover", width: "100%", height: "250px" }}
                    />
                    <div className="portfolio-info">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                      <a
                        href={imageUrl}
                        title={item.title}
                        data-gallery={`portfolio-gallery-${item.filter}`}
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </a>

                      <Link
                        to={`/portfolio-details/${index}`}
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
