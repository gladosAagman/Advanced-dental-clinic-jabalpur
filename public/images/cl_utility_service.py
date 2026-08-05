
from datetime import datetime
FONT_SIZE_MAP = {
    "BG": {"header": "18pt", "body": "16pt"},
    "B":  {"header": "16pt", "body": "14pt"},
    "N":  {"header": "14pt", "body": "12pt"},
    "S":  {"header": "12pt", "body": "10pt"},
    "XS": {"header": "10pt", "body": "8pt"},
}
TRACK_SYMBOLS = {
    "FT": "<b>***</b>",
    "NT": "<b>**</b>",
    "ST": "<b>*</b>",
    "0":  "",
    None: "",
    "":   "",
}
def get_cause_list_title(
    urg_ord: str,
    main_suppl: str,
    bench: str,
    bench_desc: str,
    day: str,
    cl_date: str,
    cr_no,
) -> str:
    is_main = main_suppl == "M"
    sup = "" if is_main else "SUPPL "
    formatted_date = cl_date.replace("-", "/")
    sfx_dated = f"FOR THE {day} DATED {cl_date.replace('-', '/')}"
    cr = f"<u>CR NO {cr_no}</u>"

    # ---------- O : Daily Motion ----------
    if urg_ord == "O":
        if is_main:
            if bench == "S":
                return f"DAILY  S.B. MOTION PETITION FOR THE {day} DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
            elif bench == "D":
                return f"DAILY {bench_desc} D.B. MOTION PETITION FOR THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
            elif bench == "F":
                return f"DAILY {bench_desc} F.B. MOTION PETITION FOR THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
        else:
            if bench == "S":
                return f"SUPPL {bench_desc} DAILY S.B. MOTION PETITION FOR THE {day} DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
            elif bench == "D":
                return f"SUPPL DAILY {bench_desc} D.B. MOTION PETITION FOR THE {day} DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
            elif bench == "F":
                return f"SUPPL DAILY {bench_desc} F.B. MOTION PETITION FOR THE {day} DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"

    # ---------- U : Urgent Motion ----------
    elif urg_ord == "U":
        if is_main:
            if bench == "S":
                return f"URGENT S.B. {bench_desc} MOTION PETITION FOR THE {day} DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
            elif bench == "D":
                return f"URGENT D.B. {bench_desc} MOTION PETITION FOR THE {day} DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
            elif bench == "F":
                return f"URGENT F.B. {bench_desc} MOTION PETITION FOR THE {day} DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
        else:
            # PHP bug preserved: no "DATED" keyword, extra spaces
            if bench == "S":
                return f"SUPPL URGENT S.B. {bench_desc} MOTION PETITION FOR THE   {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
            elif bench == "D":
                return f"SUPPL URGENT D.B. {bench_desc} MOTION PETITION FOR THE   {day} DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
            elif bench == "F":
                return f"SUPPL URGENT F.B. {bench_desc} MOTION PETITION FOR THE   {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"

    # ---------- R : Regular ----------
    elif urg_ord == "R":
        if is_main:
            if bench == "S":
                return f"REGULAR S.B. {bench_desc} CAUSE LIST FOR THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
            elif bench == "D":
                return f"REGULAR D.B. {bench_desc} CAUSE LIST FOR THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
            elif bench == "F":
                return f"REGULAR F.B. {bench_desc} CAUSE LIST FOR THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
        else:
            if bench == "S":
                return f"REGULAR SUPPL. S.B. {bench_desc} CAUSE LIST FOR THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
            elif bench == "D":
                return f" REGULAR SUPPL. D.B. {bench_desc} CAUSE LIST  FOR THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
            elif bench == "F":
                return f"REGULAR SUPPL. F.B. {bench_desc} CAUSE LIST FOR THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"

    # ---------- S : Special ----------
    elif urg_ord == "S":
        if is_main:
            if bench == "S":
                return f"SPECIAL S.B. MAIN {bench_desc} LIST  FOR THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
            elif bench == "D":
                return f"SPECIAL D.B. MAIN {bench_desc} LIST  FOR THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
            elif bench == "F":
                return f"FULL BENCH MAIN {bench_desc} LIST  FOR THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
        else:
            if bench == "S":
                return f"SUPPL SPECIAL S.B. {bench_desc} PETITION FOR THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
            elif bench == "D":
                return f"SUPPL SPECIAL D.B. {bench_desc} PETITION FOR THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
            elif bench == "F":
                return f"SUPPL FULL BENCH {bench_desc} PETITION FOR THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"

    # ---------- L : Liquidation Ordinary ----------
    elif urg_ord == "L":
        if is_main:
            if bench == "S":
                return f"LIQUIDATION(ORDINARY)(SB) FOR {bench_desc}  THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
            elif bench == "D":
                # PHP bug preserved: misplaced </center>; kept as-is in output text
                return f"LIQUIDATION(ORDINARY)(DB) FOR {bench_desc} THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
            elif bench == "F":
                return f"LIQUIDATION(ORDINARY)(FB) FOR {bench_desc} THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
        else:
            if bench == "S":
                return f"LIQUIDATION(ORDINARY) SUPPL (SB) FOR {bench_desc}  THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
            elif bench == "D":
                return f"LIQUIDATION(ORDINARY) SUPPL (DB) FOR {bench_desc}  THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
            elif bench == "F":
                return f"LIQUIDATION(ORDINARY) SUPPL (FB) FOR {bench_desc}  THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"

    # ---------- Q : Liquidation Urgent ----------
    elif urg_ord == "Q":
        if is_main:
            if bench == "S":
                return f"LIQUIDATION(URGENT)(SB) FOR {bench_desc}  THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
            elif bench == "D":
                return f"LIQUIDATION(URGENT)(DB) FOR {bench_desc} THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
            elif bench == "F":
                return f"LIQUIDATION(URGENT)(FB) FOR {bench_desc} THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
        else:
            if bench == "S":
                return f"LIQUIDATION(URGENT) SUPPL (SB) FOR {bench_desc}  THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
            elif bench == "D":
                return f"LIQUIDATION(URGENT) SUPPL (DB) FOR {bench_desc}  THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
            elif bench == "F":
                return f"LIQUIDATION(URGENT) SUPPL (FB) FOR {bench_desc}  THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"

    # ---------- D : Samadhan ----------
    elif urg_ord == "D":
        if is_main:
            return f"SPECIAL LIST SAMADHAN 2009 FOR {bench_desc} THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
        else:
            return f"SUPPL SPECIAL LIST SAMADHAN 2009 FOR {bench_desc} THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"

    # ---------- C : Covered Matter ----------
    elif urg_ord == "C":
        if is_main:
            if bench == "S":
                return f"SPECIAL CAUSE LIST OF COVERED MATTER (SB) FOR {bench_desc}  THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
            elif bench == "D":
                return f"SPECIAL CAUSE LIST OF COVERED MATTER (DB) FOR {bench_desc} THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
            elif bench == "F":
                return f"SPECIAL CAUSE LIST OF COVERED MATTER (FB) FOR {bench_desc} THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
        else:
            if bench == "S":
                return f"SPECIAL CAUSE LIST OF COVERED MATTER SUPPL (SB) FOR {bench_desc}  THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
            elif bench == "D":
                return f"SPECIAL CAUSE LIST OF COVERED MATTER SUPPL (DB) FOR {bench_desc}  THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
            elif bench == "F":
                return f"SPECIAL CAUSE LIST OF COVERED MATTER SUPPL (FB) FOR {bench_desc}  THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"

    # ---------- F : Commercial Urgent ----------
    elif urg_ord == "F":
        if is_main:
            if bench == "S":
                return f"COMMERCIAL(URGENT) {bench_desc} SB FOR THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;{cr}"
            elif bench == "D":
                return f"COMMERCIAL(URGENT) {bench_desc} DB FOR THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;{cr}"
            elif bench == "F":
                return f"COMMERCIAL(URGENT) {bench_desc} FB FOR THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;{cr}"
        else:
            if bench == "S":
                return f"COMMERCIAL(URGENT) SUPPL {bench_desc} SB FOR THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;{cr}"
            elif bench == "D":
                return f"COMMERCIAL(URGENT) SUPPL {bench_desc} DB FOR THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;{cr}"
            elif bench == "F":
                return f"COMMERCIAL(URGENT) SUPPL {bench_desc} FB FOR THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;{cr}"

    # ---------- G : Commercial Ordinary ----------
    elif urg_ord == "G":
        if is_main:
            if bench == "S":
                return f"COMMERCIAL(ORDINARY) {bench_desc} SB FOR THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;{cr}"
            elif bench == "D":
                return f"COMMERCIAL(ORDINARY) {bench_desc} DB FOR THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;{cr}"
            elif bench == "F":
                return f"COMMERCIAL(ORDINARY) {bench_desc} FB FOR THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;{cr}"
        else:
            if bench == "S":
                return f"COMMERCIAL(ORDINARY) SUPPL {bench_desc} SB FOR THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;{cr}"
            elif bench == "D":
                return f"COMMERCIAL(ORDINARY) SUPPL {bench_desc} DB FOR THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;{cr}"
            elif bench == "F":
                return f"COMMERCIAL(ORDINARY) SUPPL {bench_desc} FB FOR THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;{cr}"

    # ---------- K : Lok Adalat ----------
    elif urg_ord == "K":
        if is_main:
            if bench == "S":
                return f"LOK ADALAT PETITIONS FOR {bench_desc}  THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>CR NO {cr_no}</u>"
            elif bench == "D":
                return f"LOK ADALAT PETITIONS FOR {bench_desc} THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>CR NO {cr_no}</u>"
            elif bench == "F":
                return f"LOK ADALAT PETITIONS FOR {bench_desc} THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>CR NO {cr_no}</u>"
        else:
            if bench == "S":
                return f"SUPPL LOK ADALAT PETITIONS FOR {bench_desc}  THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>CR NO {cr_no}</u>"
            elif bench == "D":
                return f"SUPPL LOK ADALAT PETITIONS FOR {bench_desc}  THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>CR NO {cr_no}</u>"
            elif bench == "F":
                return f"SUPPL LOK ADALAT PETITIONS FOR {bench_desc}  THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>CR NO {cr_no}</u>"

    # ---------- M : Mediation ----------
    elif urg_ord == "M":
        if is_main:
            if bench == "S":
                return f"FOR REFERRAL TO THE SPECIAL MEDIATION DRIVE-<i>MEDIATION FOR THE NATION</i> (SB) </br> FOR {bench_desc}  THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;{cr}"
            elif bench == "D":
                return f"FOR REFERRAL TO THE SPECIAL MEDIATION DRIVE-<i>MEDIATION FOR THE NATION</i> ({bench_desc} DB) </br> FOR  THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;{cr}"
            elif bench == "F":
                return f"FOR REFERRAL TO THE SPECIAL MEDIATION DRIVE-<i>MEDIATION FOR THE NATION</i> (FB) </br> FOR {bench_desc} THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;{cr}"
        else:
            if bench == "S":
                return f"FOR REFERRAL TO THE SPECIAL MEDIATION DRIVE-<i>MEDIATION FOR THE NATION</i>  SUPPL (SB) </br> FOR {bench_desc}  THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;{cr}"
            elif bench == "D":
                return f"FOR REFERRAL TO THE SPECIAL MEDIATION DRIVE-<i>MEDIATION FOR THE NATION</i>  SUPPL ({bench_desc} DB) </br> FOR  THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;{cr}"
            elif bench == "F":
                return f"FOR REFERRAL TO THE SPECIAL MEDIATION DRIVE-<i>MEDIATION FOR THE NATION</i>  SUPPL (FB) </br> FOR {bench_desc}  THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;{cr}"

    # ---------- A : Pre Lok Adalat ----------
    elif urg_ord == "A":
        if is_main:
            if bench == "S":
                return f"PRE LOK ADALAT CASES FOR {bench_desc}  THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
            elif bench == "D":
                return f"PRE LOK ADALAT CASE FOR {bench_desc} THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
            elif bench == "F":
                return f"PRE LOK ADALAT CASE FOR {bench_desc} THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
        else:
            # PHP: all three bench types use same "SUPPL PRE LOK ADALAT CASE" (singular)
            return f"SUPPL PRE LOK ADALAT CASE FOR {bench_desc}  THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"

    # ---------- E : Election Petitions ----------
    elif urg_ord == "E":
        if is_main:
            if bench == "S":
                return f"ELECTION PETITIONS (SB) FOR {bench_desc}  THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
            elif bench == "D":
                return f"ELECTION PETITIONS (DB) FOR {bench_desc} THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
            elif bench == "F":
                return f"ELECTION PETITIONS (FB) FOR {bench_desc} THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
        else:
            if bench == "S":
                return f"ELECTION PETITIONS SUPPL (SB) FOR {bench_desc}  THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
            elif bench == "D":
                return f"ELECTION PETITIONS SUPPL (DB) FOR {bench_desc}  THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
            elif bench == "F":
                return f"ELECTION PETITIONS SUPPL (FB) FOR {bench_desc}  THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"

    # ---------- V : Old Cases ----------
    elif urg_ord == "V":
        if is_main:
            if bench == "S":
                return f"S.B. {bench_desc} OLD CASES FOR THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
            elif bench == "D":
                return f"D.B. {bench_desc} OLD CASES FOR THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
            elif bench == "F":
                return f"F.B. {bench_desc} OLD CASES FOR THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
        else:
            if bench == "S":
                return f"SUPPL OLD CASES S.B. FOR {bench_desc}  THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
            elif bench == "D":
                return f"SUPPL OLD CASES D.B. FOR {bench_desc}  THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
            elif bench == "F":
                return f"SUPPL OLD CASES F.B. FOR {bench_desc}  THE {day}  DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"

    # ---------- Y : For Orders ----------
    elif urg_ord == "Y":
        return f"FOR ORDERS THE {day} DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"

    # ---------- T : Takenup ----------
    elif urg_ord == "T":
        if bench == "S":
            return f"S.B. {bench_desc} TAKENUP CAUSE LIST THE {day} DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
        elif bench == "D":
            return f"D.B. {bench_desc} TAKENUP CAUSE LIST THE {day} DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"
        elif bench == "F":
            return f"F.B. {bench_desc} TAKENUP CAUSE LIST THE {day} DATED {cl_date.replace('-', '/')} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cr}"

    # ---------- Fallback ----------
    return f"CAUSE LIST FOR {bench_desc} FOR THE {day} DATED {cl_date.replace('-', '/')}"

def resolve_bench_desc(bench_details: dict) -> str:
    bench_desc = bench_details.get("bench_desc") or ""
    if bench_desc:
        return bench_desc
    bench_type = str(bench_details.get("bench_type") or "S")
    j1 = str(bench_details.get("jud1") or "")
    j2 = str(bench_details.get("jud2") or "")
    j3 = str(bench_details.get("jud3") or "")
    if bench_type == "S":
        return j1
    elif bench_type == "D":
        return f"{j1}-{j2}" if j2 else j1
    elif bench_type == "F":
        return f"{j1}-{j2}-{j3}" if j3 else f"{j1}-{j2}"
    return j1

def get_weekday_from_date(cl_date: str) -> str:
    for fmt in ("%d-%m-%Y", "%d/%m/%Y", "%Y-%m-%d"):
        try:
            return datetime.strptime(cl_date.replace("/", "-"), fmt).strftime("%A").upper()
        except ValueError:
            continue
    return ""

def build_sr_no(case_row: dict, urg_ord: str) -> str:
    sr_no   = str(case_row.get("sr_no2") or case_row.get("sr_no") or "")
    status2 = str(case_row.get("status2") or "")
    if urg_ord == "V":
        sr_no = f"OC-{sr_no}"
    if status2 == "58":
        sr_no = f"#{sr_no}"
    elif status2 == "72":
        sr_no = f"##{sr_no}"
    elif status2 == "52":
        sr_no = f"&{sr_no}"
    return sr_no

def get_track_symbol(case_row: dict) -> str:
    raw = case_row.get("case_track") or case_row.get("track")
    track = str(raw or "0").strip()
    return TRACK_SYMBOLS.get(track, track if track not in ("0", "") else "")

def build_full_remark(case_row: dict, is_abbr: str, is_purpose: str,show_revisit: bool = False) -> str:
    t_listremark   = str(case_row.get("list_remark") or "").strip()
    t_listabbr     = str(case_row.get("list_abbr") or "")
    t_rev_case     = str(case_row.get("revisit_case") or "")
    lp             = case_row.get("case_list_purpose")
    t_list_purpose = f"<br/><i>({lp})</i>" if lp else ""
    case_type = case_row.get("case_type") or ""
    case_no   = str(case_row.get("case_no") or "")
    case_yr   = int(v) if (v := case_row.get("case_year")) else None
    case_ref  = f"{case_type}-{case_no}-{case_yr}"
    show_abbr = t_listabbr if is_abbr == "Y" else ""
    show_purp = t_list_purpose if is_purpose == "Y" else ""
    rev_case_print = ""
    if show_revisit:
        t_mctype = case_row.get("mctype", "")
        t_mcno = case_row.get("mcno", "")
        t_mcyear = case_row.get("mcyear", "")
        if (
            t_rev_case
            and t_rev_case != f"{t_mctype}-{t_mcno}-{t_mcyear}"
        ):
            rev_case_print = f"<br> ({t_rev_case})"
    extra_parts = [p for p in [show_abbr, rev_case_print,show_purp] if p]    
    extra = ("<br/>" + " ".join(extra_parts)) if extra_parts else ""
    if t_listremark:
        return (
            f"{t_listremark}"
            f"<BR><b>{case_ref}</b>"
            f"{extra}"
        )
    return (
        f"<b>{case_ref}</b>"
        f"{extra}"
    )

def build_dist_cell(case_row: dict) -> str:
    dist_name  = str(case_row.get("dist_name") or "")
    alloc_date = str(case_row.get("alloc_date") or "")
    return f"{dist_name}<br/>[{alloc_date}]" if alloc_date else dist_name

def build_connected_cases(
    conn_cases_raw: list,
    parent_sr_no,
    sub_serial: str = "Y",
) -> list:
    conn_cases = []
    sub_no = 0
    for cc in conn_cases_raw:
        sub_no_print = ""
        if sub_serial == "Y":
            prefix = str(cc.get("prefix") or "")
            ctype  = str(cc.get("scase_type") or "")
            #if prefix == "WITH"  and ctype not in ("CM", "CRM"):
            if prefix in ("WITH", "& O&M") and ctype not in ("CM", "CRM"):
                sub_no += 1
                sub_no_print = f"{parent_sr_no}.{sub_no}"
        adv       = str(cc.get("adv") or "")
        adv_extra = str(cc.get("adv_extra") or "")
        if adv and adv_extra:
            adv = adv + adv_extra
        conn_cases.append({
            "sub_no":       sub_no_print,
            "prefix":       cc.get("prefix", ""),
            "case_type":    cc.get("scase_type", ""),
            "case_no":      cc.get("scase_no", ""),
            "case_year":    cc.get("scase_year", ""),
            "party":        cc.get("party", ""),
            "adv":          adv,
            "list_purpose": cc.get("case_list_purpose", ""),
            "list_remark":  cc.get("list_remark", ""),
        })
    return conn_cases

def build_case_row(
    c: dict,
    urg_ord: str,
    extra_advs: str,
    conn_cases: list,
    cl_spacing: int,
    is_abbr: str,
    is_purpose: str,
    show_revisit: bool = False
)-> dict:
    
    is_adv_judge = bool(c.get("is_adv_now_judge"))
    return {
        "sr_no":       build_sr_no(c, urg_ord),
        "case_sr_no":  c.get("sr_no"),
        "symbol":      get_track_symbol(c),
        "standby":     str(c.get("standby") or "N") == "Y",
        "case_type":   c.get("case_type") or "",
        "case_no":     str(c.get("case_no") or ""),
        "case_year":   int(v) if (v := c.get("case_year")) else None,
        "diary_no":    c.get("diary_no", ""),
        "pet_name":    c.get("pet_name", ""),
        "res_name":    c.get("res_name", ""),
        "adv_name":    "" if is_adv_judge else str(c.get("adv_name") or ""),
        "res_adv":     str(c.get("res_adv") or ""),
        "extra_advs":  extra_advs,
        "full_remark": build_full_remark(c,is_abbr,is_purpose,show_revisit),
        "dist_cell":   build_dist_cell(c),
        "actual_date": str(c.get("actual_date") or ""),
        "ack_date":    str(c.get("ack_date") or ""),
        "connected":   conn_cases,
        "spacing":     cl_spacing,
        "gen_remarks": c.get("gen_remark") or "",
        "category":    c.get("category") or "",
        "actual_category":  c.get("actual_category") or "",
        "list_remark":  c.get("list_remark") or ""
    }

async def build_pronouncements(pronouncements_raw: list, repo) -> list:
    result = []
    for pr in pronouncements_raw:
        extra = await repo.get_extra_advocates(
            pr.get("case_type", ""),
            str(pr.get("case_no", "")),
            int(pr.get("case_year") or 0),
        )
        pr_copy = dict(pr)
        pr_copy["extra_advs"] = extra
        result.append(pr_copy)
    return result

async def build_for_orders(for_orders_raw: list, repo) -> list:
    result = []
    for fo in for_orders_raw:
        extra = await repo.get_extra_advocates(
            fo.get("case_type", ""),
            str(fo.get("case_no", "")),
            int(fo.get("case_year") or 0),
        )
        fo_copy = dict(fo)
        fo_copy["extra_advs"] = extra
        result.append(fo_copy)
    return result

async def build_all_cases(
    raw_cases: list,
    repo,
    urg_ord: str,
    hide_res_party: str,
    sub_serial: str,
    cl_spacing: int,
    is_abbr: str,
    is_purpose: str,
    show_revisit: bool = False,
) -> list:

    batch_keys = [
        (c.get("case_type"), str(c.get("case_no") or ""), int(c.get("case_year") or 0))
        for c in raw_cases
        if str(c.get("standby") or "N") != "Y" and c.get("case_type")
    ]
    extra_advs_map = await repo.get_extra_advocates_batch(batch_keys)
    conn_cases_map = await repo.get_connected_cases_batch(batch_keys, hide_res_party)
    cases = []
    for c in raw_cases:
        standby   = str(c.get("standby") or "N") == "Y"
        case_type = c.get("case_type") or ""
        case_no   = str(c.get("case_no") or "")
        case_yr   = int(v) if (v := c.get("case_year")) else None
        batch_key = f"{case_type}|{case_no}|{case_yr}"
        extra_advs     = extra_advs_map.get(batch_key, "") if not standby else ""
        conn_cases_raw = conn_cases_map.get(batch_key, []) if not standby else []
        conn_cases = build_connected_cases(conn_cases_raw, c.get("sr_no"), sub_serial)
        cases.append(
            build_case_row(c, urg_ord, extra_advs, conn_cases, cl_spacing, is_abbr, is_purpose, show_revisit)
        )
    return cases


def get_draft_cause_list_title(
        urg_ord: str,
        main_suppl: str,
        bench: str,
        bench_desc: str,
        day: str,
        cl_date: str,
        cr_no,
    ) -> str:
        live_title = get_cause_list_title(
            urg_ord    = urg_ord,
            main_suppl = main_suppl,
            bench      = bench,
            bench_desc = bench_desc,
            day        = day,
            cl_date    = cl_date,
            cr_no      = cr_no,
        )
        return f"DRAFT {live_title}"


    
