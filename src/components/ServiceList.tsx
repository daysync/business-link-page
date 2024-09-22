// components/ServiceList.js

const ServiceList = () => {
  const services = [
    { id: 1, name: "Service 1" },
    { id: 2, name: "Service 2" },
    // Add more services data
  ];

  return (
    <ul className="space-y-2">
      {services.map((service) => (
        <li key={service.id} className="bg-gray-100 p-4 rounded">
          {service.name}
        </li>
      ))}
    </ul>
  );
};

export default ServiceList;
