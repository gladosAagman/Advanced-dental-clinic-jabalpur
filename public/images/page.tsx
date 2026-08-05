"use client";
import React from "react";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Swal from "sweetalert2";
import CommonDateInput from "@/component/date/CommonDateInput";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_BACKEND_CIS_API_URL ||
  process.env.NEXT_PUBLIC_BACKEND_MASTERS_API_URL ||
  "";

interface Option     { value: string; label: string; }
interface ConnCase   { sub_no: string; prefix: string; case_type: string; case_no: string; case_year: string; party: string; adv: string; list_remark?: string; list_purpose: string; }
interface CaseRow    { sr_no: string; symbol: string; standby: boolean; case_type: string; case_no: string; case_year: string; pet_name: string; res_name: string; adv_name: string; res_adv: string; extra_advs: string; full_remark: string; dist_cell: string; actual_date: string; ack_date: string; connected: ConnCase[]; spacing: number; }
interface Note       { note_id?: string; note_desc?: string; note_text?: string; }
interface SimpleCase { sr_no: number; case_type: string; case_no: string; case_year: string; pet_name: string; res_name: string; adv_name: string; extra_advs?: string; }
interface ListData   { success: boolean; title: string; bench_name: string; court_no: string; vc_link?: string; meeting_id?: string; notes: Note[]; pronouncements: SimpleCase[]; for_orders: SimpleCase[]; cases: CaseRow[]; font: { header: string; body: string }; cl_date: string; day: string; urg_ord: string; }

const LIST_TYPES: Option[] = [
  { value: "U", label: "Urgent" }, { value: "O", label: "Ordinary" },
  { value: "R", label: "Regular" }, { value: "S", label: "Regular-SPL" },
  { value: "L", label: "Liquidation" }, { value: "D", label: "SAMADHAN" },
  { value: "C", label: "COVER" }, { value: "F", label: "Comm(U)" },
  { value: "G", label: "Comm(O)" }, { value: "V", label: "OLD CASES" },
  { value: "K", label: "LOK ADALAT" }, { value: "M", label: "Refer To Mediation" },
];

const todayStr = () => {
  const d = new Date();
  return `${String(d.getDate()).padStart(2,"0")}-${String(d.getMonth()+1).padStart(2,"0")}-${d.getFullYear()}`;
};

/* ─── CauseListDoc ──────────────────────────────────────────────────────── */
function CauseListDoc({ data }: { data: ListData }) {
  const noteText = (n: Note) => n.note_desc || n.note_text || "";

  return (
    <div style={{ overflowX: "auto" }}>
    <div id="cl-print-area" style={{ minWidth: "600px" }}>
    <table
      border={0}
      cellPadding={0}
      cellSpacing={0}
      style={{
        width: "100%",
        //maxWidth: "1080px",
        fontFamily: "Arial",
        fontSize: data.font.header,
        borderCollapse: "collapse",
        tableLayout: "fixed",
      }}
    >
      <tbody>

        <tr className="text-center">
          <td colSpan={5}>
            <table border={1} cellPadding={0} cellSpacing={0} style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td style={{ fontSize: data.font.body, textAlign: "center", padding: "4px" }}>
                    <div dangerouslySetInnerHTML={{ __html: data.title }} />
                    <center><br /><b dangerouslySetInnerHTML={{ __html: data.bench_name }} /></center>
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
          </td>
        </tr>

        <tr>
          <td colSpan={5} style={{ textAlign: "center", fontSize: data.font.body, fontWeight: "bold" }}>
            <pre style={{ fontFamily: "Arial", margin: 0 }}>
              {data.vc_link
                ? <>Dedicated VC link for Hybrid Hearing:&nbsp;<a href={data.vc_link} target="_blank" rel="noreferrer">{data.vc_link}</a>{"\n"}Meeting ID is {data.meeting_id}</>
                : data.meeting_id ? <>Meeting ID is {data.meeting_id}</> : null
              }
            </pre>
          </td>
        </tr>

        {data.notes.map((n, i) => (
          <tr key={`note${i}`}>
            <td colSpan={5} style={{ textAlign: "center", fontSize: data.font.body, fontWeight: "bold" }}>
              <pre style={{ fontFamily: "Arial", fontSize: data.font.body, margin: "6px auto",
                whiteSpace: "pre-wrap", wordBreak: "break-word", textAlign: "center",
                display: "inline-block", maxWidth: "900px" }}>
                {noteText(n)}
              </pre>
            </td>
          </tr>
        ))}

        {data.pronouncements.length > 0 && <>
          <tr>
            <td colSpan={5}><b><u>For Pronouncement on {data.cl_date}</u></b></td>
          </tr>
          {data.pronouncements.map((p, i) => (
            <tr key={`pr${i}`} style={{ verticalAlign: "top",fontSize: data.font.body }}>
              <td>{i + 1}.</td>
              <td>&nbsp;</td>
              <td>{p.case_type}-{p.case_no}-{p.case_year}</td>
              <td>{p.pet_name} <b><u>V/S</u></b> <br />{p.res_name}</td>
              <td>{p.adv_name}&nbsp;{p.extra_advs}</td>
            </tr>
          ))}
          <tr></tr>
        </>}

        {data.for_orders.length > 0 && <>
          <tr>
            <td colSpan={5} style={{ textAlign: "center", fontSize: data.font.body, fontWeight: "bold", textDecoration: "underline" }}>
              FOR ORDERS
            </td>
          </tr>
          {data.for_orders.map((fo, i) => (
            <tr key={`fo${i}`} style={{ verticalAlign: "top",fontSize: data.font.body }}>
              <td>{fo.sr_no}.</td>
              <td>&nbsp;</td>
              <td>{fo.case_type}-{fo.case_no}-{fo.case_year}</td>
              <td>{fo.pet_name}&nbsp;<b>V/S</b>&nbsp;{fo.res_name}</td>
              <td>{fo.adv_name}{fo.extra_advs}</td>
            </tr>
          ))}
        </>}

        {data.cases.map((c, i) => (
          <React.Fragment key={`case${i}`}>
            {c.standby ? (
              <tr style={{ verticalAlign: "top",fontSize: data.font.body }}>
                <td style={{ verticalAlign: "top",width:"5%" }}>{c.sr_no}&nbsp;</td>
                <td style={{ verticalAlign: "top",width:"20%" }}><b>Stand-By Case</b></td>
                <td style={{ verticalAlign: "top",width:"35%" }}>----</td>
                <td style={{ verticalAlign: "top",width:"40%" }}colSpan={2}>----</td>
              </tr>
            ) : (
              <>
                <tr style={{ verticalAlign: "top",fontSize: data.font.body }}>
                  <td style={{ verticalAlign: "top", width: "7%" }}>
                    <span dangerouslySetInnerHTML={{ __html: `${c.sr_no}&nbsp;<b>${c.symbol || ""}</b>` }} />
                  </td>
                  <td
                    style={{ verticalAlign: "top", width: "13%" }}
                    dangerouslySetInnerHTML={{ __html: c.dist_cell || "&nbsp;" }}
                  />
                  <td
                    style={{ verticalAlign: "top", width: "25%" }}
                    dangerouslySetInnerHTML={{ __html: c.full_remark }}
                  />
                  <td style={{ verticalAlign: "top", width: "27%" }}>
                    {c.pet_name} {c.res_name}
                  </td>
                  <td style={{ verticalAlign: "top", width: "28%" }}>
                    {c.adv_name} {c.res_adv} {c.extra_advs}
                  </td>
                </tr>

                {c.connected.map((cc, ci) => (
                  <React.Fragment key={`cc${i}-${ci}`}>
                    <tr style={{ verticalAlign: "top",fontSize: data.font.body }}>
                      <td colSpan={1}>&nbsp;</td>
                      <td>{cc.sub_no}</td>
                      <td style={{ textAlign: "left" }}>
                        {cc.prefix} {cc.case_type}-{cc.case_no}-{cc.case_year}
                        {cc.list_remark && <span dangerouslySetInnerHTML={{ __html: " " + cc.list_remark }} />}
                        {cc.list_purpose && <i><br />({cc.list_purpose})</i>}
                      </td>
                      <td colSpan={1}>&nbsp;{cc.party}</td>
                      <td colSpan={1}>&nbsp;{cc.adv}</td>
                    </tr>
                  </React.Fragment>
                ))}

                <tr style={{ verticalAlign: "top",fontSize: data.font.body }}>
                  <td colSpan={2} style={{ textAlign: "right" }}>&nbsp;</td>
                  <td colSpan={2} style={{ textAlign: "left" }}>
                    &nbsp;&nbsp;
                    <span dangerouslySetInnerHTML={{ __html: (c.actual_date || "") + (c.ack_date || "") }} />
                  </td>
                  <td>&nbsp;</td>
                </tr>

                <tr className="case-gap"><td colSpan={5}></td></tr>
              </>
            )}

            {c.spacing > 0 && (
              <tr className={`spacing-row spacing-${Math.min(c.spacing, 2)}`}>
                <td colSpan={5}></td>
              </tr>
            )}
          </React.Fragment>
        ))}

      </tbody>
    </table>
    </div>
    </div>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────── */
export default function BenchwiseCauseList() {
  const [clDate,    setClDate]    = useState(todayStr());
  const [urgOrd,    setUrgOrd]    = useState("");
  const [benchCode, setBenchCode] = useState("");
  const [subSerial, setSubSerial] = useState("Y");
  const [fontSize,  setFontSize]  = useState("N");
  const [clSpacing, setClSpacing] = useState("1");
  const [hideRes,   setHideRes]   = useState("N");
  const [benches,   setBenches]   = useState<Option[]>([]);
  const [listData,  setListData]  = useState<ListData | null>(null);
  const [loading,   setLoading]   = useState(false);
  const [view,      setView]      = useState<"form"|"list">("form");
  const [mounted,   setMounted]   = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!clDate || clDate.length !== 10 || !urgOrd) return;
    setBenchCode(""); setBenches([]);
    fetch(`${API_BASE_URL}/cl_common/benches?cl_date=${clDate}&urg_ord=${urgOrd}`)
      .then(r => r.json()).then(d => setBenches(d.benches || [])).catch(() => {});
  }, [clDate, urgOrd]);

  const handleGenerate = async () => {
    if (!clDate)    { Swal.fire("Validation","Please enter Cause List Date","warning"); return; }
    if (!urgOrd)    { Swal.fire("Validation","Please select List Type","warning"); return; }
    if (!benchCode) { Swal.fire("Validation","Please select a Bench","warning"); return; }
    // Clear previous result before new generation
    setListData(null);
    setView("form");
    setLoading(true);
    try {
      const p = new URLSearchParams({
        cl_date: clDate, bench_code: benchCode, urg_ord: urgOrd,
        sub_serial: subSerial, font_size: fontSize,
        cl_spacing: clSpacing, hide_res_party: hideRes,
      });
      const res  = await fetch(`${API_BASE_URL}/benchwise/generate?${p}`);
      const data = await res.json();
      if (!data.success) { Swal.fire("Error", data.message || "No data found", "error"); return; }
      setListData(data); setView("list");
    } catch { Swal.fire("Error","Server error","error"); }
    finally  { setLoading(false); }
  };

  // Native browser print — works the same whether triggered by the
  // "Print" button or by Ctrl+P. All print-specific layout/visibility
  // rules live in the @media print block below.
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container-fluid py-3">

      <div className="card mb-3 no-print">
        <div className="card-header bg-dark text-white">
          <strong>Benchwise Cause List Generation</strong>
        </div>
        <div className="card-body row g-3">
          <div className="col-md-3">
            <label className="form-label mb-1">Cause List Date</label>
            <CommonDateInput
              value={clDate}
              onChange={setClDate}
              className="form-control form-control-sm"
            />
          </div>
          <div className="col-md-3">
            <label className="form-label mb-1">List</label>
            <select className="form-select form-select-sm" value={urgOrd}
              onChange={e => { setUrgOrd(e.target.value); setBenchCode(""); setBenches([]); }}>
              <option value="">Select List</option>
              {LIST_TYPES.map(l => <option key={l.value} value={l.value}>{l.label}</option>)}
            </select>
          </div>
          <div className="col-md-3">
            <label className="form-label mb-1">Bench</label>
            <select className="form-select form-select-sm" value={benchCode}
              onChange={e => setBenchCode(e.target.value)}>
              <option value="">Please Select</option>
              {benches.map(b => <option key={b.value} value={b.value}>{b.label}</option>)}
            </select>
          </div>
          <div className="col-md-3">
            <label className="form-label mb-1">Sub Serial</label>
            <select className="form-select form-select-sm" value={subSerial}
              onChange={e => setSubSerial(e.target.value)}>
              <option value="Y">YES</option><option value="N">NO</option>
            </select>
          </div>
          <div className="col-md-3">
            <label className="form-label mb-1">Font Size</label>
            <select className="form-select form-select-sm" value={fontSize}
              onChange={e => setFontSize(e.target.value)}>
              <option value="XS">Xtra Small</option><option value="S">Small</option>
              <option value="N">Normal</option><option value="B">Big</option>
              <option value="BG">Bigger</option>
            </select>
          </div>
          <div className="col-md-3">
            <label className="form-label mb-1">Case Spacing</label>
            <select className="form-select form-select-sm" value={clSpacing}
              onChange={e => setClSpacing(e.target.value)}>
              <option value="0">Compact</option>
              <option value="1">Normal</option>
              <option value="2">Spacious</option>
            </select>
          </div>
          <div className="col-md-3">
            <label className="form-label mb-1">Hide Restricted</label>
            <select className="form-select form-select-sm" value={hideRes}
              onChange={e => setHideRes(e.target.value)}>
              <option value="N">NO</option><option value="Y">YES</option>
            </select>
          </div>
          <div className="col-md-3 d-flex align-items-end">
            <button className="btn btn-success btn-sm w-100"
              onClick={handleGenerate} disabled={loading}>
              {loading ? "..." : "Generate"}
            </button>
          </div>
        </div>
      </div>

      {view === "list" && listData && (
        <div className="card">
          <div className="card-header bg-light d-flex justify-content-between align-items-center no-print">
            <span className="fw-bold" style={{ fontSize: "13px" }}>
              {listData.cl_date} — {listData.day}
            </span>
            <div className="d-flex align-items-center gap-2">
              <span className="text-danger fw-bold" style={{ fontSize: "12px" }}>
                Print dialog mein "Layout = Landscape" aur "Paper size = A4" zaroor select karein
              </span>
              <button className="btn btn-primary btn-sm" onClick={handlePrint}>Print</button>
              <button className="btn btn-danger btn-sm"
                onClick={() => { setView("form"); setListData(null); }}>Back</button>
            </div>
          </div>
          <div className="card-body p-2" style={{ overflowX: "auto" }}>
            <CauseListDoc data={listData} />
          </div>
        </div>
      )}

      {mounted && listData && createPortal(
        <div id="print-root">
          <CauseListDoc data={listData} />
        </div>,
        document.body
      )}

      <style jsx global>{`
        #print-root {
          display: none;
        }

        @media print {
          body > *:not(#print-root) {
            display: none !important;
          }
          #print-root {
            display: block !important;
          }
          body {
            margin: 0 !important;
            padding: 0 !important;
          }
          #cl-print-area {
            width: 100% !important;
            min-width: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          table {
            width: 100% !important;
            max-width: none !important;
            border-collapse: collapse !important;
            border-spacing: 0 !important;
            table-layout: fixed !important;
          }
          td, th {
            padding: 0 2px;
            line-height: 1;
            vertical-align: top;
            overflow-wrap: anywhere;
            word-break: normal;
          }
          pre {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            white-space: pre-wrap;
            word-break: break-word;
            line-height: 1;
          }
          a {
            color: #000;
            text-decoration: none;
          }
          .case-gap td {
            height: 2px;
            padding: 0;
            line-height: 2px;
          }
          .spacing-row td {
            padding: 0;
            line-height: 0;
          }
          .spacing-1 td {
            height: 3px;
          }
          .spacing-2 td {
            height: 6px;
          }
          tr {
            break-inside: avoid;
            page-break-inside: avoid;
          }
          .case-gap,
          .spacing-row {
            break-inside: auto;
            page-break-inside: auto;
          }
          @page {
            
            margin: 6mm;
          }
        }
      `}</style>
    </div>
  );
}