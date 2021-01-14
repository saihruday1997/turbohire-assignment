import React from "react";
import "./App.css";
import Header from "./components/Header";
import FormOptions from "./components/FormOptions";
import FormDetails from "./components/FormDetails";
import Footer from "./components/Footer";

function App() {
  const [currentDetails, setCurrentDetails] = React.useState(
    "DetailsCollection"
  );

  const changeComponent = (name) => {
    setCurrentDetails(name);
  };

  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <FormOptions
          changeComponent={changeComponent}
          currentComponent={currentDetails}
        />
        <FormDetails currentComponent={currentDetails} />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
