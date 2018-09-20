
export const intentName = 'books.list.all'

export const handler = (lineClient, lineMessageFormatter, {}) => async (agent) => {
  console.log(intentName)
  const {
    requestSource,
    locale,
    action,
    session,
    parameters,
    userId,
    languageCode,
    queryText,
  } = agent

  const books = [
    {
      id: 1,
      title: 'Star in the Jar',
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/61KWl-hdhSL.jpg',
      link: 'https://www.amazon.com/gp/product/1492662208/',
      description: 'When a little boy stumbles across a lost star, he decides to take care of it, putting it in a jar and carrying it with him everywhere. But when the sky calls out for its missing star, can the little boy and his sister figure out a way to return the star to its friends in the sky...even if it means saying goodbye forever?',
      unitPrice: 12.5,
      unitPriceCurrency: 'USD',
    },
    {
      id: 2,
      title: 'How to Be a Good Creature: A Memoir in Thirteen Animals',
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51Wm75LdUIL.jpg',
      link: 'https://www.amazon.com/gp/product/0544938321',
      description: 'Understanding someone who belongs to another species can be transformative. No one knows this better than author, naturalist, and adventurer Sy Montgomery. To research her books, Sy has traveled the world and encountered some of the planet’s rarest and most beautiful animals. From tarantulas to tigers, Sy’s life continually intersects with and is informed by the creatures she meets.',
      unitPrice: 9.99,
      unitPriceCurrency: 'USD',
    },
    {
      id: 3,
      title: 'Sleepy, the Goodnight Buddy',
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/71CVpV1Vh6L.jpg',
      link: 'https://www.amazon.com/gp/product/1484789695',
      description: 'Roderick hates going to bed, and the young boy has become quite resourceful in coming up with ways to delay the dreaded hour when the lights must go out. Roderick\'s loving parents--fed up with the distractions and demands that have become his anti-bedtime ritual--decide to get him a stuffed animal to cuddle with and help him wind down. However, Sleepy quickly proves to be a bit high-maintenance. Just when we fear the night may never end, Sleepy\'s antics become too exhausting for Roderick to bear.',
      unitPrice: 0,
      unitPriceCurrency: 'USD',
    }
  ]

  try {
    const message = lineMessageFormatter.listAllBooks(books)
    lineClient.pushMessage(userId, message)
  } catch(err){
    console.log(err)
  }


  // agent.add(intentName)
}