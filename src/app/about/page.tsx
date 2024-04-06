// AboutUsPage.js
import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:"About"
}

const AboutUsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4">About Us</h1>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="md:w-1/2 md:pr-8">
            <img src="/digital-marketing.jpg" alt="Digital Marketing" className="rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <p className="text-lg text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius ultrices nibh ut consequat. Donec
              aliquam augue id mauris efficitur, vitae lacinia justo accumsan. Morbi ut erat non lorem maximus
              interdum. Fusce nec nunc ut justo facilisis feugiat.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Nullam tempus tincidunt felis vel tincidunt. Vivamus sit amet justo eu felis fermentum viverra. Nullam
              rutrum vestibulum urna, et hendrerit purus malesuada a. Proin non nunc ullamcorper, fermentum ipsum
              sed, vehicula nisi. In hac habitasse platea dictumst.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
