import Accordion from "../common/Accordion";

const questionCollections = [
  {
    sectionTitle: "About Our Honey",
    questions: [
      {
        title: "What makes your honey special?",
        answer:
          "Our honey is locally sourced from our own hives right here in [Your Local Area/Region]. We practice sustainable beekeeping, ensuring our bees are healthy and happy, which results in pure, high-quality honey with unique floral notes from the local flora.",
      },
      {
        title: "Is your honey raw and unfiltered?",
        answer:
          "Absolutely! Our honey is 100% raw and unfiltered, meaning it's never been heated above natural hive temperatures (around 95°F or 35°C) and retains all its natural enzymes, pollens, and beneficial properties. We simply strain out large bits of wax, leaving the good stuff in!",
      },
      {
        title: "Why does honey crystallize, and what should I do about it?",
        answer:
          "Crystallization is a natural process for raw honey and indicates its purity! It happens when glucose separates from water. To re-liquefy, gently warm the jar in a bowl of warm water (not boiling!) or a warm oven (below 100°F or 38°C) until it returns to its liquid state.",
      },
      {
        title: "What's the best way to store honey?",
        answer:
          "Store honey at room temperature in a tightly sealed container, away from direct sunlight. There's no need to refrigerate it, as colder temperatures can actually speed up crystallization.",
      },
    ],
  },
  {
    sectionTitle: "Our Bees & Beekeeping Practices",
    questions: [
      {
        title: "Are your bees happy and healthy?",
        answer:
          "Yes, bee health is our top priority! We employ sustainable and ethical beekeeping practices, ensuring our colonies have plenty of forage, are treated gently, and are only harvested when there's a surplus. We avoid harsh chemicals and focus on natural pest management.",
      },
      {
        title: "What kind of bees do you keep?",
        answer:
          "We primarily keep [e.g., Italian honey bees, Carniolan honey bees, or a mix of local strains], known for their gentle nature and productivity in our climate.",
      },
      {
        title: "Do you use pesticides or chemicals near your hives?",
        answer:
          "No, we strictly avoid the use of synthetic pesticides, herbicides, or harmful chemicals near our hives or in our beekeeping practices. Our goal is to maintain a natural and healthy environment for our bees.",
      },
    ],
  },
  {
    sectionTitle: "Local Services & Offerings",
    questions: [
      {
        title: "Do you offer local honey pickup or delivery?",
        answer:
          "Yes, we offer local pickup from our apiary/home base by appointment. We also offer limited local delivery within [e.g., a 10-mile radius of Your City] for orders over a certain amount. Please contact us for details!",
      },
      {
        title: "Can I buy beeswax or other bee products from you?",
        answer:
          "Beyond honey, we sometimes have limited quantities of pure beeswax blocks, beeswax candles, or propolis tinctures available. These are often seasonal offerings, so please inquire directly for current availability.",
      },
      {
        title: "Do you offer swarm removal services?",
        answer:
          "Yes, we offer **humane honey bee swarm removal** services in the [Your Local Area/County] area. If you spot a swarm, please DO NOT disturb it and contact us immediately at [Your Phone Number] or [Your Email]. We're happy to safely relocate them!",
      },
      {
        title: "Do you sell bees or offer beekeeping mentorship?",
        answer:
          "Occasionally, we have nucs (nucleus colonies) or established hives for sale to new beekeepers. We also sometimes offer beginner beekeeping mentorship or workshops. Please reach out if you're interested, as availability is limited.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <div>
      <div className="default-margin py-16 flex gap-6 flex-col lg:flex-row">
        <div className="mb-4 lg:mb-8 text-center md:text-left lg:w-1/2 shrink-0 h-fit lg:sticky top-32">
          <h2 className="text-3xl md:text-5xl font-semibold text-primary-500">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 md:mt-6 md:text-lg text-grayscale-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            odit dolor ratione dolore animi. Assumenda culpa natus nisi tempora
            ut?
          </p>
        </div>
        <div className="w-full flex flex-col gap-4">
          {questionCollections.map((collection) => (
            <>
              <h4 className="text-3xl text-grayscale-600 not-first:mt-6">
                {collection.sectionTitle}
              </h4>
              {collection.questions.map((question) => (
                <Accordion title={question.title} key={question.title}>
                  <p>{question.answer}</p>
                </Accordion>
              ))}
            </>
          ))}
        </div>

        <div></div>
      </div>
    </div>
  );
}
