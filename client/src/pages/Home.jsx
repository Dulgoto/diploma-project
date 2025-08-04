import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  // Dummy categories data
  const categories = [
    { id: 1, name: 'Electronics', icon: '📱', color: 'bg-blue-500' },
    { id: 2, name: 'Vehicles', icon: '🚗', color: 'bg-green-500' },
    { id: 3, name: 'Real Estate', icon: '🏠', color: 'bg-purple-500' },
    { id: 4, name: 'Fashion', icon: '👕', color: 'bg-pink-500' },
    { id: 5, name: 'Sports', icon: '⚽', color: 'bg-orange-500' },
    { id: 6, name: 'Books', icon: '📚', color: 'bg-indigo-500' }
  ]

  // Dummy ads data
  const latestAds = [
    {
      id: 1,
      title: 'iPhone 13 Pro - Excellent Condition',
      price: '$899',
      description: 'Like new iPhone 13 Pro, 256GB, comes with original box and accessories.',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: '2019 Honda Civic - Low Mileage',
      price: '$18,500',
      description: 'Well-maintained Honda Civic with only 45,000 miles. Great fuel economy.',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Modern 2BR Apartment Downtown',
      price: '$2,200/month',
      description: 'Beautiful 2-bedroom apartment with city views. Available immediately.',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'MacBook Air M1 - Perfect for Work',
      price: '$1,099',
      description: 'MacBook Air with M1 chip, 8GB RAM, 256GB SSD. Great for productivity.',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      title: 'Sony PlayStation 5 - Brand New',
      price: '$499',
      description: 'Unopened PS5 console with DualSense controller. Perfect for gaming enthusiasts.',
      image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      title: '2020 Toyota Camry - One Owner',
      price: '$22,800',
      description: 'Single owner Toyota Camry, 38,000 miles, excellent condition with full service history.',
      image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=400&h=300&fit=crop'
    },
    {
      id: 7,
      title: 'Luxury Studio in City Center',
      price: '$1,800/month',
      description: 'Furnished studio apartment with modern amenities. Walking distance to everything.',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop'
    },
    {
      id: 8,
      title: 'Dell XPS 15 Laptop - Professional',
      price: '$1,299',
      description: 'Dell XPS 15 with 16GB RAM, 512GB SSD, perfect for work and creative projects.',
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop'
    },
    {
      id: 9,
      title: 'Nike Air Jordan Retro - Limited Edition',
      price: '$299',
      description: 'Rare Nike Air Jordan Retro sneakers, size 10, perfect condition, collector\'s item.',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop'
    }
  ]

  const handlePostAd = () => {
    navigate('/post')
  }

  return (
    <div className="min-h-screen bg-gray-50 p-5">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find What You're Looking For
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Buy, sell, and discover amazing deals in your local community. 
              Join thousands of users who trust our platform.
            </p>
            <button 
              onClick={handlePostAd}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            >
              Post an Ad
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Browse Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer p-6 text-center"
              >
                <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4`}>
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

               {/* Latest Ads Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Latest Ads
            </h2>
            <div className="grid grid-cols-3 gap-8 px-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', paddingLeft: '32px', paddingRight: '32px' }}>
             {latestAds.map((ad) => (
                               <div
                  key={ad.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden border border-gray-300"
                >
                  <div className="h-24 overflow-hidden">
                    <img
                      src={ad.image}
                      alt={ad.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <div className="p-2">
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm">
                      {ad.title}
                    </h3>
                    <p className="text-lg font-bold text-blue-600 mb-1">
                      {ad.price}
                    </p>
                    <p className="text-gray-600 text-xs">
                      {ad.description}
                    </p>
                  </div>
                </div>
             ))}
           </div>
         </div>
       </section>
    </div>
  )
}

export default Home 