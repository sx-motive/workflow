import React from "react";
import Button from "./button";

function useStickyState(defaultValue, key) {
  const [value, setValue] = React.useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

export default function Cookie() {
  const [isCookie, setCookie] = useStickyState(true, "cookie");

  return (
    <>
      {isCookie ? (
        <div className="cookie">
          I'am using your expiriance for development my personal and probably
          your future projects.
          <div className="gotit" onClick={() => setCookie(!isCookie)}>
            <Button href="#" className="skew">
              Got it!
            </Button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
