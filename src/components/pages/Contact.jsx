import React from 'react';
import profilePic from "../../img/Profile-Picture.png";

export default function Contact() {


<button class="emailReplyButton" onClick="sendEmail(message)">Reply</button>

const sendEmail = () => {
    let emailAddress = document.getElementById('email-address').value;
    let contactName = document.getElementById('contact-name').value;
    let emailSubject = document.getElementById('email-subject').value;
    let emailBody = document.getElementById('email-body').value;
    let email = "mailto:brennanl.dev@gmail.com?subject=" + emailSubject + "&body=" + emailBody + " from: " + contactName + " at " + emailAddress;
    return document.location = email;
}


  return (
    <>
    <div className="bg-neutral w-full justify-center text-center">
        <figure>
          <div className="avatar">
            <div className="w-24 mask mask-squircle">
              <img alt="Headshot" src={profilePic} />
            </div>
          </div>
        </figure>
      <br />
      <br />
      <h1 className="font-semibold text-xl text-primary-content text-center">Contact Me</h1>
      <div className="flex bg-neutral text-center justify-center">
        <table className="table-auto">
          <br />
          <tbody className="">
            <tr className="table-row hover">
              <td className="table-cell text-primary-content text-right">Name: </td>
              <input id="contact-name" type="text" placeholder="Name" className="input input-bordered table-cell text-primary-content" />
            </tr>
            <br />
            <tr className="table-row hover">
              <td className="table-cell text-primary-content text-right">Return Email: </td>
              <input id="email-address" type="text" placeholder="info@site.com" className="input input-bordered table-cell text-primary-content" />
            </tr>
            <br />
            <tr className="table-row hover">
              <td className="table-cell text-primary-content text-right">Subject: </td>
              <input id="email-subject" type="text" placeholder="Subject" className="input input-bordered table-cell text-primary-content" />
            </tr>
            <br />
            <tr className="table-row hover">
              <td className="table-cell text-primary-content text-right">Message: </td>
              <input id="email-body" type="text" placeholder="Message" className="input input-bordered table-cell text-primary-content" />
            </tr>
            <br />
          </tbody>
        </table>
      </div>
      </div>
      
      <a id="send-email" className="flex justify-center" href={() => sendEmail()} onClick={() => sendEmail()}><button className="btn btn-secondary text-primary-content text-center">Send</button></a>
    </>
  );
}
