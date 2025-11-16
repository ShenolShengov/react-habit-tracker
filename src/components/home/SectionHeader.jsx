export default function HomeSectionHeader({
  preTitle,
  title,
  description,
  center = true,
  children,
}) {
  let classes = "flex flex-col gap-4 justify-center flex-1";
  let titleClasses = "font-outfit text-7xl/[1.1] font-medium";
  let descriptionClasses = "text-lg";
  if (center) {
    classes += " items-center";
    titleClasses += " text-center";
    descriptionClasses += " text-center";
  } else {
    classes += " items-baseline";
  }
  return (
    <div className={classes}>
      <p className="font-outfit text-lg/[1.1] font-medium">{preTitle}</p>
      <h2 className={titleClasses}>{title}</h2>
      <p className={descriptionClasses}>{description}</p>
      {children}
    </div>
  );
}
