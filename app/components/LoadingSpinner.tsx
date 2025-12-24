import { withBasePath } from "@/utils/base-path";

export const LoadingSpinner = () => (
  <div className="loading-container">
    <div className="loading-logo-wrapper">
      <img
        src={withBasePath("/shard-logo-secondary.svg")}
        alt="Shard Logo"
        className="loading-logo"
      />
      <div className="loading-ring"></div>
    </div>
    <style>
      {`
        .loading-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100vh;
          background-color: #0d0d12;
        }
        .loading-logo-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100px;
          height: 100px;
        }
        .loading-logo {
          width: 50px;
          height: 50px;
          z-index: 2;
          filter: drop-shadow(0 0 10px rgba(64, 61, 255, 0.5));
          animation: pulse 2s ease-in-out infinite;
        }
        .loading-ring {
          position: absolute;
          width: 80px;
          height: 80px;
          border: 2px solid transparent;
          border-top-color: #403dff;
          border-right-color: #403dff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }
      `}
    </style>
  </div>
);

