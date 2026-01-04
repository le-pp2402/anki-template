import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import type { Message } from '../App';

export const Back = ({ data, redIndexes, answer }: {
  data: Message['data'],
  redIndexes: number[],
  answer: string
}) => (
  <div className="bg-white bg-opacity-70 rounded-xl shadow-md w-full max-w-sm p-3 mt-3 sm:max-w-lg sm:p-4">
    <Swiper
      slidesPerView={1}
      spaceBetween={16}
      loop={false}
      pagination={{
        type: 'bullets',
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide><p className="text-xl sm:text-2xl font-bold text-center">
        {answer.split("").map((ch, i) => (
          <span
            key={i}
            className={redIndexes.includes(i) ? "text-red-500" : "text-green-500"}
          >
            {ch}
          </span>
        ))}
      </p>
      </SwiperSlide>
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
      <span className="text-xs sm:text-sm text-purple-500 font-medium mb-1">Vietnamese Definition</span>
      <span className="text-lg sm:text-xl text-gray-800 leading-relaxed">{vietnameseDefinition || 'N/A'}</span>
    </div>
    <div className="flex flex-col">
      <span className="text-xs sm:text-sm text-purple-500 font-medium mb-1">Level</span>
      <span className="text-lg sm:text-xl text-gray-800">{level || 'N/A'}</span>
    </div>
  </div>
);

const Slide2 = ({ exampleSentence, phraseCollocation }: {
  exampleSentence: string | null;
  phraseCollocation: string | null;
}) => (
  <div className="flex flex-col h-full">
    <div className="flex flex-col">
      <span className="text-xs sm:text-sm text-purple-500 font-medium mb-1">Example sentance</span>
      <span className="text-lg sm:text-xl text-gray-800 leading-relaxed">
        {exampleSentence || 'N/A'}
      </span>
    </div>
    <div className="flex flex-col">
      <span className="text-xs sm:text-sm text-purple-500 font-medium mb-1">Phrase collocation</span>
      <span className="text-lg sm:text-xl text-gray-800 leading-relaxed">
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
      <span className="text-xs sm:text-sm text-purple-500 font-medium mb-1">original text</span>
      <span className="text-lg sm:text-xl text-gray-800 leading-relaxed">
        {originalText || 'N/A'}
      </span>
    </div>
  </div>
);  