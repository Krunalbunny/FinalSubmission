import React, { lazy, Suspense, useState, useEffect } from "react";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error) => {
      console.error("Error caught by ErrorBoundary:", error);
      setHasError(true);
    };

    window.addEventListener("error", errorHandler);

    return () => {
      window.removeEventListener("error", errorHandler);
    };
  }, []);

  if (hasError) {
    return <div>Something went wrong.</div>;
  }

  return children;
};

const Home = lazy(() => import("./components/Home"));

const App = () => {
  return (
    <div style={{ alignItems: "center" }}>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;
