import { Label, Select } from "flowbite-react";
import React, { useEffect, useState } from "react";

function FlowSelect({ selected, onChange, ...others }) {
  const [priority, setPriority] = useState("a");

  useEffect(() => {
    setPriority(selected?.toLowerCase() || "a");
  }, [selected]);

  function handleChange(e) {
    setPriority(e.target.value);
    if (onChange) {
      onChange(e);
    }
  }
  return (
    <div className="max-w-full">
      <Select
        name="priority"
        id="priority"
        className={`[&>div>select]:rounded-md ${others.className}`}
        value={priority}
        onChange={handleChange}
        required
        {...others}>
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
        <option value="d">D</option>
      </Select>
    </div>
  );
}

export default FlowSelect;
