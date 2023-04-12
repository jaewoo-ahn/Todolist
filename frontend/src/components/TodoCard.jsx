import {useState} from "react";

const TodoCard = ({title}) => {
  const [isDone, setISDone] = useState(false);

  const onClickToggle = () => {
    setISDone(!isDone);
  };
  return (
    <>
      {isDone ? (
        <li className="flex my-4" onClick={onClickToggle}>
          <div className="relative">
            <div className="border-4 border-pink-400 w-8 h-8 rounded-xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-white bg-pink-400 w-8 h-8 scale-75 rounded-xl"></div>{" "}
          </div>
          <div className="text-2xl ml-4">{title}</div>
        </li>
      ) : (
        <li className="flex my-4" onClick={onClickToggle}>
          <div className="border-4 border-pink-400 w-8 h-8 rounded-xl"></div>
          <div className="text-2xl ml-4">{title}</div>
        </li>
      )}
    </>
  );
};

export default TodoCard;
