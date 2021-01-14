import React from "react";
import "./FormDetails.css";
import DetailsCollection from "./FormDetails/DetailsCollection";
import DocumentCollection from "./FormDetails/DocumentCollection";
import StatementOfPurpose from "./FormDetails/StatementOfPurpose";
import InterviewAbility from "./FormDetails/InterviewAbility";

export default function FormDetails(props) {
  return (
    <div className="root">
      {" "}
      <h3>Preview</h3>
      <p>You will be able to customize the fields in the later stage</p>
      <div className="form-details">
        {(function () {
          switch (props.currentComponent) {
            case "DetailsCollection":
              return <DetailsCollection />;
            case "DocumentCollection":
              return <DocumentCollection />;
            case "Statement":
              return <StatementOfPurpose />;
            case "Interview":
              return <InterviewAbility />;
          }
        })()}
      </div>
    </div>
  );
}
