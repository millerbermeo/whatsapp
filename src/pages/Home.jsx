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
                <Navbar/>
                <main className="flex-1 w-full  pl-[300px] p-16 pb-0">
                   <div className='w-full flex h-[80vh] border mt-5'>
                        <ChatSidebar/>
                        <ChatMenssage/>
                   </div>

                </main>
            </div>
        </>
    )
}

export default Home
