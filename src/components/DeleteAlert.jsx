import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription, // Added this back
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { LuTriangleAlert } from "react-icons/lu";

export default function DeleteAlert({ trigger, onConfirm }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {/* This renders whatever button you pass from the parent */}
        {trigger}
      </AlertDialogTrigger>
      
      {/* Increased width to match Figma */}
      <AlertDialogContent className="px-8 py-5 bg-white rounded-xl shadow-lg">
        <AlertDialogHeader className="flex flex-col items-center gap-4">
          
          {/* Icon Circle - Light red background with red icon */}
          <div className="flex h-16 w-16 md:ml-48 items-center justify-center rounded-full bg-red text-[#FF5B5B]">
            <LuTriangleAlert size={45} />
          </div>
          
          <div className="text-center space-y-2 w-full">
             {/* Main Title "Alert" */}
             <AlertDialogTitle className="text-2xl font-medium text-gray-700">
               Alert
             </AlertDialogTitle>
             
             {/* Subtitle / Question */}
             <AlertDialogDescription className="text-lg text-gray-700 font-medium">
               Do you want to delete this employee?
             </AlertDialogDescription>

             {/* Note Section */}
             <div className="flex flex-col items-center space-y-1 mt-5">
                {/* Note Heading in Primary Teal Color */}
                <h3 className="text-primary text-lg">
                   Note:
                </h3>
                {/* Warning Paragraph */}
                <p className="text-secondary text-center text-sm leading-relaxed font-poppins">
                   The data of the employee will get deleted.<br/>
                   This action Cannot be undone
                </p>
             </div>
          </div>

        </AlertDialogHeader>

        <AlertDialogFooter className="sm:justify-center gap-4 mt-8 w-full flex-row">
          {/* Cancel Button - Primary Teal Background */}
          <AlertDialogCancel className="px-13 md:px-20 py-6 sm:w-auto cursor-pointer bg-primary text-white hover:bg-teal-800 hover:text-white">
            Cancel
          </AlertDialogCancel>
          
          {/* Delete Button - Light Pink Background, Red Text */}
          <AlertDialogAction 
            className="px-13 md:px-20 py-6 sm:w-auto text-red-500 bg-red hover:bg-red-600! hover:text-white cursor-pointer"
            onClick={onConfirm}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>

      </AlertDialogContent>
    </AlertDialog>
  );
}