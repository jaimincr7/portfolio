import PageHeader from "../../components/PageHeader";
import SocialIcons from "../../components/SocialIcons";
import FormOpenAI from "../../components/FormOpenAI";
import { useState } from "react";
import OpenInfo from "../../components/OpenInfo";

const OpenAI = () => {
  const [content, setContent] = useState('...');

  return (
    <section className="contact">
      <PageHeader title="Closed AI" description="I am quite intelligent, ask me Anything!" />
      <div className="contactWrap container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <FormOpenAI setContent={setContent}/>
          </div>
          <div className="col-12 col-lg-6">
            <OpenInfo content={content} />
          </div>
        </div>
      </div>
      <SocialIcons />
    </section>
  );
};

export default OpenAI;
