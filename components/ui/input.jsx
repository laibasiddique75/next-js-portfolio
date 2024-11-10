
// 'use client'
// import * as React from "react"

// import { cn } from "@/lib/utils"

// const Input = React.forwardRef(({ className, type, ...props }, ref) => {
//   return (
//     (<input
//       type={type}
//       className={cn(
//         "flex h-[54px] w-full rounded-full border border-input bg-background px-8 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
//         className
//       )}
//       ref={ref}
//       {...props} />)
//   );
// })
// Input.displayName = "Input"

// export { Input }




'use client';
import * as React from "react";
import { cn } from "@/lib/utils";

// Forwarding ref to the input element
const Input = React.forwardRef(({ className, type = "text", ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type} // default type to "text" if not provided
      className={cn(
        "flex h-[54px] w-full rounded-full border border-input bg-background px-8 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props} // Spread the rest of the props like `value`, `onChange`, etc.
    />
  );
});

// Adding display name for debugging purposes
Input.displayName = "Input";

export { Input };
