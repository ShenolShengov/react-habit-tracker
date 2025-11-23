export default function DashboardSection({ children, className }) {
  const classes = `flex-1 flex flex-col p-24 font-outfit ${className ?? ""}`;
  return <div className={classes}>{children}</div>;
}
