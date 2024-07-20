import React from 'react'

function RightSidebar() {
  return (
        <aside className=" h-full bg-card p-4">
                  <div className="flex items-center justify-between mb-4">
                    <span>Chat history</span>
                    <span className="text-muted-foreground">26/100</span>
                  </div>
                  <div className="space-y-4 overflow-y-auto h-full">
                    <div className="flex items-center space-x-2">
                      <img src="https://placehold.co/32x32" alt="User avatar" className="w-8 h-8 rounded-full" />
                      <div>
                        <span className="block font-bold">Brainwave AI UI Kit</span>
                        <span className="block text-sm text-muted-foreground">Write code (HTML, CSS and JS) for...</span>
                        <span className="block text-xs text-muted-foreground">Just now</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img src="https://placehold.co/32x32" alt="User avatar" className="w-8 h-8 rounded-full" />
                      <div>
                        <span className="block font-bold">Welcome page with input</span>
                        <span className="block text-sm text-muted-foreground">Write code (HTML, CSS and JS) for...</span>
                        <img src="https://placehold.co/64x64" alt="Sample image" className="mt-2 rounded-md" />
                        <span className="block text-xs text-muted-foreground">Just now</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img src="https://placehold.co/32x32" alt="User avatar" className="w-8 h-8 rounded-full" />
                      <div>
                        <span className="block font-bold">Photo retouch</span>
                        <span className="block text-sm text-muted-foreground">Write code (HTML, CSS and JS) for...</span>
                        <span className="block text-xs text-muted-foreground">Just now</span>
                      </div>
                    </div>
                  </div>
                </aside>
    
  )
}

export default RightSidebar
