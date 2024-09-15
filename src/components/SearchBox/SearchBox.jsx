import { useId, useState, useEffect } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const id = useId();

  const filter = useSelector((state) => state.filters.filter);
  const [query, setQuery] = useState(filter || "");

  useEffect(() => {
    setQuery(filter);
  }, [filter]);

  const handleChange = (e) => {
    const value = e.target.value.trim().toLowerCase();
    setQuery(value);
    dispatch(changeFilter(value));
  };

  return (
    <div className={css.wrap}>
      <input
        className={css.input}
        type="text"
        name="search"
        placeholder="Find contacts"
        id={id}
        value={query}
        onChange={handleChange}
      />
      <label className={css.label} htmlFor={id}>
        Find contacts
      </label>
    </div>
  );
}
