import React from "react";
//incomplete feature

const Footer = () => {
  return (
    <div className="rounded-2xl bg-neutral p-4 text-neutral-content shadow-lg">
      <div className="p-4 text-center">
        Copyright @ {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
