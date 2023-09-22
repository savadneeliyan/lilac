import React, { useState } from 'react'
import './form.css'
import { ref, uploadBytes } from 'firebase/storage'
import { storage } from '../../firebase';
import {v4} from 'uuid'
import Select from "react-select";
import {  useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState([{ option: "", text1: "", text2: "" }]);
  const [course, setCourse] = useState([{ option: "", description: "" }]);
  const [file, setFile] = useState('')
  const [dropdownOptions, setDropdownOptions] = useState([
    "Geography",
    "Sociology",
    "Robotics",
    "LLB",
  ]);
  const [optionDescriptions, setOptionDescriptions] = useState({});
  const [newOption, setNewOption] = useState("");
  const [formdata, setFormData] = useState({
    admission: "",
    service: "",
    courseAffiliation: "",
    entranceRequired: "",
    documentsRequired: "",
    specialization: "",
    intakes:'',
    courseTag:"",
    courseName: "",
    eligibilityCriteria: "",
    syllabus: "",
    duration: "",
    programName: "",
    totalFees: "",
    paymentSchedule: "",
    scholarshipAvailable: false,
    scholarshipDetails: "",
  });

  const optionList = [
    { value: "Business-Administration", label: "Business Administration" },
    { value: "Computer-Science", label: "Computer Science" },
    { value: "Engineering-and-Technology", label: "Engineering and Technology" },
    { value: "Medicine-and-Healthcare", label: "Medicine and Healthcare" },
    { value: "International-Business", label: "International Business" },
  ];
  
  const entranceList = [
    { value: "Engineering", label: "Engineering" },
    { value: "Medical", label: "Medical" },
    { value: "Marine", label: "Marine" },
    { value: " Navy", label: " Navy" },
    { value: "Defence", label: "Defence" },
    { value: "Science", label: "Science" },
  ];

  const specialization = [
    { value: "Management", label: "Management" },
    { value: "Marketing", label: "Marketing" },
    { value: "Entrepreneurship", label: "Entrepreneurship" },
    { value: "Consulting", label: "Consulting" },
    { value: "Business", label: "Business" },
  ];

 const [selectedOptions, setSelectedOptions] = useState([]);
 const [selectedentrance, setSelectedentrance] = useState([]);
  const [selectspecialization, setSelectspecialization] = useState([]);
  
const [errors, setErrors] = useState({
  admission: "",
  service: "",
  documentsRequired: "",
  specialization: "",
  intakes: "",
  courseTag: "",
});
  
  
  const validatestep3 = () => {
    let isValid = true;
    const newErrors = { ...errors };

    setErrors(newErrors);
    return isValid;
  }

  const validatestep2 = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (formdata.courseTag.length === 0) {
      newErrors.courseTag = "Please fill this field";
      isValid = false;
    } else {
      newErrors.courseTag = "";
    }
    if (formdata.intakes.length === 0) {
      newErrors.intakes = "Please fill this field";
      isValid = false;
    } else {
      newErrors.intakes = "";
    }

    setErrors(newErrors);
    return isValid;
  }
  
  const validatestep1 = () => {
    let isValid = true;
    const newErrors = { ...errors };
    handleFile();

    if (formdata.admission.trim() === "") {
      newErrors.admission = "Please fill this field";
      isValid = false;
    } else {
      newErrors.admission = "";
    }

    if (formdata.service.trim() === "") {
      newErrors.service = "Please fill this field";
      isValid = false;
    } else {
      newErrors.service = "";
    }

    if (formdata.documentsRequired.trim() === "") {
      newErrors.documentsRequired = "Please choose a file";
      isValid = false;
    } else {
      newErrors.documentsRequired = "";
    }

    if (formdata.specialization.length === 0) {
      newErrors.specialization = "Please fill this field";
      isValid = false;
    } else {
      newErrors.specialization = "";
    }

    setErrors(newErrors);
    return isValid;
  }

  const nextForm = () => {
    // setPage((prev) => (prev < 4 && prev > 0 ? prev + 1 : prev));
    if (page === 1 && validatestep1()) {
      setPage(2);
    }
    if (page === 2 && validatestep2()) {
      setPage(3);
    }
    if (page === 3 && validatestep3()) { 
      setPage(4);
    }
    
  }


 function handleSelect(data) {
   setSelectedOptions(data);
   const selectedValues = data.map((item) => item.value);
   setFormData({ ...formdata, ["courseAffiliation"]: selectedValues });
  }
  
 function handleentranceSelect(data) {
   setSelectedentrance(data);
   const selectedValues = data.map((item) => item.value);
   setFormData({ ...formdata, ["entranceRequired"]: selectedValues });
  }
  
 function handleSpecializationSelect(data) {
   setSelectspecialization(data);
   const selectedValues = data.map((item) => item.value);
   setFormData({ ...formdata, ["specialization"]: selectedValues });
 }


  // get input values
  const postData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };
  // console.log(formdata);

  // data submission
  const submitData = async () => {
    setFormData({ ...formdata, intakes: rows, courseTag: course });
    const res = fetch(
      "https://lilac-database-default-rtdb.asia-southeast1.firebasedatabase.app/formData.json",
      {
        method: "post",
        headers: {
          "content-Type": "application/json"
        },
        body:JSON.stringify(formdata)
      }
    );
    if (res) {
      alert("data stored");
      navigate("/");
    } else {
      alert("data not saved");
    }
  };


  // handle file upload

  const handleFile = () => {
    if (file == null) return;
    if (file.name) {
      const imageRef = ref(storage, `images/${file.name + v4()}`)
      setFormData({
        ...formdata,
        ["documentsRequired"]: imageRef._location.path,
      });
      uploadBytes(imageRef, file).then(() => {
        console.log("Uploaded file successfully");
      });
    }
  }

  // ------------------------------------------------------------------------------------------------ rows


  // for intake rows
  const addRow = () => {
    setRows([...rows, { option: "", text1: "", text2: "" }]);
    // console.log(rows);
  };

  const deleteRow = (index) => {
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);
  };

  const handleDropdownChange = (index, event) => {
    const newRows = [...rows];
    newRows[index].option = event.target.value;
    setRows(newRows);
    setFormData({ ...formdata, intakes: newRows });
  };

  const handleText1Change = (index, event) => {
    const newRows = [...rows];
    newRows[index].text1 = event.target.value;
    setRows(newRows);
  };

  const handleText2Change = (index, event) => {
    const newRows = [...rows];
    newRows[index].text2 = event.target.value;
    setRows(newRows);
  };

  // ------------------------------------------------------------------------------------------------ rows end

  // ------------------------------------------------------------------------------------------------ course start

  const [courseNew, setCourseNew] = useState(false);
  
  const handlecourseNew = () => {
    setCourseNew(!courseNew);
  }
  // for course tag
  const addCourse = () => {
    setCourse([...course, { option: "", description: "" }]);
    console.log(course);
  };

  // adding options
  const addOption = () => {
    if (newOption && !dropdownOptions.includes(newOption)) {
      setDropdownOptions([...dropdownOptions, newOption]);
      setOptionDescriptions({
        ...optionDescriptions,
        [newOption]: "", // Initialize description for the new option
      });
      setNewOption("");
    }
  };

  // remove option
  const removeOption = (option,index) => {
    const updateddropdownOptions = dropdownOptions.filter((o) => o !== option);
    setDropdownOptions(updateddropdownOptions);
    const { [option]: _, ...updatedDescriptions } = optionDescriptions;
    setOptionDescriptions(updatedDescriptions);
    const newCourse = [...course];
    newCourse.splice(index, 1);
    setCourse(newCourse);
  };

  // discription handling
  const handleOptionDescriptionChange = (option, event) => {
    console.log(option);
    const updatedDescriptions = {
      ...optionDescriptions,
      [option]: event.target.value,
    };
    setOptionDescriptions(updatedDescriptions);
    // console.log(optionDescriptions);
  };

  // dropdown handling
  const handleCourseDropdownChange = (index, event) => {
    const newCourse = [...course];
    newCourse[index].option = event.target.value;
    setCourse(newCourse);
    setFormData({ ...formdata, courseTag: course });
  };

  // // delete course entirly
  // const deleteCourse = (index) => {
  //   const newCourse = [...course];
  //   newCourse.splice(index, 1);
  //   setCourse(newCourse);
  // };

  // ------------------------------------------------------------------------------------------------ column end

  return (
    <div className="form">
      <div className="form-head">
        <div>
          <h2>course creation</h2>
          <span>step {page} of 4</span>
        </div>
        <div>
          <button>
            <i className="fa-solid fa-floppy-disk"></i>
            save as draft
          </button>
          <div className="close">
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </div>
      <div className="form-icons-container">
        <div className="lignthrough"></div>
        <div
          className={`icons ${
            page === 1 ? "active" : page >= 2 ? "complete" : ""
          }`}
        >
          <div>
            <i className="fa-solid fa-file-lines"></i>
          </div>
          <span>basic information</span>
        </div>
        <div
          className={`icons ${
            page === 2 ? "active" : page >= 3 ? "complete" : ""
          }`}
        >
          <div>
            <i className="fa-solid fa-file"></i>
          </div>
          <span>additional information</span>
        </div>
        <div
          className={`icons ${
            page === 3 ? "active" : page >= 4 ? "complete" : ""
          }`}
        >
          <div>
            <i className="fa-solid fa-trophy"></i>
          </div>
          <span>eligibility & syllabus</span>
        </div>

        <div className={`icons ${page === 4 ? "active" : ""}`}>
          <div>
            <i className="fa-solid fa-money-bill"></i>
          </div>
          <span>fee & scholarships</span>
        </div>
      </div>
      {page === 1 && (
        <div className="form-body">
          <h2>Additional Information</h2>
          <div className="top-form">
            <div className="input-container">
              <label htmlFor="admission">
                Admission <span className="red">*</span>
              </label>
              <select
                name="admission"
                id="admission"
                value={formdata.admission}
                onChange={postData}
              >
                <option value="1">option 1</option>
                <option value="2">option 2</option>
                <option value="3">option 3</option>
                <option value="4">option 4</option>
                <option value="5">option 5</option>
                <option value="6">option 6</option>
              </select>
              <div className="errorField">
                {errors.admission && (
                  <p className="error">{errors.admission}</p>
                )}
              </div>
            </div>
            <div className="input-container">
              <label htmlFor="service">
                service <span className="red">*</span>
              </label>
              <select
                name="service"
                id="service"
                value={formdata.service}
                onChange={postData}
              >
                <option value="7">option 1</option>
                <option value="8">option 2</option>
                <option value="9">option 3</option>
                <option value="10">option 4</option>
                <option value="11">option 5</option>
                <option value="12">option 6</option>
              </select>
              <div className="errorField">
                {errors.service && <p className="error">{errors.service}</p>}
              </div>
            </div>
            <div className="input-container">
              <label htmlFor="course">course afiliation </label>
              <div className="select">
                <Select
                  options={optionList}
                  placeholder="Select Course"
                  value={selectedOptions}
                  onChange={handleSelect}
                  isSearchable={true}
                  isMulti
                />
                {/* <span>
                <i className="fa-solid fa-plus"></i>
              </span> */}
              </div>
            </div>
            <div className="input-container">
              <label htmlFor="entrance">entrance required </label>
              <div className="select">
                <Select
                  options={entranceList}
                  placeholder="Select Entrance"
                  value={selectedentrance}
                  onChange={handleentranceSelect}
                  isSearchable={true}
                  isMulti
                />
              </div>
            </div>
            <div className="input-container">
              <label htmlFor="documents">
                documents required <span className="red">*</span>
              </label>
              <div className="fileinputdiv">
                <label htmlFor="fileinput" className="fileinput">
                  <h2>{file ? file.name : <div>choose a file</div>}</h2>
                  <input
                    id="fileinput"
                    name="documentsRequired"
                    type="file"
                    // value={formdata.documentsRequired}
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </label>
                <span onClick={handleFile}>
                  <i className="fa-solid fa-plus"></i>
                </span>
              </div>
              {errors.documentsRequired && (
                <p className="error">{errors.documentsRequired}</p>
              )}
            </div>
            <div className="input-container">
              <label htmlFor="specialization">
                specialization required <span className="red">*</span>
              </label>
              <div className="select">
                <Select
                  options={specialization}
                  placeholder="Select Specialization"
                  value={selectspecialization}
                  onChange={handleSpecializationSelect}
                  isSearchable={true}
                  isMulti
                />
              </div>
              {errors.specialization && (
                <p className="error">{errors.specialization}</p>
              )}
            </div>
          </div>
        </div>
      )}
      {page === 2 && (
        <>
          <div className="rows">
            <h2>intakes</h2>
            <div className="input-container-intake">
              {rows.map((row, index) => (
                <>
                  <div className="input-container-intake-items" key={index}>
                    <div>
                      <label htmlFor="">
                        intake <span className="red">*</span>
                      </label>
                      <div className="input-container-intake-items-list">
                        <div className="intake-field">
                          <div className="del" onClick={deleteRow}>
                            <i className="fa-solid fa-trash"></i>
                          </div>
                          <select
                            name="intake"
                            id=""
                            value={row.option}
                            onChange={(event) =>
                              handleDropdownChange(index, event)
                            }
                          >
                            <option value="january">January</option>
                            <option value="february">February</option>
                            <option value="march">March</option>
                            <option value="april">April</option>
                            <option value="may">May</option>
                            <option value="june">June</option>
                            <option value="july">July</option>
                            <option value="august">August</option>
                            <option value="september">September</option>
                            <option value="october">October</option>
                            <option value="november">November</option>
                            <option value="december">December</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="">
                        duration <span className="red">*</span>
                      </label>
                      <div className="input-container-intake-items-list">
                        <div className="intake-field-items">
                          <div className="intake-field">
                            <input
                              name="duration"
                              type="text"
                              placeholder="From Date"
                              value={row.text1}
                              onChange={(event) =>
                                handleText1Change(index, event)
                              }
                            />
                          </div>
                          <div className="intake-field">
                            <input
                              name="duration"
                              type="text"
                              placeholder="To Date"
                              value={row.text2}
                              onChange={(event) =>
                                handleText2Change(index, event)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {errors.intakes && <p className="error">{errors.intakes}</p>}
                </>
              ))}
              <button className="addrow" onClick={addRow}>
                <i className="fa-solid fa-plus"></i>add row
              </button>
            </div>
          </div>
          <div className="tags">
            <div className="head">
              <h2>course tag</h2>
              <button className="addrow" onClick={handlecourseNew}>
                <i className="fa-solid fa-plus"></i>New course tag
              </button>
            </div>
            <div className={`newcourse ${courseNew ? "active" : ""}`}>
              <input
                type="text"
                placeholder="New Option"
                value={newOption}
                onChange={(event) => setNewOption(event.target.value)}
              />
              <button onClick={addOption}>Add Option</button>
            </div>
            <div className="coursetag-container">
              {course?.map((course, index) => (
                <>
                  <div key={index} className="tag-container">
                    <div className="tag-items">
                      <label htmlFor="">tag</label>
                      <select
                        name="tag"
                        id=""
                        value={course.tag}
                        onChange={(event) =>
                          handleCourseDropdownChange(index, event)
                        }
                      >
                        {dropdownOptions?.map((option, i) => (
                          <option key={i}>{option}</option>
                        ))}
                      </select>
                    </div>
                    <div className="tag-items">
                      <label htmlFor="">discription</label>
                      <div>
                        <input
                          name="discription"
                          type="text"
                          placeholder="Option Description"
                          value={optionDescriptions[course.option] || ""}
                          onChange={(event) =>
                            handleOptionDescriptionChange(course.option, event)
                          }
                        />
                        <div
                          className="del"
                          onClick={() => removeOption(course.option, index)}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  {errors.courseTag && (
                    <p className="error">{errors.courseTag}</p>
                  )}
                </>
              ))}
            </div>
            <button className="addrow" onClick={addCourse}>
              <i className="fa-solid fa-plus"></i>Add row
            </button>
          </div>
        </>
      )}
      {page === 3 && (
        <>
          <div className="form-pages">
            <h2>Eligibility and Syllabus </h2>
            <div>
              <label htmlFor="courseName">Course Name:</label>
              <input
                type="text"
                id="courseName"
                name="courseName"
                value={formdata.courseName}
                onChange={postData}
              />
            </div>
            <div>
              <label htmlFor="eligibilityCriteria">Eligibility Criteria:</label>
              <textarea
                id="eligibilityCriteria"
                name="eligibilityCriteria"
                value={formdata.eligibilityCriteria}
                onChange={postData}
              ></textarea>
            </div>
            <div>
              <label htmlFor="syllabus">Syllabus:</label>
              <textarea
                id="syllabus"
                name="syllabus"
                value={formdata.syllabus}
                onChange={postData}
              ></textarea>
            </div>
            <div>
              <label htmlFor="duration">Duration:</label>
              <input
                type="text"
                id="duration"
                name="duration"
                value={formdata.duration}
                onChange={postData}
              />
            </div>
          </div>
        </>
      )}
      {page === 4 && (
        <div className="form-pages">
          <h2>Fee and Scholarship </h2>
          <div>
            <label htmlFor="programName">Program Name:</label>
            <input
              type="text"
              id="programName"
              name="programName"
              value={formdata.programName}
              onChange={postData}
            />
          </div>
          <div>
            <label htmlFor="totalFees">Total Fees:</label>
            <input
              type="text"
              id="totalFees"
              name="totalFees"
              value={formdata.totalFees}
              onChange={postData}
            />
          </div>
          <div>
            <label htmlFor="paymentSchedule">Payment Schedule:</label>
            <input
              type="text"
              id="paymentSchedule"
              name="paymentSchedule"
              value={formdata.paymentSchedule}
              onChange={postData}
            />
          </div>
          <div>
            <label htmlFor="scholarshipAvailable">Scholarship Available:</label>
            <input
              type="checkbox"
              id="scholarshipAvailable"
              name="scholarshipAvailable"
              checked={formdata.scholarshipAvailable}
              onChange={postData}
            />
          </div>
          {formdata.scholarshipAvailable && (
            <div>
              <label htmlFor="scholarshipDetails">Scholarship Details:</label>
              <textarea
                id="scholarshipDetails"
                name="scholarshipDetails"
                value={formdata.scholarshipDetails}
                onChange={postData}
              ></textarea>
            </div>
          )}
        </div>
      )}
      <div className="buttons">
        <div
          className={`prevs ${page == 1 ? "disabled" : ""} `}
          onClick={() => {
            setPage((prev) => (prev <= 4 && prev > 1 ? prev - 1 : prev));
          }}
        >
          <i className="fa-solid fa-arrow-left"></i>prev
        </div>

        {page === 4 ? (
          <div className="next" onClick={submitData}>
            submit
          </div>
        ) : (
          <div className={`next `} onClick={nextForm}>
            next <i className="fa-solid fa-arrow-right"></i>
          </div>
        )}
      </div>
    </div>
  );
}

export default Form