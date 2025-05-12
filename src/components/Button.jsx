import React from "react";

const Button = React.forwardRef(
  (
    {
      variant = "default",
      size = "default",
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    
    const variantClasses = {
      default: "bg-gradient-to-r from-purple-700 to-indigo-600 text-white hover:from-purple-800 hover:to-indigo-700 shadow hover:shadow-md",
      outline: "border border-purple-600 text-purple-600 bg-white hover:bg-purple-50 shadow-sm",
      ghost: "text-gray-700 hover:bg-gray-100",
      link: "text-purple-600 hover:underline underline-offset-4",
    };

    const sizeClasses = {
      default: "h-10 py-2 px-4 text-sm",
      sm: "h-9 px-3 text-xs",
      lg: "h-11 px-8 text-base",
      xl: "h-14 px-8 py-4 text-lg",
      icon: "h-10 w-10",
    };

    return (
      <button
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };