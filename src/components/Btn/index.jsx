/* eslint-disable react/prop-types */
export default function Button({ children, className, py,  ...props }) {
  return (
    <>
    <button
      className={`flex items-center px-2 ${py} font-semibold text-white bg-Visua-Blue rounded-full transition duration-200 hover:bg-Visua-Blue-houver focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
    </>
  )
}
