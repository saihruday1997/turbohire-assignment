import React from "react";
import "./FormOptions.css";
import DetailsCard from "./FormOptions/DetailsCard";
import NewFormCard from "./FormOptions/NewFormCard";
import DocumentCard from "./FormOptions/DocumentCard";
import StatementCard from "./FormOptions/StatementCard";
import InterviewCard from "./FormOptions/InterviewCard";

export default function FormOptions(props) {
  return (
    <div className="form-options">
      <NewFormCard />
      <div>Explore the following Templates:</div>
      <DetailsCard
        onClick={props.changeComponent}
        class={props.currentComponent === "DetailsCollection" && true}
      />
      <DocumentCard
        onClick={props.changeComponent}
        class={props.currentComponent === "DocumentCollection" && true}
      />
      <StatementCard
        onClick={props.changeComponent}
        class={props.currentComponent === "Statement" && true}
      />
      <InterviewCard
        onClick={props.changeComponent}
        class={props.currentComponent === "Interview" && true}
      />
    </div>
  );
}
