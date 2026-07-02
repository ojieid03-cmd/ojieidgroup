interface HeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function Heading({
  badge,
  title,
  subtitle,
  center = false,
}: HeadingProps) {
  return (
    <div
      className={`max-w-3xl ${
        center ? "mx-auto text-center" : ""
      }`}
    >
      {badge && (
        <span className="badge">
          {badge}
        </span>
      )}

      <h2 className="title-lg mt-5">
        {title}
      </h2>

      {subtitle && (
        <p className="subtitle mt-6">
          {subtitle}
        </p>
      )}
    </div>
  );
}