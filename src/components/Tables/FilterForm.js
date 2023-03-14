import React, { useState } from "react";

function FilterForm({ onFilterSubmit }) {
    
  const [filterData, setFilterData] = useState({
    lieu: "",
    matricule: "",
    status: "",
  });

  const handleChange = (e) => {
    setFilterData({
      ...filterData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterSubmit(filterData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Lieu:
        <input
          type="text"
          name="lieu"
          value={filterData.lieu}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Matricule:
        <input
          type="text"
          name="matricule"
          value={filterData.matricule}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Statut:
        <select name="status" value={filterData.status} onChange={handleChange}>
          <option value="">Tous</option>
          <option value="Done">Done</option>
          <option value="In Progress">In Progress</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <br />
      <button type="submit">Filtrer</button>
    </form>
  );
}

export default FilterForm;
