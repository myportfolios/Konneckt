// import 'mount' fn from UserProfileApp
import { mount } from "userProfile/UserProfileApp"; // <local alias 'userProfile' will be used to import modules from the remote application>/</UserProfileApp" is the exposed module name from remote app>
import React, { useRef, useEffect } from "react";

export default () => {
  const elementRef = useRef(null);
  useEffect(() => {
    mount(elementRef.current);
  });
  return <div ref={elementRef} />;
};
