import React from 'react'

function LeftSidebar() {
  return (
      <aside className="w-64 bg-card p-4 flex flex-col justify-between bg-black">
              <div>
                <div className="flex items-center space-x-2 mb-8">
                  <img src="https://placehold.co/32x32" alt="Brainwave logo" className="w-8 h-8" />
                  <span className="text-xl font-bold">Brainwave</span>
                </div>
                <nav className="space-y-4">
                  <a href="#" className="flex items-center space-x-2 p-2 rounded-md bg-secondary text-secondary-foreground">
                    <span>Chats</span>
                  </a>
                  <a href="#" className="flex items-center space-x-2 p-2 rounded-md hover:bg-muted">
                    <span>Search</span>
                  </a>
                  <a href="#" className="flex items-center space-x-2 p-2 rounded-md hover:bg-muted">
                    <span>Manage subscription</span>
                  </a>
                  <a href="#" className="flex items-center space-x-2 p-2 rounded-md hover:bg-muted">
                    <span>Updates & FAQ</span>
                  </a>
                  <a href="#" className="flex items-center space-x-2 p-2 rounded-md hover:bg-muted">
                    <span>Settings</span>
                  </a>
                </nav>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <img src="https://placehold.co/32x32" alt="User avatar" className="w-8 h-8 rounded-full" />
                  <div>
                    <span className="block font-bold">Tran Mau Tri Tam</span>
                    <span className="block text-sm text-muted-foreground">tam@ui8.net</span>
                  </div>
                </div>
                <button className="w-full py-2 bg-primary text-primary-foreground rounded-md">Upgraded to Pro</button>
                {/* <div className="flex justify-between items-center">
                  <span>Light</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary rounded-full peer dark:bg-zinc-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-zinc-600 peer-checked:bg-primary"></div>
                  </label>
                  <span>Dark</span>
                </div> */}
              </div>
            </aside>
  )
}

export default LeftSidebar
