import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ModalChat from './ModalChat';

const ChatSidebar = () => {

    const [data, setData] = useState([]);

    const formatFecha = (fechaCompleta) => {
        const fecha = new Date(fechaCompleta);
        return fecha.toLocaleTimeString('es-ES', {
          hour: '2-digit',
          minute: '2-digit',
        });
      };

      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://181.143.234.138:5001/chat_business2/Dashboard/Dashboard/chats_no_respondidos.php');
            // Mapea los datos y formatea la fecha
            const formattedData = response.data.map(item => ({
              ...item,
              fecha: formatFecha(item.fecha),
            }));
            setData(formattedData);
          } catch (error) {
            console.error('Error al obtener datos de la API:', error);
          }
        };
    
        fetchData();
    
      }, []);

    return (
        <>
            <div className="w-[350px] h-[80vh] bg-[#f1f3f4] border-r flex flex-col items-center border-gray-300 shadow-lg p-3">
                <div className='flex justify-between  gap-2 items-start'>
                    <div className='w-[45px]'>
                        <img src="logo.png" alt="" />
                    </div>
                    <div>
                        <button type="button" className="text-white gap-5 bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm w-32 py-2.5 text-center flex justify-center items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2">
                            Agenda
                            <i className="fa-solid fa-book"></i>
                        </button>
                    </div>
                    <div>
                        <ModalChat/>
                    </div>
                </div>

                <div>

                    <div className="relative flex my-2 w-[325px]">
                        <input type="search" className="bg-purple-white shadow rounded border-0 p-2 pl-8 outline-none w-full" placeholder="Buscar Chat..." />
                        <div className="absolute pin-r left-2 pin-t mt-3 mr-4 text-purple-lighter">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>

                </div>

                <div className='w-full h-10 bg-slate-400 flex justify-center'>
                    <div className='w-[50%] bg-slate-800 grid place-content-center font-bold text-white'>
                        <span>TODOS</span>
                    </div>
                    <div className='w-[50%] bg-slate-500 grid place-content-center font-bold text-white'>
                        <span>NO LEIDOS</span>
                    </div>

                </div>



                <div className='w-full h-[400px] overflow-auto z-50 mt-3'>
                    {data.map((item, index) => (
                        <div key={index} className='flex gap-2 w-full border-b-[1px] py-2 relative justify-center items-center'>
                            <div className='w-[50px]'>
                                <img src="logo.png" alt="" />
                            </div>
                            <div className='w-full h-12 overflow-hidden relative pt-5'>
                                <span className='absolute top-0 tex-xs font-bold w-14 h-6 overflow-hidden'>
                                    {item.name}
                                </span>
                                <span className='text-[#5f6368] text-[14px]'>
                                    {item.men}
                                </span>
                            </div>

                            <div className='flex translate-y-[-14px] h-2 gap-1'>
                                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-2 rounded-full"></button>
                                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-2 rounded-full"></button>
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded-full"></button>
                            </div>
                            <span className='absolute right-2 bottom-0 text-[12px]'>
                                {item.fecha}
                            </span>
                        </div>


                    ))}
                </div>
            </div>
        </>
    );
};

export default ChatSidebar;
