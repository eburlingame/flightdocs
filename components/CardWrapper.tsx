import Link from "next/link";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Card from "./Card";
import Layout from "./Layout";

const AdditionalInfoContainer = styled.div`
  width: 100%;
`;

const TopicContainer = styled.div`
  width: 100%;
  margin-bottom: 0.5em;
`;

export type Reference = {
  name: string;
  link: string;
};

export type CardWrapperProps = {
  children: ReactNode;
  references?: Reference[];
};

const parseTopicSlug = (path: string) => {
  const parts = path.split("/");
  if (parts[1] === "topics") {
    return parts[2];
  }
  return null;
};

const ReferenceList = ({ references }: { references: Reference[] }) => {
  return (
    <div style={{ marginTop: "0.5em" }}>
      <h2>References</h2>

      <ul>
        {references.map(({ name, link }) => (
          <li>
            <a href={link} key={name} target="_new">
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CardWrapper = ({ children, references }: CardWrapperProps) => {
  const { pathname } = useRouter();
  const topicSlug = parseTopicSlug(pathname);

  return (
    <Layout>
      {topicSlug && (
        <TopicContainer>
          <Link href={`/topics/${topicSlug}`}>{`Back to ${topicSlug}`}</Link>
        </TopicContainer>
      )}

      <Card>{children}</Card>

      <AdditionalInfoContainer>
        {references && <ReferenceList references={references} />}
      </AdditionalInfoContainer>
    </Layout>
  );
};

export default CardWrapper;
