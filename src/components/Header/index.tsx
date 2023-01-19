import { useState } from 'react'
import Logo from '../Logo';
import ServiceButton from './serviceButton';
import BoxTypeButton from './boxTypeButton';
import SelectOption from './selectOption';
import BPMN from './bpmn';
import BPMNModeler from './bpmnmodeler';
// import BPMNModeler from './bpmnmodeler';
const Header = () => {
  const serviceItems = [
    {
      title: "Internet",
      type: "internet",
      className: "service-button"
    },
    {
      title: "Video",
      type: "video",
      className: "service-button"
    },
    {
      title: "Voice",
      type: "voice",
      className: "service-button"
    }
  ];
  const boxTypes = [
    {
      title: "A1/Mini",
      type: "a1-mini",
      className: "service-button"
    },
    {
      title: "OMS",
      type: "oms",
      className: "service-button"
    }
  ];
  const defaultServiceType = serviceItems[0].type;
  const miniOptions = [
    {
      label: "Mini-1",
      value: "mini1"
    },
    {
      label: "Mini-2",
      value: "mini2"
    },
    {
      label: "Mini-3",
      value: "mini3"
    }
  ];
  const omsOptions = [
    {
      label: "oms-1",
      value: "oms1"
    },
    {
      label: "oms-2",
      value: "oms2"
    },
    {
      label: "oms-3",
      value: "oms3"
    }
  ];
  const [serviceType, setServicType] = useState<string>(defaultServiceType);
  const [activeBoxType, setActiveBoxType] = useState<string>("a1-mini");
  const handleServicButtonClick = (type: string) => {
    console.log('type:', type);
    setServicType(type);
  };
  const boxTypeButtonClick = (type: string) => {
    console.log('type:', type);
    setActiveBoxType(type);
  };
  const handleInputChange = (input: any) => {
    console.log('Input:', input)
  };
  const showBoxTypes = (): boolean => {
    return serviceType === 'video';
  };
  return (
    <header className="px-4 lg:px-8 py-2.5 z-10 fixed top-0 w-full">
      <div className="flex flex-nowrap justify-between">
        <div className="service-buttons-col">
          {serviceItems.map((serviceItem: any) => {
            return (
              <ServiceButton
                key={serviceItem.type}
                title={serviceItem.title}
                type={serviceItem.type}
                className={`${serviceItem.className} mr-2 text-white`}
                handleServicButtonClick={handleServicButtonClick}
              />
            );
          })}
        </div>
        <div className="drop-down-col">
          <h5>{activeBoxType}</h5>
          {activeBoxType === "a1-mini" && <SelectOption
            options={miniOptions}
            handleInputChange={handleInputChange}
          />}
          {activeBoxType === "oms" && <SelectOption
            options={omsOptions}
            handleInputChange={handleInputChange}
          />}
        </div>
        <div className="flow-col">Flow Col</div>
      </div>
      {showBoxTypes() && <div className="mt-10">
        {boxTypes.map((boxType: any) => {
          return (
            <BoxTypeButton
              key={boxType.type}
              title={boxType.title}
              type={boxType.type}
              isActive={boxType.type === activeBoxType}
              className={`${boxType.className} mr-2`}
              boxTypeButtonClick={boxTypeButtonClick}
            />
          );
        })}
      </div>
      }
      <BPMNModeler/>
    </header>
  );
};

export default Header;
