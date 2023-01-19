import Modeler from "bpmn-js/lib/Modeler";

import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";

import { useEffect, useRef } from "react";

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="3.3.5">
  <bpmn:process id="Process_1" isExecutable="true">
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`;

const BPMNModeler = () =>{
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        const modeler = new Modeler({
            container,
            keyboard: {
                bindTo: document
            }
        });

        modeler.importXML(xml, (err: any) => {
            if (err) {
                console.error(err);
            }

            const canvas = modeler.get("canvas");
            const elementFactory = modeler.get("elementFactory");

            canvas.zoom("fit-viewport");

            var task = elementFactory.createBpmnElement("shape", {
                type: "bpmn:Task",
                x: 350,
                y: 100
            });

            var root = canvas.getRootElement();

            canvas.addShape(task, root);
        });

    }, [])


    return (
        <div ref={containerRef} style={{width: '100%', height: '100%'}}>
        </div>
    );
}
export default BPMNModeler;