import imageFragment from './image';
import seoFragment from './seo';

const productFragment = /* GraphQL */ `
  fragment product on Product {
    id
    handle
    availableForSale
    title
    description
    descriptionHtml
    volume: metafield(namespace: "custom", key: "volume") {
      value
    }
    benefits: metafield(namespace: "custom", key: "benefits") {
      value
    }
    ingredients: metafield(namespace: "custom", key: "ingredients") {
      value
    }
    aroma: metafield(namespace: "custom", key: "aroma") {
      value
    }
    certificates: metafield(namespace: "custom", key: "certificates") {
      value
    }
    presentation: metafield(namespace: "custom", key: "presentation") {
      value
    }
    options {
      id
      name
      values
    }
    priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    variants(first: 250) {
      edges {
        node {
          id
          title
          availableForSale
          selectedOptions {
            name
            value
          }
          price {
            amount
            currencyCode
          }
        }
      }
    }
    featuredImage {
      ...image
    }
    images(first: 20) {
      edges {
        node {
          ...image
        }
      }
    }
    seo {
      ...seo
    }
    tags
    updatedAt
  }
  ${imageFragment}
  ${seoFragment}
`;

export default productFragment;
