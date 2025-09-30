import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {};
}

export interface SectionsItemSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_item_sections';
  info: {
    displayName: 'item-section';
  };
  attributes: {};
}

export interface SectionsSection1 extends Struct.ComponentSchema {
  collectionName: 'components_sections_section1s';
  info: {
    displayName: 'section1';
  };
  attributes: {};
}

export interface SectionsSection2 extends Struct.ComponentSchema {
  collectionName: 'components_sections_section2s';
  info: {
    displayName: 'section2';
  };
  attributes: {};
}

export interface SectionsTextCenter extends Struct.ComponentSchema {
  collectionName: 'components_sections_text_centers';
  info: {
    displayName: 'text-center';
  };
  attributes: {};
}

export interface SectionsTextLeft extends Struct.ComponentSchema {
  collectionName: 'components_sections_text_lefts';
  info: {
    displayName: 'text-left';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.hero': SectionsHero;
      'sections.item-section': SectionsItemSection;
      'sections.section1': SectionsSection1;
      'sections.section2': SectionsSection2;
      'sections.text-center': SectionsTextCenter;
      'sections.text-left': SectionsTextLeft;
    }
  }
}
