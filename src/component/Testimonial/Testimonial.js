import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialData = [
  {
    id: 1,
    name: "Anil",
    text: "Beyond his role at ExploreNepic, Jp is a thought leader in the travel industry, advocating for sustainable tourism practices and community engagement initiatives.",
    img: "https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-1/358573380_1455018055286148_8639572447215361285_n.jpg?stp=c0.9.320.320a_dst-jpg_p320x320&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BS1R07xsYuwAX_wjR0U&_nc_ht=scontent.fktm20-1.fna&oh=00_AfC85Z6ERAtF5QmB6IJf_gCSw8CXXj_z6xXj-t1w4PGuCQ&oe=65F5E8F7",
  },
  {
    id: 2,
    name: "Virat",
    text: "Beyond his role at ExploreNepic, Jp is a thought leader in the travel industry, advocating for sustainable tourism practices and community engagement initiatives.",
    img: "https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/355635783_827185492107213_987427982017817761_n.jpg?stp=c0.89.1080.1080a_dst-jpg_s851x315&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JJT2x5DFKEEAX_g894P&_nc_ht=scontent.fktm20-1.fna&oh=00_AfC5LgL4iQVczcABwMuy5P3BOhphKuAGhBOgdjwo1i-34w&oe=65F5C290",
  },
  {
    id: 3,
    name: "Balen",
    text: "Beyond his role at ExploreNepic, Jp is a thought leader in the travel industry, advocating for sustainable tourism practices and community engagement initiatives.",
    img: "https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/289255631_2205776539587603_1490650401906001745_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=EC1Irwvyl7oAX8HAB6R&_nc_ht=scontent.fktm20-1.fna&oh=00_AfADQoRUoCVPluir8zq_Z-b3W__0bVDt9G1VjazRBZCjUQ&oe=65F6C3E6",
  },
  {
    id: 3,
    name: "Vikash Divyakriti",
    text: "Beyond his role at ExploreNepic, Jp is a thought leader in the travel industry, advocating for sustainable tourism practices and community engagement initiatives.",
    img: "https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-1/427810754_122102338154215007_7157977943763927360_n.jpg?stp=dst-jpg_p320x320&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nix7ySHEdawAX9l0ajb&_nc_ht=scontent.fktm20-1.fna&oh=00_AfD_TcY2e7imb1gB7tVF1NDdVrinKwW56fXbhhizIi5Z7Q&oe=65F686C6",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          <div className="text-center mb-5 max-w-[400px] mx-auto">
            
            <h1 className="text-3xl font-bold">Testimonial</h1>
            <p className="text-xs text-gray-400">
            This is ExploreNepic Team . We know for quality travel . "I've had the pleasure of traveling with ExploreNepic on multiple occasions, and each experience has been nothing short of extraordinary. From the moment I booked my trip, I was impressed by the professionalism and attention to detail of the ExploreNepic team.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[800px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-6">
                    <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-300 bg-primary/10 relative">
                      <img
                        src={img}
                        alt=""
                        className="rounded-full block mx-auto"
                      />
                      <h1 className="text-xl font-bold">{name}</h1>
                      <p className="text-gray-700 text-sm">{text}</p>
                      <p className="text-black/40 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;