import c from "../../content.json";

export default function SectionPractice() {
  return (
    <><section className="practice" id="practice" aria-label="Practice">{" "}<p className="meta label"><span>{c.practice.span_1}</span><span>{c.practice.span_2}</span><span>{c.practice.span_3}</span></p>{" "}<p className="big rv" data-lines="">{c.practice.p_4}</p>{" "}<figure className="ph bl rv"><img src={"/" + c.practice.img_5_image} width="1400" height="933" alt={c.practice.img_5_alt} loading="lazy" /><figcaption className="cap">{c.practice.figcaption_6}</figcaption></figure>{" "}<p className="side small rv" data-lines="">{c.practice.p_7}</p>{" "}</section></>
  );
}
