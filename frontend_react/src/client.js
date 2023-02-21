// Here we are connecting our Sanity Client with our React App.

import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

//run sanity manage on the backend to get this info
export const client = sanityClient({
    projectId: process.env.REACT_APP__SANITY_PROJECT_ID, 
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: process.env.REACT_APP__SANITY_TOKEN,
});

const builder =  imageUrlBuilder(client);

export const urlFor = (source ) => builder.image(source);