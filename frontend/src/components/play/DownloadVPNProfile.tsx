import React from 'react';
import { downloadOpenVPNProfile } from '../../api/axiosInstance';
import { IoMdDownload } from "react-icons/io";
import '../../assets/scss/play/DownloadVPNProfile.scss';


/**
 * Component to download the OpenVPN profile.
 */
const DownloadVPNProfile: React.FC = () => {
  /**
   * Handles the VPN profile download.
   */
  const handleDownload = async () => {
    try {
      const response = await downloadOpenVPNProfile();

      // Assuming the response is a Blob
      const blob = new Blob([response.data], { type: 'application/x-openvpn-profile' });
      const url = window.URL.createObjectURL(blob);

      // Create and trigger download
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'vpn-profile.ovpn');
      document.body.appendChild(link);
      link.click();

      // Cleanup
      link.parentNode?.removeChild(link);
      window.URL.revokeObjectURL(url);

    } catch (error: any) {
      console.error('Error downloading OpenVPN profile:', error);
      alert(error.response?.data?.msg || 'Failed to download OpenVPN profile.');
    }
  };

  return (
    <div className="download-container">
      <div className="download-title">
        <div className="upper-text">
          <IoMdDownload color="white" size={40} />
          <h2><b>Connect</b></h2>
        </div>
        <h3>Connect using OpenVPN
          <br/>DownLoad your VPN configuration 
          <br/>and connect from your own environment.
        </h3>
      </div>
      <button onClick={handleDownload} className="download-vpn-button">
        Download VPN Profile
      </button>
    </div>
  );
};

export default DownloadVPNProfile;
