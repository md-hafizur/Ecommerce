"use client";

import React from "react";
import { useSmallMediumDevice } from "@/hooks/use-small-medium-device";
import LgFooter from "./lg-footer";
import SmFooter from "./sm-footer";

const Footer = () => {
  const isSmallMedium = useSmallMediumDevice();

  if (isSmallMedium === undefined) {
    return null; // or a loader if you prefer
  }

  return isSmallMedium ? <SmFooter /> : <LgFooter />;
};

export default Footer;
