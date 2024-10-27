"use client";
import toast, { Toaster } from "react-hot-toast";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const ContactForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);

      const contactData = {
        name: formData.name,
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        phone: formData.get("phone"),
        message: formData.get("message"),
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(contactData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      if (response.ok) {
        toast.success("Send successfull");
      }
      const data = await response.json();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="container mx-auto py-32 px-5 lg:px-[140px]">
      <div className="lg:flex justify-between items-start gap-10">
        {/* Contact Form Section */}
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <Toaster />
          <h4 className="text-gray-600 text-lg font-semibold">Send Me Email</h4>
          <h2 className="text-2xl lg:text-3xl font-bold mt-2 mb-6">
            Feel free to w rite
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                className="p-4 border border-gray-300 rounded-md w-full"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="p-4 border border-gray-300 rounded-md w-full"
                required
              />
              <input
                type="text"
                placeholder="Enter Subject"
                name="subject"
                className="p-4 border border-gray-300 rounded-md w-full"
                required
              />
              <input
                type="text"
                placeholder="Enter Phone"
                name="phone"
                className="p-4 border border-gray-300 rounded-md w-full"
              />
              <textarea
                placeholder="Enter Message"
                className="p-4 border border-gray-300 rounded-md w-full col-span-1 lg:col-span-2"
                rows="4"
                name="message"
                required
              ></textarea>
            </div>
            <div className="flex space-x-4 mt-6">
              <button
                type="submit"
                className="bg-gray-600 text-white py-3 px-8 rounded-md hover:bg-gray-700"
              >
                SEND MESSAGE
              </button>
              <div
                onClick={() => document.querySelector("form").reset()}
                className="bg-gray-300 text-black py-3 px-8 rounded-md hover:bg-gray-400 cursor-pointer"
              >
                RESET
              </div>
            </div>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="lg:w-1/2">
          <h4 className="text-gray-600 text-lg font-semibold">
            Need Any Help?
          </h4>
          <h2 className="text-xl lg:text-3xl font-bold mt-2 mb-6">
            Get in touch with me
          </h2>
          <p className="mb-8">
            Lorem ipsum is simply free text available dolor sit amet
            consectetuer notted adipiscing elit sed do eiusmod tempor incididunt
            simply dolore magna.
          </p>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-gray-600 text-white p-4 rounded-md">
                <FaPhoneAlt size={22} />
              </div>
              <div className="ml-4">
                <h6 className="text-lg font-semibold">Have any question?</h6>
                <p>Phone +88 (0171-0547636)</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-gray-600 text-white p-4 rounded-md">
                <FaEnvelope size={22} />
              </div>
              <div className="ml-4">
                <h6 className="text-lg font-semibold">Write email</h6>
                <p>sabbir0911hossain@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-gray-600 text-white p-4 rounded-md">
                <FaMapMarkerAlt size={22} />
              </div>
              <div className="ml-4">
                <h6 className="text-lg font-semibold">Visit anytime</h6>
                <p>Bashundhara R/A Halishar. Chattogram</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
