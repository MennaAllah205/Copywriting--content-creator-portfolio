import "../css/Projects.css";
import project1 from "../imgs/project1PNG.PNG";
import project2 from "../imgs/project2.PNG";
import project3 from "../imgs/project3.PNG";
import project4 from "../imgs/project4.PNG";
import project5 from "../imgs/project5.PNG";
import project7 from "../imgs/project7.PNG";
import project9 from "../imgs/project9.PNG";
import project10 from "../imgs/project10.PNG";
import project11 from "../imgs/project11.PNG";
import project12 from "../imgs/project12.PNG";

const projects = [
  {
    image: project1,
    description:
      "بودكاست عن جماعة الحشاشين السرية القصة ما بين الواقع و الخيال و حجر أساسها حسن الصباح قصة حياته و معتقداته و كيف بدأت جماعة الحشاشين و وصلت لكونها أخطر جماعات القرن الحادي عشر و كيف استخدمهم الملوك و السلاطين بعد اثبات قوتهم و الفرق بين الأسطورة و الحقيقة بالمختصر المفيد",
    link: "https://www.youtube.com/watch?v=BTSiVaHp9_o",
  },
  {
    image: project2,
    description:
      "استكمالا لحكايات الميثولوجيا الإغريقية نحكي في هذه الحلقة قصة أشهر كوكبة نجوم في السماء أورايون الصياد البارع الذي تعددت الروايات حول ميلاده و حول نهايته و قصة صداقته مع الهة الصيد و القمر ارتميس شقيقة إله الشمس أبوللو و بنت زيوس كبير الآلهة",
    link: "https://www.youtube.com/watch?v=MmQGQMx5aqE",
  },
  {
    image: project3,
    description:
      "هل سبق لك أن تساءلت عن قصص الآلهة الإغريقية والبطولات الأسطورية التي تحكيها؟ في هذا الفيديو، سنقوم برحلة شيقة عبر الميثولوجيا الإغريقية، حيث سنستكشف أساطير الآلهة مثل زيوس وأثينا وهيرا، ونكشف عن قصص البطولات الشهيرة مثل ملحمة أوديسيوس وملحمة أخيليس. سنتعرف على الخلفيات الثقافية والتاريخية التي أثرت في تكوين هذه القصص، ونفهم كيف أثرت الميثولوجيا الإغريقية على الفن والأدب والثقافة الغربية بشكل عام. فلنستعد للانغماس في عالم الأساطير والخيال، ونكتشف جمال وغموض الميثولوجيا الإغريقية.",
    link: "https://www.youtube.com/watch?v=zJ_YcNPC__Y",
  },
  {
    image: project4,
    description:
      "هل سبق لك أن تساءلت عن قصص الآلهة الإغريقية والبطولات الأسطورية التي تحكيها؟ في هذا الفيديو، سنقوم برحلة شيقة عبر الميثولوجيا الإغريقية، حيث سنستكشف أساطير الآلهة مثل زيوس وأثينا وهيرا، ونكشف عن قصص البطولات الشهيرة مثل ملحمة أوديسيوس وملحمة أخيليس. سنتعرف على الخلفيات الثقافية والتاريخية التي أثرت في تكوين هذه القصص، ونفهم كيف أثرت الميثولوجيا الإغريقية على الفن والأدب والثقافة الغربية بشكل عام. فلنستعد للانغماس في عالم الأساطير والخيال، ونكتشف جمال وغموض الميثولوجيا الإغريقية.",
    link: "https://www.youtube.com/watch?v=957STORJJC8",
  },
  {
    image: project5,
    description:
      "هل سبق لك أن تساءلت عن قصص الآلهة الإغريقية والبطولات الأسطورية التي تحكيها؟ في هذا الفيديو، سنقوم برحلة شيقة عبر الميثولوجيا الإغريقية، حيث سنستكشف أساطير الآلهة مثل زيوس وأثينا وهيرا، ونكشف عن قصص البطولات الشهيرة مثل ملحمة أوديسيوس وملحمة أخيليس. سنتعرف على الخلفيات الثقافية والتاريخية التي أثرت في تكوين هذه القصص، ونفهم كيف أثرت الميثولوجيا الإغريقية على الفن والأدب والثقافة الغربية بشكل عام. فلنستعد للانغماس في عالم الأساطير والخيال، ونكتشف جمال وغموض الميثولوجيا الإغريقية.",
    link: "https://www.youtube.com/watch?v=brwjdy5IfKg",
  },

  {
    image: project7,
    description:
      "عرفنا في حلقات سابقة أن بيرسيوس هو البطل الذي قضى على ميدوسا في عرين الجراجونات آخر الأرض و قد حان الوقت لنستمع إلى قصة بيرسيوس البطل الإغريقي من البداية و حتى النهاية",
    link: "https://www.youtube.com/watch?v=zaIzOxAOpzA",
  },
  {
    image: project9,
    description:
      "في هذه الحلقة نستكمل حكايات الميثولوجيا الإغريقية و نحكي تفاصيل القصة الشهيرة لعقاب سيزيف الأبدي و الذي استلهمت من حكايته العديد من الأفلام و الروايات و الأعمال الفنية #زيوس #هرقل #هيرا",
    link: "https://www.youtube.com/watch?v=D46EPIbn8HY",
  },

  {
    image: project10,
    description:
      "الميثولوجيا الإغريقية : أورفيوس و حبه الضائع (الحلقة العاشرة) بودكاست",
    link: "https://www.youtube.com/watch?v=HaMKGJX3lXU",
  },
  {
    image: project11,
    description:
      "الآن جاء وقت أن نحكي الحكاية المدهشة للبطل الإغريقي هرقل أو هركليز ابن كبير الآلهة زيوس البطل نصف إنسان و نصف إله، بداية بقصة ميلاده و لعنة غضب الالهة هيرا زوجة أبيه التي لاحقته طوال حياته بسبب غيرها و الأهوال التي جعلته يمر بها منذ أن كان رضيعا حتى نهاية حياته",
    link: "https://www.youtube.com/watch?v=LoYWEgp4VfY",
  },
  {
    image: project12,
    description:
      "في هذه الحلقة نسنكمل معا قصص و حكايات الميثولوجيا الاغريقية و نحكي أسطورة ميدوسا الكائن الخرافي صاحبة شعر الثعابين و النظرة التي تحول البشر لحجر و علاقتها بأثينا إلهة الحكمة و بوسيدون إله البحار و السبب الذي أدى لتحولها من فتاة بارعة الجمال إلى وحش أسطوري يتنافس أبطال الإغريق على الظفر برأسه",
    link: "https://www.youtube.com/watch?v=LoYWEgp4VfY",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="rtl arabic-text">
      <h2>مشاريعي</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <img src={project.image} alt={`Project ${index + 1}`} />
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="video-link"
            >
              شاهد الفيديو
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
