/* eslint-disable react/prop-types */
export default function Button({ children, className, py,  ...props }) {
  return (
    <>
    <button
      className={`flex items-center px-2 ${py} text-xl bg-Visua-Blue rounded-full transition duration-200 hover:bg-Visua-Blue-houver ${className}`}
      {...props}
    >
      {children}
    </button>
    </>
  )
}
