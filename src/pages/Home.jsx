import React from 'react'
import Sidebar from '../components/Sidebar'
import ChatSidebar from '../components/ChatSidebar'
import Navbar from '../components/Navbar'
import ChatMenssage from '../components/ChatMenssage'

function Home() {
    return (
        <>
            <div className="flex">
                <Sidebar />
     
                <main className="flex-1 w-full  pl-[300px] p-16 pt-4 pr-10 pb-0">
                    <Navbar/>
                   <div className='w-full flex overflow-hidden rounded-lg mt-5 border'>
                        <ChatSidebar/>
                        <ChatMenssage/>
                   </div>

                </main>
            </div>
        </>
    )
}

export default Home
