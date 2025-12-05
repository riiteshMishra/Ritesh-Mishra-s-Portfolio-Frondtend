import React from "react";
import BackgroundAnimation from "../../../common/Animation/BackgroundAnimation";
import CreateProjectForm from "./CreateProjectForm";

const CreateProject = () => {
  return (
    <section className="relative min-h-[calc(100vh-60px)] overflow-hidden flex items-center justify-center px-4">
      {/* Background Animation */}
      <BackgroundAnimation />

      {/* Page Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto animate-fadeIn overflow-hidden">

        {/* Form Container */}
 
          <CreateProjectForm />
       
      </div>
    </section>
  );
};

export default CreateProject;
