import c from "../../content.json";

export default function SectionNotes() {
  return (
    <><section className="quote" id="notes" aria-label="Notes">{" "}<blockquote>{" "}<p className="big rv" data-lines="">{c.notes.p_1}</p>{" "}</blockquote>{" "}<p className="label">{c.notes.p_2}</p>{" "}</section></>
  );
}
