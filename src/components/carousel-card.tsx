import React, { useState, useEffect } from 'react';

const carouselItems = [
  {
    title: 'Solo Leveling: Ragnarok',
    rating: '9.7',
    category: 'MANHWA',
    genres: 'Action, Adventure, Fantasy',
    description: "By Redice studio that brought you <Solo Leveling>. The Earth's existence is under threat once more...",
    status: 'Ongoing',
    author: 'Daul',
    image: '/caro-item1.jpeg', // Replace with the actual image URL
  },
  {
    title: 'Item 2',
    description: 'Description for item 2.',
    status: 'Completed',
    author: 'Author 2',
    image: '/caro-item2.jpeg',
  },
  {
    title: 'Item 3',
    description: 'Description for item 3.',
    status: 'Completed',
    author: 'Author 3',
    image: '/caro-item3.jpeg',
  },
];

const truncateText = (text: string, MaxLength: number) => {
  if (text.length > MaxLength) {
    return text.slice(0, MaxLength) + '...';
  }
  return text;
};

export const CarouselCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[40vh] w-full overflow-hidden bg-slate-950/75 flex justify-center items-center">
      {/* Blurred Background */}
      <img
        src="/carousel-img.jpeg"
        alt="bg-caro"
        className="absolute inset-0 w-full h-full object-cover blur-sm  "
      />

      <div className="relative w-full max-w-4xl h-full flex justify-center items-center">
          <div className="absolute size-[35vh] w-[86.5vh] backdrop-blur-xl rounded-xl"></div>
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute w-full max-w-4xl h-full flex items-center justify-between transition-opacity duration-700 ${
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Left Section: Image */}
            <div className="absolute z-10 ml-10 w-1/3 h-full flex items-center justify-center">
              <img
                src={item.image}
                alt={`Slide ${index + 1}`}
                className="max-h-full max-w-full object-cover rounded-lg"
              />
            </div>

            {/* Right Section: Content */}
            <div className="absolute right-24 top-14 z-10 w-1/2 text-white px-4 ">
              <div className="flex items-center space-x-2">
                <div className="bg-yellow-400 text-black font-bold rounded-full w-8 h-8 flex items-center justify-center">
                  {item.rating}
                </div>
                <h2 className="text-lg font-bold">{item.title}</h2>
              </div>
              <p className="text-yellow-400 font-semibold text-sm">{item.category}</p>
              <p className="text-sm mb-2">{item.genres}</p>
              <h3 className="text-md font-bold">Summary</h3>
              <p className="text-sm mb-4">
                {truncateText(item.description, 100)}
              </p>
              <p><strong>Status:</strong> {item.status}</p>
              <p><strong>Author:</strong> {item.author}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Radio buttons for navigation */}
      <div className="absolute bottom-14 right-1/2 translate-x-1/2 flex space-x-2">
        {carouselItems.map((_, index) => (
          <input
            key={index}
            type="radio"
            name="carousel"
            className="hidden"
            checked={currentIndex === index}
            onChange={() => setCurrentIndex(index)}
          />
        ))}
        {carouselItems.map((_, index) => (
          <label
            key={index}
            className={`cursor-pointer w-3 h-3 rounded-full bg-orange-100 ${
              currentIndex === index ? 'opacity-120' : 'opacity-30'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
