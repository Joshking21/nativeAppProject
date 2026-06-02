import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import StyledButton from "../../components/button";

const Profile = () => {
  const handleProfile = () => console.log("Logging in...");

  return (
    <>
      <StyledButton title="Sign In" onPress={handleProfile} />

      {/* Danger/Delete Button */}
      <StyledButton
        title="Delete Account"
        onPress={() => {}}
        // variant="danger"
      />

      {/* Custom Overridden Button */}
      <StyledButton
        title="Custom Green"
        onPress={() => {}}
        className="bg-green-500 active:bg-green-600 rounded-full"
        // variant=""
      />
    </>
  );
};

export default Profile;
