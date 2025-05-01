import PropTypes from "prop-types";
import { useState } from "react";

BackgroundSlider.propTypes = {
  children: PropTypes.node,
};
const bgImages = [
  "https://www.tourismluangprabang.org/wp-content/uploads/2022/06/slider4.jpg",
  "https://i0.wp.com/luangprabangmai.wordpress.com/wp-content/uploads/2019/06/maxresdefault1-1.jpg?fit=1200%2C675&ssl=1",
  "https://www.tourismluangprabang.org/wp-content/uploads/2022/06/slider3.jpg",
  "https://huunghivietlao.thoidai.com.vn/stores/news_dataimages/su.vu/102020/19/15/in_article/4850_Tad-Kuangsri-Waterfall.jpg",
  "https://live.staticflickr.com/4809/45185220315_b1b789de96.jpg",
  "https://www.tourismluangprabang.org/wp-content/uploads/2022/07/wat-xieng-thong-16-of-8-2.jpg"
];

export default function BackgroundSlider(props) {
  const [index, setIndex] = useState(0);
  const [slideOut, setSlideOut] = useState(false);

  const handleChange = () => {
    setSlideOut(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % bgImages.length);
      setSlideOut(false);
    }, 200); // match with transition duration
  };

  return (
    <div className="relative w-full h-screen overflow-auto">
      {/* Background */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-transform duration-500 ease-in-out ${
          slideOut ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"
        }`}
        style={{ backgroundImage: `url(${bgImages[index]})` }}
      >
         {props.children}
      </div>

      {/* Overlay content */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center pt-96">
        <button
          onClick={handleChange}
          className="bg-lime-300 text-black px-6 py-3 rounded shadow-lg font-semibold cursor-pointer"
        >
          ຄິກເພື່ອເບີ່ງຮູບພື້ນຫຼັງ
        </button>
      </div>
    </div>
  );
}


