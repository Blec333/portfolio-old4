import React from 'react';
import jateImg from "../../img/jate.gif";
import socialMediaApiImg from "../../img/social-media-api.gif";
import adventureQuestImg from "../../img/AdventureQuest.gif";
import travelCenterImg from "../../img/search-demo.gif";
import weatherDashboardImg from "../../img/Weather Dashboard.gif";
import schedulerImg from "../../img/Work Day Scheduler.gif";
import cSharpImg from "../../img/c-sharp.png";
import pythonImg from "../../img/python.png";
import lispImg from "../../img/autolisp.jpg";

export default function Portfolio() {
  return (
    <>
      <div className="carousel carousel-center p-4 space-x-4 bg-transparent rounded-box">
        <div className="carousel-item">
          <div className="bg-neutral rounded-lg border shadow-md max-w-xs overflow-hidden rounded-box">
            <img className="h-56 lg:h-60 w-full object-cover" src={jateImg} alt="" />
            <div className="p-3">
              <h3 className="font-semibold text-xl leading-6 text-primary-content underline text-center">JATE</h3>
              <br />
              <p className="text-center text-sm text-primary-content">May 2022</p>
              <p className="text-primary-content h-[6rem]">This is a text editor built as a PWA avaiable for offline access.</p>
              <a href="https://github.com/Blec333/pwa-text-editor" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline btn-outline">Repo</button></a>
              <a href="https://blec-jate.herokuapp.com/" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline">Deployment</button></a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="bg-neutral rounded-lg border shadow-md max-w-xs overflow-hidden rounded-box">
            <img className="h-56 lg:h-60 w-full object-cover" src={socialMediaApiImg} alt="" />
            <div className="p-3">
              <h3 className="font-semibold text-xl leading-6 text-primary-content underline text-center">Social Media API</h3>
              <br />
              <p className="text-center text-sm text-primary-content">May 2022</p>
              <p className="text-primary-content h-[6rem]">This social media api is setup using Mongo DB wrapped by Mongoose.</p>
              <a href="https://github.com/Blec333/social-media-api" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline btn-outline">Repo</button></a>
              <a href="https://blec-social-media-api.herokuapp.com/api/users/" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline">Deployment</button></a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="bg-neutral rounded-lg border shadow-md max-w-xs overflow-hidden rounded-box">
            <img className="h-56 lg:h-60 w-full object-cover" src={adventureQuestImg} alt="" />
            <div className="p-3">
              <h3 className="font-semibold text-xl leading-6 text-primary-content underline text-center">Adventure Quest</h3>
              <br />
              <p className="text-center text-sm text-primary-content">Apr 2022</p>
              <p className="text-primary-content h-[6rem]">Create an adventurer, choose your opponent wisely and watch the battle unfold</p>
              <a href="https://github.com/Blec333/adventureQuest" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline btn-outline">Repo</button></a>
              <a href="https://adventurequest.herokuapp.com/" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline">Deployment</button></a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="bg-neutral rounded-lg border shadow-md max-w-xs overflow-hidden rounded-box">
            <img className="h-56 lg:h-60 w-full object-cover" src={travelCenterImg} alt="" />
            <div className="p-3">
              <h3 className="font-semibold text-xl leading-6 text-primary-content underline text-center">The Travel Center</h3>
              <br />
              <p className="text-center text-sm text-primary-content">Apr 2022</p>
              <p className="text-primary-content h-[6rem]"> Server API fetch project providing various geolocation based information in real time.</p>
              <a href="https://github.com/Blec333/the-travel-center" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline">Repo</button></a>
              <a href="https://Blec333.github.io/the-travel-center/" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline">Deployment</button></a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="bg-neutral rounded-lg border shadow-md max-w-xs overflow-hidden rounded-box">
            <img className="h-56 lg:h-60 w-full object-cover" src={weatherDashboardImg} alt="" />
            <div className="p-3">
              <h3 className="font-semibold text-xl leading-6 text-primary-content underline text-center">Weather Dashboard</h3>
              <br />
              <p className="text-center text-sm text-primary-content">Apr 2022</p>
              <p className="text-primary-content h-[6rem]"> Weather forecasts provided per city searched.</p>
              <a href="https://github.com/Blec333/weather-dashboard" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline">Repo</button></a>
              <a href="https://Blec333.github.io/weather-dashboard/" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline">Deployment</button></a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="bg-neutral rounded-lg border shadow-md max-w-xs overflow-hidden rounded-box">
            <img className="h-56 lg:h-60 w-full object-cover" src={schedulerImg} alt="" />
            <div className="p-3">
              <h3 className="font-semibold text-xl leading-6 text-primary-content underline text-center">Work Day Scheduler</h3>
              <br />
              <p className="text-center text-sm text-primary-content">Mar 2022</p>
              <p className="text-primary-content h-[6rem]"> Set priorities by each one hour block of your work day, memory remains persistant.</p>
              <a href="https://github.com/Blec333/day-planner" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline">Repo</button></a>
              <a href="https://Blec333.github.io/day-planner/" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline">Deployment</button></a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="bg-neutral rounded-lg border shadow-md max-w-xs overflow-hidden rounded-box">
            <img className="h-56 lg:h-60 w-full object-cover" src={cSharpImg} alt="" />
            <div className="p-3">
              <h3 className="font-semibold text-xl leading-6 text-primary-content underline text-center">Title</h3>
              <br />
              <p className="text-center text-sm text-primary-content">Month Year</p>
              <p className="text-primary-content h-[6rem]"></p>
              <a href="#portfolio" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline">Repo</button></a>
              <a href="#portfolio" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline">Deployment</button></a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="bg-neutral rounded-lg border shadow-md max-w-xs overflow-hidden rounded-box">
            <img className="h-56 lg:h-60 w-full object-cover" src={pythonImg} alt="" />
            <div className="p-3">
              <h3 className="font-semibold text-xl leading-6 text-primary-content underline text-center">Title</h3>
              <br />
              <p className="text-center text-sm text-primary-content">Month Year</p>
              <p className="text-primary-content h-[6rem]"></p>
              <a href="#portfolio" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline ">Repo</button></a>
              <a href="#portfolio" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline">Deployment</button></a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="bg-neutral rounded-lg border shadow-md max-w-xs overflow-hidden rounded-box">
            <img className="h-56 lg:h-60 w-full object-cover" src={lispImg} alt="" />
            <div className="p-3">
              <h3 className="font-semibold text-xl leading-6 text-primary-content underline text-center">Title</h3>
              <br />
              <p className="text-center text-sm text-primary-content">Month Year</p>
              <p className="text-primary-content h-[6rem]"></p>
              <a href="#portfolio" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline">Repo</button></a>
              <a href="#portfolio" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline">Deployment</button></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
