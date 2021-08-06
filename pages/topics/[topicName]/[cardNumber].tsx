import { GetStaticPropsContext } from "next";
import Card from "../../../components/Card";
import contentIndex from "../../../content";
import { findCard, findTopic } from "../../../content/utils";

type CardProps = {
  topicName: string;
  cardNumber: string;
};

const CardLabels = ({ topicName, cardNumber }: CardProps) => {
  return (
    <span>
      {topicName} #{cardNumber}
    </span>
  );
};

const CardPage = ({ topicName, cardNumber }: CardProps) => {
  let topic;
  let CardComponent;

  try {
    topic = findTopic(topicName);
    CardComponent = findCard(topicName, cardNumber);
  } catch (e) {
    return <div>{e.message}</div>;
  }

  return (
    <Card>
      <CardLabels topicName={topic.name} cardNumber={cardNumber} />
      <CardComponent />
    </Card>
  );
};

export const getStaticProps = (context: GetStaticPropsContext) => {
  const { topicName, cardNumber } = context.params as CardProps;

  return {
    props: {
      topicName,
      cardNumber,
    },
  };
};

export const getStaticPaths = () => {
  return {
    paths: contentIndex.topics.flatMap((topic) =>
      topic.cards.flatMap((card, index) => ({
        params: {
          topicName: topic.slug,
          cardNumber: (index + 1).toString(),
        },
      }))
    ),
    fallback: true,
  };
};

export default CardPage;
