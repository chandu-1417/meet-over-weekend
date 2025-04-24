import React, { useContext, useState } from 'react';
import logo from '../assets/logo.png';
import { IoTimeOutline, IoCalendarOutline } from 'react-icons/io5';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link, useParams } from 'react-router-dom';
import { tourContext } from '../Context/tourContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoArrowBack } from "react-icons/io5";

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

const BookingDetails = () => {
  const { id } = useParams();
  const { tours } = useContext(tourContext);
  const selectedTour = tours.find(t => t.id === parseInt(id));

  const [formData, setFormData] = useState({
    numberOfPersons: 1,
    extraRoom: false,
    roomType: 'standard',
    startDate: new Date(),
    fullName: '',
    whatsapp: '',
    email: '',
    specialRequests: '',
    agreeTerms: false
  });

  const handleChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBookNow = () => {
    const { fullName, whatsapp, email, agreeTerms } = formData;
    if (!fullName.trim() || !whatsapp.trim() || !email.trim()) {
      toast.error('Please fill in all required fields', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      return;
    }

    if (!agreeTerms) {
      toast.error('Please agree to the terms and conditions', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      return;
    }
    const { numberOfPersons, extraRoom, roomType, startDate, specialRequests } = formData;
    const dateStr = startDate.toLocaleDateString('en-GB');
    const message = `*New Booking Enquiry*\nTour: ${selectedTour.title}\nDate: ${dateStr}\nPersons: ${numberOfPersons}\nExtra Room: ${extraRoom ? 'Yes' : 'No'}\nRoom Type: ${roomType}\nName: ${fullName}\nWhatsApp: ${whatsapp}\nEmail: ${email}\nRequests: ${specialRequests}`;
    const yourNumber = '917732078341';
    window.open(`https://wa.me/${yourNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (!selectedTour) return <div className="text-center mt-10">Tour not found</div>;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-6 px-4">
      <ToastContainer position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" />
      
      <header className="text-center mb-6">
        <img src={logo} alt="Logo" className="h-20 mx-auto" />
        <p className="text-lg">BOOKING PORTAL</p>
        <h1 className="text-3xl font-bold">Book My Trip</h1>
        <p className='pb-4'>Customer Support: +91 XXXXX XXXXX</p>
       
      </header>
      

      <main className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6 mt-3 relative">
      <Link to="/"><div className='flex items-center gap-1 absolute -top-8'><IoArrowBack /> Back</div></Link>
        {/* Tour Info */}
        <div className="flex flex-col md:flex-row items-center md:justify-between mb-5">

          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-1">{selectedTour.title}</h2>
            <p className="flex items-center justify-center md:justify-start gap-1 text-gray-700">
              <IoTimeOutline /> {selectedTour.duration}
            </p>
            <p className="text-gray-600">Status: <span className="text-orange-500">Filling Fast</span></p>
          </div>
          <img src={imageMap[selectedTour.image]} alt={selectedTour.title} className="w-32 h-32 md:w-32 md:h-20 rounded-lg object-cover mt-4 md:mt-0" />
        </div>

        <hr />

        <p className="text-center text-lg mt-4">
          From <span className="text-2xl font-bold text-green-600">₹{selectedTour.pricePerPerson}</span> per person.
        </p>

        <form className="space-y-6 mt-6">
          {/* Travel Date with Icon */}
          <div className="flex flex-col relative">
            <label className="font-medium text-gray-700 mb-2">Select Travel Date</label>
            <IoCalendarOutline className="absolute left-3 top-[70%] transform -translate-y-1/2 text-gray-400 text-xl" />
            <DatePicker
              selected={formData.startDate}
              onChange={date => handleChange('startDate', date)}
              minDate={new Date()}
              className="w-full pl-12 p-2 border rounded-lg focus:ring-blue-500"
            />
          </div>

          {/* Personal Details */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold border-b pb-1">Personal Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-gray-700 mb-1">Full Name</label>
                <input type="text" value={formData.fullName} onChange={e => handleChange('fullName', e.target.value)} className="w-full p-2 border rounded-lg focus:ring-blue-500" />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-700 mb-1">WhatsApp Number</label>
                <input type="tel" value={formData.whatsapp} onChange={e => handleChange('whatsapp', e.target.value)} className="w-full p-2 border rounded-lg focus:ring-blue-500" />
              </div>
              <div className="flex flex-col sm:col-span-2">
                <label className="text-gray-700 mb-1">Email Address</label>
                <input type="email" value={formData.email} onChange={e => handleChange('email', e.target.value)} className="w-full p-2 border rounded-lg focus:ring-blue-500" />
              </div>
            </div>
          </section>

          {/* Booking Preferences */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold border-b pb-1">Booking Preferences</h3>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center">
                <label className="mr-2 text-gray-700">Persons:</label>
                <div className="flex items-center border rounded-lg overflow-hidden">
                  <button type="button" onClick={() => handleChange('numberOfPersons', Math.max(1, formData.numberOfPersons - 1))} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 transition text-lg">-</button>
                  <span className="px-6 py-2 text-center text-lg">{formData.numberOfPersons}</span>
                  <button type="button" onClick={() => handleChange('numberOfPersons', formData.numberOfPersons + 1)} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 transition text-lg">+</button>
                </div>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="extra-room" checked={formData.extraRoom} onChange={e => handleChange('extraRoom', e.target.checked)} className="mr-2" />
                <label htmlFor="extra-room" className="text-gray-700">Extra room (+₹1500)</label>
              </div>
            </div>
          </section>

          {/* Special Requests */}
          <section className="flex flex-col">
            <label className="text-gray-700 mb-1">Special Requests</label>
            <textarea value={formData.specialRequests} onChange={e => handleChange('specialRequests', e.target.value)} placeholder="Dietary/access needs" className="w-full p-2 border rounded-lg focus:ring-blue-500 h-24 resize-none"></textarea>
          </section>

          {/* Terms & Book Now */}
          <div className="flex flex-col items-center">
            <label className="flex items-center mb-4">
              <input type="checkbox" checked={formData.agreeTerms} onChange={e => handleChange('agreeTerms', e.target.checked)} className="mr-2" />
              <span className="text-gray-700">I agree to the terms and conditions</span>
            </label>
            <button type="button" onClick={handleBookNow} className="w-full sm:w-auto px-6 py-3 bg-green-800 text-white rounded-lg hover:bg-green-600 disabled:opacity-50 transition">
              Book Now via WhatsApp
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default BookingDetails;
