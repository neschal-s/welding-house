export default function Products() {
  const items = [
    { name: "Welding Electrodes", img: "https://via.placeholder.com/300x200", desc: "High-strength industrial electrodes." },
    { name: "Factory Machines", img: "https://via.placeholder.com/300x200", desc: "Durable and efficient machinery." },
    { name: "Industrial Paints", img: "https://via.placeholder.com/300x200", desc: "Protective coatings for all industries." }
  ];

  return (
    <section id="products" className="py-12 px-6 bg-white">
      <h3 className="text-2xl font-bold mb-6 text-center">Our Products</h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <div key={i} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
            <img src={item.img} alt={item.name} className="w-full h-40 object-cover rounded" />
            <h4 className="text-xl font-semibold mt-3">{item.name}</h4>
            <p className="text-gray-600 text-sm">{item.desc}</p>
            <a href="#contact" className="mt-3 inline-block bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
              Contact Seller
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
