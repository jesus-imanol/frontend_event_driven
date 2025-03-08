import React, { useEffect, useRef, useState } from 'react';

function CardAvatar({ profile_picture, full_name, interests, city, state, email, gender, match_preference, status_message }) {
  const cardRef = useRef(null);
  const [matched, setMatched] = useState(false);
  
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    
    // Add subtle movement effect on mouse move
    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const xPercent = x / rect.width;
      const yPercent = y / rect.height;
      
      // Apply subtle rotation based on mouse position
      const rotateX = (0.5 - yPercent) * 10;
      const rotateY = (xPercent - 0.5) * 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    
    // Reset on mouse leave
    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      card.style.transition = 'transform 0.5s ease';
    };
    
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleMatch = () => {
    setMatched(!matched);
  };
  
  return (
    <div 
      ref={cardRef}
      className="card-container relative w-64 h-96 rounded-xl overflow-hidden border border-gray-800 transition-all duration-300 cursor-pointer"
      style={{
        background: 'hsla(0, 0%, 0%, 1)',
        backgroundImage: `
          radial-gradient(circle at 85% 80%, hsla(266.99999999999983, 1%, 12%, 1) 9%, transparent 55%),
          radial-gradient(circle at 60% 24%, hsla(335.9999999999997, 2%, 22%, 1) 5%, transparent 72%),
          radial-gradient(circle at 13% 82%, hsla(53.999999999999886, 0%, 0%, 0.49) 5%, transparent 52%),
          radial-gradient(circle at 24% 7%, hsla(299, 4%, 36%, 1) 13%, transparent 68%)
        `,
        backgroundBlendMode: 'normal, normal, normal, normal',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.8)'
      }}
    >
      <div className="card-content p-5 flex flex-col h-full">
        <div className="image-container mb-4 overflow-hidden rounded-lg">
          <img 
            className="w-full h-40 object-cover rounded-lg transform transition-transform duration-500 hover:scale-110" 
            src={profile_picture} 
            alt={`${full_name}'s avatar`} 
          />
        </div>
        
        <div className="text-content flex-grow">
          <h1 className="text-xl font-bold text-amber-50 mb-2">{full_name}</h1>
          <div className="flex items-center mb-2">
            <span className="text-xs text-amber-400 bg-gray-800 rounded-full px-2 py-0.5 mr-1">
              {gender === 'M' ? 'Hombre' : gender === 'F' ? 'Mujer' : gender}
            </span>
            <span className="text-xs text-purple-400 bg-gray-800 rounded-full px-2 py-0.5">
              Busca: {match_preference === 'F' ? 'Mujeres' : match_preference === 'M' ? 'Hombres' : match_preference}
            </span>
          </div>
          <p className="text-gray-300 text-sm mb-1 line-clamp-2">
            <span className="text-amber-400">Intereses:</span> {interests}
          </p>
          <p className="text-gray-300 text-sm mb-2 line-clamp-2">
            <span className="text-amber-400">Estado:</span> {status_message}
          </p>
        </div>
        
        <div className="location mt-auto pt-2 border-t border-gray-700">
          <div className="flex items-center mb-1">
            <svg className="w-4 h-4 text-amber-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <strong className="text-amber-50">{city}, {state}</strong>
          </div>
          <div className="flex items-center text-xs text-gray-400 truncate">
            <svg className="w-3 h-3 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {email}
          </div>
        </div>
        
        <button 
          onClick={handleMatch}
          className={`mt-3 w-full py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
            matched 
              ? 'bg-green-600 text-white hover:bg-green-700' 
              : 'bg-gradient-to-r from-amber-500 to-pink-500 text-white hover:from-amber-600 hover:to-pink-600'
          }`}
        >
          {matched ? '¡Match Hecho!' : 'Hacer Match'}
        </button>
      </div>
      
      <div className="card-glow absolute inset-0 opacity-30 pointer-events-none" 
        style={{
          background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0))',
        }}
      />
      
      {matched && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center pointer-events-none animate-pulse">
          <div className="text-4xl">❤️</div>
        </div>
      )}
    </div>
  );
}

export default CardAvatar;