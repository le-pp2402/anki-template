import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import type { Message } from '../App';

export const Back = ({ data }: {
  data: Message['data']
}) => (
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
      <SwiperSlide><Slide1 vietnameseDefinition={data.vietnameseDefinition} level={data.level} /></SwiperSlide>
      <SwiperSlide><Slide2 exampleSentence={data.exampleSentence} phraseCollocation={data.phraseCollocation} /></SwiperSlide>
      <SwiperSlide><Slide3 originalText={data.originalText} /></SwiperSlide>
    </Swiper>
  </div>
);

const Slide1 = ({ vietnameseDefinition, level }: {
  vietnameseDefinition: string | null;
  level: string | null;
}) => (
  <div className="flex flex-col h-full">
    <div className="flex flex-col">
      <span className="text-sm text-purple-500 font-medium mb-1">Vietnamese Definition</span>
      <span className="text-xl text-gray-800">{vietnameseDefinition || 'N/A'}</span>
    </div>
    <div className="flex flex-col">
      <span className="text-sm text-purple-500 font-medium mb-1">Level</span>
      <span className="text-xl text-gray-800">{level || 'N/A'}</span>
    </div>
  </div>
);

const Slide2 = ({ exampleSentence, phraseCollocation }: {
  exampleSentence: string | null;
  phraseCollocation: string | null;
}) => (
  <div className="flex flex-col h-full">
    <div className="flex flex-col">
      <span className="text-sm text-purple-500 font-medium mb-1">Example sentance</span>
      <span className="text-xl text-gray-800">
        {exampleSentence || 'N/A'}
      </span>
    </div>
    <div className="flex flex-col">
      <span className="text-sm text-purple-500 font-medium mb-1">Phrase collocation</span>
      <span className="text-xl text-gray-800">
        {phraseCollocation || 'N/A'}
      </span>
    </div>
  </div>
);

const Slide3 = ({ originalText }: {
  originalText: string | null;
}) => (
  <div className="flex flex-col h-full">
    <div className="flex flex-col">
      <span className="text-sm text-purple-500 font-medium mb-1">original text</span>
      <span className="text-xl text-gray-800">
        {originalText || 'N/A'}
      </span>
    </div>
  </div>
);  