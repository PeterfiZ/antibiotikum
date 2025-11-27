
window.renal_dose_hu = [
    {
        "antibiotic_name": "Penicillin G",
        "gfr_gt_50": { "dose": "Nincs módosítás", "interval": "", "notes": "CrCl >30 ml/min esetén." },
        "gfr_30_50": { "dose": "1-3 millió E", "interval": "q6-8h", "notes": "" },
        "gfr_10_29": { "dose": "1-3 millió E", "interval": "q8-12h", "notes": "" },
        "gfr_lt_10": { "dose": "1-2 millió E", "interval": "q12h", "notes": "" },
        "hd": { "dose": "1-2 millió E", "interval": "q12h", "notes": "Pótdózis dialízis után." },
        "crrt": { "dose": "2-4 millió E", "interval": "q6h", "notes": "" }
    },
    {
        "antibiotic_name": "Amoxicillin",
        "gfr_gt_50": { "dose": "Nincs módosítás", "interval": "", "notes": "CrCl >30 ml/min esetén." },
        "gfr_30_50": { "dose": "250-500 mg", "interval": "q12h", "notes": "" },
        "gfr_10_29": { "dose": "250-500 mg", "interval": "q12h", "notes": "" },
        "gfr_lt_10": { "dose": "250-500 mg", "interval": "q24h", "notes": "" },
        "hd": { "dose": "250-500 mg", "interval": "q24h", "notes": "Pótdózis dialízis után." },
        "crrt": { "dose": "500-1000 mg", "interval": "q8-12h", "notes": "" }
    },
    {
        "antibiotic_name": "Piperacillin-tazobactam",
        "gfr_gt_50": { "dose": "4.5g", "interval": "q6h", "notes": "CrCl >40 ml/min esetén." },
        "gfr_30_50": { "dose": "3.375g", "interval": "q6h", "notes": "CrCl 20-40 ml/min tartomány." },
        "gfr_10_29": { "dose": "2.25g", "interval": "q6h", "notes": "CrCl <20 ml/min tartomány." },
        "gfr_lt_10": { "dose": "2.25g", "interval": "q8h", "notes": "" },
        "hd": { "dose": "2.25g", "interval": "q8h", "notes": "Pótdózis dialízis után." },
        "crrt": { "dose": "3.375g", "interval": "q8h", "notes": "" }
    },
    {
        "antibiotic_name": "Meropenem",
        "gfr_gt_50": { "dose": "1-2g", "interval": "q8h", "notes": "Nincs módosítás." },
        "gfr_30_50": { "dose": "1g", "interval": "q12h", "notes": "CrCl 26-50 ml/min tartomány." },
        "gfr_10_29": { "dose": "500mg", "interval": "q12h", "notes": "CrCl 10-25 ml/min tartomány." },
        "gfr_lt_10": { "dose": "500mg", "interval": "q24h", "notes": "" },
        "hd": { "dose": "500mg", "interval": "q24h", "notes": "Pótdózis dialízis után." },
        "crrt": { "dose": "1g", "interval": "q8-12h", "notes": "" }
    },
    {
        "antibiotic_name": "Vancomycin",
        "gfr_gt_50": { "dose": "15-20 mg/kg", "interval": "q8-12h", "notes": "CrCl >60 ml/min esetén." },
        "gfr_30_50": { "dose": "15-20 mg/kg", "interval": "q12-24h", "notes": "CrCl 40-59 ml/min tartomány." },
        "gfr_10_29": { "dose": "15-20 mg/kg", "interval": "q24-48h", "notes": "CrCl 20-39 ml/min tartomány." },
        "gfr_lt_10": { "dose": "10-15 mg/kg", "interval": "q48-72h", "notes": "" },
        "hd": { "dose": "7.5-10 mg/kg", "interval": "HD után", "notes": "Telítő dózis: 20-25 mg/kg." },
        "crrt": { "dose": "7.5-10 mg/kg", "interval": "q24-48h", "notes": "Telítő dózis: 20-25 mg/kg." }
    },
    {
        "antibiotic_name": "Gentamicin",
        "gfr_gt_50": { "dose": "5-7 mg/kg", "interval": "q24h", "notes": "CrCl >60 ml/min esetén." },
        "gfr_30_50": { "dose": "4-6 mg/kg", "interval": "q36h", "notes": "CrCl 40-59 ml/min tartomány." },
        "gfr_10_29": { "dose": "3-4 mg/kg", "interval": "q48h", "notes": "CrCl 20-39 ml/min tartomány." },
        "gfr_lt_10": { "dose": "2 mg/kg", "interval": "szint szerint", "notes": "Plazmaszint monitorozás." },
        "hd": { "dose": "2 mg/kg", "interval": "HD után", "notes": "Pótdózis dialízis után." },
        "crrt": { "dose": "2.5 mg/kg", "interval": "q48h", "notes": "" }
    },
    {
        "antibiotic_name": "Ciprofloxacin",
        "gfr_gt_50": { "dose": "400mg IV", "interval": "q12h", "notes": "Nincs módosítás." },
        "gfr_30_50": { "dose": "400mg IV", "interval": "q12h", "notes": "" },
        "gfr_10_29": { "dose": "400mg IV", "interval": "q24h", "notes": "" },
        "gfr_lt_10": { "dose": "200mg IV", "interval": "q24h", "notes": "" },
        "hd": { "dose": "200mg IV", "interval": "q24h", "notes": "Pótdózis dialízis után." },
        "crrt": { "dose": "400mg IV", "interval": "q12h", "notes": "" }
    }
    ,
    {
        "antibiotic_name": "Ticarcillin-clavulanate",
        "gfr_gt_50": { "dose": "3.1g", "interval": "q4h", "notes": "CrCl >60 ml/min esetén." },
        "gfr_30_50": { "dose": "2g", "interval": "q4h", "notes": "CrCl 30-60 ml/min tartomány." },
        "gfr_10_29": { "dose": "2g", "interval": "q8h", "notes": "CrCl 10-30 ml/min tartomány." },
        "gfr_lt_10": { "dose": "2g", "interval": "q12h", "notes": "" },
        "hd": { "dose": "2g", "interval": "q12h", "notes": "Pótdózis dialízis után." },
        "crrt": { "dose": "3.1g", "interval": "q8h", "notes": "" }
    }
,
    {
        "antibiotic_name": "Cefazolin",
        "gfr_gt_50": { "dose": "1-2g", "interval": "q8h", "notes": "Nincs módosítás." },
        "gfr_30_50": { "dose": "1-2g", "interval": "q12h", "notes": "" },
        "gfr_10_29": { "dose": "1g", "interval": "q24h", "notes": "" },
        "gfr_lt_10": { "dose": "0.5-1g", "interval": "q24h", "notes": "" },
        "hd": { "dose": "1-2g", "interval": "q24h", "notes": "Pótdózis dialízis után." },
        "crrt": { "dose": "2g", "interval": "q12h", "notes": "" }
    },
    {
        "antibiotic_name": "Ceftriaxone",
        "gfr_gt_50": { "dose": "Nincs módosítás", "interval": "", "notes": "" },
        "gfr_30_50": { "dose": "Nincs módosítás", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Nincs módosítás", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Nincs módosítás", "interval": "", "notes": "" },
        "hd": { "dose": "Nincs módosítás", "interval": "", "notes": "" },
        "crrt": { "dose": "Nincs módosítás", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Cefepime",
        "gfr_gt_50": { "dose": "2g", "interval": "q8-12h", "notes": "Nincs módosítás." },
        "gfr_30_50": { "dose": "2g", "interval": "q24h", "notes": "" },
        "gfr_10_29": { "dose": "1g", "interval": "q24h", "notes": "" },
        "gfr_lt_10": { "dose": "500mg", "interval": "q24h", "notes": "" },
        "hd": { "dose": "500mg", "interval": "q24h", "notes": "1g telítő dózis, majd pótdózis dialízis után." },
        "crrt": { "dose": "2g", "interval": "q12h", "notes": "" }
    },
    {
        "antibiotic_name": "Linezolid",
        "gfr_gt_50": { "dose": "Nincs módosítás", "interval": "", "notes": "" },
        "gfr_30_50": { "dose": "Nincs módosítás", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Nincs módosítás", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Nincs módosítás", "interval": "", "notes": "" },
        "hd": { "dose": "Nincs módosítás", "interval": "", "notes": "" },
        "crrt": { "dose": "Nincs módosítás", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "Daptomycin",
        "gfr_gt_50": { "dose": "4-6 mg/kg", "interval": "q24h", "notes": "CrCl >30 ml/min esetén." },
        "gfr_30_50": { "dose": "4-6 mg/kg", "interval": "q24h", "notes": "" },
        "gfr_10_29": { "dose": "4-6 mg/kg", "interval": "q48h", "notes": "" },
        "gfr_lt_10": { "dose": "4-6 mg/kg", "interval": "q48h", "notes": "" },
        "hd": { "dose": "4-6 mg/kg", "interval": "q48h", "notes": "Dialízis után adandó." },
        "crrt": { "dose": "6 mg/kg", "interval": "q24h", "notes": "" }
    },
    {
        "antibiotic_name": "Metronidazol",
        "gfr_gt_50": { "dose": "Nincs módosítás", "interval": "", "notes": "" },
        "gfr_30_50": { "dose": "Nincs módosítás", "interval": "", "notes": "" },
        "gfr_10_29": { "dose": "Nincs módosítás", "interval": "", "notes": "" },
        "gfr_lt_10": { "dose": "Nincs módosítás", "interval": "", "notes": "Metabolitok felhalmozódhatnak." },
        "hd": { "dose": "Normál dózis", "interval": "", "notes": "" },
        "crrt": { "dose": "Nincs módosítás", "interval": "", "notes": "" }
    },
    {
        "antibiotic_name": "TMP-SMX",
        "gfr_gt_50": { "dose": "Normál dózis", "interval": "q12h", "notes": "CrCl >30 ml/min esetén." },
        "gfr_30_50": { "dose": "Normál dózis", "interval": "q12h", "notes": "" },
        "gfr_10_29": { "dose": "50% dózis", "interval": "q12h", "notes": "CrCl 15-30 ml/min tartomány." },
        "gfr_lt_10": { "dose": "Kerülendő", "interval": "", "notes": "" },
        "hd": { "dose": "50% dózis", "interval": "q24h", "notes": "" },
        "crrt": { "dose": "Normál dózis", "interval": "q12h", "notes": "" }
    }
,
    {
        "antibiotic_name": "Cefoxitin",
        "gfr_gt_50": { "dose": "1-2g", "interval": "q6-8h", "notes": "Nincs módosítás." },
        "gfr_30_50": { "dose": "1-2g", "interval": "q8-12h", "notes": "" },
        "gfr_10_29": { "dose": "1-2g", "interval": "q12-24h", "notes": "" },
        "gfr_lt_10": { "dose": "1g", "interval": "q24-48h", "notes": "" },
        "hd": { "dose": "1g", "interval": "q24h", "notes": "Pótdózis dialízis után." },
        "crrt": { "dose": "1-2g", "interval": "q12h", "notes": "" }
    },
    {
        "antibiotic_name": "Cefalexin",
        "gfr_gt_50": { "dose": "500mg", "interval": "q6h", "notes": "Nincs módosítás." },
        "gfr_30_50": { "dose": "500mg", "interval": "q8-12h", "notes": "" },
        "gfr_10_29": { "dose": "500mg", "interval": "q12h", "notes": "" },
        "gfr_lt_10": { "dose": "250mg", "interval": "q12-24h", "notes": "" },
        "hd": { "dose": "250-500mg", "interval": "HD után", "notes": "Pótdózis dialízis után." },
        "crrt": { "dose": "500mg", "interval": "q8h", "notes": "" }
    },
    {
        "antibiotic_name": "Cefaclor",
        "gfr_gt_50": { "dose": "250-500mg", "interval": "q8h", "notes": "Nincs módosítás." },
        "gfr_30_50": { "dose": "50% dózis", "interval": "q8h", "notes": "" },
        "gfr_10_29": { "dose": "50% dózis", "interval": "q12h", "notes": "" },
        "gfr_lt_10": { "dose": "25% dózis", "interval": "q12h", "notes": "" },
        "hd": { "dose": "250-500mg", "interval": "HD után", "notes": "Pótdózis dialízis után." },
        "crrt": { "dose": "Normál dózis", "interval": "q8h", "notes": "" }
    },
    {
        "antibiotic_name": "Cefuroxim",
        "gfr_gt_50": { "dose": "750mg-1.5g", "interval": "q8h", "notes": "CrCl >20 ml/min esetén." },
        "gfr_30_50": { "dose": "750mg-1.5g", "interval": "q8h", "notes": "" },
        "gfr_10_29": { "dose": "750mg", "interval": "q12h", "notes": "" },
        "gfr_lt_10": { "dose": "750mg", "interval": "q24h", "notes": "" },
        "hd": { "dose": "750mg", "interval": "HD után", "notes": "Pótdózis dialízis után." },
        "crrt": { "dose": "750mg", "interval": "q12h", "notes": "" }
    },
    {
        "antibiotic_name": "Cefotaxime",
        "gfr_gt_50": { "dose": "1-2g", "interval": "q8h", "notes": "Nincs módosítás." },
        "gfr_30_50": { "dose": "50% dózis", "interval": "q8h", "notes": "" },
        "gfr_10_29": { "dose": "50% dózis", "interval": "q12h", "notes": "" },
        "gfr_lt_10": { "dose": "25% dózis", "interval": "q12h", "notes": "" },
        "hd": { "dose": "500mg-1g", "interval": "HD után", "notes": "Pótdózis dialízis után." },
        "crrt": { "dose": "1-2g", "interval": "q12h", "notes": "" }
    },
    {
        "antibiotic_name": "Ceftazidime",
        "gfr_gt_50": { "dose": "1-2g", "interval": "q8h", "notes": "Nincs módosítás." },
        "gfr_30_50": { "dose": "1g", "interval": "q12h", "notes": "" },
        "gfr_10_29": { "dose": "1g", "interval": "q24h", "notes": "" },
        "gfr_lt_10": { "dose": "500mg", "interval": "q48h", "notes": "" },
        "hd": { "dose": "1g", "interval": "HD után", "notes": "Pótdózis dialízis után." },
        "crrt": { "dose": "1-2g", "interval": "q12h", "notes": "" }
    },
    {
        "antibiotic_name": "Ceftazidime-avibactam",
        "gfr_gt_50": { "dose": "2.5g", "interval": "q8h", "notes": "Nincs módosítás." },
        "gfr_30_50": { "dose": "1.25g", "interval": "q8h", "notes": "" },
        "gfr_10_29": { "dose": "0.94g", "interval": "q12h", "notes": "GFR 16-30 ml/min tartomány." },
        "gfr_lt_10": { "dose": "0.94g", "interval": "q48h", "notes": "GFR <15 ml/min tartomány." },
        "hd": { "dose": "0.94g", "interval": "HD után", "notes": "Pótdózis dialízis után." },
        "crrt": { "dose": "1.25g", "interval": "q8h", "notes": "" }
    },
    {
        "antibiotic_name": "Ceftolozane-tazobactam",
        "gfr_gt_50": { "dose": "1.5g", "interval": "q8h", "notes": "Nincs módosítás." },
        "gfr_30_50": { "dose": "750mg", "interval": "q8h", "notes": "" },
        "gfr_10_29": { "dose": "375mg", "interval": "q8h", "notes": "" },
        "gfr_lt_10": { "dose": "75mg", "interval": "q8h", "notes": "225mg telítő dózis." },
        "hd": { "dose": "75mg", "interval": "q8h", "notes": "225mg telítő dózis, majd pótdózis dialízis után." },
        "crrt": { "dose": "750mg", "interval": "q8h", "notes": "" }
    },
    {
        "antibiotic_name": "Ceftaroline-avibactam",
        "gfr_gt_50": { "dose": "600mg", "interval": "q12h", "notes": "Nincs módosítás." },
        "gfr_30_50": { "dose": "400mg", "interval": "q12h", "notes": "" },
        "gfr_10_29": { "dose": "300mg", "interval": "q12h", "notes": "" },
        "gfr_lt_10": { "dose": "200mg", "interval": "q12h", "notes": "" },
        "hd": { "dose": "200mg", "interval": "q12h", "notes": "Pótdózis dialízis után." },
        "crrt": { "dose": "400mg", "interval": "q12h", "notes": "" }
    },
    {
        "antibiotic_name": "Cefepime-taniborbactam",
        "gfr_gt_50": { "dose": "2.5g", "interval": "q8h", "notes": "CrCl >50 ml/min esetén." },
        "gfr_30_50": { "dose": "1.25g", "interval": "q8h", "notes": "CrCl 30-49 ml/min tartomány." },
        "gfr_10_29": { "dose": "0.94g", "interval": "q8h", "notes": "CrCl 15-29 ml/min tartomány." },
        "gfr_lt_10": { "dose": "0.625g", "interval": "q8h", "notes": "" },
        "hd": { "dose": "0.625g", "interval": "HD után", "notes": "Pótdózis dialízis után." },
        "crrt": { "dose": "1.25g", "interval": "q8h", "notes": "" }
    },
    {
        "antibiotic_name": "Cefiderocol",
        "gfr_gt_50": { "dose": "2g", "interval": "q8h", "notes": "Nincs módosítás." },
        "gfr_30_50": { "dose": "2g", "interval": "q8h", "notes": "GFR 30-59 ml/min tartomány." },
        "gfr_10_29": { "dose": "1.5g", "interval": "q8h", "notes": "GFR 15-29 ml/min tartomány." },
        "gfr_lt_10": { "dose": "1g", "interval": "q12h", "notes": "" },
        "hd": { "dose": "1g", "interval": "HD után", "notes": "Pótdózis dialízis után." },
        "crrt": { "dose": "2g", "interval": "q8h", "notes": "" }
    }
,
    {
        "antibiotic_name": "Penicillin V",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "Nincs szükség dózismódosításra.",
        "gfr_lt_10": "Használata nem javasolt.",
        "hd": "Használata nem javasolt.",
        "crrt": "Használata nem javasolt."
    },
    {
        "antibiotic_name": "Oxacillin",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "Nincs szükség dózismódosításra.",
        "gfr_lt_10": "Nincs szükség dózismódosításra.",
        "hd": "Nincs szükség dózismódosításra.",
        "crrt": "Nincs szükség dózismódosításra."
    },
    {
        "antibiotic_name": "Amoxicillin-klavulánsav",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "GFR 10-30: 1.2g IV 12 óránként.",
        "gfr_lt_10": "1.2g IV 24 óránként.",
        "hd": "1.2g IV 24 óránként, pótdózis a dialízis után.",
        "crrt": "Normál dózis adható."
    },
    {
        "antibiotic_name": "Ampicillin",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "Normál dózis 8-12 óránként.",
        "gfr_lt_10": "Normál dózis 12-24 óránként.",
        "hd": "Pótdózis szükséges a dialízis után.",
        "crrt": "Normál dózis adható."
    },
    {
        "antibiotic_name": "Ampicillin-sulbactam",
        "gfr_gt_50": "CrCl >30: Nincs szükség módosításra.",
        "gfr_10_50": "CrCl 15-29: 1.5-3g 12 óránként.",
        "gfr_lt_10": "CrCl <15: 1.5-3g 24 óránként.",
        "hd": "1.5-3g 24 óránként, pótdózis dialízis után.",
        "crrt": "Normál dózis adható."
    },
    {
        "antibiotic_name": "Flucloxacillin",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "Nincs szükség dózismódosításra.",
        "gfr_lt_10": "Nincs szükség dózismódosításra.",
        "hd": "Nincs szükség dózismódosításra.",
        "crrt": "Nincs szükség dózismódosításra."
    },
    {
        "antibiotic_name": "Imipenem-cilastatin",
        "gfr_gt_50": "CrCl >50: Nincs szükség módosításra.",
        "gfr_10_50": "CrCl 30-50: 500mg 8 óránként. CrCl 10-29: 500mg 12 óránként.",
        "gfr_lt_10": "250mg 12 óránként.",
        "hd": "250-500mg 12 óránként, pótdózis dialízis után.",
        "crrt": "Dózismódosítás szükséges."
    },
    {
        "antibiotic_name": "Ertapenem",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "GFR <30: 500mg 24 óránként.",
        "gfr_lt_10": "500mg 24 óránként.",
        "hd": "Pótdózis szükséges a dialízis után (ha az utolsó adag 6 órán belül volt).",
        "crrt": "Normál dózis adható."
    },
    {
        "antibiotic_name": "Doripenem",
        "gfr_gt_50": "CrCl >50: Nincs szükség módosításra.",
        "gfr_10_50": "CrCl 30-50: 250mg 8 óránként. CrCl <30: 250mg 12 óránként.",
        "gfr_lt_10": "CrCl <30: 250mg 12 óránként.",
        "hd": "250mg 12 óránként, pótdózis dialízis után.",
        "crrt": "Dózismódosítás szükséges."
    },
    {
        "antibiotic_name": "Imipenem-cilastatin-relebactam",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "GFR 30-59: 400mg/200mg/100mg. GFR 15-29: 300mg/150mg/75mg.",
        "gfr_lt_10": "GFR <15: 200mg/100mg/50mg.",
        "hd": "Pótdózis szükséges a dialízis után.",
        "crrt": "Dózismódosítás szükséges."
    },
    {
        "antibiotic_name": "Meropenem-vaborbactam",
        "gfr_gt_50": "CrCl >50: Nincs szükség módosításra.",
        "gfr_10_50": "CrCl 30-49: 2g 8 óránként. CrCl 15-29: 1g 8 óránként.",
        "gfr_lt_10": "CrCl <15: 1g 12 óránként.",
        "hd": "1g 12 óránként, pótdózis dialízis után.",
        "crrt": "Dózismódosítás szükséges."
    }
,
    {
        "antibiotic_name": "Nalidixic acid",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "Használata nem javasolt.",
        "gfr_lt_10": "Használata nem javasolt.",
        "hd": "Használata nem javasolt.",
        "crrt": "Használata nem javasolt."
    },
    {
        "antibiotic_name": "Ofloxacin",
        "gfr_gt_50": "CrCl >50: Nincs szükség módosításra.",
        "gfr_10_50": "CrCl 10-50: 200-400mg 24 óránként.",
        "gfr_lt_10": "100-200mg 24 óránként.",
        "hd": "100-200mg 24 óránként, dialízis után.",
        "crrt": "Dózismódosítás szükséges."
    },
    {
        "antibiotic_name": "Levofloxacin",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "GFR 20-49: 750mg kezdő, majd 750mg 48 óránként.",
        "gfr_lt_10": "GFR <20: 750mg kezdő, majd 500mg 48 óránként.",
        "hd": "500mg kezdő, majd 250mg 48 óránként, dialízis után.",
        "crrt": "Dózismódosítás szükséges."
    },
    {
        "antibiotic_name": "Moxifloxacin",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "Nincs szükség dózismódosításra.",
        "gfr_lt_10": "Nincs szükség dózismódosításra.",
        "hd": "Nincs szükség dózismódosításra.",
        "crrt": "Nincs szükség dózismódosításra."
    },
    {
        "antibiotic_name": "Delafloxacin",
        "gfr_gt_50": "CrCl >30: Nincs szükség módosításra.",
        "gfr_10_50": "CrCl 15-29: 200mg IV 12 óránként.",
        "gfr_lt_10": "CrCl <15: 150mg IV 12 óránként.",
        "hd": "150mg IV 12 óránként, pótdózis dialízis után.",
        "crrt": "Dózismódosítás szükséges."
    },
    {
        "antibiotic_name": "Telavancin",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "GFR 30-50: 7.5mg/kg 24 óránként. GFR <30: 10mg/kg 48 óránként.",
        "gfr_lt_10": "10mg/kg 48 óránként.",
        "hd": "10mg/kg 48 óránként, dialízis után.",
        "crrt": "Dózismódosítás szükséges."
    },
    {
        "antibiotic_name": "Dalbavancin",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "GFR <30: 750mg egyszeri, majd 375mg 1 hét múlva.",
        "gfr_lt_10": "GFR <30: 750mg egyszeri, majd 375mg 1 hét múlva.",
        "hd": "Nincs szükség dózismódosításra.",
        "crrt": "Nincs szükség dózismódosításra."
    },
    {
        "antibiotic_name": "Oritavancin",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "Nincs szükség dózismódosításra.",
        "gfr_lt_10": "Nincs szükség dózismódosításra.",
        "hd": "Nincs szükség dózismódosításra.",
        "crrt": "Nincs szükség dózismódosításra."
    }
,
    {
        "antibiotic_name": "Piperacillin",
        "gfr_gt_50": "CrCl >40: Nincs szükség módosításra.",
        "gfr_10_50": "CrCl 20-40: 4g 8 óránként.",
        "gfr_lt_10": "CrCl <20: 4g 12 óránként.",
        "hd": "2g 8 óránként, pótdózis dialízis után.",
        "crrt": "Dózismódosítás szükséges."
    },
    {
        "antibiotic_name": "Aztreonam",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "50-75% dózis.",
        "gfr_lt_10": "25% dózis.",
        "hd": "25% pótdózis dialízis után.",
        "crrt": "Dózismódosítás szükséges."
    },
    {
        "antibiotic_name": "Amikacin",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "Dóziscsökkentés vagy intervallum növelése, plazmaszint alapján.",
        "gfr_lt_10": "Dóziscsökkentés vagy intervallum növelése, plazmaszint alapján.",
        "hd": "10-15 mg/kg pótdózis dialízis után.",
        "crrt": "Dózismódosítás szükséges, plazmaszint monitorozás javasolt."
    },
    {
        "antibiotic_name": "Plazomicin",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "Dóziscsökkentés vagy intervallum növelése, plazmaszint alapján.",
        "gfr_lt_10": "Dóziscsökkentés vagy intervallum növelése, plazmaszint alapján.",
        "hd": "7.5 mg/kg pótdózis dialízis után.",
        "crrt": "Dózismódosítás szükséges, plazmaszint monitorozás javasolt."
    },
    {
        "antibiotic_name": "Teicoplanin",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "GFR 30-80: 50% dózis. GFR <30: 33% dózis.",
        "gfr_lt_10": "33% dózis.",
        "hd": "10. napon 33% dózis.",
        "crrt": "Normál dózis adható."
    },
    {
        "antibiotic_name": "Erythromycin",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "Nincs szükség dózismódosításra.",
        "gfr_lt_10": "50-75% dózis.",
        "hd": "Nincs szükség dózismódosításra.",
        "crrt": "Nincs szükség dózismódosításra."
    },
    {
        "antibiotic_name": "Azithromycin",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "Nincs szükség dózismódosításra.",
        "gfr_lt_10": "Nincs szükség dózismódosításra.",
        "hd": "Nincs szükség dózismódosításra.",
        "crrt": "Nincs szükség dózismódosításra."
    },
    {
        "antibiotic_name": "Clarithromycin",
        "gfr_gt_50": "CrCl >30: Nincs szükség módosításra.",
        "gfr_10_50": "CrCl <30: 50% dózis.",
        "gfr_lt_10": "CrCl <30: 50% dózis.",
        "hd": "Nincs szükség dózismódosításra.",
        "crrt": "Nincs szükség dózismódosításra."
    },
    {
        "antibiotic_name": "Roxithromycin",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "Nincs szükség dózismódosításra.",
        "gfr_lt_10": "50% dózis.",
        "hd": "Nincs szükség dózismódosításra.",
        "crrt": "Nincs szükség dózismódosításra."
    },
    {
        "antibiotic_name": "Spiramycin",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "Nincs szükség dózismódosításra.",
        "gfr_lt_10": "Nincs szükség dózismódosításra.",
        "hd": "Nincs szükség dózismódosításra.",
        "crrt": "Nincs szükség dózismódosításra."
    },
    {
        "antibiotic_name": "Clindamycin",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "Nincs szükség dózismódosításra.",
        "gfr_lt_10": "Nincs szükség dózismódosításra.",
        "hd": "Nincs szükség dózismódosításra.",
        "crrt": "Nincs szükség dózismódosításra."
    },
    {
        "antibiotic_name": "Doxycycline",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "Nincs szükség dózismódosításra.",
        "gfr_lt_10": "Nincs szükség dózismódosításra.",
        "hd": "Nincs szükség dózismódosításra.",
        "crrt": "Nincs szükség dózismódosításra."
    },
    {
        "antibiotic_name": "Tigecycline",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "Nincs szükség dózismódosításra.",
        "gfr_lt_10": "Nincs szükség dózismódosításra.",
        "hd": "Nincs szükség dózismódosításra.",
        "crrt": "Nincs szükség dózismódosításra."
    },
    {
        "antibiotic_name": "Minocycline",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "Nincs szükség dózismódosításra.",
        "gfr_lt_10": "Nincs szükség dózismódosításra.",
        "hd": "Nincs szükség dózismódosításra.",
        "crrt": "Nincs szükség dózismódosításra."
    },
    {
        "antibiotic_name": "Eravacycline",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "Nincs szükség dózismódosításra.",
        "gfr_lt_10": "Nincs szükség dózismódosításra.",
        "hd": "Nincs szükség dózismódosításra.",
        "crrt": "Nincs szükség dózismódosításra."
    },
    {
        "antibiotic_name": "Sarecycline",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "Nincs szükség dózismódosításra.",
        "gfr_lt_10": "Nincs szükség dózismódosításra.",
        "hd": "Nincs szükség dózismódosításra.",
        "crrt": "Nincs szükség dózismódosításra."
    },
    {
        "antibiotic_name": "Omadacycline",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "Nincs szükség dózismódosításra.",
        "gfr_lt_10": "Nincs szükség dózismódosításra.",
        "hd": "Nincs szükség dózismódosításra.",
        "crrt": "Nincs szükség dózismódosításra."
    },
    {
        "antibiotic_name": "Tedizolid",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "Nincs szükség dózismódosításra.",
        "gfr_lt_10": "Nincs szükség dózismódosításra.",
        "hd": "Nincs szükség dózismódosításra.",
        "crrt": "Nincs szükség dózismódosításra."
    },
    {
        "antibiotic_name": "Quinupristin-dalfopristin",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "Nincs szükség dózismódosításra.",
        "gfr_lt_10": "Nincs szükség dózismódosításra.",
        "hd": "Nincs szükség dózismódosításra.",
        "crrt": "Nincs szükség dózismódosításra."
    },
    {
        "antibiotic_name": "Chloramphenicol",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "Nincs szükség dózismódosításra.",
        "gfr_lt_10": "Nincs szükség dózismódosításra.",
        "hd": "Nincs szükség dózismódosításra.",
        "crrt": "Nincs szükség dózismódosításra."
    },
    {
        "antibiotic_name": "Fosfomycin",
        "gfr_gt_50": "CrCl >40: Nincs szükség módosításra.",
        "gfr_10_50": "CrCl 20-39: 70-80% dózis. CrCl 10-19: 60-70% dózis.",
        "gfr_lt_10": "CrCl <10: 50% dózis.",
        "hd": "Pótdózis szükséges a dialízis után.",
        "crrt": "Dózismódosítás szükséges."
    },
    {
        "antibiotic_name": "Nitrofurantoin",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "GFR <30: Kerülendő.",
        "gfr_lt_10": "Kerülendő.",
        "hd": "Kerülendő.",
        "crrt": "Kerülendő."
    },
    {
        "antibiotic_name": "Rifampin",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "Nincs szükség dózismódosításra.",
        "gfr_lt_10": "Nincs szükség dózismódosításra.",
        "hd": "Nincs szükség dózismódosításra.",
        "crrt": "Nincs szükség dózismódosításra."
    },
    {
        "antibiotic_name": "Rifabutin",
        "gfr_gt_50": "CrCl >50: Nincs szükség módosításra.",
        "gfr_10_50": "CrCl <50: 50% dózis.",
        "gfr_lt_10": "CrCl <50: 50% dózis.",
        "hd": "Nincs szükség dózismódosításra.",
        "crrt": "Nincs szükség dózismódosításra."
    },
    {
        "antibiotic_name": "Rifaximin",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "Nincs szükség dózismódosításra.",
        "gfr_lt_10": "Nincs szükség dózismódosításra.",
        "hd": "Nincs szükség dózismódosításra.",
        "crrt": "Nincs szükség dózismódosításra."
    },
    {
        "antibiotic_name": "Polymyxin B",
        "gfr_gt_50": "CrCl >80: Nincs szükség módosításra.",
        "gfr_10_50": "CrCl 50-79: 1.25 mg/kg 12 óránként. CrCl 20-49: 1 mg/kg 12 óránként.",
        "gfr_lt_10": "CrCl <20: 1 mg/kg 24 óránként.",
        "hd": "1 mg/kg 48 óránként, pótdózis dialízis után.",
        "crrt": "Dózismódosítás szükséges."
    },
    {
        "antibiotic_name": "Bacitracin",
        "gfr_gt_50": "Nincs szükség dózismódosításra (topikális).",
        "gfr_10_50": "Nincs szükség dózismódosításra (topikális).",
        "gfr_lt_10": "Nincs szükség dózismódosításra (topikális).",
        "hd": "Nincs szükség dózismódosításra (topikális).",
        "crrt": "Nincs szükség dózismódosításra (topikális)."
    },
    {
        "antibiotic_name": "Colistin",
        "gfr_gt_50": "CrCl >80: Nincs szükség módosításra.",
        "gfr_10_50": "CrCl 50-79: 2.5 mg/kg 12 óránként. CrCl 30-49: 1.5 mg/kg 12 óránként.",
        "gfr_lt_10": "CrCl <30: 1.5 mg/kg 24 óránként.",
        "hd": "1.5 mg/kg 48 óránként, pótdózis dialízis után.",
        "crrt": "Dózismódosítás szükséges."
    },
    {
        "antibiotic_name": "Fluconazole",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "50% dózis.",
        "gfr_lt_10": "50% dózis.",
        "hd": "Normál dózis dialízis után.",
        "crrt": "Normál dózis adható."
    },
    {
        "antibiotic_name": "Voriconazole",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "Nincs szükség dózismódosításra.",
        "gfr_lt_10": "Nincs szükség dózismódosításra.",
        "hd": "Nincs szükség dózismódosításra.",
        "crrt": "Nincs szükség dózismódosításra."
    },
    {
        "antibiotic_name": "Caspofungin",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "Nincs szükség dózismódosításra.",
        "gfr_lt_10": "Nincs szükség dózismódosításra.",
        "hd": "Nincs szükség dózismódosításra.",
        "crrt": "Nincs szükség dózismódosításra."
    },
    {
        "antibiotic_name": "Amphotericin B",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "Nincs szükség dózismódosításra.",
        "gfr_lt_10": "Nincs szükség dózismódosításra.",
        "hd": "Nincs szükség dózismódosításra.",
        "crrt": "Nincs szükség dózismódosításra."
    },
    {
        "antibiotic_name": "Vancomycin (inhalációs)",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "Nincs szükség dózismódosításra.",
        "gfr_lt_10": "Nincs szükség dózismódosításra.",
        "hd": "Nincs szükség dózismódosításra.",
        "crrt": "Nincs szükség dózismódosításra."
    },
    {
        "antibiotic_name": "Tobramycin (inhalációs)",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "Nincs szükség dózismódosításra.",
        "gfr_lt_10": "Nincs szükség dózismódosításra.",
        "hd": "Nincs szükség dózismódosításra.",
        "crrt": "Nincs szükség dózismódosításra."
    },
    {
        "antibiotic_name": "Lefamulin",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "Nincs szükség dózismódosításra.",
        "gfr_lt_10": "Nincs szükség dózismódosításra.",
        "hd": "Nincs szükség dózismódosításra.",
        "crrt": "Nincs szükség dózismódosításra."
    },
    {
        "antibiotic_name": "Mupirocin",
        "gfr_gt_50": "Nincs szükség dózismódosításra (topikális).",
        "gfr_10_50": "Nincs szükség dózismódosításra (topikális).",
        "gfr_lt_10": "Nincs szükség dózismódosításra (topikális).",
        "hd": "Nincs szükség dózismódosításra (topikális).",
        "crrt": "Nincs szükség dózismódosításra (topikális)."
    },
    {
        "antibiotic_name": "Fusidinsav",
        "gfr_gt_50": "Nincs szükség dózismódosításra.",
        "gfr_10_50": "Nincs szükség dózismódosításra.",
        "gfr_lt_10": "Nincs szükség dózismódosításra.",
        "hd": "Nincs szükség dózismódosításra.",
        "crrt": "Nincs szükség dózismódosításra."
    }
]
