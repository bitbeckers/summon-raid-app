export type NFTMetaData = {
  description: string;
  external_url: string;
  image: string;
  name: string;
  attributes: { [key: string]: string | number };
};
