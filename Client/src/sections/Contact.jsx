// import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

// const Contact = () => {
//   const form = useRef();
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();

//     if (!formData.name || !formData.email || !formData.message) {
//       setStatus("Please fill in all fields.");
//       return;
//     }

//     emailjs
//       .sendForm("service_j9m4rpj", "template_hkpmhyj", form.current, "T0fGjnOMp1-iJ_53X")
//       .then(
//         (result) => {
//           console.log("SUCCESS!", result.text);
//           setStatus("Message sent successfully!");
//           setFormData({ name: "", email: "", message: "" });
//         },
//         (error) => {
//           console.error("FAILED...", error);
//           setStatus("Failed to send message. Please try again later.");
//         }
//       );
//   };

//   return (
//     <section id="contact" className="py-20 px-6  text-white">
//       <div className="max-w-3xl mx-auto bg-white text-black rounded-lg shadow-lg p-8">
//         <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>

//         <form ref={form} onSubmit={sendEmail} className="space-y-6">
//           <div>
//             <label className="block mb-1 font-medium">Name</label>
//             <input
//               type="text"
//               name="name"
//               className="w-full border border-gray-300 rounded px-4 py-2"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div>
//             <label className="block mb-1 font-medium">Email</label>
//             <input
//               type="email"
//               name="email"
//               className="w-full border border-gray-300 rounded px-4 py-2"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div>
//             <label className="block mb-1 font-medium">Message</label>
//             <textarea
//               name="message"
//               rows="5"
//               className="w-full border border-gray-300 rounded px-4 py-2"
//               value={formData.message}
//               onChange={handleChange}
//               required
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded transition"
//           >
//             Send Message
//           </button>

//           {status && <p className="mt-4 text-sm text-red-600">{status}</p>}
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Dialog } from "@headlessui/react";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    emailjs
      .sendForm("service_j9m4rpj", "template_hkpmhyj", form.current, "T0fGjnOMp1-iJ_53X")
      .then(() => {
        setFormData({ name: "", email: "", message: "" });
        setStatus("");
        setIsModalOpen(true);
      })
      .catch((error) => {
        setStatus("Something went wrong. Please try again.");
        console.error(error);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="w-full max-w-3xl bg-white text-black rounded-2xl shadow-xl p-8 md:p-12">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          Let's Connect
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Feel free to reach out! I usually respond within 24 hours.
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition duration-300"
            >
              🚀 Send Message
            </button>
            {status && (
              <p className="mt-3 text-sm text-red-500">{status}</p>
            )}
          </div>
        </form>
      </div>

      {/* ✅ Success Modal */}
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-sm bg-white rounded-xl p-6 text-center shadow-xl">
            <Dialog.Title className="text-green-600 text-xl font-bold mb-2">
              🎉 Message Sent!
            </Dialog.Title>
            <Dialog.Description className="text-gray-600 mb-4">
              Thanks for reaching out! I'll get back to you soon.
            </Dialog.Description>
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded transition"
            >
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
};

export default Contact;
