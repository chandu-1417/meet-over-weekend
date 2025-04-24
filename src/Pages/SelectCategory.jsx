import React, { useContext, useState } from 'react';
import logo from '../assets/logo.png';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { tourContext } from '../Context/tourContext';

// Static imports of all tour images
import gokarnaThumb from '../assets/Gokarna-mow_thumb.jpg';
import kashmirThumb from '../assets/kashmirmow_thumb.jpeg';
import manaliThumb from '../assets/manaliThumb.jpg';
import meghalayaThumb from '../assets/meghalayaThumb.jpg';
import manaliCoupleThumb from '../assets/manaliCoupleThumb.jpg';
import coorgThumb from '../assets/coorg&chikmangulurThumb.png';
import keralaThumb from '../assets/keralaThumb.jpg';
import pondicherryThumb from '../assets/pondicherryThumb.jpg';
import ootyThumb from '../assets/ootyThumb.jpg';
import wayanandThumb from '../assets/wayanandThumb.png';
import ladakhThumb from '../assets/ladakh_thumb.jpg';
import kedarnathThumb from '../assets/kedaranathThumb.jpg';
import dhodhamThumb from '../assets/dhoodamThumb.jpg';
import ootyCoonoorThumb from '../assets/ootycoonorThumb.jpeg';
import thailandThumb from '../assets/ThailandThumb.jpg';
import keralaSpecialThumb from '../assets/keralaSpecialThumb.jpg';
import vietnamThumb from '../assets/vibrantVietnamThumb.jpg';
import ladakhBackpackThumb from '../assets/ladakhBackpackThumb.png';
import chardhamThumb from '../assets/chardhamThumb.jpg';
import kashmirLakesThumb from '../assets/kashmirLakesThumb.jpg';

// Map JSON image filenames to imported assets
const imageMap = {
  'gokarnaThumb.jpg': gokarnaThumb,
  'kashmirThumb.jpg': kashmirThumb,
  'manaliThumb.jpg': manaliThumb,
  'meghalayaThumb.jpg': meghalayaThumb,
  'manaliCoupleThumb.jpg': manaliCoupleThumb,
  'coorgThumb.jpg': coorgThumb,
  'kerala.jpg': keralaThumb,
  'pondicherryThumb.jpg': pondicherryThumb,
  'ootyThumb.jpg': ootyThumb,
  'wayanandThumb.jpg': wayanandThumb,
  'ladakhThumb.jpg': ladakhThumb,
  'kedarnathThumb.jpg': kedarnathThumb,
  'dhodhamThumb.jpg': dhodhamThumb,
  'ootyCoonoorThumb.jpg': ootyCoonoorThumb,
  'thailandThumb.jpg': thailandThumb,
  'keralaSpecialThumb.jpg': keralaSpecialThumb,
  'vietnamThumb.jpg': vietnamThumb,
  'ladakhBackpackThumb.jpg': ladakhBackpackThumb,
  'chardhamThumb.jpg': chardhamThumb,
  'kashmirLakes.jpg': kashmirLakesThumb
};

const SelectCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const { tours, setProductid } = useContext(tourContext);

  // Build category list
  const categories = [
    'All categories',
    ...new Set(tours.map((tour) => tour.category))
  ];

  // Filter tours based on selected category
  const filteredTours =
    selectedCategory && selectedCategory !== 'All categories'
      ? tours.filter((tour) => tour.category === selectedCategory)
      : tours;

  return (
    <div className='w-full min-h-[100vh] bg-gradient-to-b from-[#f05f57] to-[#360940]'>
      <div className='flex flex-col items-center py-6'>
        <img src={logo} alt='Logo' className='h-[13vh] w-[13vh]' />
        <h2 className='text-3xl sm:text-2xl font-bold text-white'>Book My Trip</h2>

        {/* Category Filter Dropdown */}
        <div className='mt-12 w-44 flex justify-center'>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className='w-[80%] sm:w-full p-2 rounded-lg bg-white text-gray-800 focus:outline-blue-400 focus:ring-2 focus:ring-[#f05f57]'
          >
            {categories.map((category, idx) => (
              <option key={idx} value={category === 'All categories' ? '' : category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className='flex flex-col items-center gap-4 pb-12 pt-4'>
        {filteredTours.map((item) => (
          <Link
            to={`/booking-details/${item.id}`}
            key={item.id}
            onClick={() => setProductid(item.id)}
          >
            <div className='w-[90vw] sm:w-[60vw] bg-white py-2 px-2 rounded-full flex items-center justify-between hover:scale-105 transition duration-500 shadow-2xl'>
              <img
                src={imageMap[item.image]}
                alt={item.title}
                className='w-[6vh] h-[6vh] rounded-full'
              />
              <p className='text-lg font-semibold text-center w-[50%]'>
                {item.title}
              </p>
              <div className='flex gap-3'>
                <button className='rounded-full text-gray-800 flex items-center text-lg'>
                  <FaDownload />
                </button>
                <button className='px-1.5 py-1 sm:px-3 sm:py-2 bg-gray-600 rounded-full text-white text-sm'>
                  Book Now
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className='text-center mt-5 pb-6 text-white flex text-4xl gap-3 justify-center'>
        <FaInstagram className='hover:scale-110 transition duration-150' />
        <FaFacebook className='hover:scale-110 transition duration-150' />
        <FaWhatsapp className='hover:scale-110 transition duration-150' />
      </div>
    </div>
  );
};

export default SelectCategory;
