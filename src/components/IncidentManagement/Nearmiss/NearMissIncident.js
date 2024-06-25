import React, { useState } from "react";
import { Form, DropdownButton, Dropdown } from "react-bootstrap";
import Arrow from "../../../assets/Images/upArrow.png";

const NearMissIncident = () => {
  const [investigationDetails, setInvestigationDetails] = useState(false);
  const [activeFormTabB, setActiveFormTabB] = useState(true);
  const [activeFormTabC, setActiveFormTabC] = useState(false);
  const [activeFormTabD, setActiveFormTabD] = useState(false);
  const [activeFormTabE, setActiveFormTabE] = useState(false);
  const [activeFormTabF, setActiveFormTabF] = useState(false);
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
        <h5 className="mb-1 form-header">NEAR MISS</h5>
        <hr className="pb-4" />
        <div
          onClick={() => setActiveFormTabB(!activeFormTabB)}
          className="active-tab-form my-2 d-flex justify-content-between"
        >
          <span>Incidence Details</span>
          <img
            className={activeFormTabE && "tab-icon"}
            src={Arrow}
            alt="arrow"
          />
        </div>
        {activeFormTabB && (
          <>
            <div className="row">
              <Form.Group
                className="mb-3 col-6"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3 col-6"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Time</Form.Label>
                <Form.Control
                  type="time"
                  min="09:00"
                  max="18:00"
                  value="00:00"
                  placeholder="name@example.com"
                />
              </Form.Group>
            </div>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="text-start">Incident Type</Form.Label>
              <Form.Select>
                <option value="">Select</option>
                <option value="Near Miss">Near Miss</option>
                <option value="Injury/Illness">Injury/Illness</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="text-start">Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="text-start">
                Immediate Action Taken
              </Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="text-start">Risk Level</Form.Label>
              <Form.Select>
                <option value="">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="text-start">Immediate Cause</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </>
        )}

        <div
          onClick={() => setActiveFormTabC(!activeFormTabC)}
          className="active-tab-form my-2 d-flex justify-content-between"
        >
          <span>Location</span>
          <img
            className={activeFormTabC && "tab-icon"}
            src={Arrow}
            alt="arrow"
          />
        </div>
        {activeFormTabC && (
          <>
            {" "}
            <div className="location">
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
                  <Form.Label className="text-start">
                    Block/Area/Unit
                  </Form.Label>
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
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="text-start">Department</Form.Label>
              <Form.Select className="form-select">
                <option value="">Select</option>
                <option value="Mechanical">Mechanical</option>
                <option value="Electrical">Electrical</option>
                <option value="Civil">Civil</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="text-start">Sub Contractor</Form.Label>
              <Form.Select className="form-select">
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
            </Form.Group>
          </>
        )}

        <div
          onClick={() => setActiveFormTabE(!activeFormTabE)}
          className="active-tab-form my-2 d-flex justify-content-between"
        >
          <span>Root Cause</span>
          <img
            className={activeFormTabE && "tab-icon"}
            src={Arrow}
            alt="arrow"
          />
        </div>
        {activeFormTabE && (
          <>
            <Form.Group
              className="mb-3 d-flex"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="text-start form-check-label">
                Root Cause Analysis
              </Form.Label>
              <Form.Control
                className="form-check-input p-1 mx-3"
                onClick={() => setInvestigationDetails(!investigationDetails)}
                type="checkbox"
              />
            </Form.Group>
            {investigationDetails == false && (
              <div>
                <div className="row">
                  <Form.Group
                    className="mb-3 col-6"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label className="text-start">
                      Investigation Lead
                    </Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 col-6"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label className="text-start">
                      Investigation Team
                    </Form.Label>
                    <Form.Select>
                      <option value="">Select</option>
                      <option value="Ankit">Ankit</option>
                      <option value="Adil">Adil</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="text-start">
                    Process Description
                  </Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="text-start">
                    Evidences Collected
                  </Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="text-start">
                    Why Why Analysis
                  </Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="text-start">
                    Upload Document
                  </Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
              </div>
            )}
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="text-start">Physical Factor</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="text-start">Human Factor</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="text-start">System Factor</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </>
        )}

        <div
          onClick={() => setActiveFormTabF(!activeFormTabF)}
          className="active-tab-form my-2 d-flex justify-content-between"
        >
          <span>Corrective Actions</span>
          <img
            className={activeFormTabF && "tab-icon"}
            src={Arrow}
            alt="arrow"
          />
        </div>
        {activeFormTabF && (
          <>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="text-start">Corrective Actions</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="text-start">Responsible Person</Form.Label>
              <Form.Select className="form-select">
                <option value="">Select</option>
                <option value="Ankit">Ankit</option>
                <option value="Adil">Adil</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="text-start">Copy to</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="form-label">Closing Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </>
        )}
        <button className="my-5 tabs-tags__tag">Submit</button>
      </Form>
    </div>
  );
};

export default NearMissIncident;
