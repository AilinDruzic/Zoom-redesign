export default function Card({ icon, title }) {

  return(
    <div className="flex flex-col items-center p-6 border border-zoom-blue rounded-xl">
     {icon}
     <div>{title}</div>
    </div>
  );
}