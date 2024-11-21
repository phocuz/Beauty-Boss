import { useState } from 'react';
import mainLogo from "./assets/logo.png";
import sticker from "./assets/$.png";
import tiktok from "./assets/tiktok.png";
import facebook from "./assets/facebook.png";
import instagram from "./assets/instagram.png";
import youtube from "./assets/youtube.png";
import smile from "./assets/smile.png";

function App() {
  const [progress, setProgress] = useState(0);
  const [selectedChannels, setSelectedChannels] = useState({
    tiktok: false,
    facebook: false,
    instagram: false,
    youtube: false
  });

  const channels = [
    { id: 'tiktok', icon: tiktok },
    { id: 'facebook', icon: facebook },
    { id: 'instagram', icon: instagram },
    { id: 'youtube', icon: youtube }
  ];

  const handleChannelSelect = (channelId) => {
    const newSelectedChannels = {
      ...selectedChannels,
      [channelId]: !selectedChannels[channelId]
    };
    setSelectedChannels(newSelectedChannels);
    
    const selectedCount = Object.values(newSelectedChannels).filter(Boolean).length;
    setProgress((selectedCount / channels.length) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-t from-yellow-100 to-white p-4 md:p-8">
      <div className="flex justify-between items-center mb-8">
        <img 
          src={mainLogo} 
          alt="Main Logo" 
          className="w-32 md:w-48 h-auto" 
        />
        <img 
          src={sticker} 
          alt="Sticker" 
          className="w-16 md:w-24 h-auto relative top-4" 
        />
      </div>

      <div className="text-center mb-8"> 
        <h1 className="text-2xl md:text-4xl font-bold capitalize mb-4">
          Where did you want to make sales
        </h1>
        <h4 className="text-sm md:text-base text-gray-600">
          You can choose multiple options
        </h4>
      </div>

      <div className="space-y-4 flex  justify-center items-center flex-col sm:flex-row sm:gap-10 sm:justify-center ">
        {channels.map(({ id, icon }) => (
          <div 
            key={id}
            className={`bg-white p-6 w-[380px] border-4 rounded-lg  border-black lg:w-[400px] lg:h-[250px] transition-all duration-300 
              ${selectedChannels[id] ? "shadow-[4px_4px_0px_0px_black]" : "shadow-none"}`}
          >
            <div className="flex justify-between items-center mb-4">
              <img 
                src={icon} 
                alt={`${id} logo`} 
                className="w-16 md:w-24 h-16 md:h-24 object-contain" 
              />
              <input 
                type="checkbox" 
                // checked={selectedChannels[id]}
                onChange={() => handleChannelSelect(id)}
                className="w-6 h-6 font-black" 
              />
            </div>
            
            {/* {selectedChannels[id] && } */}
              <div className="text-center">
                <input 
                  type="text" 
                  placeholder="Enter Your Channel URL" 
                  className="w-full px-4 py-2 border rounded-md mb-2" 
                />
              </div>
          
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-8">
        <img 
          src={smile} 
          alt="Smile" 
          className="w-16 md:w-24 h-auto mt-4" 
        />
        <button 
          className="px-4 md:px-6 py-2 md:py-3 bg-white border border-black rounded-md"
        >
          Next step <span className="ml-2">&gt;</span>
        </button>

        <img 
          src={smile} 
          alt="Smile" 
          className="w-16 md:w-24 h-auto mt-8" 
        />
      </div>

      <div className="flex items-center justify-center ">
  <div className="w-1/2 bg-gray-300 h-4 rounded-full overflow-hidden">
    <div
      className="bg-black h-full rounded-full transition-all duration-500"
      style={{ width: `${progress}%` }}
    />
  </div>
</div>
    </div>
  );
}

export default App;