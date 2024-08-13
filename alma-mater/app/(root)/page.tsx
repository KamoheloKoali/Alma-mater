export default function Home() {
  return (

    <div className=" flex bg-card bg-gray-100  h-full center w-full rounded-tl-3xl border-t border-l mt-[0]">
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


    </div>
  );
}
