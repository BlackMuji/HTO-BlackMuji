import React, { useState } from 'react';
import { startInstance } from '../../api/axiosInstance';
import LoadingIcon from '../public/LoadingIcon';
import '../../assets/scss/play/StartInstanceButton.scss';
import { FaDotCircle } from "react-icons/fa";


/**
 * Props interface for StartInstanceButton component.
 */
interface StartInstanceButtonProps {
  machineId: string;
  onInstanceStarted: () => void;
}

/**
 * Interface representing API response.
 * Adjust according to your actual API response structure.
 */
interface StartInstanceResponse {
  msg?: string;
  // Add other response properties if needed
}

/**
 * Component to start an instance for a machine.
 */
const StartInstanceButton: React.FC<StartInstanceButtonProps> = ({ machineId, onInstanceStarted }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Handles the instance start action.
   */
  const handleStartInstance = async () => {
    setLoading(true);
    setError(null);
    try {
      const response: StartInstanceResponse = await startInstance(machineId);
      console.log('Instance started successfully:', response);
      onInstanceStarted();
    } catch (err: any) {
      console.error('Error starting instance:', err);
      setError(err.msg || 'Failed to start instance.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="start-instance-button-container">
      <div className='upper-text'>
        <FaDotCircle size={40} color="white" />
        <h2>Spawn Machine</h2>
      </div>
      <h3>Create machine and Start hacking.</h3>
      <div className="start-instance-btn">
        <label className="download-label">
          <input
            type="checkbox"
            className="download-input"
            onClick={handleStartInstance} // 기존의 onClick 동작
            disabled={loading} // 기존의 disabled 상태 반영
          />
          <span className="download-circle">
            {loading ? (
              <LoadingIcon /> // 로딩 상태일 때 LoadingIcon 렌더링
            ) : (
              <svg
                className="download-icon"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 19V5m0 14-4-4m4 4 4-4"
                ></path>
              </svg>
            )}
            <div className="download-square"></div>
          </span>
          <p className="download-title">
            {loading ? "Starting..." : "Start Instance"}
          </p>
          <p className="download-title">
            {loading ? "Please wait..." : "Instance Started"}
          </p>
        </label>
      </div>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default StartInstanceButton;