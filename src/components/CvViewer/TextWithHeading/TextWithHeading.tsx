import css from "./TwextWithHeading.module.css";

type TextWithHeadingProps = {
  heading?: string;
  text?: string;
  isSmallHeading?: boolean;
};

export const TextWithHeading = ({
  heading,
  text,
  isSmallHeading,
}: TextWithHeadingProps) => {
  return (
    <div className={css.wrapper}>
      {heading && !isSmallHeading && <h3>{heading}</h3>}
      {heading && isSmallHeading && <h5>{heading}</h5>}
      <hr />
      {text && <p>{text}</p>}
    </div>
  );
};
