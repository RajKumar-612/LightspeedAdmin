interface IBoxTypeButtonType {
  title: string;
  boxTypeButtonClick: any;
  className?: string;
  type: string;
  isActive?: boolean;
};
const BoxTypeButton = (props: IBoxTypeButtonType) => {
  return (
    <button
      className={`${props.className} ${props.isActive ? 'bg-slate-800':'bg-slate-400'} p-4 rounded text-white`}
      onClick={() => props.boxTypeButtonClick(props.type)}
    >
      {props.title}
    </button>
  );
};

export default BoxTypeButton;

