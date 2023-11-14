// Import necessary React components.
import Dashboard from "../components/Dashboard";
import Navigation from "../components/Navigation";

// Define the main page component, PaginaPrincipal.
const PaginaPrincipal = () => {
  // Render the main page layout, consisting of a growing container with flex columns for different screen sizes.
  return (
    <div className="grow flex flex-col md:flex-row lg:flex-row min-h-screen ">
      {/* Render the Navigation component for navigation elements */}
      <Navigation />
      {/* Render the Dashboard component for the main content of the page */}
      <Dashboard />
    </div>
  );
};

// Export the PaginaPrincipal component for use in other parts of the application.
export default PaginaPrincipal;
