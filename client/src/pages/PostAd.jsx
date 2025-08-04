import { useState } from 'react'

function PostAd() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    location: '',
    contactName: '',
    email: '',
    phone: ''
  })

  const [titleCount, setTitleCount] = useState(0)
  const [descriptionCount, setDescriptionCount] = useState(0)

  const categories = [
    'Електроника',
    'Превозни средства',
    'Недвижими имоти',
    'Мода',
    'Спорт',
    'Книги',
    'Дом и градина',
    'Работа',
    'Услуги',
    'Други'
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))

    if (field === 'title') {
      setTitleCount(value.length)
    } else if (field === 'description') {
      setDescriptionCount(value.length)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handlePreview = () => {
    console.log('Preview clicked')
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2x1 mx-auto px-4">
        {/* Заглавна секция */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Добави обява
          </h1>
          <p className="text-gray-600">
            Попълни информацията по-долу за да публикуваш твоята обява
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 w-full">
          {/* Секция "Какво предлагаш?" */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-3">
            <h2 className="text-base font-semibold text-gray-700 mb-3">
              Какво предлагаш?
            </h2>
            
            <div className="space-y-4">
              {/* Заглавие */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Заглавие *
                </label>
                <input
                  type="text"
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="Например: iPhone 11 с гаранция"
                  maxLength={70}
                  required
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-500">
                    Максимум 70 символа
                  </span>
                  <span className="text-xs text-gray-500">
                    {titleCount}/70
                  </span>
                </div>
              </div>

              {/* Категория */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Категория *
                </label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                  required
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                >
                  <option value="">Избери категория</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </section>

          {/* Секция "Снимки" */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 border-t border-gray-200 mt-6 pt-6">
            <h2 className="text-base font-semibold text-gray-700 mb-3">
              Снимки
            </h2>
            
            <div className="grid grid-cols-3 gap-4">
              {/* 6 полета за снимки */}
              {Array.from({ length: 6 }, (_, index) => (
                <div
                  key={index}
                  className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-xs text-gray-500">
                    {index === 0 ? 'Добави снимки' : 'Добави'}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Секция "Описание" */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 border-t border-gray-200 mt-6 pt-6">
            <h2 className="text-base font-semibold text-gray-700 mb-3">
              Описание
            </h2>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Описание *
              </label>
              <textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                minLength={40}
                maxLength={9000}
                required
                rows={6}
                placeholder="Опиши подробно твоята обява..."
                className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm"
              />
              <div className="flex justify-between mt-1">
                <span className="text-xs text-gray-500">
                  Минимум 40 символа, максимум 9000
                </span>
                <span className="text-xs text-gray-500">
                  {descriptionCount}/9000
                </span>
              </div>
            </div>
          </section>

          {/* Секция "Локация" */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 border-t border-gray-200 mt-6 pt-6">
            <h2 className="text-base font-semibold text-gray-700 mb-3">
              Локация
            </h2>
            
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Локация
              </label>
              <input
                type="text"
                id="location"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                placeholder="Въведи град или село"
                autoComplete="off"
                className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>
          </section>

          {/* Секция "Данни за контакт" */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 border-t border-gray-200 mt-6 pt-6">
            <h2 className="text-base font-semibold text-gray-700 mb-3">
              Данни за контакт
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Лице за контакт */}
              <div>
                <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">
                  Лице за контакт *
                </label>
                <input
                  type="text"
                  id="contactName"
                  value={formData.contactName}
                  onChange={(e) => handleInputChange('contactName', e.target.value)}
                  required
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>

              {/* Имейл адрес */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Имейл адрес *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>

              {/* Телефонен номер */}
              <div className="md:col-span-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Телефонен номер
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+359 888 123 456"
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
            </div>
          </section>

          {/* Долна част с бутони */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                         <button
               type="button"
               onClick={handlePreview}
               className="px-4 py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded-md hover:bg-blue-50 transition-colors text-sm"
             >
               Преглед
             </button>
             <button
               type="submit"
               className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors text-sm"
             >
               Добави обява
             </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PostAd 