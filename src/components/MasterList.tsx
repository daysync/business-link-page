// pages/masters.js
import Link from "next/link";

const MastersPage = () => {
  const masters = [
    { id: 1, name: "Master 1", description: "Description of Master 1" },
    { id: 2, name: "Master 2", description: "Description of Master 2" },
    // Add more masters data
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Masters</h1>
      <ul className="space-y-4">
        {masters.map((master) => (
          <li key={master.id} className="bg-gray-100 p-4 rounded">
            <Link href={`/masters/${master.id}`} className="text-xl font-bold">
              {master.name}
            </Link>
            <p className="text-gray-600">{master.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MastersPage;
