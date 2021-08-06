import contentIndex from ".";

export const findTopic = (topicName: string | string[] | undefined) => {
  const topic = contentIndex.topics.find(({ slug }) => slug === topicName);

  if (!topic) {
    throw new Error(`Topic ${topicName} not found!`);
  }

  return topic;
};

export const findCard = (
  topicName: string | string[] | undefined,
  cardNumber: string | string[] | undefined
) => {
  const topic = findTopic(topicName);

  if (typeof cardNumber !== "string") {
    throw new Error("Invalid card number!");
  }

  const cardIndex = parseInt(cardNumber) - 1;
  const card = topic.cards[cardIndex];

  if (!card) {
    throw new Error("Card not found!");
  }

  return card;
};
