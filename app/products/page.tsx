const ProductsPage = async() => {
    const res = await fetch('http://localhost:3000/api/products');
    if (!res.ok) throw new Error('Failed to fetch products');
    const data = await res.json();

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
            <div className="container">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Our Products
                    </h1>
                    <p className="text-gray-600 text-lg">Discover our amazing collection of products</p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {data.map((product: { 
                        id: number, 
                        title: string, 
                        price: number, 
                        thumbnail: string,
                        category: string,
                        rating: number,
                        discountPercentage: number,
                        stock: number
                    }) => (
                        <div 
                            key={product.id} 
                            className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                        >
                            {/* Image Container */}
                            <div className="relative h-56 overflow-hidden bg-gray-100">
                                <img 
                                    src={product.thumbnail} 
                                    alt={product.title} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                
                                {/* Discount Badge */}
                                {product.discountPercentage > 0 && (
                                    <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                        -{Math.round(product.discountPercentage)}%
                                    </div>
                                )}
                                
                                {/* Stock Badge */}
                                {product.stock < 10 && (
                                    <div className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                        Only {product.stock} left!
                                    </div>
                                )}
                            </div>

                            {/* Product Info */}
                            <div className="p-5">
                                {/* Category */}
                                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold mb-3">
                                    {product.category}
                                </span>
                                
                                {/* Title */}
                                <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                    {product.title}
                                </h2>
                                
                                {/* Rating */}
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className={i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'}>
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-600">{product.rating.toFixed(1)}</span>
                                </div>
                                
                                {/* Price */}
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-2xl font-bold text-blue-600">
                                            ${product.price.toFixed(2)}
                                        </p>
                                        {product.discountPercentage > 0 && (
                                            <p className="text-sm text-gray-400 line-through">
                                                ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                                            </p>
                                        )}
                                    </div>
                                    
                                    {/* Add to Cart Button */}
                                    <button className="btn btn-primary px-4 py-2 text-sm">
                                        🛒 Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {data.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-400 text-xl">No products found</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductsPage;
