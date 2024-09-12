import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialData = [
  {
    id: 1,
    name: "Anil",
    text: "Beyond his role at ExploreNepic, Jp is a thought leader in the travel industry, advocating for sustainable tourism practices and community engagement initiatives.",
    img: "https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/321137245_839350070469389_3291596650003006207_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ut5mLmS4H4EQ7kNvgGrKTo2&_nc_ht=scontent.fktm20-1.fna&oh=00_AYC-mJK0vgnQOPpc-eqhjU5H0PnMR2CyR8N3yxpz-O-eIg&oe=6650B80E",
  },
  {
    id: 2,
    name: "Virat",
    text: "Beyond his role at ExploreNepic, Jp is a thought leader in the travel industry, advocating for sustainable tourism practices and community engagement initiatives.",
    img: "https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/428349706_926492912585437_1859309200921360503_n.jpg?stp=dst-jpg_p206x206&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RNGY0Lpd6gQQ7kNvgFbr410&_nc_ht=scontent.fktm20-1.fna&oh=00_AYCIdeMZT6dk7pn5gCwFNMUboFRT2wNuhJGuDdtgUf0MaA&oe=66508A8C",
  },
  {
    id: 3,
    name: "Balen",
    text: "Beyond his role at ExploreNepic, Jp is a thought leader in the travel industry, advocating for sustainable tourism practices and community engagement initiatives.",
    img: "data:image/webp;base64,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",
  },
  {
    id: 3,
    name: "Vikash Divyakriti",
    text: "Beyond his role at ExploreNepic, Jp is a thought leader in the travel industry, advocating for sustainable tourism practices and community engagement initiatives.",
    img: "https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/424780265_122108651480195121_198777202375155624_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=34HTyWgo4_QQ7kNvgGELIRC&_nc_ht=scontent.fktm20-1.fna&oh=00_AYCWwUP6jL9UhkFXfv1tRl_ifC-DgkgYj43B1rJggFjuCQ&oe=66509CB9",
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