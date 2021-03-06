import React, { FC } from "react";



interface FormProps {
  engineeringGroupOptions?: string[];
  statusOptions?: string[];
}

const AddScenarioForm: FC<FormProps> = (props) => {
  return (
    <form className="form" action="">
      <div className="form-group">
        <label htmlFor="ScenrioID">מזהה תרחיש</label>
        <input
          className="form-control"
          type="text"
          name="ScenrioID"
          id=""
          placeholder="לדוגמה: A1212"
        />
      </div>
      <div className="form-group">
        <label htmlFor="ScenarioName">שם תרחיש</label>
        <input className="form-control" type="text" name="ScenarioName" id="" />
      </div>
      <div className="form-group">
        <label htmlFor="ScenarioContent">תוכן תרחיש</label>
        <input
          className="form-control"
          type="text"
          name="ScenarioContent"
          id=""
          placeholder="סיפור הרקע ומה נדרש"
        />
      </div>
      <div className="form-group">
        <label htmlFor="ScenarioIntegrator">מדור מוביל</label>
        <select
          className="form-control"
          name="ScenarioIntegrator"
          id=""
          placeholder="מדור מוביל"
        >
          {props.engineeringGroupOptions.map((value) => {
            return <option value={value}>{value}</option>;
          })}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="activationTime">זמן הפעלה</label>
        <input
          className="form-control"
          type="datetime-local"
          name="activationTime"
          id=""
          placeholder="זמן הפעלה"
        />
      </div>
      <div className="form-group">
        <label htmlFor="deadlineTime">זמן יעד</label>
        <input
          className="form-control"
          type="datetime-local"
          name="deadlineTime"
          id=""
          placeholder="זמן יעד"
        />
      </div>
      <div className="form-group">
        <label htmlFor="status">סטטוס</label>
        <select className="form-control" name="status" id="">
          {props.statusOptions.map((value) => {
            return <option value={value}>{value}</option>;
          })}
        </select>
      </div>
    </form>
  );
};

export default AddScenarioForm;
