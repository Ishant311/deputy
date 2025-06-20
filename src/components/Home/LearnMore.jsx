import React, { useState } from 'react';
import { Building2, Store } from 'lucide-react';

export default function LearnMoreSection() {
  const [selectedTab, setSelectedTab] = useState('small');

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1E1E90] mb-8">
        Want to learn more?
      </h2>

      <div className="flex items-center justify-center gap-4 bg-white shadow-md rounded-2xl py-4 px-6 mb-10 max-w-5xl mx-auto">
        <button
          onClick={() => setSelectedTab('small')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-colors ${
            selectedTab === 'small'
              ? 'text-blue-800 font-semibold'
              : 'text-gray-500'
          }`}
        >
          <Store className="w-5 h-5 text-gray-500" />
          Running a small business
        </button>

        <div className="w-px bg-red-400 h-6"></div>

        <button
          onClick={() => setSelectedTab('large')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-colors ${
            selectedTab === 'large'
              ? 'text-blue-800 font-semibold'
              : 'text-gray-500'
          }`}
        >
          <Building2 className="w-5 h-5 text-gray-500" />
          Operating on a larger scale
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        {[
          {
            title: 'Product Tour',
            desc: "Discover Deputy’s complete set of features and how they can help you thrive.",
            link: 'Visit our product tour',
            href: '#',
          },
          {
            title: 'Pricing Options',
            desc: 'Learn about our Free Starter Plan, Premium package and other pricing options.',
            link: 'See pricing options',
            href: '#',
          },
          {
            title: 'Software Integrations',
            desc: 'Seamlessly link Deputy with your other systems thanks to our open API.',
            link: 'View integrations',
            href: '#',
          },
        ].map(({ title, desc, link, href }) => (
          <div key={title} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-[#1E1E90] text-lg mb-2">{title}</h3>
            <p className="text-gray-600 mb-4 text-sm">{desc}</p>
            <a
              href={href}
              className="text-[#1E1E90] underline font-medium text-sm"
            >
              {link}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
