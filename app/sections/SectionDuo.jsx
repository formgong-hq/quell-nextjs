import c from "../../content.json";

export default function SectionDuo() {
  return (
    <><section className="duo" aria-label="How we work">{" "}<div className="lead2">{" "}<p className="rv" data-lines="">{c.duo.p_1}</p>{" "}<p className="small rv" data-lines="">{c.duo.p_2}</p>{" "}</div>{" "}<figure className="ph bl rv"><img src={"/" + c.duo.img_3_image} width="1000" height="1000" alt={c.duo.img_3_alt} loading="lazy" /><figcaption className="cap">{c.duo.figcaption_4}</figcaption></figure>{" "}</section></>
  );
}
