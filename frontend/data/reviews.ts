export interface Review {
  text: string;
  name: string;
  detail: string;
  rating: number;
}

const reviews: Review[] = [
  {
    text: "Hyperion took our vague idea and turned it into a site our customers actually compliment us on. Fast, sharp, and easy to work with.",
    name: "Amara Osei",
    detail: "Founder, Bloom & Co.",
    rating: 5,
  },
  {
    text: "The rebrand finally matches the quality of our product. Strategy was clear, design was bold, and delivery was on time.",
    name: "Daniel Reyes",
    detail: "CEO, Northbeam",
    rating: 5,
  },
  {
    text: "Our old site took nine seconds to load. The new one feels instant, and conversions went up within the first month.",
    name: "Priya Nair",
    detail: "Marketing Lead, Fernway",
    rating: 5,
  },
  {
    text: "Small team, big signal is right. Direct communication, no agency runaround, and a web app our team loves maintaining.",
    name: "Tomas Lindqvist",
    detail: "CTO, Fieldnote",
    rating: 4,
  },
  {
    text: "They pushed back on our ideas in the best way. The identity work gave us a voice we didn't know we had.",
    name: "Sarah Kim",
    detail: "Founder, Paper Crane",
    rating: 5,
  },
  {
    text: "From kickoff to launch in six weeks. The site paid for itself in new inbound leads before the quarter ended.",
    name: "Marcus Bell",
    detail: "Director, Copperline",
    rating: 5,
  },
  {
    text: "Thoughtful, precise, and genuinely invested in the outcome. Our redesign feels like us, only sharper.",
    name: "Lena Haddad",
    detail: "CMO, Olive & Oak",
    rating: 4,
  },
  {
    text: "Best vendor experience we've had. Clear pricing, honest timelines, and a final product we're proud to show off.",
    name: "Jonas Weber",
    detail: "Founder, Klarheit",
    rating: 5,
  },
];

export default reviews;
