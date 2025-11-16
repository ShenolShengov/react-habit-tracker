export default function Section({
  children,
  image,
  direction = "column",
  ...props
}) {
  let classes = "w-[90%] flex justify-between items-center gap-24";
  if (direction === "column") {
    classes += " flex-col";
  }
  return (
    <div className={classes} {...props}>
      {children}
      {image && (
        <div className="w-full">
          <img src={image} alt="Steps to manage habit" className="w-full" />
        </div>
      )}
    </div>
  );
}
