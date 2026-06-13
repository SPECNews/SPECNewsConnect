import { useEffect, useState } from "react";

export default function Intro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => setShow(false), 3000);
  }, []);

  if (!show) return null;

  return (
    <div className="intro">
      SPEC NEWS NETWORK
    </div>
  );
}