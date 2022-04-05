import PaintingList from "./components/PaintingList";
import paintings from "./painting.json";
import Section from "./components/Section";

export default function App() {
  const isOnline = "";//переменная условия
  return (
    <div>
      {isOnline && "Online"} 
     {/* если  isOnline = true, то отренднрится строка "Online" */}
      {isOnline ? "Online" : "Offline"}
    {/* если  isOnline = true, то отренднрится строка "Online", если  isOnline = false, то отренднрится строка "Offline" */}
     <Section title="Top 7">
       <PaintingList items={paintings} />
       {/*PaintingList - clidren для Section*/}
     </Section>
     <Section />
    
    </div>
  );
}
