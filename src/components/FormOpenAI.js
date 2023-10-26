import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useState } from "react";

const FormOpenAI = ({ setContent }) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    question: "",
    access_key: "42f6858a-0a84-48bd-b5df-e16ae56daf55",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setContent('...')
    const data = formData;
    const body = {
      prompt: data.question,
      sections: 1,
      paragraphsPerSection: 1,
      language: 'en',
      rewrite: true
    }

    fetch("https://ai-written-articles-multi-lingual-long-and-short-smodin-author.p.rapidapi.com/article", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'X-RapidAPI-Key': '7356d9bd93msh969110072a9a604p1da017jsn520a68a65c2f',
        'X-RapidAPI-Host': 'ai-written-articles-multi-lingual-long-and-short-smodin-author.p.rapidapi.com',
      },
      body: JSON.stringify(body)
    })
      .then((res) => res.json())
      .then((json) => {
        setContent(json.sections[0].paragraphs[0].text)
        setLoading(false);
        setFormData({
          ...formData,
          question: "",
        });
      })
      .catch(() => {
        setContent('Ohh O!! ... Your monthly target for API call has hit. Please subscribe for unlimited access, otherwise wait for a week(Happy AI).' );
        setLoading(false);
      });
  };

  return (
    <motion.form
      action=""
      ref={ref}
      className="contactForm"
      initial={{ x: "-10vw", opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      onSubmit={handleSubmit}
    >
      <h4 className="contentTitle">Ask Me</h4>
      <div className="col-12 formGroup">
        <input
          type="text"
          className="formControl"
          onChange={handleChange}
          value={formData.question}
          id="questionAsked"
          name="question"
          placeholder="Question"
          required
        />
      </div>
      <div className="col-12 formGroup formSubmit">
        <button className="btn">{loading ? "Thinking " : "Ask Me "}
          {loading && (<i class="fa fa-refresh fa-spin"></i>)}
        </button>
      </div>
    </motion.form>
  );
};

export default FormOpenAI;
