import React from "react";
import Accordion, {
  AccordionItem,
  AccordionTitle,
  AccordionContent,
} from "../Accordion";

const AccordionWrap = () => {
  return (
    <div className="agency-accordion max-mb-n30">
      <Accordion>
        <AccordionItem id="one">
          <AccordionTitle id="one">
            What are the benefits of working with a recruitment firm?
          </AccordionTitle>
          <AccordionContent id="one">
            Working with a recruitment firm can save a company time and
            resources in the hiring process. Recruitment firms also have access
            to a wider pool of candidates and specialized knowledge in the
            industry, which can help identify the best fit for a company.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem id="two">
          <AccordionTitle id="two">
            How do you determine candidate qualifications?
          </AccordionTitle>
          <AccordionContent id="two">
            We determine candidate qualifications by reviewing resumes and cover
            letters, conducting initial phone screens, and administering skill
            assessments and background checks.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem id="three">
          <AccordionTitle id="three">
            How do you ensure a good match between the candidate and the
            company?
          </AccordionTitle>
          <AccordionContent id="three">
            We ensure a good match by getting to know our clients and
            understanding their specific needs, culture, and values. We also
            conduct in-depth interviews with candidates to assess their skills,
            experience, and compatibility with the company.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AccordionWrap;
