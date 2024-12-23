import React, { useEffect, useState } from "react";
import Button from "../../../../components/ui/Button";
import Input from "../../../../components/shared/Input";
import VisitEntryHandler from "../../../../handlers/VisitorEntryHandler";

const AddVisitorForm = () => {
  const { getTypeofVisitor, createNewVisitorEntry } = VisitEntryHandler();
  const [visitorType, setVisitorType] = useState([]);
  const [formData, setFromData] = useState({
    visit_expect_date_of_entry_date: "",
    visit_name: "",
    visit_type_Id: "",
    visit_mobileno: "",
    visit_porpous: "",
  });
  useEffect(() => {
    const fetchVisitorType = async () => {
      try {
        const result = await getTypeofVisitor();
        console.log("reslt of visitor type", result);
        setVisitorType(result.data.data);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchVisitorType();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("form data", formData);
    createNewVisitorEntry(formData);
  };

  return (
    <div>
      <div className="p-10 my-5 border rounded-lg bg-gray-100">
        <div className="grid grid-cols-3 gap-5 items-center py-6">
          <Input
            label={<div>Date of Entry</div>}
            type="date"
            placeholder={"Date of Entry"}
            size={"lg"}
            name="visit_expect_date_of_entry_date"
            value={formData.visit_expect_date_of_entry_date}
            onChange={handleChange} // Handle input change
          />

          <Input
            label={<div> Name of Visitor</div>}
            type="text"
            placeholder={"Enter Name of Visitor"}
            size={"lg"}
            name="visit_name"
            value={formData.visit_name}
            onChange={handleChange} // Handle input change
          />
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
              Type Of Visitor
            </label>
            <select
              id="countries"
              name="visit_type_Id"
              value={formData.visit_type_Id}
              onChange={handleChange} // Handle input change
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected value="">
                Select type of Visitor
              </option>
              {visitorType.map((el) => (
                <option value={el.visit_type_Id}>
                  {el.visit_type_Description}
                </option>
              ))}
            </select>
          </div>
          <Input
            label={<div>Visitor Mobile No.</div>}
            type="number"
            placeholder={"Enter Visitor Mobile No."}
            size={"lg"}
            name="visit_mobileno"
            value={formData.visit_mobileno}
            onChange={handleChange}
          />
          <Input
            label={<div>Relationship</div>}
            type="text"
            placeholder={"Enter Your Relationship with Visitor"}
            size={"lg"}
          />
          <Input
            label={<div>Porpous of Visit</div>}
            type="text"
            placeholder={"Enter Your Porpous of Visit"}
            size={"lg"}
            name="visit_porpous"
            value={formData.visit_porpous}
            onChange={handleChange}
          />
          {/* <Input label={<div>Valid Till Date</div>} type="date" size={"lg"} /> */}
        </div>
      </div>

      <div className="flex justify-center mt-5">
        <Button
          className="max-w-sm"
          onClick={handleSubmit}
          type="submit"
          size="lg"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default AddVisitorForm;
