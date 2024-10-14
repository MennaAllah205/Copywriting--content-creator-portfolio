import React from "react";
import "../css/UnpublishedProjects.css";

// Import your unpublished project images
import unpublishedProject1 from "../imgs/work1.PNG";
import unpublishedProject2 from "../imgs/work2.PNG";
import unpublishedProject3 from "../imgs/work3.PNG";
import unpublishedProject4 from "../imgs/work4.PNG";
import unpublishedProject5 from "../imgs/work5.PNG";
const unpublishedProjects = [
  {
    image: unpublishedProject1,
    description:
      "الوجه الخفي: الحاج محمد مصطفى مسفيوي وقصة الرعب في مراكش. القصة التي أثارت فضول الإعلام في كل مكان، تحديدًا المغرب الشقيق. في مراكش حيث يسكن الإسكوبي والكاتب العمومي حاج محمد مسفيوي، تدور أحداث الجريمة البشعة التي هو صاحبها، والذي خرج أهل المغرب كلهم في مظاهرات تطالب بقتله، الرجل الذي أثار رعب كل امرأة مغربية في توقيت الجريمة.",
  },
  {
    image: unpublishedProject2,
    description:
      "الوجه الخفي ألطوطة الكبش الذهبي. حكايتنا النهاردة هى واحدة من أروع بدايات المالحم العظيمة في الميثولوچيا الإغريقية وهى ملحمة جيسون والأرجونت ورحلتهم الطويلة للبحث عن الصوف الذهبي. لكن إيه هو الكبش الذهبي ده؟ وليه قصته مهمة للدرجة دي؟ وعلاقته بإله البحر بوسيدن، ومين الطفلين اللي قامت عليهم القصة دي؟ تعالوا سوا نشوف إيه قصة الكبش الذهبي ده.",
  },
  {
    image: unpublishedProject3,
    description:
      "إكسيون طريق الخيانة والعقاب الأبدي. قصتنا النهارده بتحكي عن ملك تحول لواحد ملعون ومعاقب عقاب أبدي في سجن العالم السفلي 'تارتاروس' واللي حكينا عنه قبل كده في قصة سيزيف وهنحكي عنه مره تانيه في قصة الملك اللي طبخ ابنه. فتعالى معايا نشوف أصل الحكاية.",
  },
  {
    image: unpublishedProject4,
    description:
      "دانتي في الدوامة: مغامرة مش طبيعية في عالم الكوميديا الإلهية. ما بين سنتي 1307 و1321 كُتبت أعظم وأشهر ملحمة في العصور الوسطى واللي هي ملحمة الكوميديا الإلهية، يعني تقريبًا في القرن الرابع عشر الميلادي واللي بيعتبره النقاد عصر النهضة الأوروبية.",
  },
  {
    image: unpublishedProject5,
    description:
      "أوديب: أسرار النبوءة والملك الملعون. قصة النهاردة عن ملك حارب أبو الهول وهزمه في رحلة الألغاز، ملك نبوءة واحدة تحكمت في مصيره هو وأمه وأبوه. أسطورة أقل ما يقال في حقها إنها تحفة ملحمية فكرية.",
  },
];

const UnpublishedProjects = () => {
  return (
    <section id="unpublished-projects" className="rtl arabic-text">
      <h2>مشاريع لم تُنشر بعد</h2>
      <p>
        أنا أعمل حالياً على مشاريع جديدة ومثيرة. تابعني لمعرفة المزيد قريباً!
      </p>
      <div className="unpublished-project-list">
        {unpublishedProjects.map((project, index) => (
          <div key={index} className="unpublished-project-item">
            <img src={project.image} alt={`Unpublished Project ${index + 1}`} />
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UnpublishedProjects;
