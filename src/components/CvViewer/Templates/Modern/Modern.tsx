import { ResumeViewerType } from "../../CvViewer.types";
import css from "./Modern.module.css";
import { TextWithHeading } from "../../TextWithHeading/TextWithHeading";
import { WorkBlock } from "../../WorkBlock/WorkBlock";
import { Skills } from "../../Skills/Skills";
import { Hobbies } from "../../Hobbies/Hobbies";
import { Avatar } from "../../Avatar/Avatar";
import { PersonalInfo } from "../../PersonalInfo/PersonalInfo";
import { Social } from "../../Social/Social";

type CvViewerProps = {
  cv: ResumeViewerType;
  isReverse?: boolean
};
export const Modern = ({ cv, isReverse = false }: CvViewerProps) => {
  const {
    personalInfo,
    workExperience,
    education,
    skills,
    hobbies,
    additionalBlocks,
  } = cv;

  return (
    <div className={isReverse ? css.wrapperReverse : css.wrapper}>
      <div className={css.leftBlock}>
        <TextWithHeading
          heading="Description"
          text={personalInfo.description}
        />
        <TextWithHeading heading="Work experience" />
        {(workExperience || []).map((el) => (
          <WorkBlock {...el} />
        ))}
        <TextWithHeading heading="Education" />
        {(education || []).map((el) => (
          <WorkBlock
            companyName={el.universityName}
            position={el.speciality}
            isCurrentWork={el.isCurrentEducation}
            {...el}
          />
        ))}
        <TextWithHeading heading="Skills" />
        <Skills items={skills || []} />
        <TextWithHeading heading="Hobbies" />
        <Hobbies items={hobbies || []} />
        {(additionalBlocks || []).map((el) => (
          <TextWithHeading heading={el.title} text={el.description} />
        ))}
      </div>
      <div className={css.rightColumn}>
        <h2>{personalInfo.fullName}</h2>
        <Avatar
          avatar={personalInfo.avatar}
          isShowAvatar={personalInfo.isShowAvatar}
          className={css.avatar}
        />
        <PersonalInfo {...personalInfo} />
        <Social {...personalInfo.social} />
      </div>
    </div>
  );
};