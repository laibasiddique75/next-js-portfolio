
// 'use client';
// import * as React from "react"

// import { cn } from "@/lib/utils"

// const Textarea = React.forwardRef(({ className, ...props }, ref) => {
//   return (
//     (<textarea
//       className={cn(
//         "flex min-h-[180px] w-full rounded-[30px] border border-input bg-background px-8 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
//         className
//       )}
//       ref={ref}
//       {...props} />)
//   );
// })
// Textarea.displayName = "Textarea"

// export { Textarea }


'use client';
import * as React from "react";
import { cn } from "@/lib/utils";

// Forwarding ref to the textarea element
const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-[180px] w-full rounded-[30px] border border-input bg-background px-8 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props} // Spread the rest of the props like `defaultValue`, `value`, `onChange`, etc.
    />
  );
});

// Adding display name for debugging (useful in DevTools)
Textarea.displayName = "Textarea";

export { Textarea };
