
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-blue-900 mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Get in touch with VentureLab Thapar for inquiries, partnerships, or to learn more about our programs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Gurugram Location */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-soft hover:shadow-hover transition-shadow">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-blue-900 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Gurugram Location</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                TIET, 2nd Floor, Orchid Centre,<br />
                Rapid Metro Sector 54 Station,<br />
                Gurugram
              </p>
            </div>

            {/* Punjab Location */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-soft hover:shadow-hover transition-shadow">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-blue-900 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Punjab Location</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                TIET, Bhadson Rd, Adarsh Nagar,<br />
                Prem Nagar, Patiala,<br />
                Punjab 147004
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-soft hover:shadow-hover transition-shadow">
              <div className="flex items-center mb-4">
                <Phone className="h-6 w-6 text-blue-900 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Get In Touch</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <Phone className="h-4 w-4 mr-2 text-blue-600" />
                  <a href="tel:+919799777370" className="hover:text-blue-900">
                    +91 97997 77370
                  </a>
                </div>
                <div className="flex items-center text-gray-700">
                  <Mail className="h-4 w-4 mr-2 text-blue-600" />
                  <a href="mailto:manager_step@thapar.edu" className="hover:text-blue-900">
                    manager_step@thapar.edu
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Contact Section */}
          <div className="max-w-4xl mx-auto mt-16 text-center">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Whether you're an aspiring entrepreneur, investor, or partner, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919799777370"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-900 text-white font-medium rounded-full hover:bg-blue-950 transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Us
              </a>
              <a
                href="mailto:manager_step@thapar.edu"
                className="inline-flex items-center justify-center px-6 py-3 border border-blue-900 text-blue-900 font-medium rounded-full hover:bg-blue-50 transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
