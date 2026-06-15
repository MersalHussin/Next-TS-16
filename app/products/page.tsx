'use client'
import { useEffect, useState } from "react";

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const loadProducts = async () => {
        try {
            const res = await fetch('/api/products');
            if (!res.ok) throw new Error('Failed to fetch products');
            const data = await res.json();
            setProducts(data);
            setLoading(false);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
            setLoading(false);
        }
    };
    
    useEffect(() => {
          // eslint-disable-next-line react-hooks/set-state-in-effect
        loadProducts();
    }, []);

    if (loading) return <div className="container py-12">Loading...</div>;
    if (error) return <div className="container py-12 text-red-600">Error: {error}</div>;

    return (
        <div className="container py-12">
            <h1 className="text-3xl font-bold mb-8">Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((product: { id: number, name: string }) => (
                    <div key={product.id} className="card">
                        <h2 className="text-xl font-bold text-gray-900">{product.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
