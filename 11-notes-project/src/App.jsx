import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ title, detail });
    setTask(copyTask);
    setTitle("");
    setDetail("");
  };
  const deleteNote = (id) => {
    const copyTask = [...task];
    console.log(copyTask[id]);
    copyTask.splice(id, 1);
    setTask(copyTask);
  };
  return (
    <div className="h-screen bg-black text-white lg:flex">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        action=""
        className="p-10 flex items-start flex-col gap-5 lg:w-1/2"
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>
        <input
          type="text"
          placeholder="Enter Notes Heading"
          value={title}
          className="border-2 font-medium px-5 py-2 rounded w-full outline-none"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          type="text"
          placeholder="Write Details"
          className="border-2 font-medium px-5 py-2 rounded h-32 w-full outline-none"
          value={detail}
          onChange={(e) => {
            setDetail(e.target.value);
          }}
        />
        <button className="bg-white font-medium text-black px-5 py-2 rounded w-full outline-none">
          Add Note
        </button>
      </form>
      <div className="p-10 lg:w-1/2 lg:border-l-2">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div
          className="flex flex-wrap items-start justify-start gap-5 mt-5 overflow-auto h-[90%]"
          id="scroll"
        >
          {task.map((e, id) => {
            return (
              <div
                key={id}
                className="flex flex-col justify-between items-start h-52 w-40 rounded-xl pt-9 pb-4 px-4 bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] text-black"
              >
                <div>
                  <h3 className="leading-tight text-xl font-bold">{e.title}</h3>
                  <p className="mt-4 leading-tight font-semibold text-gray-600 text-xs">
                    {e.detail}
                  </p>
                </div>
                <button
                  onClick={() => {
                    deleteNote(id);
                  }}
                  className="bg-red-700 w-full text-white font-bold rounded cursor-pointer py-1 text-xs active:scale-95"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
