interface IServiceButtonType {
    title: string;
    handleServicButtonClick: any;
    className?: string;
    type: string;
};
const ServiceButton = (props:IServiceButtonType) => {
  return (
   <button
    className={`${props.className} bg-sky-500 p-4 rounded`}
     onClick={()=>props.handleServicButtonClick(props.type)}
   >
        {props.title}
   </button>
  );
};

export default ServiceButton;

