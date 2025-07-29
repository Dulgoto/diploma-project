import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-4xl mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <div className="text-xl font-semibold text-gray-900">
            React Router App
          </div>
          <div className="flex space-x-6">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              About
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header 