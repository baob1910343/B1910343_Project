import React from "react";

export default function Inputsearch() {
  return (
    <div>
      <div className="input-group">
        <div className="form-outline">
          <input type="search" id="form1" className="form-control" />
          <label className="form-label" for="form1">
            Search
          </label>
        </div>
        <button type="button" className="btn btn-primary">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
}
