import { TextWithHeading } from "../TextWithHeading/TextWithHeading";
import { getDateFromTimeStampInDay } from "../formatters/date.formatters";
import css from "./WorkBlock.module.css";

type WorkBlockProps = {
  companyName: string;
  position: string; // job title
  adress?: string;
  startDate: number; // timestamp
  endDate: number; // timestamp
  isCurrentWork: boolean;
  description: string; // richText? or just string
};

export const WorkBlock = ({
  companyName,
  position,
  adress,
  startDate,
  endDate,
  isCurrentWork,
  description,
}: WorkBlockProps) => {
  return (
    <div className={css.wrapper}>
      <div className={css.heading}>
        <h3>{companyName}</h3>
        {getDateFromTimeStampInDay(startDate)} -{" "}
        {isCurrentWork ? "now" : getDateFromTimeStampInDay(endDate)}
      </div>
      {position && <h4>position</h4>}
      {adress && <p>{adress}</p>}
      {description && (
        <TextWithHeading
          heading="Description"
          text={description}
          isSmallHeading
        />
      )}
    </div>
  );
};
