import Header from "../Header";

// eslint-disable-next-line react/prop-types
export default function Layout({children}) {
  return (
    <div className="h-full w-full">
      <Header/>
      {children}
    </div>
  );
}
