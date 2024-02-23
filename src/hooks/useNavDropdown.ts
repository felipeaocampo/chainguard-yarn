import { useState, useCallback } from "react";

export const useNavDropdown = () => {
  const [hovered, setHovered] = useState(false);
  const [showing, setShowing] = useState(false);

  const handleDropdownHoverEnter = useCallback(() => {
    setHovered(true);
    setTimeout(() => {
      setShowing(true);
    }, 100);
  }, []);

  const handleDropdownHoverExit = useCallback(() => {
    setShowing(false);
    setTimeout(() => {
      setHovered(false);
    }, 200);
  }, []);

  const handleLinkClick = useCallback(() => {
    setHovered(false);
    setShowing(false);
  }, []);

  return {
    hovered,
    showing,
    handleDropdownHoverEnter,
    handleDropdownHoverExit,
    handleLinkClick,
  };
};
