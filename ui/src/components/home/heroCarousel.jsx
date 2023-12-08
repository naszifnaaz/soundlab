import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const HeroCarousel = () => {
  return (
    <Carousel
      className="carousel"
      autoPlay="true"
      infiniteLoop="true"
      interval="3000"
      showThumbs=""
    >
      <picture>
        <source
          media="(min-width:640px)"
          srcset="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Sail_with_boAt_WEB_2000x.jpg?v=1651669770"
        />
        <source
          media="(min-width:465px)"
          srcset="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/IM150_mob_500x.jpg?v=1686896654"
        />
        <img
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/IM150_mob_500x.jpg?v=1686896654g"
          alt="Carousel"
        />
      </picture>
      <picture>
        <source
          media="(min-width:640px)"
          srcset="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/WhatsApp_Image_2022-04-29_at_11.32.28_AM_1600x.jpg?v=1651212278"
        />
        <source
          media="(min-width:465px)"
          srcset="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/purple_mob-banner_500x.jpg?v=1685006383"
        />
        <img
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/purple_mob-banner_500x.jpg?v=1685006383"
          alt="Carousel"
        />
      </picture>
      <picture>
        <source
          media="(min-width:640px)"
          srcset="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD500_anc_wbann_2000x.jpg?v=1649855267"
        />
        <source
          media="(min-width:465px)"
          srcset="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/ultima-call_mob--2_500x.jpg?v=1687158298"
        />
        <img
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/ultima-call_mob--2_500x.jpg?v=1687158298"
          alt="Carousel"
        />
      </picture>
    </Carousel>
  );
};

export default Carousel;
