import ProfileClient from "./profile-client";

// Required for static export with dynamic routes
export async function generateStaticParams() {
  // Return common usernames that should be pre-generated
  // In production, you might fetch from your API or database
  return [
    { username: "john-doe" },
    { username: "sarah-beauty" },
    { username: "demo" },
  ];
}

interface PageProps {
  params: {
    username: string;
  };
}

export default function MasterProfilePage({ params }: PageProps) {
  return <ProfileClient username={params.username} />;
}