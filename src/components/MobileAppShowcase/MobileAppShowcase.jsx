import { useState, useEffect } from 'react';

const iPhone15Specs = {
  // iPhone 15 dimensions with scaling factor for smaller size
  portrait: {
    width: 285,
    height: 615,
    frameWidth: 300,
    frameHeight: 650
  },
  landscape: {
    width: 596,
    height: 275,
    frameWidth: 650,
    frameHeight: 300
  }
};

const MobileAppShowcase = ({appUrl}) => {
  const orientation= 'portrait';
  const [isLoading, setIsLoading] = useState(true);
  const [shadow, setShadow] = useState(true);
  const deviceColor = "black";
  
  // Loading state handler
  const handleIframeLoad = () => {
    setIsLoading(false);
  };
  
  const specs = iPhone15Specs[orientation];
  
  const frameContainerStyle = {
    width: `${specs.frameWidth}px`,
    height: `${specs.frameHeight}px`,
    backgroundColor: deviceColor,
    borderRadius: '45px',
    padding: '4px',
    position: 'relative',
    boxShadow: shadow ? '0 25px 50px -12px #00f5a0' : 'none',
    transition: 'all 0.5s ease-in-out',
    overflow: 'hidden'
  };
  
  const screenContainerStyle = {
    width: `${specs.width}px`,
    height: `${specs.height}px`,
    margin: '0 auto',
    borderRadius: '38px',
    overflow: 'hidden',
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)'
  };
  
  const notchStyle = {
    width: orientation === 'portrait' ? '120px' : '22px',
    height: orientation === 'portrait' ? '25px' : '80px',
    backgroundColor: 'black',
    position: 'absolute',
    top: orientation === 'portrait' ? '10px' : '50%',
    left: orientation === 'portrait' ? '50%' : '0',
    transform: orientation === 'portrait' ? 
      'translateX(-50%)' : 'translateY(-50%)',
    borderRadius: orientation === 'portrait' ?  
      '0 0 12px 12px' : '0 12px 12px 0',
    zIndex: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
  
  // Dynamic camera position based on orientation
  const cameraStyle = {
    width: '12px',
    height: '12px',
    backgroundColor: '#1a1a1a',
    borderRadius: '50%',
    position: 'absolute',
    top: orientation === 'portrait' ? '10px' : '50%',
    left: orientation === 'portrait' ? '50%' : '10px',
    transform: orientation === 'portrait' ? 
      'translateX(-50%)' : 'translateY(-50%)',
    zIndex: 21
  };

  return (
    <div className="flex flex-col items-center justify-center py-8 gap-4">
      
      <div className="relative" style={frameContainerStyle}>
        {/* Dynamic Island / Notch */}
        <div style={notchStyle}>
          <div style={cameraStyle}></div>
        </div>
        
        {/* Screen container */}
        <div style={screenContainerStyle}>
          {/* Loading spinner */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          
          {/* Iframe containing website */}
          <iframe
            src={appUrl}
            title="Website Preview in iPhone 15"
            className="w-full h-full"
            onLoad={handleIframeLoad}
            style={{ 
              zIndex: 5,
              width: '100%',
              height: '100%',
              border: 'none',
              transform: 'scale(1)', 
              transformOrigin: 'top left',
              zoom: 0.8
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileAppShowcase;