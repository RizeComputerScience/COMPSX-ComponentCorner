function NotFoundPage() {
  return (
    <div className="not-found-page" style={{ textAlign: "center", padding: "4rem" }}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you’re looking for doesn’t exist.</p>
      <a 
        href="/" 
        style={{ 
          display: "inline-block", 
          marginTop: "1rem", 
          padding: "0.75rem 1.5rem", 
          backgroundColor: "#667eea", 
          color: "#fff", 
          borderRadius: "8px", 
          textDecoration: "none" 
        }}
      >
        Back to Home
      </a>
    </div>
  );
}

export default NotFoundPage;