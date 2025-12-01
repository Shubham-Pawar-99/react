import { useCallback, useState, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [isNumerAllow, setIsNumerAllow] = useState(true);
  const [isCharacterAllow, setIsCharacterAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumerAllow) str += "0123456789";
    if (isCharacterAllow) str += "!@#$%^&*()_+~`";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, isNumerAllow, isCharacterAllow, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, isCharacterAllow, isNumerAllow, passwordGenerator]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="w-full max-w-md mx-auto bg-gray-500 shadow-md rounded-lg px-4 py-3 my-8 text-orange-500">
        <h1 className="text-4xl text-center text-white my-3">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            ref={passwordRef}
            value={password}
            placeholder="Password"
            className="outline-none w-full py-1 px-3 bg-white text-black"
            readOnly
          />
          <button
            className="outline-none py-1 px-3 bg-blue-700 text-white shrink-0 active:scale-95 cursor-pointer"
            onClick={copyPassword}
          >
            Copy
          </button>
        </div>
        <div className="flex gap-x-3 text-sm">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="cursor-pointer"
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isNumerAllow}
              onChange={() => setIsNumerAllow((prev) => !prev)}
            />
            <label>Numbers</label>
            <input
              type="checkbox"
              defaultChecked={isCharacterAllow}
              onChange={() => setIsCharacterAllow((prev) => !prev)}
            />
            <p>Characters</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
