import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

export const Back = () => (
  <div className="bg-white bg-opacity-60 rounded-xl shadow-lg max-w-lg p-4 mt-4 height-1000">
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        type: 'bullets',
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide><Slide1 /></SwiperSlide>
      <SwiperSlide><Slide2 /></SwiperSlide>
      <SwiperSlide><Slide3 /></SwiperSlide>
    </Swiper>
  </div>
);

const Slide1 = () => (
  <div className="flex flex-col h-full">
    <div className="flex flex-col">
      <span className="text-sm text-purple-500 font-medium mb-1">Vietnamese Definition</span>
      <span className="text-xl text-gray-800">The fact of finding interesting or valuable things by chance</span>
    </div>
    <div className="flex flex-col">
      <span className="text-sm text-purple-500 font-medium mb-1">Level</span>
      <span className="text-xl text-gray-800">C1</span>
    </div>
  </div>
);

const Slide2 = () => (
  <div className="flex flex-col h-full">
    <div className="flex flex-col">
      <span className="text-sm text-purple-500 font-medium mb-1">Example sentance</span>
      <span className="text-xl text-gray-800">
        It was only through pure serendipity that they met and became friends.
      </span>
    </div>
    <div className="flex flex-col">
      <span className="text-sm text-purple-500 font-medium mb-1">Phrase collocation</span>
      <span className="text-xl text-gray-800">
        "a moment of serendipity", "serendipity struck", "pure serendipity"
      </span>
    </div>
  </div>
);

const Slide3 = () => (
  <div className="flex flex-col h-full">
    <div className="flex flex-col">
      <span className="text-sm text-purple-500 font-medium mb-1">original text</span>
      <span className="text-xl text-gray-800">
        Serendipity is the occurrence and development of events by chance in a happy or beneficial way.
      </span>
    </div>
  </div>
);  