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
    { id: 2, title: "Ticket Sale Restrictions" , description:" Mitigate Unauthorized Ticket Resale", content: "Leverage smart contracts to enforce stringent restrictions on ticket resale. By incorporating rules that prohibit ticket transfers or resales, we can effectively discourage illicit black market practices." },
    { id: 3, title: "Resale Royalties", description: "Ticket creators recieve monitary benefits on resale", content: "By implementing resale royalties, organizers can maximize their revenue." },
    { id: 4, title: "Automatic Aadhar Authentication", description: "Anon Aadhaar generates a proof that the submitted Aadhaar card is valid without disclosing any personal details.", content: "This approach ensures privacy, prevents misuse, and supports applications such as voting, governance, and social identity verification." }
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
