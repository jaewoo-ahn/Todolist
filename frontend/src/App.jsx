import TodoCard from "./components/TodoCard";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-start items-center pt-16">
      <h1 className="font-bold text-4xl">AWESOME TO DO LIST 🥰 </h1>
      <div>
        <div className="mt-8 text-sm font-semibold">
          Give me six hours to chop down a tree and I will spend the first four
          sharpening the axe. Abraham Lincoln
        </div>
        <div className="text-xs">
          나에게 나무를 자를 여섯 시간을 준다면, 나는 먼저 네 시간을 도끼를
          날카롭게 하는 데에 쓰겠다. 에이브러햄 링컨
        </div>
        <form className="flex mt-2">
          <input
            type="text"
            className="grow border-2 border-pink-200 rounded-lg focus:outline-pink-400 px-2 py-1 text-lg"
          />
          <input
            type="submit"
            value="새 투두 생성"
            className="ml-4 px-2 py-1 bg-pink-200 hover:bg-pink-400 rounded-lg text-gray-50"
          />
        </form>
        <ul className="mt-16 flex flex-col w-1/2">
          <TodoCard title="🤌 빨래하기" />
          <TodoCard title="👈 운동하기" />
        </ul>
      </div>
    </div>
  );
}

export default App;
