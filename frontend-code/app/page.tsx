// import { GlobeDemo } from './ggs';
// import { BentoGridDemo } from './grid';
import { MacbookScrollDemo } from './mac';
import { HeroScrollDemo } from './hero';
import { StickyScroll } from './sticksc';
import { BackgroundBeamsDemo } from './footer';
import {NavbarDemo} from'./nav'
import {MenuItem} from './components/ui/navbar-menu'
import Footer from './components/Footer';
export default function Home() {
  // Define some content for the StickyScroll component
  const content = [
    { id: 1, title: "Blockchain Transparency", description: " Utilize the transparent nature of blockchain technology to trace the ownership history of NFT tickets.", content: "Every transfer and transaction involving the NFT ticket is recorded on the blockchain, allowing organizers to trace the ticket's ownership back to its original issuer." },
    { id: 2, title: "Ticket Sale Restrictions", description: "Remove the practice of ticket reselling in black", content: "Utilize smart contracts to enforce restrictions on ticket resale. Smart contracts can include rules specifying that tickets cant be transferred or resold, thereby discouraging black market selling." },
    { id: 3, title: "On Demand Pricing", description: "Fair Pricing According to the market", content: "This can help discourage scalping by ensuring that tickets are initially priced at levels that reflect their true market value, reducing the incentive for reselling at inflated prices." },
    { id: 4, title: "", description: "", content: "" }

  ];

  return (
    <main>
      <NavbarDemo></NavbarDemo>
      <HeroScrollDemo />
      {/* Pass the content array as a prop to the StickyScroll component */}
      <StickyScroll content={content} />
      <BackgroundBeamsDemo />
      <Footer/>
    </main>
  );
}
