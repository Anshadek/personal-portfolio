import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';

const Portfolio = () => {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      loop: true,
      zoomable: true,
    });

    return () => lightbox.destroy(); // clean up on unmount
  }, []);

  return (
    <section id="portfolio" className="portfolio section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
          consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
          sit in iste officiis commodi quidem hic quas.
        </p>
      </div>

      <div className="container">
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
          {/* Portfolio Filter Buttons */}
          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-product">Product</li>
            <li data-filter=".filter-branding">Branding</li>
            <li data-filter=".filter-books">Books</li>
          </ul>

          {/* Portfolio Grid */}
          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
            {portfolioItems.map((item, index) => (
              <div key={index} className={`col-lg-4 col-md-6 portfolio-item isotope-item ${item.filter}`}>
                <div className="portfolio-content h-100">
                  <img src={item.image} className="img-fluid" alt={item.title} />
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <a
                      href={item.image}
                      title={item.title}
                      data-gallery={`portfolio-gallery-${item.filter}`}
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a href="portfolio-details.html" title="More Details" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const portfolioItems = [
  {
    title: 'App 1',
    description: 'Lorem ipsum, dolor sit amet consectetur',
    image: 'assets/img/portfolio/app-1.jpg',
    filter: 'filter-app',
  },
  {
    title: 'Product 1',
    description: 'Lorem ipsum, dolor sit amet consectetur',
    image: 'assets/img/portfolio/product-1.jpg',
    filter: 'filter-product',
  },
  {
    title: 'Branding 1',
    description: 'Lorem ipsum, dolor sit amet consectetur',
    image: 'assets/img/portfolio/branding-1.jpg',
    filter: 'filter-branding',
  },
  {
    title: 'Books 1',
    description: 'Lorem ipsum, dolor sit amet consectetur',
    image: 'assets/img/portfolio/books-1.jpg',
    filter: 'filter-books',
  },
  {
    title: 'App 2',
    description: 'Lorem ipsum, dolor sit amet consectetur',
    image: 'assets/img/portfolio/app-2.jpg',
    filter: 'filter-app',
  },
  {
    title: 'Product 2',
    description: 'Lorem ipsum, dolor sit amet consectetur',
    image: 'assets/img/portfolio/product-2.jpg',
    filter: 'filter-product',
  },
  {
    title: 'Branding 2',
    description: 'Lorem ipsum, dolor sit amet consectetur',
    image: 'assets/img/portfolio/branding-2.jpg',
    filter: 'filter-branding',
  },
  {
    title: 'Books 2',
    description: 'Lorem ipsum, dolor sit amet consectetur',
    image: 'assets/img/portfolio/books-2.jpg',
    filter: 'filter-books',
  },
  {
    title: 'App 3',
    description: 'Lorem ipsum, dolor sit amet consectetur',
    image: 'assets/img/portfolio/app-3.jpg',
    filter: 'filter-app',
  },
  {
    title: 'Product 3',
    description: 'Lorem ipsum, dolor sit amet consectetur',
    image: 'assets/img/portfolio/product-3.jpg',
    filter: 'filter-product',
  },
  {
    title: 'Branding 3',
    description: 'Lorem ipsum, dolor sit amet consectetur',
    image: 'assets/img/portfolio/branding-3.jpg',
    filter: 'filter-branding',
  },
  {
    title: 'Books 3',
    description: 'Lorem ipsum, dolor sit amet consectetur',
    image: 'assets/img/portfolio/books-3.jpg',
    filter: 'filter-books',
  },
];

export default Portfolio;
