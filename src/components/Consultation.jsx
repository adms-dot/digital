import React, { useState } from 'react';

const Consultation = () => {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setPhoneNumber(e.target.value);
    setError(''); // Clear error on input change
  };

  const handleBlur = () => {
    if (phoneNumber.length < 10) {
      setError('Contact number must be exactly 10 digits long.');
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      setError('Please enter a valid 10-digit mobile number (digits only).');
    }
  };

  const [name, setName] = useState("");
  const [hosp, setHosp] = useState('');
  const [address, setAddress] = useState('');
  const [time, setTime] = useState('');
  const [status, setStatus] = useState("");

  // submit event
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      Name: name,
      Hospital: hosp,
      Contact: phoneNumber,
      Address: address,
      Time: time
    };

    const googleScriptURL = "https://script.google.com/macros/s/AKfycbw1xyY4XVdojwPdMqhrsF7f52JNJ69jInimafjzGzonWhz354oXfdQisTehbDr5cKAO-w/exec"; // Replace with your Google Apps Script URL
    const formBody = new URLSearchParams(data).toString();

    fetch(googleScriptURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formBody,
    })
    .then(response => response.text())
    .then(result => {
      if (result === "Success") {
        setStatus("Form submitted successfully!");
        setName('');
        setHosp('');
        setPhoneNumber('');
        setAddress('');
        setTime('');
      } else {
        setStatus("Form submission failed. Please try again.");
      }
    })
    .catch(() => {
      setStatus("There was an error submitting the form.");
    });
  }

  return (
    <div className='h-screen pt-32'>
      <div className="container mx-auto p-6 bg-zinc-200 rounded-lg shadow-lg max-w-lg">
        <h1 className="text-4xl font-bold text-center mb-6">Book a <span className='text-orange-500 text-5xl'>FREE</span> Consultation Now!!</h1>
        <form autoComplete="off" className="space-y-4" onSubmit={handleSubmit}>
          
          <div>
            <label className="block text-md font-semibold text-zinc-800">Doctor's Name</label>
            <input
              type="text"
              className="mt-1 block w-full py-2 px-2 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
              required
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              />
          </div>

          <div>
            <label className="block text-md font-semibold text-zinc-800">Venture Name</label>
            <input
              type="text"
              className="mt-1 block w-full py-2 px-2 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
              required
              placeholder="Enter the name of your Health Care Venture"
              onChange={(e) => setHosp(e.target.value)}
              value={hosp}
              />
          </div>

          <div>
            <label className="block text-md font-semibold text-zinc-800">Phone Number</label>
            <input
              type="tel"
              className={`mt-1 block w-full py-2 px-2 border rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 ${
                error ? 'border-red-500' : 'border-gray-300'
              }`}
              required
              placeholder="Enter your Phone Number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={phoneNumber}
            />
            {error && <div className="mt-1 text-sm text-red-500">{error}</div>}
          </div>

          <div>
            <label className="block text-md font-semibold text-zinc-800">Address</label>
            <input
              type="text"
              className="mt-1 block w-full py-2 px-2 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
              required
              placeholder="Enter the Address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              />
          </div>

          <div>
            <label className="block text-md font-semibold text-zinc-800">Time</label>
            <input
              type="time"
              className="mt-1 block w-full py-2 px-2 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => setTime(e.target.value)}
              value={time}
              />
          </div>

          <div className="text-center">
            <button type="submit" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">Submit</button>
          </div>
        </form>
        {status && <p className="mt-4 text-center text-lg font-semibold">{status}</p>}
      </div>
    </div>
  );
}

export default Consultation;
