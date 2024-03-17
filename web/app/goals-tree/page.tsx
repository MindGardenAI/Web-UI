import Image from "next/image";
import "./css.css";
import TreeLeaf from "../components/TreeLeaf/TreeLeaf";
export default function goalsTree() {
  return (
    <div className="container mx-auto px-4">
  <div className="text-center">
    <h1 className="big">Goals</h1>
  </div>
  <div className="flex  absolute inset-x-0 bottom-0 justify-center">
    <div className="flex flex-col">
    <div className="mb-6">
    <TreeLeaf title="Test" content="This is ndodwduwhduiediehduiohoduihduwehudiewhudiewh"/>
    </div>
    <div className="flex justify-center">
    <Image
      src="/images/potplant.png"
      width={200}
      height={200}
      alt="plant"
      className="flex justify-self-center"
    />
    </div>
    
    </div>
    
  </div>
</div>

  );
}
