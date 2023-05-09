import React, { useEffect } from "react";
import {
  Button,
  Select,
  Form as ANTDForm,
  Input,
  InputNumber,
  Switch,
  Typography,
  DatePicker,
  Space,
} from "antd";
import dayjs from "dayjs";
import { ResumeViewerType } from "../CvViewer/CvViewer.types";
import { text } from "stream/consumers";
import { useCvContext } from "../../context/CvContext";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import css from "./EditForm.module.css";

export const EditForm = () => {
  const { Item } = ANTDForm;
  const [form] = ANTDForm.useForm();
  const { cvData, setCvData } = useCvContext();
  const today = new Date().getTime();

  // do we need it?
  const submit = () => {
    const values = form.getFieldsValue() as ResumeViewerType;
  };

  const workExperienceHandle = () => {
    const values = form.getFieldsValue() as ResumeViewerType;
    console.log(values);
    const newWorkExperienceData = values?.workExperience?.map((el) => ({
      ...el,
      startDate: dayjs(el.startDate).valueOf(),
      endDate: dayjs(el.endDate).valueOf(),
    }));
    setCvData({ ...cvData, workExperience: newWorkExperienceData || [] });
  };

  const setWorkExperienceInForm = () => {
    const dataToSet = cvData.workExperience?.map((el) => ({
      ...el,
      startDate: dayjs(new Date(el?.startDate || today)),
      endDate: dayjs(el?.endDate || today),
    }));
    form.setFieldValue("workExperience", dataToSet);
  };

  useEffect(() => {
    setWorkExperienceInForm();
  }, [cvData]);
  return (
    <ANTDForm
      name="basic"
      labelCol={{ span: 8 }}
      initialValues={{ remember: true }}
      autoComplete="off"
      form={form}
      onFinish={submit}
    >
      <Item label="Theme">
        <Select
          mode="multiple"
          placeholder="Choose theme"
          options={["modern", "basic"].map((el) => ({ text: el, value: el }))}
        />
      </Item>

      <Item label="Description">
        <Input.TextArea
          key="Description"
          placeholder="Describe your best"
          value={cvData.personalInfo.description}
          onChange={(e) => {
            setCvData({
              ...cvData,
              personalInfo: {
                ...cvData.personalInfo,
                description: e.target.value,
              },
            });
          }}
        />
      </Item>

      <ANTDForm.List name="workExperience">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }, index) => (
              <div key={key} className={css.workExperienceBox}>
                <Item label="Company" name={[name, "companyName"]}>
                  <Input
                    placeholder="Company name"
                    value={cvData.workExperience?.[index]?.companyName || ""}
                    onChange={workExperienceHandle}
                  />
                </Item>
                <Item label="Position" name={[name, "position"]}>
                  <Input
                    placeholder="Position"
                    value={cvData.workExperience?.[index]?.position || ""}
                    onChange={workExperienceHandle}
                  />
                </Item>
                <Item label="Adress" name={[name, "adress"]}>
                  <Input
                    placeholder="adress"
                    value={cvData.workExperience?.[index]?.adress || ""}
                    onChange={workExperienceHandle}
                  />
                </Item>
                <Item label="Adress" name={[name, "startDate"]}>
                  <DatePicker
                    style={{ width: "100%" }}
                    picker="date"
                    key={key}
                    placeholder="Start date"
                    value={dayjs(
                      new Date(
                        cvData.workExperience?.[index]?.startDate || today
                      )
                    )}
                    onChange={workExperienceHandle}
                  />
                </Item>
                <Item label="Adress" name={[name, "endDate"]}>
                  <DatePicker
                    style={{ width: "100%" }}
                    picker="date"
                    key={key}
                    placeholder="End date"
                    value={dayjs(
                      new Date(cvData.workExperience?.[index]?.endDate || today)
                    )}
                    onChange={workExperienceHandle}
                  />
                </Item>

                <Item label="Description" name={[name, "description"]}>
                  <Input.TextArea
                    key="Description"
                    placeholder="Describe your best"
                    value={cvData.workExperience?.[index]?.description || ""}
                    onChange={workExperienceHandle}
                  />
                </Item>
                <Item label="Description" name={[name, "isCurrentWork"]}>
                  <Switch
                    key={key}
                    defaultChecked={
                      cvData.workExperience?.[index]?.isCurrentWork || false
                    }
                    onChange={workExperienceHandle}
                  />
                </Item>

                <MinusCircleOutlined onClick={() => remove(name)} />
              </div>
            ))}
            <ANTDForm.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add work experience
              </Button>
            </ANTDForm.Item>
          </>
        )}
      </ANTDForm.List>
    </ANTDForm>
  );
};
