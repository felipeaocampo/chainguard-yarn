import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { NavBarFragment } from "@/lib/__generated/sdk";
import Image from "next/image";

const Logo = ({ navBar }: { navBar: NavBarFragment }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {
        <Image
          src={
            theme === "dark" || theme === "system"
              ? navBar.logosCollection?.items[1]?.url
              : navBar.logosCollection?.items[0]?.url || ""
          }
          alt={
            theme === "dark" || theme === "system"
              ? navBar.logosCollection?.items[1]?.description
              : navBar.logosCollection?.items[0]?.description || ""
          }
          width={146}
          height={28}
        />
      }
    </>
  );
};

export default Logo;
