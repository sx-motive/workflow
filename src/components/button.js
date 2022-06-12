import { Link } from "react-router-dom";

export default function Button({
  href,
  children,
  className,
  magnetic,
  cursor,
}) {
  return (
    <Link to={href}>
      <span
        className={`button ${className ? className : ""}`}
        data-cursor={cursor ? cursor : "disable"}
        data-magnetic={magnetic}
      >
        {className === "skew" ? (
          <span data-text={children}>{children}</span>
        ) : (
          ""
        )}
        {className === "outline" ||
        className === "solid" ||
        className === "rounded" ? (
          <>
            <div className="skew-wrap">
              <div className="skew-text" data-text={children}>
                {children}
              </div>
            </div>
            <div className="bg"></div>
            <div className="ripple">
              <div className="ripple-span"></div>
            </div>
          </>
        ) : (
          ""
        )}
        {className !== "skew" &&
        className !== "outline" &&
        className !== "solid" &&
        className !== "rounded"
          ? children
          : ""}
      </span>
    </Link>
  );
}
