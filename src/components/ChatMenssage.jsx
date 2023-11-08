import React from 'react'

function ChatMenssage() {
    return (
        <>
            <div className='w-full h-auto bg-[#f1f3f4]  shadow-lg overflow-auto relative'>
                <div className="bg-gray-300 p-4 rounded-lg m-4 max-w-xs mx-auto translate-x-[-100px]">
                    <div className="text-left text-gray-700">
                        <p className="p-2 bg-white rounded-lg">¡Hola! ¿Cómo estás?</p>
                    </div>
                </div>

                <div className="bg-blue-500 p-4 rounded-lg m-4 max-w-xs mx-auto translate-x-[100px]">
                    <div className="text-left text-white">
                        <p className="p-2 bg-blue-700 rounded-lg">Hola, estoy bien, ¿y tú?</p>
                    </div>
                </div>

                <div className="bg-gray-300 p-4 rounded-lg m-4 max-w-xs mx-auto translate-x-[-100px]">
                    <div className="text-left text-gray-700">
                        <p className="p-2 bg-white rounded-lg">Estoy bien, gracias. ¿Qué has estado haciendo últimamente?</p>
                    </div>
                </div>

                <div className="bg-blue-500 p-4 rounded-lg m-4 max-w-xs mx-auto translate-x-[100px]">
                    <div className="text-left text-white">
                        <p className="p-2 bg-blue-700 rounded-lg">He estado trabajando mucho y también disfrutando del tiempo libre. ¿Tú?</p>
                    </div>
                </div>

                <div className="bg-gray-300 p-4 rounded-lg m-4 max-w-xs mx-auto translate-x-[-100px]">
                    <div className="text-left text-gray-700">
                        <p className="p-2 bg-white rounded-lg">Me alegro de que hayas tenido tiempo para descansar. Yo también he estado ocupado con el trabajo y algunas actividades de ocio.</p>
                    </div>
                </div>

                <div className="bg-blue-500 p-4 rounded-lg m-4 max-w-xs mx-auto translate-x-[100px]">
                    <div className="text-left text-white">
                        <p className="p-2 bg-blue-700 rounded-lg">Siempre es importante encontrar un equilibrio. ¿Has planeado algo para el fin de semana?</p>
                    </div>
                </div>

                <div className="bg-gray-300 p-4 rounded-lg m-4 max-w-xs mx-auto translate-x-[-100px]">
                    <div className="text-left text-gray-700">
                        <p className="p-2 bg-white rounded-lg">Sí, planeo salir de excursión el sábado y descansar el domingo. ¿Tienes algún plan?</p>
                    </div>
                </div>

                <div className="bg-blue-500 p-4 rounded-lg m-4 max-w-xs mx-auto translate-x-[100px]">
                    <div className="text-left text-white">
                        <p className="p-2 bg-blue-700 rounded-lg">El sábado tengo una cena con amigos, pero el domingo estaré libre. ¡Podríamos quedar!</p>
                    </div>
                </div>

                <div className="bg-gray-300 p-4 rounded-lg m-4 max-w-xs mx-auto translate-x-[-100px]">
                    <div className="text-left text-gray-700">
                        <p className="p-2 bg-white rounded-lg">¡Suena genial! El domingo podríamos tomar un café o hacer algo divertido. Ya te avisaré. ¡Disfruta tu cena!</p>
                    </div>
                </div>

                <div className="bg-blue-500 p-4 rounded-lg m-4 max-w-xs mx-auto translate-x-[100px]">
                    <div className="text-left text-white">
                        <p className="p-2 bg-blue-700 rounded-lg">Gracias, ¡espero que tengas un buen día de excursión el sábado! Avísame cuando quieras quedar el domingo.</p>
                    </div>
                </div>

                <div className='w-full sticky h-14 bg-gray-200 bottom-0'>
                    <div className="max-w-md mx-auto p-2 gap-2 flex">
                        <div className="relative w-full text-gray-600">
                            <input className="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none focus:border-blue-500" type="text" placeholder="Escribe algo..." />
                        </div>
                        <button type='submit'>
                        <div className='w-[40px] h-[40px] bg-green-500 rounded-[25px] text-white flex justify-center items-center text-2xl'>
                        <i className="fa-solid fa-chevron-right"></i>
                        </div>
                        </button>
                    </div>

                </div>

            </div>
        </>
    )
}

export default ChatMenssage
