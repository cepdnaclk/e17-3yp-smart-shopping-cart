//still not used?????????????????????
//this component is used to place header icons
import React, { PureComponent } from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { FontAwesome } from "@expo/vector-icons";

const CustomHeaderButton = (props) => {
  //use of {...props}????
  return (
    <HeaderButton
      {...props}
      IconComponent={IconComponent}
      iconSize={32}
      color="#f0f8ff"
    />
  );
};

export default CustomHeaderButton;
