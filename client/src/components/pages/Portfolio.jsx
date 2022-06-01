import React from 'react';

export default function Portfolio() {
  return (
    <>
    <div className="carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
      <div className="carousel-item">
        <div className="bg-neutral rounded-lg border shadow-md max-w-xs overflow-hidden rounded-box">
          <img className="h-56 lg:h-60 w-full object-cover" src="./AdventureQuest.gif" alt="" />
          <div className="p-3">
            <span className="text-sm text-primary-content">Apr 2022</span>
            <h3 className="font-semibold text-xl leading-6 text-primary-content">Adventure Quest</h3>
            <p className="text-primary-content">Create an adventurer, choose a quest, watch the battle unfold</p>
            <button className="btn btn-secondary text-primary-content"
              onclick="window.open('https://github.com/Blec333/adventureQuest' + location.search)">Repo</button>
            <button className="btn btn-secondary text-primary-content"
              onclick="window.open('https://adventurequest.herokuapp.com/' + location.search)">Deployment</button>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="bg-neutral rounded-lg border shadow-md max-w-xs overflow-hidden rounded-box">
          <img className="h-56 lg:h-60 w-full object-cover" src="./search-demo.gif" alt="" />
          <div className="p-3">
            <span className="text-sm text-primary-content">Apr 2022</span>
            <h3 className="font-semibold text-xl leading-6 text-primary-content">The Travel Center</h3>
            <p className="text-primary-content"> Server API fetch project providing various geolocation based
              information in
              real time.</p>
            <button className="btn btn-secondary text-primary-content"
              onclick="window.open('https://github.com/Blec333/the-travel-center' + location.search)">Repo</button>
            <button className="btn btn-secondary text-primary-content"
              onclick="window.open('https://Blec333.github.io/the-travel-center/' + location.search)">Deployment</button>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="bg-neutral rounded-lg border shadow-md max-w-xs overflow-hidden rounded-box">
          <img className="h-56 lg:h-60 w-full object-cover" src="./Weather Dashboard.gif" alt="" />
          <div className="p-3">
            <span className="text-sm text-primary-content">Apr 2022</span>
            <h3 className="font-semibold text-xl leading-6 text-primary-content">Weather Dashboard</h3>
            <p className="text-primary-content"> Weather forecasts provided per city searched.</p>
            <button className="btn btn-secondary text-primary-content"
              onclick="window.open('https://github.com/Blec333/weather-dashboard' + location.search)">Repo</button>
            <button className="btn btn-secondary text-primary-content"
              onclick="window.open('https://Blec333.github.io/weather-dashboard/' + location.search)">Deployment</button>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="bg-neutral rounded-lg border shadow-md max-w-xs overflow-hidden rounded-box">
          <img className="h-56 lg:h-60 w-full object-cover" src="./Work Day Scheduler.gif" alt="" />
          <div className="p-3">
            <span className="text-sm text-primary-content">Mar 2022</span>
            <h3 className="font-semibold text-xl leading-6 text-primary-content">Work Day Scheduler</h3>
            <p className="text-primary-content"> Set priorities by each one hour block of your work day, memory remains
              persistant.</p>
            <button className="btn btn-secondary text-primary-content"
              onclick="window.open('https://github.com/Blec333/day-planner' + location.search)">Repo</button>
            <button className="btn btn-secondary text-primary-content"
              onclick="window.open('https://Blec333.github.io/day-planner/' + location.search)">Deployment</button>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="bg-neutral rounded-lg border shadow-md max-w-xs overflow-hidden rounded-box">
          <img className="h-56 lg:h-60 w-full object-cover" src="./c-sharp.png" alt="" />
          <div className="p-3">
            <span className="text-sm text-primary-content">Month Year</span>
            <h3 className="font-semibold text-xl leading-6 text-primary-content">Title</h3>
            <p className="text-primary-content"></p>
            <button className="btn btn-secondary text-primary-content"
              onclick="window.open('#' + location.search)">Repo</button>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="bg-neutral rounded-lg border shadow-md max-w-xs overflow-hidden rounded-box">
          <img className="h-56 lg:h-60 w-full object-cover" src="./python.png" alt="" />
          <div className="p-3">
            <span className="text-sm text-primary-content">Month Year</span>
            <h3 className="font-semibold text-xl leading-6 text-primary-content">Title</h3>
            <p className="text-primary-content"></p>
            <button className="btn btn-secondary text-primary-content"
              onclick="window.open('#' + location.search)">Repo</button>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="bg-neutral rounded-lg border shadow-md max-w-xs overflow-hidden rounded-box">
          <img className="h-56 lg:h-60 w-full object-cover" src="./autolisp.jpg" alt="" />
          <div className="p-3">
            <span className="text-sm text-primary-content">Month Year</span>
            <h3 className="font-semibold text-xl leading-6 text-primary-content">Title</h3>
            <p className="text-primary-content"></p>
            <button className="btn btn-secondary text-primary-content"
              onclick="window.open('#' + location.search)">Repo</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
