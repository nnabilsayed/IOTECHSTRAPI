import type { Schema, Struct } from '@strapi/strapi';

export interface ServiceComponentsArServiceItems
  extends Struct.ComponentSchema {
  collectionName: 'components_service_components_ar_service_items';
  info: {
    displayName: 'ar_serviceItems';
  };
  attributes: {
    ar_item: Schema.Attribute.String;
  };
}

export interface ServiceComponentsServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_service_components_service_items';
  info: {
    displayName: 'ServiceItem';
  };
  attributes: {
    item: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'service-components.ar-service-items': ServiceComponentsArServiceItems;
      'service-components.service-item': ServiceComponentsServiceItem;
    }
  }
}
