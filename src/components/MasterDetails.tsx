// pages/masters/[id].js

const MasterProfilePage = () => {
  const master = {
    // id: params.id,
    name: `Master`,
    description: `Description of Master`,
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    phone: "123-456-7890",
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{master.name}</h1>
      <p className="text-gray-600 mb-4">{master.description}</p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Social Networks</h2>
        <ul className="space-y-2">
          <li>
            <a
              href={master.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href={master.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href={master.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2">Contact</h2>
        <p className="text-gray-600">Phone: {master.phone}</p>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  // Generate the paths for each master profile page
  const paths = [
    { params: { id: "1" } },
    { params: { id: "2" } },
    // Add more paths for each master
  ];

  return { paths, fallback: false };
}

// export async function getStaticProps({ params }) {
//   // Fetch the data for the specific master based on the `id` parameter
//   const master = {
//     id: params.id,
//     name: `Master ${params.id}`,
//     description: `Description of Master ${params.id}`,
//     facebook: 'https://facebook.com',
//     twitter: 'https://twitter.com',
//     instagram: 'https://instagram.com',
//     phone: '123-456-7890',
//   };

//   return { props: { master } };
// }

export default MasterProfilePage;
