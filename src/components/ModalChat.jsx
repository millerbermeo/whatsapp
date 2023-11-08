import React, { useState } from 'react';

function ModalChat() {
    const [isOpen, setIsOpen] = useState(false);

    const [inputText, setInputText] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const handleTextChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const options = [
        { value: 'option1', label: 'Opción 1' },
        { value: 'option2', label: 'Opción 2' },
        { value: 'option3', label: 'Opción 3' },
    ];

    return (
        <>
            <div>
                <button onClick={toggleModal} className="text-white gap-5 bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm w-32 py-2.5 text-center flex justify-center items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2">
                    Nuevo Chat
                    <i className="fa-solid fa-comment-medical"></i>
                </button>


            </div>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-999 w-96 bg-red-600">
                    <div className="absolute inset-0 bg-black opacity-50" onClick={toggleModal}></div>

                    <div className="bg-white w-96 p-4 rounded shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Modal</h2>

                        <div className="mb-4">
                            <input
                                className="w-full p-2 border border-gray-300 rounded"
                                type="text"
                                placeholder="Ingresa texto"
                                value={inputText}
                                onChange={handleTextChange}
                            />
                        </div>

                        <div className="mb-4">
                            <select
                                className="w-full p-2 border border-gray-300 rounded"
                                value={selectedOption}
                                onChange={handleSelectChange}
                            >
                                <option value="" disabled>
                                    Selecciona una opción
                                </option>
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex justify-end">
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                onClick={toggleModal}
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ModalChat;
