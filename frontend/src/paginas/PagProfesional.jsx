// Import necessary React components.
import DashProfesional from "../components/DashProfesional";
import Navigation from "../components/Navigation";

// Define the professional page component, PagProfesional.
const PagProfesional = () => {
  // Render the professional page layout, consisting of a growing container with flex columns for different screen sizes.
  return (
    <div>
      <div className="grow flex flex-col md:flex-row lg:flex-row min-h-screen">
        {/* Render the Navigation component for navigation elements */}
        <Navigation />

        {/* Render the DashProfesional component for the main content of the professional page */}
        <DashProfesional />
      </div>
    </div>
  );
};

// Export the PagProfesional component for use in other parts of the application.
export default PagProfesional;
