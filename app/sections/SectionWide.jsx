import c from "../../content.json";

export default function SectionWide() {
  return (
    <><section className="wide" aria-label="Covered Market">{" "}<figure className="ph bl rv"><img src={"/" + c.wide.img_1_image} width="1672" height="941" alt={c.wide.img_1_alt} loading="lazy" /><figcaption className="cap">{c.wide.figcaption_2}</figcaption></figure>{" "}</section></>
  );
}
