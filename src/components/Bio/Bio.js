import React from "react";
import {
  AvatarSection,
  BioWrapper,
  Detail,
  Image,
  ImageWrapper,
  SwipeButton,
} from "./Bio.styles";
import {
  HeaderPrimary,
  HeaderSecondary,
  Paragraph,
} from "../../styles/GlobalStyles";

import avatar from "../../images/B612_20171223_203832.jpg";

export default function Bio() {
  return (
    <BioWrapper>
      <Detail>
        <HeaderPrimary>Hi, I'm Hamid</HeaderPrimary>
        <HeaderSecondary>Backend Developer</HeaderSecondary>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          id, nisi repudiandae, blanditiis ad mollitia explicabo eius earum
          doloribus recusandae nemo. Tempore itaque temporibus tempora voluptate
          porro asperiores ipsum officiis quod saepe similique magni numquam
        </Paragraph>
        <SwipeButton> &larr; Swipe </SwipeButton>
      </Detail>
      <AvatarSection>
        <ImageWrapper>
          <Image src={avatar} alt="avatar" />
        </ImageWrapper>
      </AvatarSection>
    </BioWrapper>
  );
}
