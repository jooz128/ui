import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Switch from 'react-switch';
import Sidebar from '../../components/sidebar/Sidebar';

const Settings = () => {
  const [privacySwitch, setPrivacySwitch] = useState(true);
  const [preferencesSwitch, setPreferencesSwitch] = useState(true);
  const [deleteSwitch, setDeleteSwitch] = useState(true);
  const [notificationsSwitch, setNotificationsSwitch] = useState(true);
  return (
    <>
      <Header />

      <div className="flex flex-col md:flex-row" style={{ marginTop: '250px' }}>
        {/* Sidebar Section */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-grow p-6">
          <h1 className="text-3xl font-bold mb-6">Settings</h1>

          {/* Privacy Section */}
          <div className="mb-6">
          <h2 className="flex items-center justify-between text-xl font-bold mb-4">
              Privacy
              <Switch
                onChange={() => setPrivacySwitch(!privacySwitch)}
                checked={privacySwitch}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={20}
                uncheckedIcon={false}
                checkedIcon={false}
                height={10}
                width={35}
              />
            </h2>
            <p className="text-sm mb-4">
              Exercise your privacy rights and control how your data is used.
            </p>
            <p className="text-sm mb-4">
              Privacy setting: <span className="font-bold">garima@xyz.in</span>
            </p>
            <p className="text-sm mb-4">
              Select <span className="font-bold">Manage</span> to change your privacy settings and exercise your rights during our request form.
            </p>
          </div>

          {/* Preferences Section */}
          <div className="mb-6">
          <h2 className="flex items-center justify-between text-xl font-bold mb-4">
              Preferences
              <Switch
                onChange={() => setPreferencesSwitch(!preferencesSwitch)}
                checked={preferencesSwitch}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={20}
                uncheckedIcon={false}
                checkedIcon={false}
                height={10}
                width={35}
              />
            </h2>
            <p className="text-sm mb-4">
              Exercise your privacy rights and control how your data is used.
            </p>
            <p className="text-sm mb-4">
              Privacy setting: <span className="font-bold">garima@xyz.in</span>
            </p>
            <p className="text-sm mb-4">
              Select <span className="font-bold">Manage</span> to change your privacy settings and exercise your rights during our request form.
            </p>
          </div>

          {/* Delete Account Section */}
          <div className="mb-6">
          <h2 className="flex items-center justify-between text-xl font-bold mb-4">
              Delete Your Account
              <Switch
                onChange={() => setDeleteSwitch(!deleteSwitch)}
                checked={deleteSwitch}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={20}
                uncheckedIcon={false}
                checkedIcon={false}
                height={10}
                width={35}
              />
            </h2>
            <p className="text-sm mb-4">
              Exercise your privacy rights and control how your data is used.
            </p>
          </div>

          {/* Notifications Section */}
          <div>
          <h2 className="flex items-center justify-between text-xl font-bold mb-4">
              Notifications
              <Switch
                onChange={() => setNotificationsSwitch(!notificationsSwitch)}
                checked={notificationsSwitch}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={20}
                uncheckedIcon={false}
                checkedIcon={false}
                height={10}
                width={35}
              />
            </h2>
            <p className="text-sm mb-4">
              Exercise your privacy rights and control how your data is used.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Settings;
