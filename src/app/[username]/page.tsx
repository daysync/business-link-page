import ProfileClient from "./profile-client";

interface PageProps {
  params: Promise<{
    username: string;
  }>;
}

// Static generation for common usernames - following Next.js 15 docs
export async function generateStaticParams() {
  return [{ username: "john-doe" }, { username: "john-doe1" }];
}

export default async function UsernamePage({ params }: PageProps) {
  const { username } = await params;
  return <ProfileClient username={username} />;
}
