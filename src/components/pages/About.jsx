import React from 'react';
import profilePic from "../../img/Profile-Picture.png";

export default function About() {
  return (
    <>
      <div className="bg-neutral justify-center text-center">
        <br />
        <figure>
          <div className="avatar">
            <div className="w-24 mask mask-squircle">
              <img alt="Headshot" src={profilePic} />
            </div>
          </div>
        </figure>
        <div className="card-body justify-center">
          <h1 className="text-3xl text-bold underline card-title text-primary-content justify-center text-center">About Me</h1>
        </div>
        <div className="bg-neutral text-center">
          <div className="text-primary-content text-center">Proficient and resourceful Project and Preconstruction Manager with 8+ years of extensive industry experience providing cutting-edge solutions in the design, engineering, and construction sectors. Analytical and practical-minded, adept at identifying opportunities for improvement, implementing changes, and measuring the impact of those changes. Exceptionally competent management specialist equipped with unmatched competencies in project plan implementation and mechanical design management. Exemplified integrity, accountability, and solid work ethic with an excellent grasp of project management methodologies to nurture productive collaborations and achieve optimal results. A focused leader in adopting new tools and techniques that improve data management and boost inter-departmental collaboration.
          </div>
        </div>
        <br />
        <h2 className="text-xl text-bold">Life Experience</h2>
        <div className="flex overflow-x-auto bg-neutral text-center justify-center">
          <table className="table-auto text-primary-content text-center border-collapse border border-slate-400">
            <thead>
              <th className="text-center p-4">Interests</th>
              <th className="text-center p-4">Projects</th>
            </thead>
            <tbody className="">
                <thead>
                  <th className="text-center p-4"></th>
                </thead>
              <td className="flex flex-col items-start text-left p-4 border-collapse border border-slate-400">
                <tr className='hover:bg-base-300'>Spending time with my wife & boys!</tr>
                <tr className='hover:bg-base-300'>Building applications</tr>
                <tr className='hover:bg-base-300'>Sheetmetal Craft</tr>
                <tr className='hover:bg-base-300'>Biking</tr>
                <tr className='hover:bg-base-300'>Swimming - Pool (not ocean)</tr>
                <tr className='hover:bg-base-300'>Reading about emerging technologies</tr>
                <tr className='hover:bg-base-300'>Pondering the mysteries of the universe</tr>
                <tr className='hover:bg-base-300'>Wine & Craft Beer</tr>
              </td>
              <td className="text-left p-4">
                <thead>
                  <th className="text-center">Name</th>
                  <th className="text-center">Category</th>
                  <th className="text-center">Type</th>
                  <th className="text-center">Industry</th>
                  <th className="text-center">Size</th>
                  <th className="text-center">Oversight</th>
                </thead>
                <tr className='hover:bg-base-300'>
                  <td className="text-left p-4 border-collapse border border-slate-400">Ballpark Village</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Commercial</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Condominiums</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Construction</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Highrise</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">City</td>
                </tr>
                <tr className='hover:bg-base-300'>
                  <td className="text-left p-4 border-collapse border border-slate-400">Lane Field South</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Commercial</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Hotel</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Construction</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Highrise</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">City</td>
                </tr>
                <tr className='hover:bg-base-300'>
                  <td className="text-left p-4 border-collapse border border-slate-400">Casa De Las Campanas</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Commercial</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Skilled Nursing Facility</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Construction</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Midrise</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">OSHPD</td>
                </tr>
                <tr className='hover:bg-base-300'>
                  <td className="text-left p-4 border-collapse border border-slate-400">Legacy International Center</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Commercial</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Office & Biolab</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Construction</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Highrise</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">City</td>
                </tr>
                <tr className='hover:bg-base-300'>
                  <td className="text-left p-4 border-collapse border border-slate-400">Lilly Labs</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Commercial</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Office & Biolab</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Construction</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Midrise</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">City</td>
                </tr>
                <tr className='hover:bg-base-300'>
                  <td className="text-left p-4 border-collapse border border-slate-400">Kaiser Riverside</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Commercial</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Hospital</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Construction</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Highrise</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">OSHPD</td>
                </tr>
                <tr className='hover:bg-base-300'>
                  <td className="text-left p-4 border-collapse border border-slate-400">Scripps Cardiovasctrar Institute</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Commercial</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Hospital</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Construction</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Midrise</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">OSHPD</td>
                </tr>
                <tr className='hover:bg-base-300'>
                  <td className="text-left p-4 border-collapse border border-slate-400">Sharp RB MOB</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Commercial</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Medical Office Building</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Construction</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Midrise</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">City</td>
                </tr>
                <tr className='hover:bg-base-300'>
                  <td className="text-left p-4 border-collapse border border-slate-400">SDCCD Mesa College Fine Arts</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Commercial</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">School</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Construction</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Lowrise</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">DSA</td>
                </tr>
                <tr className='hover:bg-base-300'>
                  <td className="text-left p-4 border-collapse border border-slate-400">Wilson Middle School</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Commercial</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">School</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Construction</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Midrise</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">DSA</td>
                </tr>
                <tr className='hover:bg-base-300'>
                  <td className="text-left p-4 border-collapse border border-slate-400">Central Elemntary School</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Commercial</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">School</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Construction</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Lowrise</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">DSA</td>
                </tr>
                <tr className='hover:bg-base-300'>
                  <td className="text-left p-4 border-collapse border border-slate-400">Seal Teams 1 & 3 P892 & P964</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Commercial</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">ATFP High Security Training Facility</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Construction</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Lowrise</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">NAVFAC</td>
                </tr>
                <tr className='hover:bg-base-300'>
                  <td className="text-left p-4 border-collapse border border-slate-400">P921, P988, P949 & P950</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Commercial</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">ATFP High Security Training Facility</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Construction</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Lowrise</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">NAVFAC</td>
                </tr>
                <tr className='hover:bg-base-300'>
                  <td className="text-left p-4 border-collapse border border-slate-400">Cray Ct.</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Commercial</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Office & Biolab</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Construction</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Midrise</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">City</td>
                </tr>
                <tr className='hover:bg-base-300'>
                  <td className="text-left p-4 border-collapse border border-slate-400">Oberlin Dr.</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Commercial</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Office & Biolab</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Construction</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Single Story</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">City</td>
                </tr>
                <tr className='hover:bg-base-300'>
                  <td className="text-left p-4 border-collapse border border-slate-400">Boardwalk HCP</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Commercial</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Office</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Construction</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Highrise Campus - 3 buildings</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">City</td>
                </tr>
                <tr className='hover:bg-base-300'>
                  <td className="text-left p-4 border-collapse border border-slate-400">Central Elementary</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Commercial</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">School</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Construction</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Lowrise Campus - 8 buildings</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">DSA</td>
                </tr>
                <tr className='hover:bg-base-300'>
                  <td className="text-left p-4 border-collapse border border-slate-400">Torrey Pines HS Innovation</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Commercial</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">School</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Construction</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Midrise</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">DSA</td>
                </tr>
                <tr className='hover:bg-base-300'>
                  <td className="text-left p-4 border-collapse border border-slate-400">Sharp Innovation Education Center</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Commercial</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">School</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Construction</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">Midrise</td>
                  <td className="text-left p-4 border-collapse border border-slate-400">DSA</td>
                </tr>
              </td>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
