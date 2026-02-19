import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose, // Import DialogClose
} from "@/components/ui/dialog";

export default function BulkRegister({ trigger }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      
      {/* Hide X icon */}
      <DialogContent className="sm:max-w-137 p-8 bg-white rounded-xl [&>button]:hidden">
        <DialogHeader className="mb-6">
          <DialogTitle className="text-center text-2xl font-normal text-gray-700">
            Bulk Register
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="flex w-full items-center border border-gray-200 rounded-md overflow-hidden bg-white">
             <input 
                type="text" 
                placeholder="Bulk Register" 
                className="flex-1 px-4 py-3 text-gray-500 outline-none placeholder:text-gray-300"
             />
             <div className="bg-gray-200 text-gray-500 px-6 py-3 cursor-pointer hover:bg-gray-300 transition">
                Browser
             </div>
          </div>

          <div className="text-center">
            <p className="text-md text-gray-800">
              <span className="font-bold">Note:</span> Upload File Only In xlsx Formate.{" "}
              <a href="#" className="text-primary hover:underline font-medium">
                Download
              </a>{" "}
              From Here
            </p>
          </div>

          <div className="flex gap-4 mt-4">
            {/* Close on Cancel */}
            <DialogClose asChild>
              <Button 
                  className="flex-1 bg-[#F1F5F9] text-primary hover:bg-gray-200 py-6 font-normal cursor-pointer"
                  variant="ghost"
              >
                Cancel
              </Button>
            </DialogClose>
            
            <Button className="flex-1 bg-primary hover:bg-[#13607e] text-white py-6 font-normal cursor-pointer">
              Add
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}