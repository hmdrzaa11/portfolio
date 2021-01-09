import React from "react";
import {
  PassionWrapper,
  PassionSection,
  LanguageSection,
  PassionItem,
  Language,
  LanguageWrapper,
  LanguageSubTitle,
  ProgressBarWrapper,
  ProgressBar,
  Progress,
} from "./Passion.styles";
import { HeaderTertiary } from "../../styles/GlobalStyles";

const passions = [
  {
    name: "Learning",
    icon: "fas fa-book-open",
  },
  {
    name: "Technology",
    icon: "fas fa-laptop",
  },
  {
    name: "Fitness",
    icon: "fas fa-dumbbell",
  },
];

export default function Passion() {
  let passion = passions.map((passion) => (
    <PassionItem key={passion.name}>
      <i className={passion.icon} /> {passion.name}
    </PassionItem>
  ));
  return (
    <PassionWrapper>
      <PassionSection>
        <HeaderTertiary>Passion</HeaderTertiary>
        {passion}
      </PassionSection>
      <LanguageSection>
        <HeaderTertiary>Language</HeaderTertiary>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <LanguageWrapper>
            <Language>English</Language>
            <LanguageSubTitle>Fluent</LanguageSubTitle>
          </LanguageWrapper>
          <ProgressBarWrapper>
            <ProgressBar>
              <Progress />
            </ProgressBar>
          </ProgressBarWrapper>
        </div>
      </LanguageSection>
    </PassionWrapper>
  );
}
