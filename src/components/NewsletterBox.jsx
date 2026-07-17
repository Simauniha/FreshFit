import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="my-24 rounded-3xl px-6 py-16 text-center">

      <h2 className="text-4xl font-bold text-(--primary-900)">
        Subscribe to Our Newsletter
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-(--neutral-300) leading-7">
        Stay updated with our latest collections, exclusive offers, and fashion
        trends. Join our community and enjoy <span className="font-semibold text-(--primary-900)">20% OFF</span> on your first purchase.
      </p>

      <form
        onSubmit={onSubmitHandler}
        className="mx-auto mt-10 flex w-full max-w-2xl overflow-hidden rounded-full border border-(--accent-100) bg-white shadow-md"
      >
        <input
          type="email"
          placeholder="Enter your email address"
          required
          className="flex-1 px-6 py-4 outline-none placeholder:text-(--neutral-200) focus:ring-2 focus:ring-(--primary-700)"
        />

        <button
          type="submit"
          className="bg-(--primary-900) px-8 font-medium text-white transition-all duration-300 hover:bg-(--primary-800)"
        >
          Subscribe
        </button>
      </form>

    </div>
  );
};

export default NewsletterBox;