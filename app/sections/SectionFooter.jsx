import c from "../../content.json";

export default function SectionFooter() {
  return (
    <><footer className="foot">{" "}<p className="big rv" data-lines="">{c.footer.p_1}</p>{" "}<div>{" "}<div className="credits">{" "}<p dangerouslySetInnerHTML={{ __html: c.footer.p_2_html }} />{" "}<nav aria-label="Legal"><a href="#">{c.footer.a_3}</a><a href="#contact">{c.footer.a_4}</a></nav>{" "}</div>{" "}<p className="giant" aria-hidden="true" data-giant=""><span>{c.footer.span_5}</span></p>{" "}</div>{" "}</footer></>
  );
}
