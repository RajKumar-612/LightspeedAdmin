import React, { useState, useEffect, useRef } from "react";
// import BpmnModeler from 'bpmn-js/lib/Modeler';
// import ReactBpmn from 'react-bpmn';
import BpmnView from "./diagramViewer";
import ModelerCreator from "./diagramCreator/index";
// import "./styles.css";
interface ISelectType {
    options?: any;
    handleInputChange?: any;
    className?: string;
};
const BPMN = (props: ISelectType) => {
    // const containerEl = useRef(null);
    // const bpmnModeler = new BpmnModeler({
    //     container: containerEl,
    //     moddleExtensions: {
    //      // qa: qaExtension
    //     }
    //   });
    return (
        // <div ref={containerEl}>BPMN</div>
        <BpmnView />
    );
};

export default BPMN;

