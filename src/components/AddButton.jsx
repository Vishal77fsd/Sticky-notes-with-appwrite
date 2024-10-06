import { useRef, useContext } from "react";
import { NoteContext } from "../context/NoteContext.jsx";
import { db } from "../appwrite/databases";
import colors from "../assets/colors.json";
import Plus from "../icons/Plus.jsx";
const AddButton = () => {
  const { setNotes } = useContext(NoteContext);
  const startingPos = useRef(10);

  const addNote = async () => {
    const payload = {
      position: JSON.stringify({
        x: startingPos.current,
        y: startingPos.current,
      }),
      colors: JSON.stringify(colors[0]),
      body: "Hello World!",
    };
    startingPos.current += 10;
    const response = await db.notes.create(payload);
    setNotes((prevState) => [response, ...prevState]);
  };

  return (
    <div id="add-btn" onClick={addNote}>
      <Plus />
    </div>
  );
};
export default AddButton;
