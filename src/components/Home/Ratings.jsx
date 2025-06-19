import React from 'react'

export default function Ratings() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-center text-[#1E1E90] mb-10">
            Why businesses love Deputy
          </h2>

          <div className="flex flex-col lg:flex-row bg-[#FFF9EB] rounded-bl-4xl rounded-tr-4xl overflow-hidden ">
            <div className="lg:w-1/2">
              <img
                src="https://a.storyblok.com/f/64010/1040x720/2540970e1e/heuser-ace-hardware.png/m/1040x0"
                alt="Ace Hardware"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center p-6">
              <p className="text-[#1E1E90] text-lg lg:text-xl font-semibold italic mb-2">
                "One of the biggest selling points of Deputy is how quickly my employees are able to pick it up and use it."
              </p>
              <p className="text-gray-600 text-sm lg:text-base mt-2">
                Bobby Heuser, Ace Hardware
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 text-center">
            {[
              {
                logo: 'https://a.storyblok.com/f/64010/320x140/4c126427a8/capterra-rating-logo.png/m/320x0',
                title: 'Capterra',
                rating: '4.6/5',
                reviews: '590 reviews',
              },
              {
                logo: 'https://a.storyblok.com/f/64010/320x140/6fc72e66ca/appstore-rating-logo.png/m/320x0',
                title: 'Apple Store',
                rating: '4.8/5',
                reviews: '3.6k reviews',
              },
              {
                logo: 'https://a.storyblok.com/f/64010/320x140/13a7b32615/google-play-rating-logo.png/m/320x0',
                title: 'Google Play',
                rating: '4.6/5',
                reviews: '959 reviews',
              },
              {
                logo: 'https://a.storyblok.com/f/64010/320x140/f51e8823ae/getapp-rating-logo.png/m/320x0',
                title: 'GetApp',
                rating: '4.6/5',
                reviews: '590 reviews',
              },
            ].map((item) => (
              <div key={item.title}>
                <img
                  src={item.logo}
                  alt={item.title}
                  className="h-14 mx-auto mb-2 object-contain"
                />
                <div className="text-yellow-400 text-xl mb-1">★★★★★</div>
                <p className="text-sm text-gray-700">{`${item.rating} (${item.reviews})`}</p>
              </div>
            ))}
          </div>
        </div>
  )
}
