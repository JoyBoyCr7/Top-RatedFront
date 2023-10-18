import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <div>
          <h1>Top Rated</h1>
          <Slider {...settings}>
            <div>
              <img src="https://m.media-amazon.com/images/I/81ISEt4QVJL._AC_UY436_FMwebp_QL65_.jpg"></img>
            </div>
            <div>
              <img src="https://m.media-amazon.com/images/I/91geLq8Ua8L._AC_UY436_FMwebp_QL65_.jpg"></img>
            </div>
            <div>
              <img src="https://m.media-amazon.com/images/I/81ZbU7IuieL._AC_UY436_QL65_.jpg"></img>
            </div>
            <div>
              <img src="https://m.media-amazon.com/images/I/71Yeepp-7BL._AC_UY436_FMwebp_QL65_.jpg"></img>
            </div>
            <div>
              <img src="https://m.media-amazon.com/images/I/91wKh-pDgWL._AC_UY436_QL65_.jpg"></img>
            </div>
            
          </Slider>
        </div>
      );
    }
  