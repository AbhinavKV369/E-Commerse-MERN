import BannerImg from "../../assets/Banner.png";

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <div>
          <img
            src={BannerImg}
            alt="About our store"
            className="w-full rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Right Side - Description */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Discover the Future of Shopping
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We bring you the latest technology, gadgets, and premium electronics
            at unbeatable prices. Our mission is to provide you with a seamless
            and enjoyable shopping experience backed by 24/7 support, secure
            payments, and hassle-free returns.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="text-blue-600 mr-2">✔</span> Free & Fast Delivery
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 mr-2">✔</span> Secure Online
              Payments
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 mr-2">✔</span> 24/7 Customer
              Support
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
