import ProfileClient from "./profile-client";

interface PageProps {
  params: {
    username: string;
  };
}

export default function MasterProfilePage({ params }: PageProps) {
  return <ProfileClient username={params.username} />;
}