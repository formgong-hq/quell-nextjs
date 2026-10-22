import c from "../../content.json";

export default function SectionHeader() {
  return (
    <><button className="menu-btn" type="button" data-menu-open="" aria-haspopup="dialog">{c.header.button_1}</button>{" "}<dialog className="menu" id="menu" aria-label="Menu">{" "}<button className="x" type="button" data-menu-close="">{c.header.button_2}</button>{" "}<ul>{" "}<li><a href="#top">{c.header.a_3}</a></li>{" "}<li><a href="#work">{c.header.a_4}</a></li>{" "}<li><a href="#practice">{c.header.a_5}</a></li>{" "}<li><a href="#notes">{c.header.a_6}</a></li>{" "}<li><a href="#contact">{c.header.a_7}</a></li>{" "}</ul>{" "}</dialog></>
  );
}
