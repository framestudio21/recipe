import dynamic from "next/dynamic";


export default dynamic(() => Promise.resolve(Copyrightpolicy), { ssr: false });
function Copyrightpolicy() {
  return (
    <div>copyrightpolicy</div>
  )
}