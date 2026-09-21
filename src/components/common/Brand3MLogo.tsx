import React from "react";

interface Brand3MLogoProps {
  className?: string;
  alt?: string;
}

export const Brand3MLogo: React.FC<Brand3MLogoProps> = ({
  className = "",
}) => {
  return <span className={`text-3m-red ${className}`.trim()}>3M</span>;
};

/**
 * Utility helper to split any string containing "3M" and return React elements replacing "3M" with bold red 3M text
 */
export const renderWith3MLogo = (
  text?: string | null,
  logoClassName: string = "text-3m-red"
): React.ReactNode => {
  if (!text) return text;
  if (!text.includes("3M")) return text;

  const parts = text.split("3M");
  return parts.map((part, index) => (
    <React.Fragment key={index}>
      {part}
      {index < parts.length - 1 && <span className={logoClassName}>3M</span>}
    </React.Fragment>
  ));
};
