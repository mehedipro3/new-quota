import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const handleGoHome = () => {
    navigate("/"); // Navigate to the homepage
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <img
          src="https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg?semt=ais_hybrid"
          alt="404 Error"
          className="mx-auto mb-6"
        />
        <h1 className="text-6xl font-bold text-purple-600 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleGoBack}
            className="px-6 py-2 bg-gray-300 text-gray-800 font-semibold rounded-md shadow hover:bg-gray-400"
          >
            Go Back
          </button>
          <button
            onClick={handleGoHome}
            className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-md shadow hover:bg-purple-700"
          >
            Go to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
