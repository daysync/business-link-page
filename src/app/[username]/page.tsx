import ProfileClient from "./profile-client";

interface PageProps {
  params: Promise<{
    username: string;
  }>;
}

export default async function UsernamePage({ params }: PageProps) {
  const { username } = await params;
  return <ProfileClient username={username} />;
}
