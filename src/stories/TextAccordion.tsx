import { Accordion } from "@mantine/core";

interface Child {
  name?: string;
  description?: string;
}

interface TextAccordionProps {
  children: React.ReactNode;
  childs?: Child[];
}

export default function TextAccordion({ children, childs = [] }: TextAccordionProps) {
  if (childs?.length < 1) return <>{children}</>;
  return (
    <Accordion
      defaultValue="text"
      classNames={{
        label: "text-black font-normal",
        chevron: "fill-darkGrey visible",
      }}
    >
      <Accordion.Item className="border-0 p-0" value="text">
        <Accordion.Control className="p-0 hover:bg-white">
          {children}
        </Accordion.Control>
        <Accordion.Panel className="border-l">
          {childs?.map((v, i) => (
            <p key={i}>
              <span className="text-primary3">{v?.name}</span> &bull;{" "}
              {v?.description}
            </p>
          ))}
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
