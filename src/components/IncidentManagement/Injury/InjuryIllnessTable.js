import React from "react";
import { Table } from "react-bootstrap";


const InjuryIllnessTable = () => {
  const incidentInfoIllness = [
    {
      primary_info: {
        incident_date: "2023-01-10",
        incident_time: "10:20",
        reporting_date: "2023-01-10",
        incident_type: "Heart attack",
        injury_category: "Cardiovascular disease",
      },
      incident_details: {
        description: "After doing intense workout he passed out on the floor",
        immediate_action_taken: "Admitted to the ICU",
        risk_level: "3",
        incident_type: "Heart attack",
        euipment_involved: "oxygen supply",
        material_involved: "metal and silicon",
        activity_involved: "stent angioplasty",
      },
      location: {
        site: "Rampur",
        block: "#rd Phase",
        building: "SEZ",
        equipment: "JCB",
        department: "Mining",
        sub_contractor: "Mr Ahuja",
      },
      injury_details: {
        name: "Arvind Biswas",
        employee_code: "4601",
        age: "36",
        gender: "Male",
        type_of_injury: "Heart Attack",
        injured_body_part: "Heart",
        injury_description:
          "After doing intense workout he passed out on the floor",
      },
      root_cause: {
        physical_factor: "history of heart disease in the family",
        human_factor: "obesity",
        system_factor: "none",
      },

      corrective_actions: {
        corrective_actions: "It could be prevented by JCB's driver",
        copy_to: "None",
        reporting_person: "Mr Runwal",
        closing_date: "2024-02-15",
      },
    },
    {
      primary_info: {
        incident_date: "2024-01-09",
        incident_time: "08:00",
        reporting_date: "2024-01-04",
        incident_type: "Fractured finger",
        injury_category: "Lost Time Injury",
      },
      incident_details: {
        description:
          "While driving back to home frm work work met with an accident",
        immediate_action_taken: "Worker was taken to the hospital immediately",
        risk_level: "3",
        incident_type: "Fractured finger",
        euipment_involved: "Bike",
        material_involved: "NA",
        activity_involved: "Driving",
      },
      location: {
        site: "Indore",
        block: "U-Unit",
        building: "NA",
        equipment: "Bike",
        department: "Constrution",
        sub_contractor: "Nehru Contractors",
      },
      injury_details: {
        name: "Birju Raj",
        employee_code: "082",
        age: "28",
        gender: "Male",
        type_of_injury: "Fractured finger",
        injured_body_part: "Finger",
        injury_description:
          "While driving back to home frm work work met with an acciden",
      },
      root_cause: {
        physical_factor: "Excessive slippery road",
        human_factor: "Driving at speed",
        system_factor: "NA",
      },

      corrective_actions: {
        corrective_actions: "Workers must drive carefully",
        copy_to: "None",
        reporting_person: "Birju",
        closing_date: "2024-01-09",
      },
    },
    {
      primary_info: {
        incident_date: "2024-01-03",
        incident_time: "10:30",
        reporting_date: "2024-01-04",
        incident_type: "Bruises on hand",
        injury_category: "First Aid",
      },
      incident_details: {
        description:
          "A worker fell from height and landed on wooden shuttering materials",
        immediate_action_taken: "Worker was taken to the hospital immediately",
        risk_level: "2",
        incident_type: "Bruises on hand",
        euipment_involved: "Ladder",
        material_involved: "Shuttering materials",
        activity_involved: "working at height",
      },
      location: {
        site: "Jharsuguda",
        block: "34",
        building: "MAin Building",
        equipment: "Ladder",
        department: "Constrution",
        sub_contractor: "Ahluwalias Contractors",
      },
      injury_details: {
        name: "Raman Solanki",
        employee_code: "5432",
        age: "25",
        gender: "Male",
        type_of_injury: "Bruises on hand",
        injured_body_part: "Hand",
        injury_description:
          "A worker fell from height and landed on wooden shuttering material",
      },
      root_cause: {
        physical_factor: "worker was not wearing safety belt",
        human_factor: "New worker",
        system_factor: "No immediate supervision",
      },

      corrective_actions: {
        corrective_actions:
          "work at height activities need to be supervised closely",
        copy_to: "None",
        reporting_person: "Mouadeep",
        closing_date: "2024-01-08",
      },
    },
    {
      primary_info: {
        incident_date: "2024-01-21",
        incident_time: "12:20",
        reporting_date: "2024-01-22",
        incident_type: "Swelling around left ear",
        injury_category: "First Aid",
      },
      incident_details: {
        description: "A worker was bitten by bees while hosekeeping store",
        immediate_action_taken: "Worker was taken to the hospital immediately",
        risk_level: "4",
        incident_type: "Swelling around left ear",
        euipment_involved: "None",
        material_involved: "Scrap",
        activity_involved: "Housekeeping",
      },
      location: {
        site: "Jodhpur",
        block: "A",
        building: "Store",
        equipment: "None",
        department: "Constrution",
        sub_contractor: "Self",
      },
      injury_details: {
        name: "Jhunjhun Wagh",
        employee_code: "023",
        age: "26",
        gender: "Male",
        type_of_injury: "Swelling around left ear",
        injured_body_part: "Left ear",
        injury_description:
          "A worker was bitten by bees while hosekeeping store",
      },
      root_cause: {
        physical_factor: "Bee hive developed around the scrap material",
        human_factor: "No once chekced the scraps in months",
        system_factor: "Poor housekeeping schedule or planning",
      },

      corrective_actions: {
        corrective_actions: "Remove scrap on regular basis",
        copy_to: "None",
        reporting_person: "Raman",
        closing_date: "2024-01-25",
      },
    },
    {
      primary_info: {
        incident_date: "2023-01-10",
        incident_time: "10:20",
        reporting_date: "2023-01-10",
        incident_type: "Heart attack",
        injury_category: "Cardiovascular disease",
      },
      incident_details: {
        description: "After doing intense workout he passed out on the floor",
        immediate_action_taken: "Admitted to the ICU",
        risk_level: "3",
        incident_type: "Heart attack",
        euipment_involved: "oxygen supply",
        material_involved: "metal and silicon",
        activity_involved: "stent angioplasty",
      },
      location: {
        site: "Rampur",
        block: "#rd Phase",
        building: "SEZ",
        equipment: "JCB",
        department: "Mining",
        sub_contractor: "Mr Ahuja",
      },
      injury_details: {
        name: "Arvind Biswas",
        employee_code: "4601",
        age: "36",
        gender: "Male",
        type_of_injury: "Heart Attack",
        injured_body_part: "Heart",
        injury_description:
          "After doing intense workout he passed out on the floor",
      },
      root_cause: {
        physical_factor: "history of heart disease in the family",
        human_factor: "obesity",
        system_factor: "none",
      },

      corrective_actions: {
        corrective_actions: "It could be prevented by JCB's driver",
        copy_to: "None",
        reporting_person: "Mr Runwal",
        closing_date: "2024-02-15",
      },
    },
    {
      primary_info: {
        incident_date: "2024-01-09",
        incident_time: "08:00",
        reporting_date: "2024-01-04",
        incident_type: "Fractured finger",
        injury_category: "Lost Time Injury",
      },
      incident_details: {
        description:
          "While driving back to home frm work work met with an accident",
        immediate_action_taken: "Worker was taken to the hospital immediately",
        risk_level: "3",
        incident_type: "Fractured finger",
        euipment_involved: "Bike",
        material_involved: "NA",
        activity_involved: "Driving",
      },
      location: {
        site: "Indore",
        block: "U-Unit",
        building: "NA",
        equipment: "Bike",
        department: "Constrution",
        sub_contractor: "Nehru Contractors",
      },
      injury_details: {
        name: "Birju Raj",
        employee_code: "082",
        age: "28",
        gender: "Male",
        type_of_injury: "Fractured finger",
        injured_body_part: "Finger",
        injury_description:
          "While driving back to home frm work work met with an acciden",
      },
      root_cause: {
        physical_factor: "Excessive slippery road",
        human_factor: "Driving at speed",
        system_factor: "NA",
      },

      corrective_actions: {
        corrective_actions: "Workers must drive carefully",
        copy_to: "None",
        reporting_person: "Birju",
        closing_date: "2024-01-09",
      },
    },
    {
      primary_info: {
        incident_date: "2024-01-03",
        incident_time: "10:30",
        reporting_date: "2024-01-04",
        incident_type: "Bruises on hand",
        injury_category: "First Aid",
      },
      incident_details: {
        description:
          "A worker fell from height and landed on wooden shuttering materials",
        immediate_action_taken: "Worker was taken to the hospital immediately",
        risk_level: "2",
        incident_type: "Bruises on hand",
        euipment_involved: "Ladder",
        material_involved: "Shuttering materials",
        activity_involved: "working at height",
      },
      location: {
        site: "Jharsuguda",
        block: "34",
        building: "MAin Building",
        equipment: "Ladder",
        department: "Constrution",
        sub_contractor: "Ahluwalias Contractors",
      },
      injury_details: {
        name: "Raman Solanki",
        employee_code: "5432",
        age: "25",
        gender: "Male",
        type_of_injury: "Bruises on hand",
        injured_body_part: "Hand",
        injury_description:
          "A worker fell from height and landed on wooden shuttering material",
      },
      root_cause: {
        physical_factor: "worker was not wearing safety belt",
        human_factor: "New worker",
        system_factor: "No immediate supervision",
      },

      corrective_actions: {
        corrective_actions:
          "work at height activities need to be supervised closely",
        copy_to: "None",
        reporting_person: "Mouadeep",
        closing_date: "2024-01-08",
      },
    },
    {
      primary_info: {
        incident_date: "2024-01-21",
        incident_time: "12:20",
        reporting_date: "2024-01-22",
        incident_type: "Swelling around left ear",
        injury_category: "First Aid",
      },
      incident_details: {
        description: "A worker was bitten by bees while hosekeeping store",
        immediate_action_taken: "Worker was taken to the hospital immediately",
        risk_level: "4",
        incident_type: "Swelling around left ear",
        euipment_involved: "None",
        material_involved: "Scrap",
        activity_involved: "Housekeeping",
      },
      location: {
        site: "Jodhpur",
        block: "A",
        building: "Store",
        equipment: "None",
        department: "Constrution",
        sub_contractor: "Self",
      },
      injury_details: {
        name: "Jhunjhun Wagh",
        employee_code: "023",
        age: "26",
        gender: "Male",
        type_of_injury: "Swelling around left ear",
        injured_body_part: "Left ear",
        injury_description:
          "A worker was bitten by bees while hosekeeping store",
      },
      root_cause: {
        physical_factor: "Bee hive developed around the scrap material",
        human_factor: "No once chekced the scraps in months",
        system_factor: "Poor housekeeping schedule or planning",
      },

      corrective_actions: {
        corrective_actions: "Remove scrap on regular basis",
        copy_to: "None",
        reporting_person: "Raman",
        closing_date: "2024-01-25",
      },
    },
  ];

  const ehsObservationInfo = [
    {
      about_incidence: {
        date: "2024-01-12",
        time: "09:15",
        about_incidence: "empty alcohol bottles found at site",
        activities_involved: "S-Unit Extension",
        risk_level: "4",
        repeated_incident: "No",
        type_operation: "Construction",
        department_involved: "Construction",
        contractor_involved: "TPC",
      },
      location: {
        site: "Vidisha",
        block: "Panel Block",
        building: "S-Unit",
        equipment: "None",
        department: "Projects",
        sub_contractor: "None",
      },
      corrective_actions: {
        corrective_actions:
          "Provide refresher training to all the project workers",
        copy_to: "None",
        reporting_person: "Lakhan",
        closing_date: "2024-02-30",
      },
    },
    {
      about_incidence: {
        date: "2024-04-12",
        time: "03:20",
        about_incidence:
          "severly damaged web sling found in the material unloading area",
        activities_involved: "Unloading of materials",
        risk_level: "2",
        repeated_incident: "No",
        type_operation: "unloading",
        department_involved: "Logistics",
        contractor_involved: "Self",
      },
      location: {
        site: "Jhevra",
        block: "unloading bay",
        building: "Loading and Unlaoding",
        equipment: "None",
        department: "Logistics",
        sub_contractor: "None",
      },
      corrective_actions: {
        corrective_actions:
          "Web slings must be subjected to thorough inspection by area supervisor regularly",
        copy_to: "None",
        reporting_person: "Ramjot",
        closing_date: "2024-02-21",
      },
    },
    {
      about_incidence: {
        date: "2022-04-28",
        time: "10:20",
        about_incidence: "A worker was found smoking inside factory premises",
        activities_involved: "Housekeeping around painting area",
        risk_level: "4",
        repeated_incident: "No",
        type_operation: "Housekeeping",
        department_involved: "Operations",
        contractor_involved: "Ahluwalia Con",
      },
      location: {
        site: "jabalpur",
        block: "C Unit",
        building: "Paint",
        equipment: "None",
        department: "Operations",
        sub_contractor: "None",
      },
      corrective_actions: {
        corrective_actions:
          "worker must be subjected to refresher training and penalization",
        copy_to: "None",
        reporting_person: "Hitesh",
        closing_date: "2024-02-11",
      },
    },
    {
      about_incidence: {
        date: "2022-04-28",
        time: "10:20",
        about_incidence: "It is reported on Saturday's Afternoon",
        activities_involved: "Movement of Jcb's on the floor",
        risk_level: "3",
        repeated_incident: "No",
        type_operation: "Mining",
        department_involved: "Operations",
        contractor_involved: "Mr. Rakesh",
      },
      location: {
        site: "Rampur",
        block: "#rd Phase",
        building: "SEZ",
        equipment: "JCB",
        department: "Mining",
        sub_contractor: "Mr Ahuja",
      },
      corrective_actions: {
        corrective_actions: "It could be prevented by JCB's driver",
        copy_to: "None",
        reporting_person: "Mr Runwal",
        closing_date: "2024-02-15",
      },
    },
    {
      about_incidence: {
        date: "2024-01-12",
        time: "09:15",
        about_incidence: "empty alcohol bottles found at site",
        activities_involved: "S-Unit Extension",
        risk_level: "4",
        repeated_incident: "No",
        type_operation: "Construction",
        department_involved: "Construction",
        contractor_involved: "TPC",
      },
      location: {
        site: "Vidisha",
        block: "Panel Block",
        building: "S-Unit",
        equipment: "None",
        department: "Projects",
        sub_contractor: "None",
      },
      corrective_actions: {
        corrective_actions:
          "Provide refresher training to all the project workers",
        copy_to: "None",
        reporting_person: "Lakhan",
        closing_date: "2024-02-30",
      },
    },
    {
      about_incidence: {
        date: "2024-04-12",
        time: "03:20",
        about_incidence:
          "severly damaged web sling found in the material unloading area",
        activities_involved: "Unloading of materials",
        risk_level: "2",
        repeated_incident: "No",
        type_operation: "unloading",
        department_involved: "Logistics",
        contractor_involved: "Self",
      },
      location: {
        site: "Jhevra",
        block: "unloading bay",
        building: "Loading and Unlaoding",
        equipment: "None",
        department: "Logistics",
        sub_contractor: "None",
      },
      corrective_actions: {
        corrective_actions:
          "Web slings must be subjected to thorough inspection by area supervisor regularly",
        copy_to: "None",
        reporting_person: "Ramjot",
        closing_date: "2024-02-21",
      },
    },
    {
      about_incidence: {
        date: "2022-04-28",
        time: "10:20",
        about_incidence: "A worker was found smoking inside factory premises",
        activities_involved: "Housekeeping around painting area",
        risk_level: "4",
        repeated_incident: "No",
        type_operation: "Housekeeping",
        department_involved: "Operations",
        contractor_involved: "Ahluwalia Con",
      },
      location: {
        site: "jabalpur",
        block: "C Unit",
        building: "Paint",
        equipment: "None",
        department: "Operations",
        sub_contractor: "None",
      },
      corrective_actions: {
        corrective_actions:
          "worker must be subjected to refresher training and penalization",
        copy_to: "None",
        reporting_person: "Hitesh",
        closing_date: "2024-02-11",
      },
    },
    {
      about_incidence: {
        date: "2022-04-28",
        time: "10:20",
        about_incidence: "It is reported on Saturday's Afternoon",
        activities_involved: "Movement of Jcb's on the floor",
        risk_level: "3",
        repeated_incident: "No",
        type_operation: "Mining",
        department_involved: "Operations",
        contractor_involved: "Mr. Rakesh",
      },
      location: {
        site: "Rampur",
        block: "#rd Phase",
        building: "SEZ",
        equipment: "JCB",
        department: "Mining",
        sub_contractor: "Mr Ahuja",
      },
      corrective_actions: {
        corrective_actions: "It could be prevented by JCB's driver",
        copy_to: "None",
        reporting_person: "Mr Runwal",
        closing_date: "2024-02-15",
      },
    },
  ];
  return <div className="d-flex justify-content-center mt-5">
  <div className="table-container">
    <Table  striped bordered hover size="lg"  id="data-table"
      style={{border: "1px solid rgba(186, 186, 186, 1)"}}>
      <thead>
      <tr>
       <th className='px-2 py-1'
        style={{border: "1px solid rgba(186, 186, 186, 1)"}}
        colSpan={5}
       >
        <b>Primary Info</b>
       </th>
       <th className='px-2 py-1'
        style={{border: "1px solid rgba(186, 186, 186, 1)"}}
       >
        Project Name{" "}
       </th>
       <th className='px-2 py-1'
        style={{border: "1px solid rgba(186, 186, 186, 1)"}}
       >
        Products
       </th>
       <th className='px-2 py-1'
        style={{border: "1px solid rgba(186, 186, 186, 1)"}}
       >
        Supplier{" "}
       </th>
       <th className='px-2 py-1'
        style={{border: "1px solid rgba(186, 186, 186, 1)"}}
       >
        Quote Price{" "}
       </th>
       <th className='px-2 py-1'
        style={{border: "1px solid rgba(186, 186, 186, 1)"}}
       >
        Quote Date{" "}
       </th>
       <th className='px-2 py-1'
        style={{border: "1px solid rgba(186, 186, 186, 1)"}}
       >
        Qty 
       </th>
       <th className='px-2 py-1'
        style={{border: "1px solid rgba(186, 186, 186, 1)"}}
       >
        Status{" "}
       </th>
       <th className='px-2 py-1'
        style={{border: "1px solid rgba(186, 186, 186, 1)"}}
        colSpan={2}
       >
        Action
       </th>
      </tr>
      <tr>
       <th className='px-2 py-1'
        style={{border: "1px solid rgba(186, 186, 186, 1)"}}
       >
        Incident Date
       </th>
       <th className='px-2 py-1'
        style={{border: "1px solid rgba(186, 186, 186, 1)"}}
       >
        Incident Time
       </th>
       <th className='px-2 py-1'
        style={{border: "1px solid rgba(186, 186, 186, 1)"}}
       >
        Reporting Date
       </th>
       <th className='px-2 py-1'
        style={{border: "1px solid rgba(186, 186, 186, 1)"}}
       >
        Incidence Type
       </th>
       <th className='px-2 py-1'
        style={{border: "1px solid rgba(186, 186, 186, 1)"}}
       >
        Injury Category
       </th>
       <th className='px-2 py-1'
        style={{border: "1px solid rgba(186, 186, 186, 1)"}}
       >
        Project Name{" "}
       </th>
       <th className='px-2 py-1'
        style={{border: "1px solid rgba(186, 186, 186, 1)"}}
       >
        Products
       </th>
       <th className='px-2 py-1'
        style={{border: "1px solid rgba(186, 186, 186, 1)"}}
       >
        Supplier{" "}
       </th>
       <th className='px-2 py-1'
        style={{border: "1px solid rgba(186, 186, 186, 1)"}}
       >
        Quote Price{" "}
       </th>
       <th className='px-2 py-1'
        style={{border: "1px solid rgba(186, 186, 186, 1)"}}
       >
        Quote Date{" "}
       </th>
       <th className='px-2 py-1'
        style={{border: "1px solid rgba(186, 186, 186, 1)"}}
       >
        Qty 
       </th>
       <th className='px-2 py-1'
        style={{border: "1px solid rgba(186, 186, 186, 1)"}}
       >
        Status{" "}
       </th>
       <th className='px-2 py-1'
        style={{border: "1px solid rgba(186, 186, 186, 1)"}}
       >
        Action
       </th>
       <th className='px-2 py-1'
        style={{border: "1px solid rgba(186, 186, 186, 1)"}}
       >
        Action
       </th>
      </tr>
      </thead>
      <tbody>
      <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
  </div>
  </div>;
};

export default InjuryIllnessTable;
