import React, { useState } from 'react';

const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isChatOpen2, setIsChatOpen2] = useState(false);

  const [isDown, setIsDown] = useState(false);
  const [isDown2, setIsDown2] = useState(false);

 

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    
  };

  const toggleChatMenu = () => {
    setIsChatOpen(!isChatOpen);
    setIsDown(!isDown);
  };

  const toggleChatMenu2 = () => {
    setIsChatOpen2(!isChatOpen2);
    setIsDown2(!isDown2);
  };

  // f1f3f4

  return (
    <div className="h-screen fixed z-10">

      <div  
        className={`bg-[#f1f2f3] w-64 h-screen flex justify-start overflow-hidden flex-col duration-700 ease-in-out fixed top-0 left-0 z-10 pt-3 ${isOpen ? 'w-[62px]' : 'w-[250px]'
          }`}
      >
        <div className="p-3 flex justify-start gap-5 w-[250px] pb-10">
          <div className="w-[35px] h-[35px] bg-[#000] p-1 flex rounded-full justify-center items-center cursor-pointer" onClick={toggleSidebar}>
            {/* <img src="logo.png" alt="" onClick={toggleSidebar}/> */}
            <i className="fa-solid fa-bars text-white text-xl"></i>
          </div>
          <h1 className="text-[#000] text-2xl font-semibold">NEGOCIEMOS</h1>
        </div>


        <div className='h-[490px] overflow-auto custom-scrollbar'>
          <ul className="text-[#5f6368] p-3 overflow-hidden w-[250px] flex flex-col gap-2 h-auto">
            <div
              className="flex justify-start items-center gap-5 cursor-pointer hover:text-black"
              onClick={toggleChatMenu}
            >
              <i className="text-xl fa-solid fa-house bg-black text-white rounded-full w-[35px] h-[35px] flex justify-center items-center"></i>
              <li className='flex w-[150px] justify-between'>
                <p>
                  Chat</p>   <i
                    className={`fa-solid  ${isDown ? 'fa-chevron-down' : 'fa-chevron-right'}`}
                  ></i>
              </li>
            </div>
            <div
              className="sub-menu overflow-hidden duration-300"
              style={{ height: isChatOpen ? '90px' : '0' }}
            >
              <ul className="p-2 pl-14">
              <li className='flex items-center gap-2'><i className="fas fa-circle text-[6px]"></i> Panel Chat</li>
                <li className='flex items-center gap-2'><i className="fas fa-circle text-[6px]"></i> Masivos</li>
                <li className='flex items-center gap-2'><i className="fas fa-circle text-[6px]"></i> Reportes</li>
              </ul>
            </div>
            <div
              className="flex justify-start items-center gap-5 cursor-pointer hover:text-black"
              onClick={toggleChatMenu2}
            >
              <i className="text-xl fa-solid fa-gear bg-black text-white rounded-full w-[35px] h-[35px] flex justify-center items-center"></i>
              <li className='flex w-[150px] justify-between'>
                <p>
                  Opciones</p> <i
                    className={`fa-solid  ${isDown2 ? 'fa-chevron-down' : 'fa-chevron-right'}`}
                  ></i>
              </li>
            </div>
            <div
              className="sub-menu overflow-hidden duration-300"
              style={{ height: isChatOpen2 ? '90px' : '0' }}
            >
              <ul className="p-2 pl-14">
                <li className='flex items-center gap-2'><i className="fas fa-circle text-[6px]"></i> Opción 1</li>
                <li className='flex items-center gap-2'><i className="fas fa-circle text-[6px]"></i> Opción 2</li>
                <li className='flex items-center gap-2'><i className="fas fa-circle text-[6px]"></i> Opción 3</li>
              </ul>
            </div>
            <div className="flex justify-start items-center gap-5 cursor-pointer hover:text-black">
              <i className="text-xl fa-brands fa-rocketchat bg-white rounded-full w-[35px] h-[35px] flex justify-center items-center"></i>
              <li>Perfil</li>
            </div>
            <div className="flex justify-start items-center gap-5 cursor-pointer hover:text-black">
              <i className="text-xl fa-solid fa-address-card bg-white rounded-full w-[35px] h-[35px] flex justify-center items-center"></i>
              <li>Contacto</li>
            </div>
            <div className="flex justify-start items-center gap-5 cursor-pointer hover:text-black">
              <i className="text-xl fa-brands fa-rocketchat bg-white rounded-full w-[35px] h-[35px] flex justify-center items-center"></i>
              <li>Perfil</li>
            </div>
            <div className="flex justify-start items-center gap-5 cursor-pointer hover:text-black">
              <i className="text-xl fa-solid fa-address-card bg-white rounded-full w-[35px] h-[35px] flex justify-center items-center"></i>
              <li>Contacto</li>
            </div>
            <div className="flex justify-start items-center gap-5 cursor-pointer hover:text-black">
              <i className="text-xl fa-brands fa-rocketchat bg-white rounded-full w-[35px] h-[35px] flex justify-center items-center"></i>
              <li>Perfil</li>
            </div>
            <div className="flex justify-start items-center gap-5 cursor-pointer hover:text-black">
              <i className="text-xl fa-solid fa-address-card bg-white rounded-full w-[35px] h-[35px] flex justify-center items-center"></i>
              <li>Contacto</li>
            </div>
          </ul>
        </div>

        <div className="p-4 w-[250px] flex items-end left-0 absolute bottom-0">
          <h3 className="text-[#5f6368] text-lg flex items-center"><span className='font-bold text-4xl mr-4'>©</span>copyright DevMiller</h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
