import React from "react";
import Title from "../../components/Title";
import aboutImg from "../../assets/about_img.png";
import {
  FiShield,
  FiShoppingBag,
  FiHeadphones,
} from "react-icons/fi";
import NewsletterBox from "../../components/NewsletterBox";

const About = () => {
  return (
    <div>

      {/* About Title */}
      <div className="text-4xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      {/* About Content */}
      <div className="my-12 flex flex-col md:flex-row gap-12">

        <img
          className="w-full md:max-w-112.5"
          src={aboutImg}
          alt="About Fresh Fit"
        />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">

          <p>
            Fresh Fit was created with a passion for modern fashion and a
            commitment to providing premium-quality clothing at affordable
            prices. Our journey started with a simple vision: to make shopping
            easy, enjoyable, and accessible for everyone.
          </p>

          <p>
            From everyday essentials to stylish collections, we carefully
            select every product to ensure quality, comfort, and durability.
            Whether you're shopping for casual wear or something special,
            Fresh Fit offers styles that help you look confident every day.
          </p>

          <b className="text-gray-800 text-lg">
            Our Mission
          </b>

          <p>
            Our mission is to inspire confidence through fashion by offering
            stylish clothing, exceptional customer service, and a seamless
            online shopping experience. We believe everyone deserves to look
            great without compromising on quality or affordability.
          </p>

        </div>

      </div>

      {/* Why Choose Us */}
      <div className="text-3xl text-center py-10">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">

        {/* Card 1 */}
        <div className="group rounded-2xl border border-(--accent-100) bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-(--primary-700) hover:shadow-xl">

          <div className="w-14 h-14 rounded-xl bg-(--primary-900) text-white flex items-center justify-center mb-6 transition-colors duration-300">
            <FiShield size={28} />
          </div>

          <h3 className="text-xl font-semibold text-(--primary-900) mb-4">
            Quality Assurance
          </h3>

          <p className="text-(--neutral-300) leading-7">
            Every product is carefully inspected before reaching you. We focus on
            premium materials, long-lasting comfort, and excellent craftsmanship to
            ensure complete customer satisfaction.
          </p>

        </div>

        {/* Card 2 */}
        <div className="group rounded-2xl border border-(--accent-100) bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-(--primary-700) hover:shadow-xl">

          <div className="w-14 h-14 rounded-xl bg-(--primary-900) text-white flex items-center justify-center mb-6 transition-colors duration-300">
            <FiShoppingBag size={28} />
          </div>

          <h3 className="text-xl font-semibold text-(--primary-900) mb-4">
            Convenience
          </h3>

          <p className="text-(--neutral-300) leading-7">
            Enjoy a simple and secure shopping experience with easy navigation,
            multiple payment options, fast checkout, and reliable nationwide
            delivery.
          </p>

        </div>

        {/* Card 3 */}
        <div className="group rounded-2xl border border-(--accent-100) bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-(--primary-700) hover:shadow-xl">

          <div className="w-14 h-14 rounded-xl bg-(--primary-900) text-white flex items-center justify-center mb-6 transition-colors duration-300">
            <FiHeadphones size={28} />
          </div>

          <h3 className="text-xl font-semibold text-(--primary-900) mb-4">
            Customer Support
          </h3>

          <p className="text-(--neutral-300) leading-7">
            Our dedicated support team is always ready to help with your questions,
            orders, and returns, ensuring a smooth experience from purchase to
            delivery.
          </p>

        </div>

      </div>


      <NewsletterBox />
    </div>
  );
};

export default About;