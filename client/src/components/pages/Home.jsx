import React from 'react';

export default function Home() {
  return (
    <>
    <div className="bg-neutral  w-full justify-center text-center">
      <br/>
      <figure>
        <div className="avatar">
          <div className="w-24 mask mask-squircle">
            <img alt="Headshot" src="./Profile-Picture.png" />
          </div>
        </div>
      </figure>
      <div className="z-20 card-body justify-center">
        <h1 className="card-title text-primary-content justify-center text-center">Brennan LeClair</h1>
        <p className="text-primary-content text-center">Sofware Engineer</p>
        <p className="text-primary-content text-center">(619) 354-7965</p>
        <p className="text-primary-content text-center">brennanl.dev@gmail.com</p>
        <div className="card-actions justify-center">
            <a href="https://www.google.com/maps/place/San+Diego,+CA/@32.8247626,-117.2494014,11z/data=!3m1!4b1!4m5!3m4!1s0x80d9530fad921e4b:0xd3a21fdfd15df79!8m2!3d32.715738!4d-117.1610838?hl=en&authuser=0" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center">San Diego</button></a>
            <a href="https://www.linkedin.com/in/brennanleclair" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center">LinkedIn</button></a>
            <a href="https://github.com/Blec333" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center">GitHub</button></a>
            <a href="https://github.com/Blec333/portfolio" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center">Portfolio Repo</button></a>
        </div>
      </div>
      <div className="bg-neutral text-center">
        <br/>
        <h1 className="text-3xl text-bold underline text-primary-content text-center">Technical Skills</h1>
        <br/>
        <div className="text-primary-content text-center">Dynamo, C#, HTML, CSS, JavaScript, Python, Lisp, VBA (.COD,
          Excel), AutoCAD, Revit, Fabrication CADmep, CAMduct, Design Line, APL, Glue, Navis, Bluebeam, 360: Field,
          Docs, Collab, Procore, Box, Trimble, Lidar, Matterport, Microsoft Office (Word, Excel, PowerPoint,
          Outlook)</div>
        <br/>
        <br/>
        <h1 className="text-3xl text-bold underline text-primary-content text-center">Core Competencies</h1>
        <br/>
        <div className="text-primary-content text-center">Project Management | Project Planning | BIM Management |
          Strategic Planning | Project Execution | Cost & Quality Control | Mechanical Drafting & Detailing |
          Schedule Management | Change Management | Shop Fabrication | Engineering Design | Project Lifecycle |
          Inventory Controls | Profit and Loss Management | Resource Maintenance | Program Planning | Vendor
          Management | Staff Coordination | Executive Leadership | Interpersonal Skills | Excellent Communication
          Skills</div>
      </div>
    </div>
    </>
  );
}
