import React from 'react';
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
      <div className="carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        <div className="carousel-item">
          <div className="bg-neutral rounded-lg border shadow-md max-w-xs overflow-hidden rounded-box">
            <img className="h-56 lg:h-60 w-full object-cover" src={adventureQuestImg} alt="" />
            <div className="p-3">
              <span className="text-sm text-primary-content">Apr 2022</span>
              <h3 className="font-semibold text-xl leading-6 text-primary-content">Adventure Quest</h3>
              <p className="text-primary-content">Create an adventurer, choose your opponent wisely and watch the battle unfold</p>
              <a href="https://github.com/Blec333/adventureQuest" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline btn-outline">Repo</button></a>
              <a href="https://adventurequest.herokuapp.com/" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline">Deployment</button></a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="bg-neutral rounded-lg border shadow-md max-w-xs overflow-hidden rounded-box">
            <img className="h-56 lg:h-60 w-full object-cover" src={travelCenterImg} alt="" />
            <div className="p-3">
              <span className="text-sm text-primary-content">Apr 2022</span>
              <h3 className="font-semibold text-xl leading-6 text-primary-content">The Travel Center</h3>
              <p className="text-primary-content"> Server API fetch project providing various geolocation based information in real time.</p>
              <a href="https://github.com/Blec333/the-travel-center" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline">Repo</button></a>
              <a href="https://Blec333.github.io/the-travel-center/" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline">Deployment</button></a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="bg-neutral rounded-lg border shadow-md max-w-xs overflow-hidden rounded-box">
            <img className="h-56 lg:h-60 w-full object-cover" src={weatherDashboardImg} alt="" />
            <div className="p-3">
              <span className="text-sm text-primary-content">Apr 2022</span>
              <h3 className="font-semibold text-xl leading-6 text-primary-content">Weather Dashboard</h3>
              <p className="text-primary-content"> Weather forecasts provided per city searched.</p>
              <a href="https://github.com/Blec333/weather-dashboard" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline">Repo</button></a>
              <a href="https://Blec333.github.io/weather-dashboard/" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline">Deployment</button></a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="bg-neutral rounded-lg border shadow-md max-w-xs overflow-hidden rounded-box">
            <img className="h-56 lg:h-60 w-full object-cover" src={schedulerImg} alt="" />
            <div className="p-3">
              <span className="text-sm text-primary-content">Mar 2022</span>
              <h3 className="font-semibold text-xl leading-6 text-primary-content">Work Day Scheduler</h3>
              <p className="text-primary-content"> Set priorities by each one hour block of your work day, memory remains persistant.</p>
              <a href="https://github.com/Blec333/day-planner" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline">Repo</button></a>
              <a href="https://Blec333.github.io/day-planner/" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline">Deployment</button></a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="bg-neutral rounded-lg border shadow-md max-w-xs overflow-hidden rounded-box">
            <img className="h-56 lg:h-60 w-full object-cover" src={cSharpImg} alt="" />
            <div className="p-3">
              <span className="text-sm text-primary-content">Month Year</span>
              <h3 className="font-semibold text-xl leading-6 text-primary-content">Title</h3>
              <p className="text-primary-content"></p>
              <a href="#portfolio" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline">Repo</button></a>
              <a href="#portfolio" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline">Deployment</button></a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="bg-neutral rounded-lg border shadow-md max-w-xs overflow-hidden rounded-box">
            <img className="h-56 lg:h-60 w-full object-cover" src={pythonImg} alt="" />
            <div className="p-3">
              <span className="text-sm text-primary-content">Month Year</span>
              <h3 className="font-semibold text-xl leading-6 text-primary-content">Title</h3>
              <p className="text-primary-content"></p>
              <a href="#portfolio" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline ">Repo</button></a>
              <a href="#portfolio" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline">Deployment</button></a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="bg-neutral rounded-lg border shadow-md max-w-xs overflow-hidden rounded-box">
            <img className="h-56 lg:h-60 w-full object-cover" src={lispImg} alt="" />
            <div className="p-3">
              <span className="text-sm text-primary-content">Month Year</span>
              <h3 className="font-semibold text-xl leading-6 text-primary-content">Title</h3>
              <p className="text-primary-content"></p>
              <a href="#portfolio" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline">Repo</button></a>
              <a href="#portfolio" rel="noreferrer" target="_blank"><button className="btn btn-secondary text-primary-content text-center btn-outline">Deployment</button></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
