import PageHeader from "../../components/PageHeader";
import SocialIcons from "../../components/SocialIcons";
import Form from "../../components/Form";

const OpenAI = () => {
  return (
    <section className="contact">
      <PageHeader title="OpenAI" description="I am quite intelligent, ask me Anything!" />
      <div className="contactWrap container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <Form />
          </div>
        </div>
      </div>
      <SocialIcons />
    </section>
  );
};

export default OpenAI;
