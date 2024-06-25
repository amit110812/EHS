import React, { useState } from "react";
import { Form, DropdownButton, Dropdown } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import './InjuryIncident.css'
import Arrow from '../../../assets/Images/upArrow.png'

const InjuryIncident = () => {
  const [investigationDetails, setInvestigationDetails] = useState(false);
  const [subContractorDisplay, setSubContractorDisplay] = useState(false);
  const [activeFormTabA,setActiveFormTabA] = useState(true)
  const [activeFormTabB,setActiveFormTabB] = useState(false)
  const [activeFormTabC,setActiveFormTabC] = useState(false)
  const [activeFormTabD,setActiveFormTabD] = useState(false)
  const [activeFormTabE,setActiveFormTabE] = useState(false)
  const [activeFormTabF,setActiveFormTabF] = useState(false)
  return (
    <div
      className="m-5 p-5"
      style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
    >
      <Form
        className="mx-5 px-5 text-start"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
        }}
        >
        <h5 className="mb-1 form-header">INJURY ILLNESS REPORTING</h5>
        <hr className="pb-4"/>
        <div onClick={()=>setActiveFormTabA(!activeFormTabA)} className="tabs-form my-2 d-flex justify-content-between"><span>Primary Information</span><span><img className={activeFormTabA && "tab-icon"} src={Arrow} alt="arrow"/></span></div>
        {activeFormTabA &&(<><div className="row">
          <Form.Group className="mb-3 col-6" controlId="exampleForm.ControlInput1">
            <Form.Label className="form-label" >Incident Date</Form.Label>
            <Form.Control type="date" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group
            className="mb-3 col-6"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label className="form-label" >Incident Time</Form.Label>
            <Form.Control
              type="time"
              min="09:00"
              max="18:00"
              value="00:00"
              placeholder="name@example.com"
            />
          </Form.Group>
        </div>
        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
          <Form.Label className="form-label" >Reporting Date</Form.Label>
          <Form.Control type="date" placeholder="name@example.com" />
        </Form.Group>
        <div className="row">
        <Form.Group className="mb-3 col-6" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-start">Incident Type</Form.Label>
          <Form.Select className="form-select">
            <option value="">Select</option>
            <option value="Near Miss">Near Miss</option>
            <option value="Injury/Illness">Injury/Illness</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 col-6" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-start">
            Injury/Illness Category
          </Form.Label>
          <Form.Select className="form-select">
            <option value="">Select</option>
            <option value="First Aid">First Aid</option>
            <option value="Medical Treatment Care">
              Medical Treatment Care
            </option>
            <option value="Lost Time Injury">Lost Time Injury</option>
            <option value="Fatality (Death)">Fatality (Death)</option>
          </Form.Select>
        </Form.Group>
        </div>
        </>)}

        <div onClick={()=>setActiveFormTabB(!activeFormTabB)} className="active-tab-form my-2 d-flex justify-content-between"><span>Incident Details</span><img className={activeFormTabB && "tab-icon"} src={Arrow} alt="arrow"/></div>
        {activeFormTabB &&(<><Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-start">Description</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-start">Immediate Action Taken</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-start">Risk Level</Form.Label>
          <Form.Select className="form-select">
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-start">Incident Type</Form.Label>
          <Form.Select className="form-select">
            <option value="">Select</option>
            <option value="Work Related">Work Related</option>
            <option value="Non Work Related">Non Work Related</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-start">Incident Type</Form.Label>
          <Multiselect
            displayValue="name"
            onKeyPressFn={function noRefCheck() {}}
            onRemove={function noRefCheck() {}}
            onSearch={function noRefCheck() {}}
            //    onSelect={(e) => setTrucking(e)}
            options={[
              { name: "Slip,Trip,Fall", id: 1 },
              { name: "Struck by Falling Object", id: 2 },
              { name: "Caught In/Between Objects", id: 3 },
              { name: "Vehicle related Object", id: 4 },
              { name: "Electrocusion", id: 5 },
              { name: "Natural Disaster", id: 6 },
            ]}
            showCheckbox
          />
        </Form.Group>
        <Form.Group
          className="mb-3 d-flex"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label className="text-start form-check-label">
          Any Damage to Property
          </Form.Label>
          <Form.Control
            className="form-check-input p-1 mx-3"
            onClick={() => setInvestigationDetails(!investigationDetails)}
            type="checkbox"
          />
        </Form.Group>
        {investigationDetails == true && (
          <div>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="text-start">
                Details
              </Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </div>
        )}
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-start">Equipment Involved</Form.Label>
          <Form.Select className="form-select">
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-start">Material Involved</Form.Label>
          <Form.Select className="form-select">
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-start">Activity Involved</Form.Label>
          <Form.Select className="form-select">
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
        </Form.Group></>)}
        
        <div onClick={()=>setActiveFormTabC(!activeFormTabC)} className="active-tab-form my-2 d-flex justify-content-between"><span>Location</span><img className={activeFormTabC && "tab-icon"} src={Arrow} alt="arrow"/></div>
        {activeFormTabC &&(<> <div className="location">
          <hr />
          <div className="row">
            <Form.Group
              className="mb-3 col-6"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="text-start">Site</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group
              className="mb-3 col-6"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="text-start">Block/Area/Unit</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </div>
          <div className="row">
            <Form.Group
              className="mb-3 col-6"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="text-start">Building</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group
              className="mb-3 col-6"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="text-start">Equipment</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </div>
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-start">Department</Form.Label>
          <Form.Select className="form-select">
            <option value="">Select</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Electrical">Electrical</option>
            <option value="Civil">Civil</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-start">Sub Contractor</Form.Label>
          <Form.Select className="form-select">
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Form.Select>
        </Form.Group></>)}
       
        <div onClick={()=>setActiveFormTabD(!activeFormTabD)} className="active-tab-form my-2 d-flex justify-content-between"><span>Injury/Illness Details</span><img className={activeFormTabD && "tab-icon"} src={Arrow} alt="arrow"/></div>
        {activeFormTabD &&(<> <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-start">Name od IP</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-start">Employee Code</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-start">AGE</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-start">Gender</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group
          className="mb-3 d-flex"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label className="text-start form-check-label">
          Is Sub Contractor Employee
          </Form.Label>
          <Form.Control
            className="form-check-input p-1 mx-3"
            onClick={() => setSubContractorDisplay(!subContractorDisplay)}
            type="checkbox"
          />
        </Form.Group>
        {subContractorDisplay == true && (
          <div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-start">Sub Contractor Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
          </div>
        )}
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-start">Type of Injury/Illness</Form.Label>
          <Form.Select className="form-select">
            <option value="">Select</option>
            <option value="Abrasion">Abrasion</option>
            <option value="Cut">Cut</option>
            <option value="Amputation">Amputation</option>
            <option value="Fracture">Fracture</option>
            <option value="Fever">Fever</option>
            <option value="Trauma">Trauma</option>
            <option value="Dermatitis">Dermatitis</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-start">Injured Body Part</Form.Label>
          <Form.Select className="form-select">
            <option value="">Select</option>
            <option value="Head">Head</option>
            <option value="Eye">Eye</option>
            <option value="Spinal Cord">Spinal Cord</option>
            <option value="Right hand Thumb">Right hand Thumb</option>
            <option value="Left hand Thumb">Left hand Thumb</option>
            <option value="Legs">Legs</option>
            <option value="Stomach">Stomach</option>
            <option value="Chest">Chest</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-start">Injury Description</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-start">Upload Document</Form.Label>
          <Form.Control type="file" />
        </Form.Group></>)}
       
        <div onClick={()=>setActiveFormTabE(!activeFormTabE)}  className="active-tab-form my-2 d-flex justify-content-between"><span>Root Cause</span><img className={activeFormTabE && "tab-icon"} src={Arrow} alt="arrow"/></div>      
        {activeFormTabE &&(<>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-start">Physical Factor</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-start">Human Factor</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-start">System Factor</Form.Label>
          <Form.Control type="text" />
        </Form.Group></>)}
        
        <div onClick={()=>setActiveFormTabF(!activeFormTabF)} className="active-tab-form my-2 d-flex justify-content-between"><span>Corrective Actions</span><img className={activeFormTabF && "tab-icon"} src={Arrow} alt="arrow"/></div>
        {activeFormTabF &&(<><Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-start">Corrective Actions</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-start">Responsible Person</Form.Label>
          <Form.Select className="form-select">
            <option value="">Select</option>
            <option value="Ankit">Ankit</option>
            <option value="Adil">Adil</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-start">Copy to</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="form-label" >Closing Date</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
</>)}
        
       
        <button className="my-5 tabs-form form-header">SUBMIT</button>
      </Form>
    </div>
  );
};

export default InjuryIncident;
