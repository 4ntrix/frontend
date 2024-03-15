// import { GlobeDemo } from './ggs';
// import { BentoGridDemo } from './grid';
import { MacbookScrollDemo } from './mac';
import { StickyScroll } from './sticksc';
import { BackgroundBeamsDemo } from './footer';

export default function Home() {
  // Define some content for the StickyScroll component
  const content = [
    { id: 1, title: "Card 1", description: "Description for card 1", content: "Content for card 1" },
    { id: 2, title: "Card 2", description: "Description for card 2", content: "Content for card 2" },
    { id: 3, title: "Card 3", description: "Description for card 3", content: "Content for card 3" },
    { id: 4, title: "Card 3", description: "Description for card 4", content: "Content for card 4" }

  ];

  return (
    <main>
      <MacbookScrollDemo />
      {/* Pass the content array as a prop to the StickyScroll component */}
      <StickyScroll content={content} />
      <BackgroundBeamsDemo />
    </main>
  );
}
