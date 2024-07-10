import Image from "next/image";

export default function Home() {
  return (
          <div className="flex font-sans h-screen bg-background text-foreground">
            <main className="flex bg-offBlack text-lightGray p-6 h-full w-full">
            <aside className="w-64 bg-card p-4  flex flex-col justify-between">
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
            
            
              <div className=" flex bg-card  h-full center w-full rounded-lg">
                <div className="space-y-4 p-6 right-shadow h-[100%] w-[80%]">
                <h1 className="text-2xl font-bold mb-2">Unlock the power of AI</h1>
                <p className="text-muted-foreground mb-6">Chat with the smartest AI - Experience the power of AI with us</p>

                  <div className="flex items-center justify-between p-4 bg-muted rounded-md hover:bg-muted/80 cursor-pointer">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-purple-200 rounded-full"></div>
                      <span>Photo editing</span>
                    </div>
                    <span>&rarr;</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted rounded-md hover:bg-muted/80 cursor-pointer">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-orange-200 rounded-full"></div>
                      <span>Video generation</span>
                    </div>
                    <span>&rarr;</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted rounded-md hover:bg-muted/80 cursor-pointer">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-blue-200 rounded-full"></div>
                      <span>Education feedback</span>
                    </div>
                    <span>&rarr;</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted rounded-md hover:bg-muted/80 cursor-pointer">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-green-200 rounded-full"></div>
                      <span>Code generation</span>
                    </div>
                    <span>&rarr;</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted rounded-md hover:bg-muted/80 cursor-pointer">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-yellow-200 rounded-full"></div>
                      <span>Audio generation</span>
                    </div>
                    <span>&rarr;</span>
                  </div>
                </div>
                
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
              </div>
            </main>
          </div>
  );
}
