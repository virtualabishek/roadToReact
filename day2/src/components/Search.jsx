const Search = () => {
  //perfrom tasks
  const handleChange = (e) => {
    console.log(e);
    console.log(e.target.value);
  };
  return (
    <>
      <label htmlFor="search">Search: </label>
      <input
        type="text"
        id="search"
        placeholder="Search Anything..."
        onChange={handleChange}
      />
    </>
  );
};

export default Search;
