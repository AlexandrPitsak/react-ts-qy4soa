type BirdClassification = {
  kingdom: string;
  phylum: string;
  class: string;
  order: string;
  family: string;
  genus: string;
  species: string;
}

type BirdInfo = BirdClassification & {
  birdName: string;
  birdImage: string;
  appearance: string;
  habitat: string;
  migration: string;
  feeding: string;
  breeding: string;
  conservationStatus: string;
}


export const birds: BirdInfo[] = [
  {
    birdName: 'Bar-headed goose',
    birdImage: 'string',
    appearance: 'Bar-headed geese are medium-sized birds with a length of about 70-75 cm (27-30 inches) and a wingspan of around 140-160 cm (55-63 inches). They have a pale greyish-white plumage with black bars on their head and neck. Their beaks and legs are pinkish-orange in color.',
    habitat: 'They are native to Central Asia and are found in various habitats such as high-altitude lakes, marshes, and grasslands. During the breeding season, they nest on high mountain plateaus and migrate to lower elevations during winter.',
    migration: 'Bar-headed geese are renowned for their extraordinary migrations. They undertake one of the highest-altitude migrations among birds, flying over the Himalayas during their journey. They have been recorded flying at altitudes of up to 8,000 meters (26,000 feet) while crossing mountain ranges.',
    feeding: 'These geese are primarily herbivorous, feeding on grasses, sedges, aquatic plants, and grains. They graze in wetlands and agricultural fields, often in large flocks.',
    breeding: 'Bar-headed geese form monogamous pairs during the breeding season. They build their nests on the ground using grass and plant materials. The female typically lays 4-7 eggs, and both parents participate in incubating the eggs and raising the goslings.',
    conservationStatus: 'The Bar-headed goose is categorized as a species of "Least Concern" on the IUCN Red List, which means it is not currently considered at significant risk of extinction. However, local populations may face threats such as habitat loss, hunting, and disturbance.',
    kingdom: 'Animalia',
    phylum: 'Chordata',
    class: 'Aves',
    order: 'Anseriformes',
    family: 'Anatidae',
    genus: 'Anser',
    species: 'Anser indicus',
  }
  // more bird species...
]