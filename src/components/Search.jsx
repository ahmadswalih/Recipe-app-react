import { useState } from "react";
import { FormStyle } from "../StyledComponents";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Search = () => {
  const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e)=>{
        e.preventDefault();
        navigate(`/searched/${input}`)
        console.log(input);
    }

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
          value={input}
        />
      </div>
    </FormStyle>
  );
};

export default Search;
