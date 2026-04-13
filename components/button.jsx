import { Pressable, Text, View } from 'react-native';
import React from 'react';


const StyledButton = ({ 
  title, 
  onPress, 
  variant = "primary", // default style
  className = ""       // extra custom classes
}) => {
  
  // Define your theme logic here
  const variants = {
    primary: "bg-purple-600 active:bg-purple-800",
    danger: "bg-red-500 active:bg-red-700",
    outline: "border-2 border-purple-600 active:bg-purple-50",
  };

  const textVariants = {
    primary: "text-white",
    danger: "text-white",
    outline: "text-purple-600",
  };

  return (
    <Pressable 
      onPress={onPress}
      // Combine the variant classes with any extra classes passed in
      className={`p-4 rounded-xl items-center justify-center ${variants[variant]} ${className}`}
    >
      {({ pressed }) => (
        <Text 
          className={`font-bold text-lg ${textVariants[variant]} ${pressed ? 'opacity-70' : 'opacity-100'}`}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
};

export default StyledButton;