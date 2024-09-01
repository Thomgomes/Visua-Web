/* eslint-disable react/prop-types */
import AuthContainer from "../../Container/AuthContainer";
import Button from "../Btn";
import { useState } from "react";

export default function ButtonForm({ children, className, py, formType }) {
  const [showAuthContainer, setShowAuthContainer] = useState(false);

  const openAuthContainer = () => setShowAuthContainer(true);
  const closeAuthContainer = () => setShowAuthContainer(false);
  return (
    <div>
      <Button className={className} py={py} onClick={openAuthContainer}>
        {children}
      </Button>
      {showAuthContainer && (
        <AuthContainer formType={formType} onClose={closeAuthContainer} />
      )}
    </div>
  );
}
