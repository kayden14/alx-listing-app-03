import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section
        className="h-[300px] bg-cover bg-center text-white flex flex-col justify-center items-center text-center"
        style={{ backgroundImage: `url('https://source.unsplash.com/1600x900/?luxury,home')` }}
      >
        <h1 className="text-4xl font-bold">Find your favorite place here!</h1>
        <p className="text-xl mt-2">The best prices for over 2 million properties worldwide.</p>
      </section>

      {/* Filter section */}
      <section className="p-4 flex gap-2 overflow-x-auto whitespace-nowrap">
        {["Top Villa", "Self Checkin", "Beachfront", "Fireplace"].map((filter, idx) => (
          <span key={idx} className="px-4 py-2 bg-gray-200 rounded-full text-sm cursor-pointer hover:bg-gray-300">
            {filter}
          </span>
        ))}
      </section>

      {/* Listing section */}
      <section className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {PROPERTYLISTINGSAMPLE.map((property, idx) => (
          <div key={idx} className="border rounded-lg overflow-hidden shadow-sm">
            <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
            <div className="p-3">
              <h2 className="text-lg font-semibold">{property.name}</h2>
              <p className="text-sm text-gray-500">{property.address.city}, {property.address.country}</p>
              <p className="mt-2 text-blue-600 font-bold">${property.price} / night</p>
              <p className="text-sm text-yellow-500">⭐ {property.rating}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
