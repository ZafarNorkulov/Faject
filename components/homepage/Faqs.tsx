import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Title from "../Title";
const arr = [
  {
    id: 1,
    title: "Как долго разрабатывается сайт с нуля?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: 2,
    title: "Как долго разрабатывается сайт с нуля?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: 3,
    title: "Как долго разрабатывается сайт с нуля?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
];
export default function Faqs() {
  return (
    <div data-aos="fade-down" className="container">
      <Title text="ОТВЕТЫ НА ВОПРОСЫ" center />
      <Accordion type="single" collapsible className="w-full">
        {arr.map((item) => (
          <AccordionItem
            key={item.id}
            className="border-b-2 border-primary px-4 text-[24px]  text-white max-md:text-left max-md:text-xl"
            value={`item-${item.id}`}
          >
            <AccordionTrigger className=" font-[400]">
              {item.title}
            </AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
