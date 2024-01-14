// pages/profile.js
import Head from "next/head";

const ProfilePage = () => {
  return (
    <>
      <Head>
        <title>Jenny Wilson - Hairstylist</title>
      </Head>
      <div style={{ padding: "20px" }}>
        {/* Header with back button and logo */}
        <Header />

        {/* Profile Card */}
        <ProfileCard />

        {/* Portfolio Section */}
        <Portfolio />

        {/* Services List */}
        <ServiceList />

        {/* Appointment Button */}
        <AppointmentButton />
      </div>
    </>
  );
};

const Header = () => {
  // Placeholder for header
  return <header>Header Content</header>;
};

const ProfileCard = () => {
  // Placeholder for profile card
  return <div>Profile Card Content</div>;
};

const Portfolio = () => {
  // Placeholder for portfolio
  return <div>Portfolio Content</div>;
};

const ServiceList = () => {
  // Placeholder for service list
  return <div>Service List Content</div>;
};

const AppointmentButton = () => {
  // Placeholder for appointment button
  return <button>Make an Appointment</button>;
};

export default ProfilePage;
