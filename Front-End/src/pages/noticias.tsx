import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface NewsArticle {
  title: string;
  summary: string;
  imageUrl?: string;
}

interface SocialMediaPost {
  platform: string;
  content: string;
  author: string;
  timestamp: string;
}

const NewsPage: React.FC = () => {
  // Placeholder data
  const mainArticle: NewsArticle = {
    title: 'Main Article Title',
    summary: 'Summary of the main featured article goes here...',
    imageUrl: '/placeholder-image.jpg'
  };

  const secondaryArticles: NewsArticle[] = [
    {
      title: 'Secondary Article 1',
      summary: 'Brief summary of the first secondary article...',
      imageUrl: '/placeholder-image-1.jpg'
    },
    {
      title: 'Secondary Article 2',
      summary: 'Brief summary of the second secondary article...',
      imageUrl: '/placeholder-image-2.jpg'
    },
    {
      title: 'Secondary Article 3',
      summary: 'Brief summary of the third secondary article...',
      imageUrl: '/placeholder-image-3.jpg'
    }
  ];

  const socialMediaPosts: SocialMediaPost[] = [
    {
      platform: 'Twitter',
      content: 'Exciting breakthrough in quantum research! #Science #Innovation',
      author: '@CernOfficial',
      timestamp: '2h ago'
    },
    {
      platform: 'Facebook',
      content: 'Join us for our upcoming webinar on particle physics.',
      author: 'CERN Research Center',
      timestamp: '1d ago'
    },
    {
      platform: 'Instagram',
      content: 'Behind the scenes at our latest experiment!',
      author: '@cern_research',
      timestamp: '3d ago'
    },
    {
      platform: 'LinkedIn',
      content: 'New research paper published on quantum mechanics.',
      author: 'CERN Research Team',
      timestamp: '4d ago'
    },
    {
      platform: 'YouTube',
      content: 'Watch our latest experiment explained in 5 minutes!',
      author: 'CERN Channel',
      timestamp: '5d ago'
    },
    {
      platform: 'TikTok',
      content: 'Science can be fun! Check out our latest experiment.',
      author: '@cern_fun_science',
      timestamp: '6d ago'
    }
  ];

  // Carousel settings for multiple items
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Show 3 posts at once
    slidesToScroll: 3, // Scroll 3 at a time
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">NOTICIAS</h1>
      
      <div className="grid md:grid-cols-3 gap-6 items-stretch">
        {/* Main Article Section */}
        <div className="md:col-span-2 flex flex-col space-y-6">
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
            <img 
              src={mainArticle.imageUrl} 
              alt={mainArticle.title} 
              className="w-full h-96 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">{mainArticle.title}</h2>
              <p className="text-gray-700">{mainArticle.summary}</p>
            </div>
          </div>

          {/* Secondary Articles */}
          <div className="space-y-6 py-10 flex-grow">
            {secondaryArticles.map((article, index) => (
              <div key={index} className="bg-primario-100/10 rounded-lg shadow-md overflow-hidden flex items-center">
                <div className="bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title} 
                    className="w-48 h-48 object-cover"
                  />
                </div>
                <div className="p-4 flex-grow">
                  <h3 className="font-semibold mb-2">{article.title}</h3>
                  <p className="text-sm">{article.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cern Section */}
        <div className="space-y-4 flex flex-col">
          <h3 className="text-xl font-semibold text-blue-600">Cern</h3>
          <div className="overflow-y-auto pr-2" style={{ maxHeight: 'calc(180vh)' }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17].map((_, index) => (
              <div key={index} className="flex items-center space-x-4 mb-4">
                <div className="flex-grow">
                  <div className="h-24 bg-gray-200 animate-pulse rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Media Carousel */}
      <div className="mt-8 bg-gray-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4 text-center">Social Media</h3>
        <Slider {...carouselSettings}>
          {socialMediaPosts.map((post, index) => (
            <div key={index} className="px-2">
              <div className="bg-white rounded-lg shadow-md p-4 h-full">
                <p className="font-medium mb-2 text-sm">
                  {post.content}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xs text-gray-500">
                    {post.author}
                  </span>
                  <span className="text-xs text-gray-400">
                    {post.platform} 
                    {' • '}
                    {post.timestamp}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

     
    </div>
  );
};

export default NewsPage;