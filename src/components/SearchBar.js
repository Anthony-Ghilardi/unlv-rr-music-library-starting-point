import { useState } from "react";
import Button from "react-bootstrap/Button";

function SearchBar(props) {
  let [searchTerm, setSearchTerm] = useState("");

  return (
    <form>
      <input type="text" placeholder="Enter a search term here" />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default SearchBar;
