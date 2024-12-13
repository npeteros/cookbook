import React from "react";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-5xl font-extrabold mb-6 text-center text-green-600">
        About <span className="text-green-800">Cook Book</span>
      </h2>

      <p className="mb-6 text-gray-700 text-lg leading-relaxed">
        Welcome to <strong>Cooking Master</strong> – your go-to destination for discovering
        mouth-watering recipes, expert cooking tips, and culinary inspiration! Whether you're
        a beginner or an experienced chef, we aim to make cooking an enjoyable and accessible
        experience for everyone.
      </p>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {/* Diverse Recipes */}
        <div className="rounded-lg shadow-lg p-6 bg-white transition-transform hover:scale-105">
          <h3 className="text-3xl font-bold mb-2 text-green-600">🌍 Diverse Recipes</h3>
          <p className="text-gray-600">
            Explore recipes from various cuisines around the world and bring global flavors to your kitchen.
          </p>
        </div>

        {/* Expert Cooking Tips */}
        <div className="rounded-lg shadow-lg p-6 bg-white transition-transform hover:scale-105">
          <h3 className="text-3xl font-bold mb-2 text-green-600">👩‍🍳 Expert Tips</h3>
          <p className="text-gray-600">
            Learn cooking tricks and techniques from seasoned chefs to elevate your culinary skills.
          </p>
        </div>

        {/* Interactive Community */}
        <div className="rounded-lg shadow-lg p-6 bg-white transition-transform hover:scale-105">
          <h3 className="text-3xl font-bold mb-2 text-green-600">🤝 Community</h3>
          <p className="text-gray-600">
            Share recipes and tips with fellow cooking enthusiasts and learn from the best.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="rounded-lg mt-12 bg-gray-50 p-8 shadow-lg">
        <h3 className="text-4xl font-bold mb-4 text-center text-gray-900">
          Our Mission
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed mt-2">
          Our mission is to bring people together through food, fostering a love for cooking and sharing.
          We provide recipes and tips that suit all tastes, skill levels, and kitchen setups.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          Join our community, experiment with your creativity, and let's make cooking a delightful adventure!
        </p>
      </div>

      {/* CTA Section */}
      <div className="mt-12 bg-green-100 p-6 rounded-lg shadow-lg text-center">
        <p className="text-gray-700 text-lg mb-4">
          Ready to explore endless culinary delights? Dive into our recipes and let your inner chef shine!
        </p>
        <button className="mt-4 bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition-all">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default About;
