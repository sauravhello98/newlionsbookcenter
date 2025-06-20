"use client";
import Image from "next/image";
// Heroicons SVGs
const BookOpenIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-700 group-hover:text-yellow-400 transition-colors duration-200"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75c-2.25-1.5-6-1.5-8.25 0A2.25 2.25 0 0 0 2.25 8.5v8.25A2.25 2.25 0 0 0 4.5 19c2.25-1.5 6-1.5 8.25 0 2.25-1.5 6-1.5 8.25 0a2.25 2.25 0 0 0 2.25-2.25V8.5a2.25 2.25 0 0 0-1.5-2.25c-2.25-1.5-6-1.5-8.25 0z" /></svg>
);
const PencilSquareIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-yellow-400 group-hover:text-blue-700 transition-colors duration-200"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 3.487a2.25 2.25 0 1 1 3.182 3.182L7.5 19.212l-4.5 1.318 1.318-4.5 12.544-12.543z" /></svg>
);
const MapPinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-700 group-hover:text-yellow-400 transition-colors duration-200"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75c-4.5-6-7.5-9.75-7.5-13.5A7.5 7.5 0 0 1 12 .75a7.5 7.5 0 0 1 7.5 7.5c0 3.75-3 7.5-7.5 13.5z" /><circle cx="12" cy="8.25" r="2.25" fill="currentColor" /></svg>
);
const EnvelopeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-700 group-hover:text-yellow-400 inline-block transition-colors duration-200"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-.659 1.591l-7.091 7.091a2.25 2.25 0 0 1-3.182 0L3.409 8.584A2.25 2.25 0 0 1 2.75 6.993V6.75" /></svg>
);
const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-700 group-hover:text-yellow-400 inline-block transition-colors duration-200"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 0-.75.75v2.25a.75.75 0 0 0 .75.75h2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75z" /></svg>
);

export default function Home() {
  return (
    <div className="bg-blue-50 text-gray-900 min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white text-yellow-400 sticky top-0 z-20">
        <div className="flex items-center space-x-3">
          <Image src="/globe.svg" alt="Logo" width={40} height={40} className="drop-shadow-lg" />
          <span className="text-2xl font-extrabold tracking-tight">New Lion Books Store</span>
        </div>
        <ul className="flex space-x-8 text-lg font-medium">
          <li><a href="#hero" className="hover:text-yellow-400 hover:underline hover:scale-110 transition-all duration-200">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-400 hover:underline hover:scale-110 transition-all duration-200">About</a></li>
          <li><a href="#stationery" className="hover:text-yellow-400 hover:underline hover:scale-110 transition-all duration-200">Stationery</a></li>
          <li><a href="#map" className="hover:text-yellow-400 hover:underline hover:scale-110 transition-all duration-200">Location</a></li>
          <li><a href="#contact" className="hover:text-yellow-400 hover:underline hover:scale-110 transition-all duration-200">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="w-full min-h-[90vh] flex flex-col justify-center items-center text-center relative overflow-hidden bg-blue-100 border-b border-blue-100">
        <div className="absolute inset-0 z-0">
          <Image src="/books.jpg" alt="Books" layout="fill" objectFit="cover" quality={80} className="opacity-70" />
          <div className="absolute inset-0 bg-blue-900/40" />
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white leading-tight animate-slide-down drop-shadow-lg">Welcome to <span className="text-yellow-400">New Lion Books Store</span></h1>
          <p className="text-2xl md:text-3xl max-w-2xl text-yellow-100 mb-10 animate-fade-in-slow drop-shadow font-medium">Your destination for the best collection of books in Janakpur. Discover your next favorite read today.</p>
          <a href="#about" className="inline-block px-10 py-4 rounded-full bg-blue-600 text-white font-bold text-xl shadow-lg border-2 border-blue-700 hover:bg-yellow-400 hover:text-blue-900 hover:scale-105 transition-all duration-200 animate-bounce">Explore More</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-24 border-b border-blue-100 bg-white animate-fade-in">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <div className="rounded-xl overflow-hidden shadow-lg w-full max-w-xs md:max-w-sm group hover:shadow-2xl hover:scale-105 transition-all duration-200">
              <Image src="/books.jpg" alt="Books" width={400} height={400} className="object-cover w-full h-full" />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-2 group">
              <BookOpenIcon />
              <h2 className="text-4xl font-bold border-l-4 border-yellow-400 pl-4 text-blue-700 group-hover:text-yellow-400 transition-colors duration-200">About Us</h2>
            </div>
            <p className="text-lg leading-relaxed text-gray-700">
              New Lion Books Store is a community favorite bookstore located in the heart of Janakpur. We offer a wide range of books from fiction, non-fiction, academic, and local literature. Whether you are a student, a professional, or a casual reader, our friendly staff is here to help you find the perfect book.
            </p>
          </div>
        </div>
      </section>

      {/* Stationery Section */}
      <section id="stationery" className="w-full py-20 border-b border-blue-100 bg-yellow-50 animate-fade-in">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4 group">
            <PencilSquareIcon />
            <h2 className="text-4xl font-bold border-l-4 border-blue-600 pl-4 text-blue-700 inline-block text-left group-hover:text-yellow-400 transition-colors duration-200">Stationery & More</h2>
          </div>
          <p className="text-lg leading-relaxed text-gray-700 max-w-2xl mx-auto mt-4">
            We offer all types of stationery items for students, offices, and artists. Whether you need notebooks, pens, art supplies, or office essentials, we have it all. We serve both retail and wholesale customers, ensuring the best prices and quality for everyone. Visit us for your complete stationery needs!
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="w-full py-20 border-b border-blue-100 bg-blue-50 animate-fade-in">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4 group">
            <MapPinIcon />
            <h2 className="text-4xl font-bold border-l-4 border-yellow-400 pl-4 text-blue-700 group-hover:text-yellow-400 transition-colors duration-200">Find Us Here</h2>
          </div>
          <div className="aspect-[4/3] w-full rounded-xl overflow-hidden shadow-lg border border-blue-100 group hover:shadow-2xl hover:scale-105 transition-all duration-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.3306019428583!2d85.91887911158722!3d26.733824176657244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec13bff227e5cd%3A0x3d89b3966249ac2d!2sNew%20Lions%20Book%20Center!5e0!3m2!1sen!2snp!4v1750426320853!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="New Lion Books Store Location"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-20 bg-white animate-fade-in">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4 group">
            <EnvelopeIcon />
            <h2 className="text-4xl font-bold border-l-4 border-blue-600 pl-4 text-blue-700 group-hover:text-yellow-400 transition-colors duration-200">Contact Us</h2>
          </div>
          <div className="space-y-4 text-lg text-gray-700 mt-6">
            <p><MapPinIcon className="w-6 h-6 text-yellow-400 inline-block mr-2 align-text-bottom group-hover:text-blue-700 transition-colors duration-200" /> <span className="font-semibold">Address:</span> Janakpur Dham, Nepal</p>
            <p><PhoneIcon className="w-6 h-6 text-blue-700 inline-block mr-2 align-text-bottom group-hover:text-yellow-400 transition-colors duration-200" /> <span className="font-semibold">Phone:</span> +977 9812148069</p>
            <p><EnvelopeIcon className="w-6 h-6 text-blue-700 inline-block mr-2 align-text-bottom group-hover:text-yellow-400 transition-colors duration-200" /> <span className="font-semibold">Email:</span> contact@newlionbooks.com (example)</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-yellow-400 py-8 text-center shadow-inner animate-fade-in mt-auto">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-lg">&copy; {new Date().getFullYear()} New Lion Books Store. All rights reserved.</span>
          <span className="text-sm">Made with <span className="text-yellow-400">&#10084;</span> in Janakpur</span>
        </div>
      </footer>

      {/* Animations */}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        @keyframes fade-in-slow {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-slow {
          animation: fade-in-slow 2s ease-out;
        }
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-40px); }
          to { opacity: 1; transform: none; }
        }
        .animate-slide-down {
          animation: slide-down 1.2s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce {
          animation: bounce 1.5s infinite;
        }
      `}</style>
    </div>
  );
}
