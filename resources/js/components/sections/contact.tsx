

export default function ContactUs() {
  return (
    <section className=" py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Contact Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Business Name</label>
              <input type="text" className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500" placeholder="John" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Full Name</label>
              <input type="text" className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500" placeholder="Doe" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">WhatsApp number</label>
              <input type="text" className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500" placeholder="123-45-678" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Email address</label>
              <input type="email" className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500" placeholder="john.doe@company.com" />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
            <input type="text" className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500" placeholder="Enter subject" />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Message</label>
            <textarea rows={4} className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500" placeholder="Write your message..."></textarea>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Sales Enquiries</h3>
          <p className="text-gray-600 mb-6">
            Interested in any of our products? <br />
            Talk to our experts today
          </p>

          <div className="space-y-4">
            <p className="flex items-center gap-3 text-gray-800 justify-center">
              📞 +62 852 9798 8227
            </p>
            <p className="flex items-center gap-3 text-gray-800 justify-center">
              ✉️ <a href="Meimkt.id@gmail.com" className="hover:underline">Meimkt.id@gmail.com</a> | 
              <a href="Meimkt.id@gmail.com" className="hover:underline"> Meimkt.id@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
