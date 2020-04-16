import React from "react";

export default ({
  handleInputOnChange,
  handleSubmit,
  inputTerm,
  isLoading,
  isEnabled,
}) => {
  return (
    <form className="field has-addons is-expanded" onSubmit={handleSubmit}>
      <label htmlFor="search-input">Search</label>
      <div className="control is-expanded">
        <input
          id="search-input"
          autoFocus
          className="input is-large"
          type="text"
          placeholder="Find a User"
          value={inputTerm}
          onChange={handleInputOnChange}
        />
      </div>
      <div className="control">
        <button
          disabled={!isEnabled}
          className={`button is-info is-large ${isLoading ? "is-loading" : ""}`}
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
};
