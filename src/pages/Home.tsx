import React from 'react';
import Nav from './components/nav';
import Video from './components/background-video';


const Home: React.FC = () => {
    return (
     <div className="absolute inset-0 overflow-hidden">
        <Nav />
        <Video />
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <img alt="Encompass logo" src="/images/Encompass-Logo.png" className="w-auto" />
              <p className="mt-6 text-xl leading-8 text-white">
                WHO WOULD YOU BE IF YOU WERE ALL THAT YOU COULD BE?
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-m font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-blue-500"
                >
                  FIND OUT NOW
                </a>
              </div>
            </div>
          </div>
        </div>
     
      </div>
    );
  };
  
  export default Home;
