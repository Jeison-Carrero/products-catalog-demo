
export default function ProductSearch() {
  return (
    <div className="flex items-center mb-4 w-2/5 bg-gray-100">   
      <div className="relative flex-grow">
        <input
          type="text"
          placeholder="Encuentra el producto que necesitas"
          className="w-full px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        
      </div>
    
      <select
        className="px-4 py-2 text-sm text-gray-700 bg-gray-200 border border-gray-300 rounded-r-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option>Todas las Categorías</option>
        <option>Mejores reviews</option>
        <option>Precio más bajo</option>
        <option>Precio más alto</option>
      </select>

    </div>
  )
}

