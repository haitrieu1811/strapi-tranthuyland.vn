import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsHero extends Struct.ComponentSchema {
  collectionName: 'components_components_heroes';
  info: {
    displayName: 'Hero';
    icon: 'landscape';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    slogans: Schema.Attribute.Component<'components.slogan', true>;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    slug: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface ComponentsLogo extends Struct.ComponentSchema {
  collectionName: 'components_components_logos';
  info: {
    displayName: 'Logo';
    icon: 'house';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    url: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface ComponentsPhoneNumber extends Struct.ComponentSchema {
  collectionName: 'components_components_phone_numbers';
  info: {
    displayName: 'phoneNumber';
    icon: 'phone';
  };
  attributes: {
    phoneNumber: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<['hotline', 'mobile']> &
      Schema.Attribute.Required;
  };
}

export interface ComponentsService extends Struct.ComponentSchema {
  collectionName: 'components_components_services';
  info: {
    displayName: 'Service';
    icon: 'apps';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    slug: Schema.Attribute.String;
  };
}

export interface ComponentsSlogan extends Struct.ComponentSchema {
  collectionName: 'components_components_slogans';
  info: {
    displayName: 'Slogan';
    icon: 'crown';
  };
  attributes: {
    highlightText: Schema.Attribute.String;
    normalText: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsSocial extends Struct.ComponentSchema {
  collectionName: 'components_components_socials';
  info: {
    displayName: 'Social';
    icon: 'globe';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsStickyBanner extends Struct.ComponentSchema {
  collectionName: 'components_components_sticky_banners';
  info: {
    displayName: 'Sticky Banner';
    icon: 'arrowUp';
  };
  attributes: {
    actionName: Schema.Attribute.String & Schema.Attribute.Required;
    actionUrl: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomePageService extends Struct.ComponentSchema {
  collectionName: 'components_home_page_services';
  info: {
    displayName: 'Service';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    services: Schema.Attribute.Component<'components.service', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.hero': ComponentsHero;
      'components.link': ComponentsLink;
      'components.logo': ComponentsLogo;
      'components.phone-number': ComponentsPhoneNumber;
      'components.service': ComponentsService;
      'components.slogan': ComponentsSlogan;
      'components.social': ComponentsSocial;
      'components.sticky-banner': ComponentsStickyBanner;
      'home-page.service': HomePageService;
    }
  }
}
