

<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><title>
	Manabadi – Home
</title><link rel="stylesheet" href="MB-2019/HomePAGE/css/Bootstrap.css" />

<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
}
form {
  margin: 0;
  padding: 0;
}

.gold_bg {background-color: #007bff; border-radius: 25px; padding:3px 20px; float: right; margin-right: 4%;}
.gold_bg a{text-decoration:none;font-size: 14px; color: #ffffff;}
.gold_bg:hover{background-color: #2075d1; border-radius: 25px; padding:3px 23px;}

.gold_bg_g {background-color: #38a169; border-radius: 25px; padding:5px 20px; float: right; margin-right: 4%;}
.gold_bg_g a{text-decoration:none;font-size: 14px; color: #ffffff;}
.gold_bg_g:hover{background-color: #258752; border-radius: 25px; padding:5px 23px;}


/* .grid{
  align-items:start;
} */

:root{
  --primary:#4f6ef7;
  --primary-soft:#eef2ff;

  --ssc:#f59e0b;
  --ssc-soft:#fff7ed;

  --bg:#f6f7fb;
  --card:#ffffff;
  --text:#0f172a;
  --muted:#64748b;

  --shadow:0 12px 30px rgba(15,23,42,.08);
  --shadow-soft:0 6px 16px rgba(15,23,42,.06);
}


/* HORIZONTAL SCROLL STRIP */
/* HORIZONTAL SCROLL */
.hscroll{
  display:flex;
  gap:14px;
  overflow-x:auto;
  overflow-y:hidden;
  padding-bottom:10px;
  scroll-snap-type:x mandatory;
  -webkit-overflow-scrolling:touch;
  
  scrollbar-width:thin;
  scrollbar-color:#94a3b8 #e5e7eb;
}

/* Desktop scrollbar (visible & clean) */
.hscroll::-webkit-scrollbar{
  height: 2px !important;
}

.hscroll::-webkit-scrollbar-track{
  background:#e5e7eb;
  border-radius:6px;
}

.hscroll::-webkit-scrollbar-thumb{
  background:#94a3b8;
  border-radius:6px;
}


/* CARD — smaller so 3 fit */
.hcard{
flex:0 0 auto; 
  min-width:120px;     /* ⬅ KEY CHANGE */
  height:80px;         /* ⬅ KEY CHANGE */

  background:#ffffff;
  border:1px solid #e2e8f0;
  border-radius:14px;
  box-shadow:0 6px 14px rgba(15,23,42,.06);

  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align:center;

  scroll-snap-align:start;
  text-decoration:none;
  color:#0f172a;
}

/* Icon */
.hcard img{
  width:28px;
  height:28px;
  margin-bottom:4px;
}

/* Title */
.hcard span{
  font-size:small;
  font-weight:400;
  line-height:1.1;
}


/* SCROLL CARD */
.hcard{
  min-width:125px;
  height:95px;
  background:#ffffff;
  border:1px solid #e2e8f0;
  border-radius:14px;
  box-shadow:0 6px 16px rgba(15,23,42,.06);
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align:center;
  scroll-snap-align:start;
  text-decoration:none;
  color:#0f172a;
}

/* Scroll indicator bar */
.scroll-indicator{
  width:100%;
  height:4px;
  background:#e5e7eb;
  border-radius:4px;
  margin-top:6px;
  position:relative;
  overflow:hidden;
}

.scroll-indicator::after{
  content:"";
  position:absolute;
  left:0;
  top:0;
  width:35%;            /* indicator size */
  height:100%;
  background:#94a3b8;
  border-radius:4px;
}

/* DESKTOP: convert to grid 
@media(min-width:768px){
  .hscroll{
    overflow-x:unset;
    display:grid;
    grid-template-columns:repeat(3,1fr);
  }
}*/

/* Page spacing */
.page{
  max-width:1100px;
  margin:auto;
  padding:0px 16px;
}

/* GRID spacing */
.grid{
  display:grid;
  grid-template-columns:1fr;
  gap:20px;   /* ⬅ IMPORTANT */
}
@media(min-width:900px){
  .grid{
    grid-template-columns:1fr 1fr;
    gap:22px;
  }
}

/* CARD */
.card{
  background:var(--card);
  border-radius:18px;
  padding:18px;
  margin-bottom:18px; /* ⬅ GAP BETWEEN BOXES */
  box-shadow:var(--shadow);
  border:1px solid #e5e7eb; /* default neutral */
}
.card,
.start-smart-card{
  border:1px solid #e5e7eb;   /* neutral light border */
}

.card:hover,
.quick-box:hover{
  border-color:#c7d2fe;
}
.quick-box{
  border:1px solid #e6ebff;
}

.section-inter{
  border-color:#dbe4ff;          /* soft blue */
}
.section-ssc{
  border-color:#fde6c8;          /* light orange */
}
.section-quick{
  border-color:#e6ebff;
}
.section-exams{
  border-color:#ced1d4;
}
.section-updates{
  border-color:#e5e7eb;
}



/* START SMART CARD */
.start-smart-card{
  background:linear-gradient(180deg,#f4f1ff,#ffffff);
  border-radius:18px;
  border-color:#e0dcff;
  padding:18px;
  box-shadow:0 12px 30px rgba(88,80,236,.15);
  margin-bottom:22px;
}

/* Header row */
.start-smart-head{
  display:flex;
  gap:12px;
  align-items:center;
  margin-bottom:14px;
}


.start-icon{
  font-size:34px;                 /* 👈 key fix */
  line-height:1;
  width:44px;
  height:44px;
  border-radius:12px;
  background:#eef2ff;             /* soft highlight */
  display:flex;
  align-items:center;
  justify-content:center;
  box-shadow:0 4px 10px rgba(79,70,229,.15);
}


.start-smart-head img{
  width:44px;
  height:44px;
}

/* Title */
.start-smart-title{
  font-size:30px;          /* BIGGER TITLE */
  font-weight:800;
  color:#2e2a8f;
  margin:0;
}

/* Description */
.start-smart-desc{
  font-size:14px;
  color:#4b5563;
  margin-top:4px;
}

/* Action buttons */
.start-smart-actions{
  margin-top:16px;
  display:flex;
  gap:12px;
      justify-content: center;
}

.btn-start{
  background:linear-gradient(135deg,#5b6cff,#4f46e5);
  color:#fff;
  border:none;
  border-radius:10px;
  padding:10px 16px;   /* 👈 text width + ~10px */
  font-size:15px;
  font-weight:700;
  width:auto;          /* 👈 IMPORTANT */
  display:inline-block;
}


/* Skip button */
.btn-skip{
  flex:1;
  background:#ffffff;
  border:1px solid #d1d5db;
  border-radius:12px;
  padding:12px 0;
  font-size:15px;
  font-weight:600;
  color:#374151;
}


/* SECTION TITLE */
.section-title{
  font-weight:700;
  font-size:15px;
  margin-bottom:12px;
}

/* TOGGLE BASE */
.toggle{
  background:#eef2ff;
  border-radius:14px;
  display:flex;
  padding:4px;
  gap:4px;
}

/* TOGGLE PILL */
.toggle span{
  flex:1;
  text-align:center;
  padding:10px 0;
  border-radius:12px;
  font-weight:600;
  cursor:pointer;
  color:#334155;
}

/* BLUE GRADIENT (INTER) */
.toggle.inter .active{
  background:linear-gradient(135deg,#4f6ef7,#6d8bff);
  color:#fff;
  box-shadow:var(--shadow-soft);
}

/* ORANGE GRADIENT (SSC) */
.toggle.ssc{
  background:var(--ssc-soft);
}
.toggle.ssc .active{
  background:linear-gradient(135deg,#f59e0b,#fbbf24);
  color:#fff;
  box-shadow:var(--shadow-soft);
}

/* CHIPS CONTAINER */
.chips{
  display:grid;
  grid-template-columns:repeat(2, 1fr); /* mobile: 2 per row */
  gap:12px;
  margin-top:14px;
}

/* CHIP (square / squircle style) */
.chip{
  height:44px;
  min-width:140px;

  background:#f1f5f9;                 /* light chip bg */
  border:1px solid #d0d7e2;           /* slightly darker border */
  border-radius:10px;                 /* squircle (NOT pill) */

  font-size:13px;
  font-weight:600;
  color:#0f172a;

  display:flex;
  align-items:center;
  justify-content:center;
  gap:8px;

  box-shadow:0 4px 10px rgba(15,23,42,.05); /* soft lift */
}


/* Desktop improvement */
@media(min-width:768px){
  .chips{
    grid-template-columns:repeat(3, 1fr);
  }
}

/* ENTRANCE BOX */
.exam{
  padding:14px 14px;
  border-radius:14px;
  background:#f8fafc;
  border:1px solid #e2e8f0;
  box-shadow:var(--shadow-soft);
  margin-top:12px;
}
.exam-title{
  font-size:16px;
  font-weight:700;
  color:#0f172a;
  margin-bottom:6px;
}
.exam-desc{
  font-size:13px;
  color:var(--muted);
  line-height:1.6;
}
.exam-desc span{
  margin:0 6px;
  color:#cbd5e1;
  font-weight:700;
}

/* UPDATES */
.update{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:10px 0;
  border-bottom:1px solid #e5e7eb;
}
.updates-wrapper{
  position:relative;
  overflow:hidden;
  transition:max-height .3s ease;
}

/* COLLAPSED STATE (≈ 6 items) */
.updates-wrapper.collapsed{
  max-height:360px;
}

.badge{
  padding:4px 10px;
  border-radius:999px;
  font-size:11px;
  font-weight:700;
}
.badge.out{background:#dcfce7;color:#166534}
.badge.new{background:#fef3c7;color:#92400e}

/* Updates wrapper */
.updates-wrapper{
  position:relative;
  max-height:360px;     /* shows ~6 items */
  overflow:hidden;
}

/* Individual row */
.update-row{
  padding:0px 0;
  border-bottom:1px solid #e5e7eb;
}
.fade-mask{
  position:absolute;
  bottom:0;
  left:0;
  right:0;
  height:70px;
  background:linear-gradient(to bottom,
    rgba(255,255,255,0),
    rgba(255,255,255,1));
  pointer-events:none;
}

/* DATE */
.update-date{
  font-size:14px;
  font-weight:700;
  color:#2563eb;
  margin:14px 0 6px;
}


/* CATEGORY */
.update-type{
  font-size:11px;
  font-weight:400;
  color:#9ca3af;
  letter-spacing:.04em;
  text-transform:uppercase;
  margin-bottom:4px;
}
/* TITLE */
.update-title{
  font-size:14px;
  color:#334155;
  text-decoration:none;
  line-height:1.45;
}

.update-title:hover{
  color:#2563eb;
}



/* Fade mask */
.fade-mask{
  position:absolute;
  bottom:0;
  left:0;
  width:100%;
  height:60px;
  background:linear-gradient(
    to bottom,
    rgba(255,255,255,0),
    #ffffff
  );
}

/* Load more */
.load-more-wrap{
  display:flex;
  justify-content:center;
  margin-top:14px;
}

.btn-load{
  background:#eef2ff;
  border:1px solid #c7d2fe;
  color:#3730a3;
  font-weight:600;
  padding:8px 18px;
  border-radius:10px;
  cursor:pointer;
}

.university-section{
  border:1px solid #dbe3ff;
}

.uni-item{
  display:flex;
  align-items:center;
  gap:12px;
  padding:10px 12px;
  border-radius:14px;
  background:#f8fafc;
  margin-bottom:10px;
  cursor:pointer;
}

.uni-item img{
  width:28px;
  height:28px;
}

.uni-item span{
  flex:1;
  font-size:14px;
  font-weight:600;
  color:#334155;
}

.uni-item .arrow{
  color:#94a3b8;
  font-size:18px;
}

.load-more-wrap{
  text-align:center;
  margin-top:12px;
}
/* ===== SERVICE GRID ===== */
.service-grid{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:12px;
  margin-top:14px;
}

/* Card base */
.service-card{
  height:60px;
  border-radius:14px;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:8px;
  font-weight:600;
  font-size:14px;
  text-decoration:none;
  color:#0f172a;
  background:#f8fafc;
  border:1px solid #e5e7eb;
}

/* Icon */
.service-icon{
  font-size:18px;
}

/* Pastel colors */
.service-card.blue{ background:#eef2ff; }
.service-card.green{ background:#ecfdf5; }
.service-card.orange{ background:#fff7ed; }
.service-card.violet{ background:#f5f3ff; }
.service-card.teal{ background:#f0fdfa; }
.service-card.pink{ background:#fdf2f8; }

/* ===== TEACHERS ===== */
.teachers .service-card{
  background:#f5f3ff;
}

/* ===== ARTICLES ===== */
.article-list{
  list-style:none;
  padding:0;
  margin-top:10px;
}

.article-list li{
  padding:10px 0;
  border-bottom:1px solid #e5e7eb;
}

.article-list a{
  text-decoration:none;
  font-size:14px;
  font-weight:600;
  color:#1e40af;
}

.article-list .badge{
  margin-left:6px;
}

/* ============================= */
/* EDUCATION SERVICES (FINAL UI) */
/* ============================= */

.edu-services-wrap{
  margin-top:22px;
}

.edu-services-head{
  text-align:center;
  margin-bottom:18px;
}

.edu-services-head h2{
  font-size:22px;
  font-weight:800;
  color:#1e293b;
  margin:0;
}

.edu-services-head p{
  margin-top:6px;
  font-size:14px;
  color:#64748b;
}

/* GRID */
.edu-services-grid{
  display:grid;
   grid-template-columns:repeat(2,1fr);   /* ✅ Mobile: 2 x 2 */
  /*grid-template-columns:repeat(3,1fr);*/   /* MOBILE: 3 columns */
  gap:14px;
}

/* CARD */
.edu-service-card{
  background:#ffffff;
  border-radius:18px;
  border:1px solid #e5e7eb;
  box-shadow:var(--shadow-soft);
  padding:18px 10px 16px;
  text-align:center;
  transition:all .25s ease;
  text-decoration:none;
  color:#0f172a;
}

.edu-service-card:hover{
  transform:translateY(-4px);
  box-shadow:var(--shadow);
  border-color:#c7d2fe;
}

/* ICON */
.edu-service-card img{
  width:120px;
  margin-bottom:5px;
}

/* TITLE */
.edu-service-card span{
  display:block;
  font-size:14px;
  font-weight:700;
  line-height:1.2;
}

/* VIEW ALL BUTTON CARD */
.edu-view-all{
  display:flex;
  align-items:center;
  justify-content:center;
}

.edu-view-all button{
  background:#38a169;
  color:#ffffff;
  border:none;
  border-radius:14px;
  padding:12px 22px;
  font-size:15px;
  font-weight:700;
  box-shadow:0 6px 18px rgba(16,185,129,.35);
}

/* DESKTOP */
@media(min-width:768px){
  .edu-services-grid{
    grid-template-columns:repeat(auto-fit,minmax(160px,1fr));
  }
}

/* =============================== */
/* TEACHERS & CAREERS – CHIP BOXES */
/* =============================== */

/* Parent grid (2 boxes) */
.tc-grid{
  display:grid;
  grid-template-columns:1fr;
  gap:18px;
}

@media(min-width:900px){
  .tc-grid{
    grid-template-columns:1fr 1fr;
  }
}

/* Each box */
.tc-box{
  background:#ffffff;
  border-radius:18px;
  padding:16px;
  border:1px solid #e5e7eb;
  box-shadow:var(--shadow);
}

/* Chip list */
.tc-list{
  display:grid;
  gap:12px;
}

/* Individual chip */
.tc-chip{
  display:flex;
  align-items:center;
  gap:12px;

  padding:14px 14px;
  background:#f8fafc;
  border:1px solid #e5e7eb;
  border-radius:14px;

  text-decoration:none;
  color:#0f172a;

  box-shadow:0 6px 16px rgba(15,23,42,.06);
  transition:all .25s ease;
}

.tc-chip:hover{
  transform:translateY(-2px);
  box-shadow:0 10px 26px rgba(15,23,42,.12);
  border-color:#c7d2fe;
}

/* Icon */
.tc-chip img{
  width:36px;
  height:36px;
  flex-shrink:0;
}

/* Text */
.tc-title{
  flex:1;
}

/* Right arrow */
.tc-chip i{
  font-size:20px;
  color:#94a3b8;
}

/* Badge */
.tc-badge{
  display:inline-flex;       /* ⬅ KEY FIX */
  align-items:center;
  justify-content:center;
  flex:0 0 auto;   /* ⬅ DO NOT GROW */

  width:auto;               /* ⬅ prevent stretching */
  min-width:auto;
  white-space:nowrap;       /* keep text in one line */

  font-size:11px;
  font-weight:800;
  padding:4px 10px;
  border-radius:999px;
}



.tc-badge.out{
  background:#fde68a;
  color:#92400e;
}

.tc-badge.new{
  background:#dcfce7;
  color:#166534;
}

.tc-badge.guide{
  background:#dbeafe;
  color:#1e40af;
}

/* Button */
.tc-btn{
  margin-top:16px;
  display:flex;
  justify-content:center;
}

.tc-btn button{
  background:#38a169;
  color:#ffffff;
  border:none;
  border-radius:14px;
  padding:12px 22px;
  font-size:15px;
  font-weight:700;
  box-shadow:0 6px 18px rgba(16,185,129,.35);
}
/* Box header */
.tc-head{
  margin-bottom:14px;
}

.tc-head h3{
  margin:0;
  font-size:18px;
  font-weight:800;
  color:#1e293b;
}

.tc-head p{
  margin-top:4px;
  font-size:14px;
  color:#64748b;
  line-height:1.5;
}
/* =============================== */
/* MOBILE DENSITY MODE (IMPORTANT) */
/* =============================== */
@media (max-width: 480px){

  /* Reduce base text slightly */
  body{
    font-size:13px;
  }

  /* Cards: tighter padding */
  .card,
  .tc-box,
  .edu-service-card{
    padding:12px !important;
  }

  /* Reduce grid gaps */
  .grid,
  .edu-services-grid,
  .tc-grid{
    gap:12px !important;
  }

  /* Education service icons */
  .edu-service-card img{
    width:88px;   /* ⬅ was 120px */
  }

  /* Titles under icons */
  .edu-service-card span{
    font-size:13px;
  }

  /* Teachers chips */
  .tc-chip{
    padding:10px 12px;
  }

  /* Chip text */
  .tc-title,
  .service-text{
    font-size:13px;
  }

  /* Reduce button height */
  .btn-start,
  .tc-btn button,
  .edu-view-all button{
    padding:8px 14px;
    font-size:14px;
  }

  /* Reduce section title size */
  .edu-services-head h2,
  .tc-head h3{
    font-size:17px;
  }

  .edu-services-head p,
  .tc-head p{
    font-size:13px;
  }

}
/* ===================================== */
/* MOBILE ABOVE-THE-FOLD COMPRESSION     */
/* ===================================== */
@media (max-width: 480px){

  /* Start Smart card */
  .start-smart-card{
    padding:12px;
    margin-bottom:12px;
  }

  .start-smart-title{
    font-size:16px;
  }

  .start-smart-desc{
    font-size:13px;
  }

  .btn-start{
    padding:8px 14px;
    font-size:14px;
  }

  /* Horizontal cards */
  .hcard{
    min-width:105px;
    height:70px;
  }

  .hcard img{
    width:22px;
    height:22px;
  }

  .hcard span{
    font-size:11.5px;
  }

  /* Section titles */
  .section-title{
    font-size:14px;
    margin-bottom:8px;
  }

  /* Toggle pills */
  .toggle span{
    padding:8px 0;
    font-size:13px;
  }

  /* Chips – BIG WIN */
  .chip{
    height:36px;          /* ⬅ from 44px */
    font-size:12.5px;
  }

  /* Reduce vertical gaps globally */
  .card{
    padding:12px;
    margin-bottom:12px;
  }

  .grid{
    gap:14px;
  }
}
@media (max-width: 480px){
  .chip{
    height:34px;
  }
  .hcard{
    height:66px;
  }
}
/* ===================================== */
/* FINAL ABOVE-THE-FOLD TUNING (MOBILE)  */
/* ===================================== */
@media (max-width: 480px){

  /* Section card spacing */
  .card{
    padding:10px !important;
    margin-bottom:10px !important;
  }

  /* Section headers (INTERMEDIATE / 10TH CLASS) */
  .section-title{
    font-size:13.5px;
    margin-bottom:6px;
  }

  /* Get Alerts row */
  .section-title + a,
  .get-alerts{
    font-size:12.5px;
  }

  /* Toggle container */
  .toggle{
    padding:3px;
  }

  .toggle span{
    padding:7px 0;        /* ⬅ reduced */
    font-size:12.5px;
  }

  /* Chips inside Inter / SSC */
  .chip{
    height:34px;          /* ⬅ FINAL key */
    font-size:12px;
    gap:6px;
  }

  /* Reduce space between chip grids */
  .chips{
    gap:10px;
    margin-top:10px;
  }

  /* Horizontal cards indicator gap */
  .scroll-indicator{
    margin-top:4px;
  }

}

/* Year toggle */
.year-toggle{
  display:flex;
  gap:8px;
  background:#f1f5f9;
  border-radius:12px;
  padding:3px;
  margin-top:8px;
}

.year-toggle span{
  flex:1;
  text-align:center;
  padding:6px 0;
  font-size:12.5px;
  font-weight:600;
  border-radius:10px;
  cursor:pointer;
  color:#334155;
}

.year-toggle .active{
  background:#ffffff;
  box-shadow:0 2px 6px rgba(0,0,0,.08);
}

.ad-box{
  margin:18px 0;
  border-radius:14px;
  overflow:hidden;
  background:#f8fafc;
  border:1px solid #e5e7eb;
  text-align:center;
}

.ad-box img{
  width:100%;
  height:auto;
  display:block;
}


.updates-wrapper{
  position:relative;
  max-height:420px;     /* collapsed height */
  overflow:hidden;
  transition:max-height .3s ease;
}

.updates-wrapper.expanded{
  max-height:2000px;    /* enough for 40+ rows */
}

/* HOT ANNOUNCEMENT BOX */
.hot-announce{
  display:flex;
  align-items:center;
  gap:12px;

  background:linear-gradient(135deg,#fff7ed,#fef3c7);
  border:1px solid #fde68a;
  border-radius:14px;

  padding:14px 16px;
  margin:14px 0 18px;

  box-shadow:0 6px 16px rgba(15,23,42,.06);
}

/* Left icon */
.hot-icon{
  font-size:22px;
  flex-shrink:0;
}

/* Text */
.hot-text{
  flex:1;
  font-size:14px;
  color:#78350f;
  line-height:1.4;
}

.hot-text strong{
  font-weight:700;
  margin-right:6px;
}

/* Right pulse icon */
.hot-action{
  font-size:20px;
  animation:pulse 1.4s infinite;
}

/* Pulse animation */
@keyframes pulse{
  0%{ transform:scale(1); opacity:.7;}
  50%{ transform:scale(1.15); opacity:1;}
  100%{ transform:scale(1); opacity:.7;}
}

/* Mobile tweak */
@media(max-width:600px){
  .hot-announce{
    font-size:13px;
    padding:12px 14px;
  }
}
/* HEADER */
.top-header{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:10px 16px;
  background:#ffffff;
  border-bottom:1px solid #e5e7eb;
}

/* LOGO */
.site-logo{
  height:36px;
}

/* RIGHT SIDE */
.header-actions{
  display:flex;
  align-items:center;
  gap:10px;
}

/* CONTACT BUTTON */
.contact-btn{
  display:flex;
  align-items:center;
  gap:6px;

  padding:8px 12px;
  border-radius:10px;
  border:1px solid #e5e7eb;
  background:#f8fafc;

  font-size:12px;
  font-weight:600;
  color:#1f2937;
  text-decoration:none;

  box-shadow:0 4px 10px rgba(15,23,42,.06);
}

.contact-btn:hover{
  background:#eef2ff;
  color:#2563eb;
}

/* LOGIN */
.login-wrap{
  position:relative;
}

.login-btn{
  background:#ffffff;
  border:1px solid #e5e7eb;
  border-radius:10px;
  padding:8px 14px;
  font-size:14px;
  font-weight:600;
  cursor:pointer;
  box-shadow:0 4px 10px rgba(15,23,42,.06);
}

/* DROPDOWN */
.login-menu{
  display:none;
  position:absolute;
  right:0;
  top:46px;
  background:#ffffff;
  border:1px solid #e5e7eb;
  border-radius:12px;
  min-width:160px;
  box-shadow:0 12px 24px rgba(15,23,42,.12);
  z-index:1000;
}

.login-menu a{
  display:block;
  padding:10px 14px;
  font-size:14px;
  color:#1f2937;
  text-decoration:none;
}

.login-menu a:hover{
  background:#f1f5f9;
}

/* MOBILE */
@media(max-width:600px){
  .contact-text{ display:none; } /* icon only */
  .site-logo{ height:32px; }
}


</style>

<script>
function toggle(el,id){
 document.querySelectorAll("#"+id+" span").forEach(s=>s.classList.remove("active"));
 el.classList.add("active");
}

</script>
<script>
const ads = [
  '/images/slider/Josh_4.jpg',
  '/images/slider/Josh_4.jpg',
  '/images/slider/Josh_4.jpg'
  
];

let i = 0;
setInterval(()=>{
  document.querySelector('.college-ad img').src = ads[i % ads.length];
  i++;
}, 5000);
</script>


<script>
/* ------------------------------
   INTERMEDIATE URL CONFIG
   (Change URLs later if needed)
--------------------------------*/
const interURLs = {
  AP: {
    1: {
      hall:    "/boards/ap-inter-1st-year-hall-ticket/",
      results: "/boards/ap-intermediate-1st-year-result/",
      time:    "/boards/ap-inter-1st-year-time-table-2026/",
      model:   "/65/AP%20Inter-Model-Papers",
	  previous:   "/65/AP-Intermediate-Question-Papers",
      guess:   "/qp/downloadqpnew.aspx",
	  full:   "/boards/ap-intermediate/"
    },
    2: {
       hall:    "/boards/ap-inter-2nd-year-hall-ticket/",
      results: "/boards/ap-inter-2nd-year-results/",
      time:    "/boards/ap-inter-2nd-year-time-table-2026/",
      model:   "/65/AP%20Inter-Model-Papers",
	  previous: "/65/AP-Intermediate-Question-Papers",
      guess:   "/qp/downloadqpnew.aspx",
	  full:   "/boards/ap-intermediate/"
    }
  },
  TS: {
    1: {
      hall:    "/boards/ts-inter-1st-year-hall-ticket/",
      results: "/boards/tg-inter-1st-year-results/",
      time:    "/boards/ts-inter-1st-year-time-table-2026/",
      model:   "/boards/tg-inter-modelpapers-2026/",
	  previous: "/160/TS-Inter-Question-Papers",
      guess:   "/qp/downloadqpnew.aspx",
	  full:   "/boards/tg-intermediate/"
    },
    2: {
      hall:    "/boards/ts-inter-2nd-year-hall-ticket/",
      results: "/boards/tg-inter-2nd-year-results/",
      time:    "/boards/ts-inter-2nd-year-time-table-2026/",
      model:   "/boards/tg-inter-modelpapers-2026/",
	  previous: "/160/TS-Inter-Question-Papers",
      guess:   "/qp/downloadqpnew.aspx",
	  full:   "/boards/tg-intermediate/"
    }
  }
};


/* ------------------------------
   TOGGLE STATE HANDLERS
--------------------------------*/
function toggle(el, group){
  const parent = el.parentElement;
  parent.querySelectorAll('span').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
  updateInterLinks();
}

function toggleYear(el, group){
  const parent = el.parentElement;
  parent.querySelectorAll('span').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
  updateInterLinks();
}


/* ------------------------------
   READ CURRENT SELECTION
--------------------------------*/
function getInterSelection(){
  const stateText = document.querySelector('#inter .active').innerText;
  const yearText  = document.querySelector('#interYear .active').innerText;

  const state = stateText.includes('AP') ? 'AP' : 'TS';
  const year  = yearText.includes('1st') ? 1 : 2;

  return { state, year };
}


/* ------------------------------
   UPDATE CHIP LINKS
--------------------------------*/
function updateInterLinks(){
  const { state, year } = getInterSelection();
  const data = interURLs[state][year];

  document.getElementById('chip-hall').href    = data.hall;
  document.getElementById('chip-results').href = data.results;
  document.getElementById('chip-time').href    = data.time;
  document.getElementById('chip-guess').href   = data.guess;
  document.getElementById('chip-full').href   = data.full;
}


/* ------------------------------
   INIT ON PAGE LOAD
--------------------------------*/
document.addEventListener("DOMContentLoaded", updateInterLinks);
</script>
<script>
/* ------------------------------
   SSC URL CONFIG
   (Change URLs anytime later)
--------------------------------*/
const sscURLs = {
  AP: {
    results: "https://www.manabadi.co.in/boards/ap-10th-class-results/",
    hall:    "https://www.manabadi.co.in/boards/ap-10th-class-hall-ticket/",
    model:   "https://www.manabadi.co.in/3/AP-SSC-Model-Papers",
	guess:   "https://www.manabadi.co.in/sscqp/downloadqpnew.aspx",
	 time:    "https://www.manabadi.co.in/boards/ap-10th-class-time-table/"
  },
  TS: {
    results: "https://www.manabadi.co.in/boards/tg-10th-class-results/",
    hall:    "https://www.manabadi.co.in/boards/tg-10th-class-hall-ticket/",
    model:   "https://www.manabadi.co.in/117/TS%20SSC-Model-Papers",
	guess:   "https://www.manabadi.co.in/sscqp/downloadqpnew.aspx",
	time:    "https://www.manabadi.co.in/boards/ts-10th-class-time-table/"
  }
};


/* ------------------------------
   READ SSC SELECTION
--------------------------------*/
function getSSCSelection(){
  const stateText = document.querySelector('#ssc .active').innerText;
  return stateText.includes('AP') ? 'AP' : 'TS';
}


/* ------------------------------
   UPDATE SSC CHIP LINKS
--------------------------------*/
function updateSSCLinks(){
  const state = getSSCSelection();
  const data = sscURLs[state];

  document.getElementById('ssc-results').href = data.results;
  document.getElementById('ssc-hall').href    = data.hall;
  document.getElementById('ssc-model').href   = data.model;
  document.getElementById('ssc-guess').href   = data.guess;
  document.getElementById('ssc-time').href   = data.time;
}


/* ------------------------------
   HOOK INTO EXISTING TOGGLE
--------------------------------*/
const originalToggle = toggle;
toggle = function(el, group){
  originalToggle(el, group);

  if(group === 'ssc'){
    updateSSCLinks();
  }
};


/* ------------------------------
   INIT ON PAGE LOAD
--------------------------------*/
document.addEventListener("DOMContentLoaded", updateSSCLinks);
</script>


<script>
var COLLAPSED_COUNT = 6;   // test value
var expanded = false;

function initUpdates(){
  var wrapper = document.getElementById("updatesWrapper");
  var rows = wrapper.querySelectorAll(".update-row");
  var mask = document.getElementById("fadeMask");
  var btn  = document.getElementById("btnLoadMore");

  if(!rows.length) return;

  var lastDate = "";
  var visibleCount = expanded ? rows.length : COLLAPSED_COUNT;

  for(var i=0;i<rows.length;i++){
    var row = rows[i];
    var date = row.getAttribute("data-date");
    var dateDiv = row.querySelector(".update-date");

    if(i < visibleCount){
      row.style.display = "block";

      if(date !== lastDate){
        dateDiv.innerHTML = date;
        dateDiv.style.display = "block";
        lastDate = date;
      }else{
        dateDiv.style.display = "none";
      }
    }else{
      row.style.display = "none";
    }
  }

  if(expanded){
    wrapper.classList.add("expanded");
    mask.style.display = "none";
    btn.innerHTML = "Load Less";
  }else{
    wrapper.classList.remove("expanded");
    mask.style.display = "block";
    btn.innerHTML = "Load More";
  }
}

document.addEventListener("DOMContentLoaded", function(){
  initUpdates();
  document.getElementById("btnLoadMore").onclick = function(){
    expanded = !expanded;
    initUpdates();
  };
});
</script>


<script>
var STEP = 6;
var state = {};

function initList(listId, btnId){
  var list = document.getElementById(listId);
  if(!list) return;

  var items = list.querySelectorAll(".uni-item");
  if(!state[listId]) state[listId] = STEP;

  for(var i=0;i<items.length;i++){
    items[i].style.display = (i < state[listId]) ? "flex" : "none";
  }

  var btn = document.getElementById(btnId);
  if(!btn) return;

  btn.innerHTML = (state[listId] >= items.length)
    ? "Show Less"
    : "Show More";
}

function toggleList(listId, btnId){
  var list = document.getElementById(listId);
  if(!list) return;

  var items = list.querySelectorAll(".uni-item");

  if(state[listId] >= items.length){
    state[listId] = STEP;
  }else{
    state[listId] += STEP;
  }

  initList(listId, btnId);
}

document.addEventListener("DOMContentLoaded", function(){
  initList("universityList","btnUniMore");
  initList("boardList","btnBoardMore");
});
</script>
<script>
document.addEventListener("DOMContentLoaded", function () {

  var loginBtn = document.querySelector(".login-btn");
  var menu = document.getElementById("loginMenu");

  // Toggle menu
  window.toggleLoginMenu = function (e) {
    e.stopPropagation();
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
  };

  // Prevent clicks inside menu from closing
  menu.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  // Close when clicking outside
  document.addEventListener("click", function () {
    menu.style.display = "none";
  });

});
</script>


</head>

<body>
<form name="ctl01" method="post" action="homepage_new_2026-WR3.aspx" id="ctl01">
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPDwUJNzIyNDEyNDM0D2QWAgIDD2QWAgIBDzwrAAkBAA8WBB4IRGF0YUtleXMWAB4LXyFJdGVtQ291bnQCKGQWUGYPZBYCZg8VBQoyMC4wMi4yMDI2B1JFU1VMVFMGMTkzODUxQGh0dHBzOi8vd3d3Lm1hbmFiYWRpLmNvLmluL2JvYXJkcy90cy1pbnRlci0ybmQteWVhci1oYWxsLXRpY2tldC8mVFMgSW50ZXIgMm5kIFllYXIgSGFsbCB0aWNrZXQgUmVsZWFzZWRkAgEPZBYCZg8VBQoyMC4wMi4yMDI2C0hBTExUSUNLRVRTBjE5MTMyMkBodHRwczovL3d3dy5tYW5hYmFkaS5jby5pbi9ib2FyZHMvdHMtaW50ZXItMXN0LXllYXItaGFsbC10aWNrZXQvJlRHIEludGVyIDFzdCBZZWFyIEhhbGwgVGlja2V0IDIwMjYgT3V0ZAICD2QWAmYPFQUKMjAuMDIuMjAyNgxOT1RJRklDQVRJT04GMTkzOTAyRWh0dHBzOi8vd3d3Lm1hbmFiYWRpLmNvLmluL2VudHJhbmNlLWV4YW1zL2FwLXBlY2V0LW5vdGlmaWNhdGlvbi0yMDI2Lx5BUCBQRUNFVCAyMDI2IE5vdGlmaWNhdGlvbiBPdXRkAgMPZBYCZg8VBQoyMC4wMi4yMDI2B1JFU1VMVFMGMTkzOTAxbWh0dHBzOi8vd3d3Lm1hbmFiYWRpLmNvLmluL1Jlc3VsdHNfMjYvSk5UVUgtQlBoYXJtYWN5LTFzdC1ZZWFyLVIxNS1TdXBwbHktRXhhbS1OT1YtMjAyNS1SZXN1bHRzLTIwLTItMjAyNi5hc3A8Sk5UVUggQi5QaGFybWFjeSAxc3QgWWVhciAoUjE1KSBTdXBwbHkgRXhhbSBOT1YtMjAyNSBSZXN1bHRzZAIED2QWAmYPFQUKMjAuMDIuMjAyNgdSRVNVTFRTBjE5MzkwMHVodHRwczovL3d3dy5tYW5hYmFkaS5jby5pbi9SZXN1bHRzXzI2L0pOVFVILUJQaGFybWFjeS0xc3QtWWVhci0xc3QtU2VtLVIxNy1TdXBwbHktRXhhbS1OT1YtMjAyNS1SZXN1bHRzLTIwLTItMjAyNi5hc3BESk5UVUggQi5QaGFybWFjeSAxc3QgWWVhciAxc3QgU2VtIChSMTcpIFN1cHBseSBFeGFtIE5PVi0yMDI1IFJlc3VsdHNkAgUPZBYCZg8VBQoyMC4wMi4yMDI2B1JFU1VMVFMGMTkzODk5dWh0dHBzOi8vd3d3Lm1hbmFiYWRpLmNvLmluL1Jlc3VsdHNfMjYvSk5UVUgtQlBoYXJtYWN5LTFzdC1ZZWFyLTFzdC1TZW0tUjIyLVN1cHBseS1FeGFtLU5PVi0yMDI1LVJlc3VsdHMtMjAtMi0yMDI2LmFzcERKTlRVSCBCLlBoYXJtYWN5IDFzdCBZZWFyIDFzdCBTZW0gKFIyMikgU3VwcGx5IEV4YW0gTk9WLTIwMjUgUmVzdWx0c2QCBg9kFgJmDxUFCjIwLjAyLjIwMjYHUkVTVUxUUwYxOTM4OTh1aHR0cHM6Ly93d3cubWFuYWJhZGkuY28uaW4vUmVzdWx0c18yNi9KTlRVSC1CUGhhcm1hY3ktMXN0LVllYXItMm5kLVNlbS1SMTctU3VwcGx5LUV4YW0tTk9WLTIwMjUtUmVzdWx0cy0yMC0yLTIwMjYuYXNwREpOVFVIIEIuUGhhcm1hY3kgMXN0IFllYXIgMm5kIFNlbSAoUjE3KSBTdXBwbHkgRXhhbSBOT1YtMjAyNSBSZXN1bHRzZAIHD2QWAmYPFQUKMjAuMDIuMjAyNgdSRVNVTFRTBjE5Mzg5N3ZodHRwczovL3d3dy5tYW5hYmFkaS5jby5pbi9SZXN1bHRzXzI2L0pOVFVILUJQaGFybWFjeS0xc3QtWWVhci0ybmQtU2VtLVIyMi1SZWd1bGFyLUV4YW0tTk9WLTIwMjUtUmVzdWx0cy0yMC0yLTIwMjYuYXNwRUpOVFVIIEIuUGhhcm1hY3kgMXN0IFllYXIgMm5kIFNlbSAoUjIyKSBSZWd1bGFyIEV4YW0gTk9WLTIwMjUgUmVzdWx0c2QCCA9kFgJmDxUFCjIwLjAyLjIwMjYHUkVTVUxUUwYxOTM4OTaGAWh0dHBzOi8vd3d3Lm1hbmFiYWRpLmNvLmluL1Jlc3VsdHNfMjYvQVUtTWFzdGVyLU9mLUhvc3BpdGFsLUFkbWluaXN0cmF0aW9uLTFzdC1TZW0tMS0xLVJldmFsdWF0aW9uLUV4YW0tTWF5LTIwMjUtUmVzdWx0cy0yMC0yLTIwMjYuYXNwVEFVIE1hc3RlciBPZiBIb3NwaXRhbCBBZG1pbmlzdHJhdGlvbiAxc3QgU2VtICgxLTEpIFJldmFsdWF0aW9uIEV4YW0gTWF5IDIwMjUgUmVzdWx0c2QCCQ9kFgJmDxUFCjIwLjAyLjIwMjYKVElNRSBUQUJMRQYxOTM4OTWLAWh0dHBzOi8vd3d3Lm1hbmFiYWRpLmNvLmluL1RpbWV0YWJsZXNfMjYvSk5UVUgtTUNBLUktSS1SZWd1bGFyLUV4YW1zLWNvbnN0aXR1ZW50LWNvbGxlZ2VzLW9ubHktRmVicnVhcnktTWFyY2gtMjAyNi1UaW1lLVRhYmxlLTIwLTItMjAyNi5hc3BWSk5UVUggTUNBIEktSSBSZWd1bGFyIEV4YW1zIChjb25zdGl0dWVudCBjb2xsZWdlcyBvbmx5KSBGZWJydWFyeS9NYXJjaC0yMDI2IFRpbWUgVGFibGVkAgoPZBYCZg8VBQoyMC4wMi4yMDI2DE5PVElGSUNBVElPTgYxOTM4OTRxaHR0cHM6Ly93d3cubWFuYWJhZGkuY28uaW4vTm90aWZpY2F0aW9uc18yNi9BUFBHRUNFVC0yMDI2LUV4YW1pbmF0aW9uLUluZm9ybWF0aW9uLURhdGEtTm90aWZpY2F0aW9uLTIwLTItMjAyNi5hc3A3QVBQR0VDRVQtMjAyNiBFeGFtaW5hdGlvbiBJbmZvcm1hdGlvbiBEYXRhIE5vdGlmaWNhdGlvbmQCCw9kFgJmDxUFCjE5LjAyLjIwMjYKVElNRSBUQUJMRQYxOTM4OTNBaHR0cHM6Ly93d3cubWFuYWJhZGkuY28uaW4vYm9hcmRzL3Rvc3Mtc3NjLWludGVyLXRpbWUtdGFibGUtMjAyNi8kVE9TUyBTU0MgJiBJbnRlciBUaW1lIFRhYmxlIDIwMjYgT3V0ZAIMD2QWAmYPFQUKMTkuMDIuMjAyNgdSRVNVTFRTBjE5Mzg5MnZodHRwczovL3d3dy5tYW5hYmFkaS5jby5pbi9SZXN1bHRzXzI2L0FVLVBoYXJtRC00dGgtWWVhcjQtMC1SZXZhbHVhdGlvbi1QaGFzZS1JSS1FeGFtLUFwcmlsLTIwMjUtUmVzdWx0cy0xOS0yLTIwMjYuYXNwR0FVIFBoYXJtLkQgNHRoIFllYXIoNC0wKSBSZXZhbHVhdGlvbiAoUGhhc2UtSUkpIEV4YW0gQXByaWwgMjAyNSBSZXN1bHRzZAIND2QWAmYPFQUKMTkuMDIuMjAyNgdSRVNVTFRTBjE5Mzg5MXVodHRwczovL3d3dy5tYW5hYmFkaS5jby5pbi9SZXN1bHRzXzI2L0FVLVBoYXJtRC0zcmQtWWVhcjMtMC1SZXZhbHVhdGlvbi1QaGFzZS1JSS1FeGFtLUp1bHktMjAyNS1SZXN1bHRzLTE5LTItMjAyNi5hc3BGQVUgUGhhcm0uRCAzcmQgWWVhcigzLTApIFJldmFsdWF0aW9uIChQaGFzZS1JSSkgRXhhbSBKdWx5IDIwMjUgUmVzdWx0c2QCDg9kFgJmDxUFCjE5LjAyLjIwMjYHUkVTVUxUUwYxOTM4OTB1aHR0cHM6Ly93d3cubWFuYWJhZGkuY28uaW4vUmVzdWx0c18yNi9BVS1QaGFybUQtMm5kLVllYXIyLTAtUmV2YWx1YXRpb24tUGhhc2UtSUktRXhhbS1KdWx5LTIwMjUtUmVzdWx0cy0xOS0yLTIwMjYuYXNwRkFVIFBoYXJtLkQgMm5kIFllYXIoMi0wKSBSZXZhbHVhdGlvbiAoUGhhc2UtSUkpIEV4YW0gSnVseSAyMDI1IFJlc3VsdHNkAg8PZBYCZg8VBQoxOS4wMi4yMDI2B1JFU1VMVFMGMTkzODg5eWh0dHBzOi8vd3d3Lm1hbmFiYWRpLmNvLmluL1Jlc3VsdHNfMjYvQVUtQlBoYXJtYWN5LTh0aC1TZW0tNC0yLVJldmFsdWF0aW9uLVBoYXNlLUlJLUV4YW0tQXByaWwtMjAyNS1SZXN1bHRzLTE5LTItMjAyNi5hc3BKQVUgQi5QaGFybWFjeSA4dGggU2VtICg0LTIpIFJldmFsdWF0aW9uIChQaGFzZS1JSSkgRXhhbSBBcHJpbCAyMDI1IFJlc3VsdHNkAhAPZBYCZg8VBQoxOS4wMi4yMDI2B1JFU1VMVFMGMTkzODg4fGh0dHBzOi8vd3d3Lm1hbmFiYWRpLmNvLmluL1Jlc3VsdHNfMjYvQVUtQlBoYXJtYWN5LTNyZC1TZW0tMi0xLVJldmFsdWF0aW9uLVBoYXNlLUlJLUV4YW0tRmVicnVhcnktMjAyNS1SZXN1bHRzLTE5LTItMjAyNi5hc3BNQVUgQi5QaGFybWFjeSAzcmQgU2VtICgyLTEpIFJldmFsdWF0aW9uIChQaGFzZS1JSSkgRXhhbSBGZWJydWFyeSAyMDI1IFJlc3VsdHNkAhEPZBYCZg8VBQoxOS4wMi4yMDI2B1JFU1VMVFMGMTkzODg3eWh0dHBzOi8vd3d3Lm1hbmFiYWRpLmNvLmluL1Jlc3VsdHNfMjYvQVUtQlBoYXJtYWN5LTFzdC1TZW0tMS0xLVJldmFsdWF0aW9uLVBoYXNlLUlJLUV4YW0tQXByaWwtMjAyNS1SZXN1bHRzLTE5LTItMjAyNi5hc3BKQVUgQi5QaGFybWFjeSAxc3QgU2VtICgxLTEpIFJldmFsdWF0aW9uIChQaGFzZS1JSSkgRXhhbSBBcHJpbCAyMDI1IFJlc3VsdHNkAhIPZBYCZg8VBQoxOS4wMi4yMDI2D0lNUE9SVEFOVCBEQVRFUwYxOTM4ODaeAWh0dHBzOi8vd3d3Lm1hbmFiYWRpLmNvLmluL1RpbWV0YWJsZXNfMjYvT1UtQlMtTVMtQ29tcHV0ZXItU2NpZW5jZS0xc3QtWXJzLUludGVncmF0ZWQtRHVhbC1EZWdyZWUtUHJvZ3JhbS1DQkNTLVJlZy1FeGFtLUZlYi1NYXJjaC0yMDI2LVRpbWV0YWJsZS0xOS0yLTIwMjYuYXNwYE9VIEJTLU1TIChDb21wdXRlciBTY2llbmNlIDEgWXJzIEludGVncmF0ZWQgRHVhbCBEZWdyZWUgUHJvZ3JhbSkgKENCQ1MtUmVnKSBFeGFtIEZlYi9NYXIgMjAyNiBUVGQCEw9kFgJmDxUFCjE5LjAyLjIwMjYKVElNRSBUQUJMRQYxOTM4ODWeAWh0dHBzOi8vd3d3Lm1hbmFiYWRpLmNvLmluL1RpbWV0YWJsZXNfMjYvT1UtQlMtTVMtQ29tcHV0ZXItU2NpZW5jZS0xc3QtWXJzLUludGVncmF0ZWQtRHVhbC1EZWdyZWUtUHJvZ3JhbS1DQkNTLVJlZy1FeGFtLUZlYi1NYXJjaC0yMDI2LVRpbWV0YWJsZS0xOS0yLTIwMjYuYXNwYE9VIEJTLU1TIChDb21wdXRlciBTY2llbmNlIDEgWXJzIEludGVncmF0ZWQgRHVhbCBEZWdyZWUgUHJvZ3JhbSkgKENCQ1MtUmVnKSBFeGFtIEZlYi9NYXIgMjAyNiBUVGQCFA9kFgJmDxUFCjE5LjAyLjIwMjYHUkVTVUxUUwYxOTM4ODNraHR0cHM6Ly93d3cubWFuYWJhZGkuY28uaW4vUmVzdWx0c18yNi9NR1UtQlRlY2gtM3JkLVNlbS1TRU0tUmVnLUJhY2tsb2ctRXhhbS1EZWMtMjAyNS1SZXN1bHRzLTE5LTItMjAyNi5hc3A4TUdVIEIuVGVjaCAzcmQgU2VtIFNFTSBSZWcvQmFja2xvZyBFeGFtIERlYy0yMDI1IFJlc3VsdHNkAhUPZBYCZg8VBQoxOS4wMi4yMDI2D0lNUE9SVEFOVCBEQVRFUwYxOTM4ODKlAWh0dHBzOi8vd3d3Lm1hbmFiYWRpLmNvLmluL05vdGlmaWNhdGlvbnNfMjYvTUdVLVNwbEJFZC00dGgtU2VtLVJlZy1CYWNrbG9nLTFzdC0ybmQtM3JkLVNlbS1CYWNrbG9nLUV4YW0tUmV2YWx1YXRpb24tUGhvdG9jb3B5LUZlYi0yMDI2LUZlZS1Ob3RpZmljYXRpb24tMTktMi0yMDI2LmFzcGBNR1UgU3BsLkJFZCA0U2VtIFJlZy9CYWNrbG9nIDEsIDIgJiAzIFNlbSBCYWNrbG9nIEV4YW0gUmV2YWx1YXRpb24gJiBQaG90b2NvcHkgRmViIDIwMjYgRmVlIE5vdGVkAhYPZBYCZg8VBQoxOS4wMi4yMDI2DE5PVElGSUNBVElPTgYxOTM4ODGlAWh0dHBzOi8vd3d3Lm1hbmFiYWRpLmNvLmluL05vdGlmaWNhdGlvbnNfMjYvTUdVLVNwbEJFZC00dGgtU2VtLVJlZy1CYWNrbG9nLTFzdC0ybmQtM3JkLVNlbS1CYWNrbG9nLUV4YW0tUmV2YWx1YXRpb24tUGhvdG9jb3B5LUZlYi0yMDI2LUZlZS1Ob3RpZmljYXRpb24tMTktMi0yMDI2LmFzcGBNR1UgU3BsLkJFZCA0U2VtIFJlZy9CYWNrbG9nIDEsIDIgJiAzIFNlbSBCYWNrbG9nIEV4YW0gUmV2YWx1YXRpb24gJiBQaG90b2NvcHkgRmViIDIwMjYgRmVlIE5vdGVkAhcPZBYCZg8VBQoxOS4wMi4yMDI2CEFSVElDTEVTBjE5Mzg4MEJodHRwczovL3d3dy5tYW5hYmFkaS5jby5pbi9lbnRyYW5jZS1leGFtcy9lYXBjZXQtb25saW5lLW1vY2stdGVzdC8dRUFQQ0VUIE9ubGluZSBNb2NrIFRlc3RzIDIwMjZkAhgPZBYCZg8VBQoxOS4wMi4yMDI2DE5PVElGSUNBVElPTgYxOTM4NzlNaHR0cHM6Ly93d3cubWFuYWJhZGkuY28uaW4vZW50cmFuY2UtZXhhbXMvdHMtZWFwY2V0LTIwMjYtYXBwbGljYXRpb24tcHJvY2Vzcy8oVFMgRUFNQ0VUIDIwMjYgQXBwbGljYXRpb24gRm9ybSBSZWxlYXNlZGQCGQ9kFgJmDxUFCjE4LjAyLjIwMjYHUkVTVUxUUwYxOTM4Nzh7aHR0cHM6Ly93d3cucmVzdWx0cy5tYW5hYmFkaS5jby5pbi8yMDI2L3NhbWJhbHB1ci11bml2ZXJzaXR5LTMtNnRoLXNlbS1hcnRzLXNjaWVuY2UtY29tbWVyY2UtZXhhbS0yMDI1LXJlc3VsdHMtMTgwMjIwMjYuaHRtS1NhbWJhbHB1ciBVbml2ZXJzaXR5ICszIDZ0aCBTZW0gKEFydHMsIFNjaWVuY2UsIENvbW1lcmNlKSBFeGFtIDIwMjUgUmVzdWx0c2QCGg9kFgJmDxUFCjE4LjAyLjIwMjYPSU1QT1JUQU5UIERBVEVTBjE5Mzg3N4EBaHR0cHM6Ly93d3cubWFuYWJhZGkuY28uaW4vTm90aWZpY2F0aW9uc18yNi9NR1UtSVBDLUlNQkEtM3JkLVNlbS1SZWd1bGFyLVJldmFsdWF0aW9uLUV4YW0tZmVlLUZlYi0yMDI2LU5vdGlmaWNhdGlvbi0xOC0yLTIwMjYuYXNwSU1HVSBJUEMgJiBJTUJBIDNyZCBTZW0gUmVndWxhciBSZXZhbHVhdGlvbiBFeGFtIGZlZSBGZWItMjAyNiBOb3RpZmljYXRpb25kAhsPZBYCZg8VBQoxOC4wMi4yMDI2DE5PVElGSUNBVElPTgYxOTM4NzaBAWh0dHBzOi8vd3d3Lm1hbmFiYWRpLmNvLmluL05vdGlmaWNhdGlvbnNfMjYvTUdVLUlQQy1JTUJBLTNyZC1TZW0tUmVndWxhci1SZXZhbHVhdGlvbi1FeGFtLWZlZS1GZWItMjAyNi1Ob3RpZmljYXRpb24tMTgtMi0yMDI2LmFzcElNR1UgSVBDICYgSU1CQSAzcmQgU2VtIFJlZ3VsYXIgUmV2YWx1YXRpb24gRXhhbSBmZWUgRmViLTIwMjYgTm90aWZpY2F0aW9uZAIcD2QWAmYPFQUKMTguMDIuMjAyNg9JTVBPUlRBTlQgREFURVMGMTkzODc1hAFodHRwczovL3d3dy5tYW5hYmFkaS5jby5pbi9UaW1ldGFibGVzXzI2L0pOVFVILU1CQS1JLVNlbS1Db21wdXRlci1CYXNlZC1UZXN0LUNCVC1SZWd1bGFyLUV4YW1zLUZlYnJ1YXJ5LTIwMjYtVGltZXRhYmxlLTE4LTItMjAyNi5hc3BPSk5UVUggTUJBIEktU2VtIENvbXB1dGVyIEJhc2VkIFRlc3QgKENCVCkgUmVndWxhciBFeGFtcyBGZWJydWFyeS0yMDI2IFRpbWV0YWJsZWQCHQ9kFgJmDxUFCjE4LjAyLjIwMjYKVElNRSBUQUJMRQYxOTM4NzSEAWh0dHBzOi8vd3d3Lm1hbmFiYWRpLmNvLmluL1RpbWV0YWJsZXNfMjYvSk5UVUgtTUJBLUktU2VtLUNvbXB1dGVyLUJhc2VkLVRlc3QtQ0JULVJlZ3VsYXItRXhhbXMtRmVicnVhcnktMjAyNi1UaW1ldGFibGUtMTgtMi0yMDI2LmFzcE9KTlRVSCBNQkEgSS1TZW0gQ29tcHV0ZXIgQmFzZWQgVGVzdCAoQ0JUKSBSZWd1bGFyIEV4YW1zIEZlYnJ1YXJ5LTIwMjYgVGltZXRhYmxlZAIeD2QWAmYPFQUKMTguMDIuMjAyNgdSRVNVTFRTBjE5Mzg3M4gBaHR0cHM6Ly93d3cubWFuYWJhZGkuY28uaW4vUmVzdWx0c18yNi9BVS1NYXN0ZXItT2YtSG9zcGl0YWwtQWRtaW5pc3RyYXRpb25NSEEtNHRoLVNlbS0yLTItUmVnLVN1cHBseS1FeGFtLU5vdi0yMDI1LVJlc3VsdHMtMTgtMi0yMDI2LmFzcFhBVSBNYXN0ZXIgT2YgSG9zcGl0YWwgQWRtaW5pc3RyYXRpb24oTUhBKSA0dGggU2VtICgyLTIpIFJlZy9TdXBwbHkgRXhhbSBOb3YgMjAyNSBSZXN1bHRzZAIfD2QWAmYPFQUKMTguMDIuMjAyNgdSRVNVTFRTBjE5Mzg3MogBaHR0cHM6Ly93d3cubWFuYWJhZGkuY28uaW4vUmVzdWx0c18yNi9BVS1NYXN0ZXItT2YtSG9zcGl0YWwtQWRtaW5pc3RyYXRpb25NSEEtMm5kLVNlbS0xLTItUmVnLVN1cHBseS1FeGFtLU5vdi0yMDI1LVJlc3VsdHMtMTgtMi0yMDI2LmFzcFhBVSBNYXN0ZXIgT2YgSG9zcGl0YWwgQWRtaW5pc3RyYXRpb24oTUhBKSAybmQgU2VtICgxLTIpIFJlZy9TdXBwbHkgRXhhbSBOb3YgMjAyNSBSZXN1bHRzZAIgD2QWAmYPFQUKMTguMDIuMjAyNgdSRVNVTFRTBjE5Mzg3MWFodHRwczovL3d3dy5tYW5hYmFkaS5jby5pbi9SZXN1bHRzXzI2L01HVS1JUEMtM3JkLVNlbS1SZWd1bGFyLUV4YW0tSmFuLTIwMjYtUmVzdWx0cy0xOC0yLTIwMjYuYXNwLU1HVSBJUEMgM3JkIFNlbSBSZWd1bGFyIEV4YW0gSmFuLTIwMjYgUmVzdWx0c2QCIQ9kFgJmDxUFCjE4LjAyLjIwMjYHUkVTVUxUUwYxOTM4NzCCAWh0dHBzOi8vd3d3Lm1hbmFiYWRpLmNvLmluL1Jlc3VsdHNfMjYvTUdVLUJFRFNQTC0xc3QybmQzcmQtU2VtLUJhY2tsb2ctQW5kLTR0aC1TZW0tUmVnLUJhY2tsb2ctRXhhbS1EZWMtMjAyNS1SZXN1bHRzLTE4LTItMjAyNi5hc3BSTUdVIEJFRChTUEwpIDFzdCwybmQsM3JkIFNlbSBCYWNrbG9nIEFuZCA0dGggU2VtIFJlZy9CYWNrbG9nIEV4YW0gRGVjLTIwMjUgUmVzdWx0c2QCIg9kFgJmDxUFCjE4LjAyLjIwMjYPSU1QT1JUQU5UIERBVEVTBjE5Mzg2OYYBaHR0cHM6Ly93d3cubWFuYWJhZGkuY28uaW4vTm90aWZpY2F0aW9uc18yNi9NR1UtQkVkLTFzdC0zcmQtU2VtLVJlZ3VsYXItTW9kZXJhdGlvbi1Cb2FyZC1FeGFtLUZlYnJ1YXJ5LTIwMjYtTm90aWZpY2F0aW9uLTE4LTItMjAyNi5hc3BPTUdVIEIuRWQgMXN0ICYgM3JkIFNlbSBSZWd1bGFyIE1vZGVyYXRpb24gQm9hcmQgRXhhbSBGZWJydWFyeS0yMDI2IE5vdGlmaWNhdGlvbmQCIw9kFgJmDxUFCjE4LjAyLjIwMjYMTk9USUZJQ0FUSU9OBjE5Mzg2OIYBaHR0cHM6Ly93d3cubWFuYWJhZGkuY28uaW4vTm90aWZpY2F0aW9uc18yNi9NR1UtQkVkLTFzdC0zcmQtU2VtLVJlZ3VsYXItTW9kZXJhdGlvbi1Cb2FyZC1FeGFtLUZlYnJ1YXJ5LTIwMjYtTm90aWZpY2F0aW9uLTE4LTItMjAyNi5hc3BPTUdVIEIuRWQgMXN0ICYgM3JkIFNlbSBSZWd1bGFyIE1vZGVyYXRpb24gQm9hcmQgRXhhbSBGZWJydWFyeS0yMDI2IE5vdGlmaWNhdGlvbmQCJA9kFgJmDxUFCjE4LjAyLjIwMjYPSU1QT1JUQU5UIERBVEVTBjE5Mzg2N4QBaHR0cHM6Ly93d3cubWFuYWJhZGkuY28uaW4vTm90aWZpY2F0aW9uc18yNi9NR1UtQkVkLTFzdC0zcmQtU2VtLU1vZGVyYXRpb24tQm9hcmQtUnVsZXMtRXhhbS1GZWJydWFyeS0yMDI2LU5vdGlmaWNhdGlvbi0xOC0yLTIwMjYuYXNwTU1HVSBCLkVkIDFzdCAmIDNyZCBTZW0gTW9kZXJhdGlvbiBCb2FyZCBSdWxlcyBFeGFtIEZlYnJ1YXJ5LTIwMjYgTm90aWZpY2F0aW9uZAIlD2QWAmYPFQUKMTguMDIuMjAyNgxOT1RJRklDQVRJT04GMTkzODY2hAFodHRwczovL3d3dy5tYW5hYmFkaS5jby5pbi9Ob3RpZmljYXRpb25zXzI2L01HVS1CRWQtMXN0LTNyZC1TZW0tTW9kZXJhdGlvbi1Cb2FyZC1SdWxlcy1FeGFtLUZlYnJ1YXJ5LTIwMjYtTm90aWZpY2F0aW9uLTE4LTItMjAyNi5hc3BNTUdVIEIuRWQgMXN0ICYgM3JkIFNlbSBNb2RlcmF0aW9uIEJvYXJkIFJ1bGVzIEV4YW0gRmVicnVhcnktMjAyNiBOb3RpZmljYXRpb25kAiYPZBYCZg8VBQoxOC4wMi4yMDI2ClRJTUUgVEFCTEUGMTkzODY1f2h0dHBzOi8vd3d3Lm1hbmFiYWRpLmNvLmluL1RpbWV0YWJsZXNfMjYvT3NtYW5pYS1Vbml2ZXJzaXR5LUxMTS0zcmQtU2VtLVJlZ3VsYXItRXhhbS1GZWJydWFyLU1hcmNoLTIwMjYtVGltZXRhYmxlLTE4LTItMjAyNi5hc3BJT3NtYW5pYSBVbml2ZXJzaXR5IExMLk0gM3JkIFNlbSBSZWd1bGFyIEV4YW0gRmVicnVhci9NYXJjaC0yMDI2IFRpbWV0YWJsZWQCJw9kFgJmDxUFCjE4LjAyLjIwMjYHUkVTVUxUUwYxOTM4NjRFaHR0cHM6Ly93d3cubWFuYWJhZGkuY28uaW4vZW50cmFuY2UtZXhhbXMvamVlLW1haW4tMjAyNi10b3BwZXJzLWxpc3QvH0pFRSBNYWluIDIwMjYgU2Vzc2lvbiAxIFRvcHBlcnNkZKYpPxZq6SeFMZt00bQTYRvJqobP" />

<input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="1EB81242" />
<div class="page">

<!-- START SMART -->
<!-- TOP HEADER -->
<div class="top-header">

  <!-- LEFT : LOGO -->
  <div class="logo-wrap">
    <img src="/graphics/images/logo.gif" alt="Manabadi" class="site-logo">
  </div>

  <!-- RIGHT ACTIONS -->
  <div class="header-actions">

    <!-- CONTACT -->
    <a href="/contactus/contactus.aspx" class="contact-btn" title="Contact Us">
      📞 <span class="contact-text">Contact</span>
    </a>

    <!-- LOGIN -->
  <div class="login-wrap">
  
  <a href="javascript:void(0)"
   class="login-btn"
   onclick="toggleLoginMenu(event)">
  Login <span class="caret"></span>
</a>

  <div id="loginMenu" class="login-menu">
    <a href="https://www.manabadi.co.in/institute/clientlogin.aspx" target="_blank">Institute Login</a>
    <a href="https://www.exams.manabadi.co.in/" target="_blank">Student Login</a>
  </div>
</div>

  </div>
</div>
<div id="startSmartBox" class="start-smart-card">

  <div class="start-smart-head">
    <div class="start-icon">🎯</div>
    <div>
      <div class="start-smart-title">Eamcet Free State Wide Grand Test</div>
      <div class="start-smart-desc">
        Write 10 grand Tests for both AP and TS Eapcet. Know your Rank among 1 Lakh Students
      </div>
    </div>
  </div>

  <div class="start-smart-actions">
  <span class="gold_bg"><a href="https://www.exams.manabadi.co.in/eamcet-mock-exam/EAMCET-EAPCET-Online-Mock-Exams.aspx"> Write Exam</a></span>
    
    <button id="btnSkipSmart" class="btn-skip" onclick="skipSmart()" style="display:none">
      Skip
    </button>
  </div>

</div>
<!-- HOT ANNOUNCEMENT -->
<div class="hot-announce">
  <span class="hot-icon">📢</span>

  <div class="hot-text">
    <strong>ANNOUNCEMENT:</strong>
    <span class="hot-msg">
	
	  <a href="https://www.manabadi.co.in/qp/downloadqpnew.aspx"> <span class="hot-msg">AP / TS Inter Guess Papers 2026  </span></a></li> <br />
	  <a href="https://www.manabadi.co.in/boards/ts-inter-2nd-year-hall-ticket/"> <span class="hot-msg">TS Inter 2nd Year Hall Ticket 2026 (OUT)  </span></a></li> <br />
	  <a href="https://www.manabadi.co.in/entrance-exams/jee/jee-rank-calculator.aspx"> JEE Mains Percentile Vs Rank Calculator 2026 </a>
	
    </span>
  </div>

  <span class="hot-action">⚡</span>
</div>



<!-- QUICK -->
<div class="card section-quick">

  <div class="hscroll">

    <a class="hcard" href="../institute/Universities-Boards-Entrance-exams-recruitment-exams-of-AP-and-TS.htm">
      <img src="../images/icons/New/Results-N.png" />
      <span>Results</span>
    </a>

    <a class="hcard" href="../institute/Exam-Question-Papers.htm">
      <img src="../images/icons/New/Question-Papers-N.png" />
      <span>Question Papers</span>
    </a>

    <a class="hcard" href="https://www.exams.manabadi.co.in/IIT-JEE-NEET/IIT-JEE-Mains-free-online-model-exams.aspx">
      <img src="../images/icons/New/JEE-N.png" />
      <span>JEE Exams</span>
    </a>
	<a class="hcard" href="https://www.manabadi.co.in/institute/Add_Institute/home/AISchoolFinder.aspx" target="_blank">
	<img src="../images/icons/New/School-N.png">
	<span>Schools<br/><small>Top Schools</small></span>
	</a>

	<a class="hcard" href="https://www.manabadi.co.in/MB_2023/default.html" target="_blank" >
	<img src="../images/icons/New/Training-Institutes-N.png">
	<span>Colleges<br/><small>Top Colleges</small></span>
	</a>
<a class="hcard" href="https://www.manabadi.co.in/boards/ap-intermediate/" target="_blank">
	<img src="../images/icons/New/AP-Inter-N.png" >
	<span>AP Inter<br/><small>Full Program</small></span>
	</a>

	<a class="hcard" href="https://www.manabadi.co.in/boards/tg-intermediate/" target="_blank">
	<img src="../images/icons/New/TS-Inter-N.png">
	<span>TG Inter<br/><small>Full Program</small></span>
	</a>
	<a class="hcard" href="../SCERT/default.aspx" target="_blank">
	<img src="../images/icons/New/SCERT-AP.png" >
	<span>AP 10th<br/><small>Textbook Solutions</small></span>
	</a>

	<a class="hcard" href="../SCERT/default.aspx" target="_blank" >
	<img src="../images/icons/New/SCERT-N.png">
	<span>TG 10th<br/><small>Textbook Solutions</small></span>
	</a>

	<a class="hcard" href="../cbse/default.aspx" target="_blank" >
	<img src="../images/icons/New/NCERT-N.png">
	<span>CBSE<br/><small>Textbook Solutions</small></span>
	</a>

	<a class="hcard" href="https://www.exams.manabadi.co.in/" target="_blank" >
	<img src="../images/icons/New/More-Exams.png">
	<span>Online Exams</span>
	</a>


  </div>
  <!--<div class="scroll-indicator"></div>-->

</div>


<div class="grid">

<!-- LEFT -->
<div>
<div class="card inter-card">

  <!-- Header -->
  <div class="section-title">
    INTERMEDIATE
    <a class="get-alerts" href="https://www.manabadi.co.in/qp/ap-ts-inter-mobile-data.aspx" ><span style="float:right;color:var(--muted)">🔔 Get Alerts</span></a>
  </div>

  <!-- State toggle -->
  <div class="toggle inter" id="inter">
     <span class="active" onclick="toggle(this,'inter')">AP Inter</span>
     <span onclick="toggle(this,'inter')">TS Inter</span>
  </div>

  <!-- Year toggle (NEW) -->
  <div class="year-toggle" id="interYear">
  <span class="active" onclick="toggleYear(this,'inter')">1st Year</span>
  <span onclick="toggleYear(this,'inter')">2nd Year</span>
</div>
  <!-- Chips -->

<div class="chips" id="interChips">
  <a class="chip" id="chip-hall">🎟 Hall Tickets</a>
   <a class="chip" id="chip-time">📅 Time Tables</a>
   <a class="chip" id="chip-guess">📝 Guess Papers<img src="../Graphics/Images/New_icons_22.jpg" id="DataList1_ctl03_ImgArt1" base="" target="_blank"></a>
   <a class="chip" id="chip-results">📄 Results</a>
  <a class="chip" id="chip-full">📄 Full Program</a>
</div>

</div>
<div class="ad-box college-ad">
  <a href="https://www.exams.manabadi.co.in/Inter-Josh-SMS-Apply-2026.aspx" target="_blank">
    <picture>
      <!-- Desktop -->
      <source media="(min-width:768px)" srcset="/images/slider/Josh_4.jpg">
      <!-- Mobile -->
      <img src="/images/slider/Josh_4.jpg" alt="Top Engineering College Admission Open">
    </picture>
  </a>
</div>

<div class="card">
 <div class="section-title">10TH CLASS (SSC) <span style="float:right;color:var(--muted)">🔔<a href="https://www.manabadi.co.in/qp/ap-ts-ssc-mobile-data.aspx"> Get Alerts</a></span></div>
 <div class="toggle ssc" id="ssc">
  <span class="active" onclick="toggle(this,'ssc')">AP SSC</span>
  <span onclick="toggle(this,'ssc')">TS SSC</span>
</div>

  <div class="chips" id="sscChips">
    <a class="chip" id="ssc-results">📄 Results</a>
    <a class="chip" id="ssc-hall">🎫 Hall Tickets</a>
    <a class="chip" id="ssc-model">📘 Model Papers<img src="../Graphics/Images/New_icons_22.jpg" id="DataList1_ctl03_ImgArt1" base="" target="_blank"></a>
	<a class="chip" id="ssc-guess">📘 Guess Papers<img src="../Graphics/Images/New_icons_22.jpg" id="DataList1_ctl03_ImgArt1" base="" target="_blank"></a>
	<a class="chip" id="ssc-time">📘 Time Table</a>
  </div>
</div>
<div style="clear:both; height:10px;"></div>
	<ins class="adsbygoogle" style="display: block" data-ad-client="ca-pub-2551325655874098"
				data-ad-slot="6713161600" data-ad-format="auto"></ins>

				<script>
				    (adsbygoogle = window.adsbygoogle || []).push({});
				</script>
			<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
	<div style="clear:both; height:10px;"></div>		
<div class="card section-exams">

 <div class="section-title">ENTRANCE EXAMS</div>

  <div class="exam">
  <div class="exam-title">JEE</div>
  <div class="exam-desc">
   <a href="https://www.exams.manabadi.co.in/IIT-JEE-NEET/IIT-JEE-Mains-free-online-model-exams.aspx">Mock Exams <span>|</span> <a href="https://www.manabadi.co.in/entrance-exams/jee-main-results/">Results</a> <span>|</span> <a href="https://www.manabadi.co.in/entrance-exams/iit-jee-mains-hall-tickets-nta-admit-cards/">Admit Cards</a> <span>|</span><a href="https://www.manabadi.co.in/entrance-exams/jee-main-marks-vs-percentile/">Marks Vs Rank</a> <span>|</span> <a href="https://www.manabadi.co.in/entrance-exams/jee/jee-rank-calculator.aspx">Percentile Vs Rank Calculator</a> <span>|</span><a href="https://www.manabadi.co.in/entrance-exams/jee-main-analysis/">Paper Analysis</a> <span>|</span> <a href="https://www.manabadi.co.in/entrance-exams/jee-mains-notification/">Notification</a>
  </div>
 </div>

 <div class="exam">
  <div class="exam-title">EAPCET – TS</div>
  <div class="exam-desc">
   <a href="https://www.exams.manabadi.co.in/eamcet-mock-exam/EAMCET-EAPCET-Online-Mock-Exams.aspx">Mock Exams</a> <span>|</span> <a href="https://www.manabadi.co.in/entrance-exams/ts-eapcet-notification/">Notification</a> <span>|</span> <a href="https://www.manabadi.co.in/entrance-exams/tg-eapcet-eligibility-criteria-2026/">Eligibility</a> <span>|</span> <a href="https://www.manabadi.co.in/entrance-exams/tg-eapcet-exam-date/">Exam Date</a> <span>|</span> <a href="https://www.manabadi.co.in/entrance-exams/tg-eapcet-syllabus/">Syllabus</a> <span>|</span> <a href="https://www.manabadi.co.in/182/TS%20EAPCET-Model-Papers">Model Papers</a>
  </div>
 </div>

 <div class="exam">
  <div class="exam-title">EAPCET – AP</div>
  <div class="exam-desc">
    <a href="https://www.exams.manabadi.co.in/eamcet-mock-exam/EAMCET-EAPCET-Online-Mock-Exams.aspx">Mock Exams</a> <span>|</span> <a href="https://www.manabadi.co.in/entrance-exams/ap-eapcet-notification/">Notification</a> <span>|</span> <a href="https://www.manabadi.co.in/entrance-exams/ap-eapcet-eligibility-criteria/">Eligibility</a> <span>|</span> <a href="https://www.manabadi.co.in/entrance-exams/ap-eamcet-exam-date/">Exam Date</a> <span>|</span> <a href="https://www.manabadi.co.in/entrance-exams/ap-eapcet-syllabus/">Syllabus</a> <span>|</span> <a href="https://www.manabadi.co.in/14/EAMCET-Model-Papers">Model Papers</a>
  </div>
 </div>
 
</div>






</div>

<!-- RIGHT -->
<div class="card section-updates">
  <div class="section-title">TODAY UPDATES</div>

  <div id="updatesWrapper" class="updates-wrapper">
    <span id="dlToday"><span>
        <div class="update-row" data-date="20.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            RESULTS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193851&DocUrl=https://www.manabadi.co.in/boards/ts-inter-2nd-year-hall-ticket/">
            TS Inter 2nd Year Hall ticket Released
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="20.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            HALLTICKETS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=191322&DocUrl=https://www.manabadi.co.in/boards/ts-inter-1st-year-hall-ticket/">
            TG Inter 1st Year Hall Ticket 2026 Out
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="20.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            NOTIFICATION
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193902&DocUrl=https://www.manabadi.co.in/entrance-exams/ap-pecet-notification-2026/">
            AP PECET 2026 Notification Out
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="20.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            RESULTS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193901&DocUrl=https://www.manabadi.co.in/Results_26/JNTUH-BPharmacy-1st-Year-R15-Supply-Exam-NOV-2025-Results-20-2-2026.asp">
            JNTUH B.Pharmacy 1st Year (R15) Supply Exam NOV-2025 Results
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="20.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            RESULTS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193900&DocUrl=https://www.manabadi.co.in/Results_26/JNTUH-BPharmacy-1st-Year-1st-Sem-R17-Supply-Exam-NOV-2025-Results-20-2-2026.asp">
            JNTUH B.Pharmacy 1st Year 1st Sem (R17) Supply Exam NOV-2025 Results
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="20.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            RESULTS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193899&DocUrl=https://www.manabadi.co.in/Results_26/JNTUH-BPharmacy-1st-Year-1st-Sem-R22-Supply-Exam-NOV-2025-Results-20-2-2026.asp">
            JNTUH B.Pharmacy 1st Year 1st Sem (R22) Supply Exam NOV-2025 Results
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="20.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            RESULTS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193898&DocUrl=https://www.manabadi.co.in/Results_26/JNTUH-BPharmacy-1st-Year-2nd-Sem-R17-Supply-Exam-NOV-2025-Results-20-2-2026.asp">
            JNTUH B.Pharmacy 1st Year 2nd Sem (R17) Supply Exam NOV-2025 Results
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="20.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            RESULTS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193897&DocUrl=https://www.manabadi.co.in/Results_26/JNTUH-BPharmacy-1st-Year-2nd-Sem-R22-Regular-Exam-NOV-2025-Results-20-2-2026.asp">
            JNTUH B.Pharmacy 1st Year 2nd Sem (R22) Regular Exam NOV-2025 Results
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="20.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            RESULTS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193896&DocUrl=https://www.manabadi.co.in/Results_26/AU-Master-Of-Hospital-Administration-1st-Sem-1-1-Revaluation-Exam-May-2025-Results-20-2-2026.asp">
            AU Master Of Hospital Administration 1st Sem (1-1) Revaluation Exam May 2025 Results
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="20.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            TIME TABLE
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193895&DocUrl=https://www.manabadi.co.in/Timetables_26/JNTUH-MCA-I-I-Regular-Exams-constituent-colleges-only-February-March-2026-Time-Table-20-2-2026.asp">
            JNTUH MCA I-I Regular Exams (constituent colleges only) February/March-2026 Time Table
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="20.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            NOTIFICATION
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193894&DocUrl=https://www.manabadi.co.in/Notifications_26/APPGECET-2026-Examination-Information-Data-Notification-20-2-2026.asp">
            APPGECET-2026 Examination Information Data Notification
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="19.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            TIME TABLE
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193893&DocUrl=https://www.manabadi.co.in/boards/toss-ssc-inter-time-table-2026/">
            TOSS SSC & Inter Time Table 2026 Out
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="19.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            RESULTS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193892&DocUrl=https://www.manabadi.co.in/Results_26/AU-PharmD-4th-Year4-0-Revaluation-Phase-II-Exam-April-2025-Results-19-2-2026.asp">
            AU Pharm.D 4th Year(4-0) Revaluation (Phase-II) Exam April 2025 Results
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="19.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            RESULTS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193891&DocUrl=https://www.manabadi.co.in/Results_26/AU-PharmD-3rd-Year3-0-Revaluation-Phase-II-Exam-July-2025-Results-19-2-2026.asp">
            AU Pharm.D 3rd Year(3-0) Revaluation (Phase-II) Exam July 2025 Results
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="19.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            RESULTS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193890&DocUrl=https://www.manabadi.co.in/Results_26/AU-PharmD-2nd-Year2-0-Revaluation-Phase-II-Exam-July-2025-Results-19-2-2026.asp">
            AU Pharm.D 2nd Year(2-0) Revaluation (Phase-II) Exam July 2025 Results
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="19.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            RESULTS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193889&DocUrl=https://www.manabadi.co.in/Results_26/AU-BPharmacy-8th-Sem-4-2-Revaluation-Phase-II-Exam-April-2025-Results-19-2-2026.asp">
            AU B.Pharmacy 8th Sem (4-2) Revaluation (Phase-II) Exam April 2025 Results
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="19.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            RESULTS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193888&DocUrl=https://www.manabadi.co.in/Results_26/AU-BPharmacy-3rd-Sem-2-1-Revaluation-Phase-II-Exam-February-2025-Results-19-2-2026.asp">
            AU B.Pharmacy 3rd Sem (2-1) Revaluation (Phase-II) Exam February 2025 Results
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="19.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            RESULTS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193887&DocUrl=https://www.manabadi.co.in/Results_26/AU-BPharmacy-1st-Sem-1-1-Revaluation-Phase-II-Exam-April-2025-Results-19-2-2026.asp">
            AU B.Pharmacy 1st Sem (1-1) Revaluation (Phase-II) Exam April 2025 Results
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="19.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            IMPORTANT DATES
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193886&DocUrl=https://www.manabadi.co.in/Timetables_26/OU-BS-MS-Computer-Science-1st-Yrs-Integrated-Dual-Degree-Program-CBCS-Reg-Exam-Feb-March-2026-Timetable-19-2-2026.asp">
            OU BS-MS (Computer Science 1 Yrs Integrated Dual Degree Program) (CBCS-Reg) Exam Feb/Mar 2026 TT
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="19.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            TIME TABLE
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193885&DocUrl=https://www.manabadi.co.in/Timetables_26/OU-BS-MS-Computer-Science-1st-Yrs-Integrated-Dual-Degree-Program-CBCS-Reg-Exam-Feb-March-2026-Timetable-19-2-2026.asp">
            OU BS-MS (Computer Science 1 Yrs Integrated Dual Degree Program) (CBCS-Reg) Exam Feb/Mar 2026 TT
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="19.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            RESULTS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193883&DocUrl=https://www.manabadi.co.in/Results_26/MGU-BTech-3rd-Sem-SEM-Reg-Backlog-Exam-Dec-2025-Results-19-2-2026.asp">
            MGU B.Tech 3rd Sem SEM Reg/Backlog Exam Dec-2025 Results
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="19.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            IMPORTANT DATES
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193882&DocUrl=https://www.manabadi.co.in/Notifications_26/MGU-SplBEd-4th-Sem-Reg-Backlog-1st-2nd-3rd-Sem-Backlog-Exam-Revaluation-Photocopy-Feb-2026-Fee-Notification-19-2-2026.asp">
            MGU Spl.BEd 4Sem Reg/Backlog 1, 2 & 3 Sem Backlog Exam Revaluation & Photocopy Feb 2026 Fee Note
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="19.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            NOTIFICATION
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193881&DocUrl=https://www.manabadi.co.in/Notifications_26/MGU-SplBEd-4th-Sem-Reg-Backlog-1st-2nd-3rd-Sem-Backlog-Exam-Revaluation-Photocopy-Feb-2026-Fee-Notification-19-2-2026.asp">
            MGU Spl.BEd 4Sem Reg/Backlog 1, 2 & 3 Sem Backlog Exam Revaluation & Photocopy Feb 2026 Fee Note
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="19.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            ARTICLES
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193880&DocUrl=https://www.manabadi.co.in/entrance-exams/eapcet-online-mock-test/">
            EAPCET Online Mock Tests 2026
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="19.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            NOTIFICATION
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193879&DocUrl=https://www.manabadi.co.in/entrance-exams/ts-eapcet-2026-application-process/">
            TS EAMCET 2026 Application Form Released
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="18.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            RESULTS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193878&DocUrl=https://www.results.manabadi.co.in/2026/sambalpur-university-3-6th-sem-arts-science-commerce-exam-2025-results-18022026.htm">
            Sambalpur University +3 6th Sem (Arts, Science, Commerce) Exam 2025 Results
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="18.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            IMPORTANT DATES
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193877&DocUrl=https://www.manabadi.co.in/Notifications_26/MGU-IPC-IMBA-3rd-Sem-Regular-Revaluation-Exam-fee-Feb-2026-Notification-18-2-2026.asp">
            MGU IPC & IMBA 3rd Sem Regular Revaluation Exam fee Feb-2026 Notification
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="18.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            NOTIFICATION
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193876&DocUrl=https://www.manabadi.co.in/Notifications_26/MGU-IPC-IMBA-3rd-Sem-Regular-Revaluation-Exam-fee-Feb-2026-Notification-18-2-2026.asp">
            MGU IPC & IMBA 3rd Sem Regular Revaluation Exam fee Feb-2026 Notification
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="18.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            IMPORTANT DATES
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193875&DocUrl=https://www.manabadi.co.in/Timetables_26/JNTUH-MBA-I-Sem-Computer-Based-Test-CBT-Regular-Exams-February-2026-Timetable-18-2-2026.asp">
            JNTUH MBA I-Sem Computer Based Test (CBT) Regular Exams February-2026 Timetable
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="18.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            TIME TABLE
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193874&DocUrl=https://www.manabadi.co.in/Timetables_26/JNTUH-MBA-I-Sem-Computer-Based-Test-CBT-Regular-Exams-February-2026-Timetable-18-2-2026.asp">
            JNTUH MBA I-Sem Computer Based Test (CBT) Regular Exams February-2026 Timetable
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="18.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            RESULTS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193873&DocUrl=https://www.manabadi.co.in/Results_26/AU-Master-Of-Hospital-AdministrationMHA-4th-Sem-2-2-Reg-Supply-Exam-Nov-2025-Results-18-2-2026.asp">
            AU Master Of Hospital Administration(MHA) 4th Sem (2-2) Reg/Supply Exam Nov 2025 Results
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="18.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            RESULTS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193872&DocUrl=https://www.manabadi.co.in/Results_26/AU-Master-Of-Hospital-AdministrationMHA-2nd-Sem-1-2-Reg-Supply-Exam-Nov-2025-Results-18-2-2026.asp">
            AU Master Of Hospital Administration(MHA) 2nd Sem (1-2) Reg/Supply Exam Nov 2025 Results
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="18.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            RESULTS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193871&DocUrl=https://www.manabadi.co.in/Results_26/MGU-IPC-3rd-Sem-Regular-Exam-Jan-2026-Results-18-2-2026.asp">
            MGU IPC 3rd Sem Regular Exam Jan-2026 Results
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="18.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            RESULTS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193870&DocUrl=https://www.manabadi.co.in/Results_26/MGU-BEDSPL-1st2nd3rd-Sem-Backlog-And-4th-Sem-Reg-Backlog-Exam-Dec-2025-Results-18-2-2026.asp">
            MGU BED(SPL) 1st,2nd,3rd Sem Backlog And 4th Sem Reg/Backlog Exam Dec-2025 Results
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="18.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            IMPORTANT DATES
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193869&DocUrl=https://www.manabadi.co.in/Notifications_26/MGU-BEd-1st-3rd-Sem-Regular-Moderation-Board-Exam-February-2026-Notification-18-2-2026.asp">
            MGU B.Ed 1st & 3rd Sem Regular Moderation Board Exam February-2026 Notification
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="18.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            NOTIFICATION
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193868&DocUrl=https://www.manabadi.co.in/Notifications_26/MGU-BEd-1st-3rd-Sem-Regular-Moderation-Board-Exam-February-2026-Notification-18-2-2026.asp">
            MGU B.Ed 1st & 3rd Sem Regular Moderation Board Exam February-2026 Notification
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="18.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            IMPORTANT DATES
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193867&DocUrl=https://www.manabadi.co.in/Notifications_26/MGU-BEd-1st-3rd-Sem-Moderation-Board-Rules-Exam-February-2026-Notification-18-2-2026.asp">
            MGU B.Ed 1st & 3rd Sem Moderation Board Rules Exam February-2026 Notification
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="18.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            NOTIFICATION
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193866&DocUrl=https://www.manabadi.co.in/Notifications_26/MGU-BEd-1st-3rd-Sem-Moderation-Board-Rules-Exam-February-2026-Notification-18-2-2026.asp">
            MGU B.Ed 1st & 3rd Sem Moderation Board Rules Exam February-2026 Notification
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="18.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            TIME TABLE
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193865&DocUrl=https://www.manabadi.co.in/Timetables_26/Osmania-University-LLM-3rd-Sem-Regular-Exam-Februar-March-2026-Timetable-18-2-2026.asp">
            Osmania University LL.M 3rd Sem Regular Exam Februar/March-2026 Timetable
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="18.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            RESULTS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193864&DocUrl=https://www.manabadi.co.in/entrance-exams/jee-main-2026-toppers-list/">
            JEE Main 2026 Session 1 Toppers
          </a>

        </div>
      </span></span>

    <!-- FADE MASK -->
    <div id="fadeMask" class="fade-mask"></div>
  </div>

  <div class="load-more-wrap">
    <button type="button" id="btnLoadMore" class="btn-load">
      Load More
    </button>
	
  </div>
  <div style="text-align:center; padding:10px 5px;">
  <span class="gold_bg_g" style="float:none; !important;"><a href="https://www.manabadi.co.in/institute/Universities-Boards-Entrance-exams-recruitment-exams-of-AP-and-TS.htm"> View All</a></span>
</div>
<div style="clear:both; height:1px;"></div>
	<ins class="adsbygoogle" style="display: block" data-ad-client="ca-pub-2551325655874098"
				data-ad-slot="6713161600" data-ad-format="auto"></ins>

				<script>
				    (adsbygoogle = window.adsbygoogle || []).push({});
				</script>
			<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
	<div style="clear:both; height:1px;"></div>
</div>

<div class="tc-box">

  <div class="tc-head">
    <h3>Important Articles & Guides</h3>
    <p>Stay Updated with the Latest Educational Insights</p>
  </div>

  <div class="tc-list">
  
   <a href="https://www.manabadi.co.in/qp/downloadqpnew.aspx" class="tc-chip">
      <span>Inter Guess Papers</span>
      <span class="tc-badge guide">Out</span>
    </a>
	
	<a href="https://www.manabadi.co.in/boards/ts-inter-1st-year-hall-ticket/" class="tc-chip">
      <span>TG Inter 1st Year Hall Ticket 2026</span>
      <span class="tc-badge guide">Out</span>
    </a>
	
	  <a href="https://www.manabadi.co.in/boards/ts-inter-2nd-year-hall-ticket/" class="tc-chip">
      <span>TG Inter 2nd Year Hall Ticket 2026</span>
      <span class="tc-badge guide">Out</span>
    </a>
	
	<a href="https://www.manabadi.co.in/boards/ap-inter-1st-year-hall-ticket/" class="tc-chip">
      <span>AP Inter 1st Year Hall Ticket 2026</span>
      <span class="tc-badge guide">Out</span>
    </a>
	
	  <a href="https://www.manabadi.co.in/boards/ap-inter-2nd-year-hall-ticket/" class="tc-chip">
      <span>AP Inter 2nd Year Hall Ticket 2026</span>
      <span class="tc-badge guide">Out</span>
    </a>
	
	<a href="https://www.manabadi.co.in/entrance-exams/ap-eapcet-notification/" class="tc-chip">
      <span>AP EAPCET Notification 2026</span>
      <span class="tc-badge guide">Out</span>
    </a>
	
	  <a href="https://www.manabadi.co.in/entrance-exams/ts-eapcet-notification/" class="tc-chip">
      <span>TS EAPCET Notification 2026</span>
      <span class="tc-badge guide">Out</span>
    </a>
	
	  <a href="https://www.manabadi.co.in/qp/downloadqpnew.aspx" class="tc-chip">
      <span>Inter Guess Papers</span>
      <span class="tc-badge guide">Out</span>
    </a>

    <a href="https://www.manabadi.co.in/entrance-exams/comedk-uget-exam-dates/" class="tc-chip">
      <span>COMEDK UGET – Complete Guide 2026</span>
      <span class="tc-badge guide">GUIDE</span>
    </a>

    <a href="https://www.manabadi.co.in/entrance-exams/vit-hidden-secrets-honest-comparison/" class="tc-chip">
      <span>VIT Hidden Secrets & Honest Comparison</span>
      <span class="tc-badge guide">GUIDE</span>
    </a>

    <a href="https://www.manabadi.co.in/entrance-exams/srmjeee-exam-dates/" class="tc-chip">
      <span>SRMJEEE 2026 Notification</span>
      <span class="tc-badge out">OUT</span>
    </a>

    <a href="https://www.manabadi.co.in/entrance-exams/tg-tet-notification/" class="tc-chip">
      <span>TG TET 2026 Notification</span>
      <span class="tc-badge out">OUT</span>
    </a>

    <a href="https://www.manabadi.co.in/entrance-exams/entrance-exams-after-intermediate/" class="tc-chip">
      <span>Entrance Exams After Intermediate</span>
      <span class="tc-badge out">OUT</span>
    </a>

    <a href="https://www.manabadi.co.in/entrance-exams/amrita-vishwa-vidyapeetham-the-complete-engineering-reality-check/" class="tc-chip">
      <span>AMRITA University Comparison & Hidden</span>
      <span class="tc-badge new">NEW</span>
    </a>
	
  <a href="https://www.manabadi.co.in/entrance-exams/jee-mains-notification/" class="tc-chip">
      <span>JEE Main Exam 2026</span>
      <span class="tc-badge out">OUT</span>
    </a>

    <a href="https://www.manabadi.co.in/entrance-exams/viteee-exam-date/" class="tc-chip">
      <span>VITEEE Exam 2026</span>
      <span class="tc-badge out">OUT</span>
    </a>

    <a href="https://www.manabadi.co.in/entrance-exams/met-exam-date/" class="tc-chip">
      <span>Manipal Entrance Test</span>
      <span class="tc-badge new">OUT</span>
    </a>
	
	<a href="https://www.manabadi.co.in/entrance-exams/bitsat-exam-dates/" class="tc-chip">
      <span>BITSAT Exam 2026</span>
      <span class="tc-badge out">OUT</span>
    </a>

    <a href="https://www.manabadi.co.in/entrance-exams/ailet-exam-dates/" class="tc-chip">
      <span>AILET Exam 2026</span>
      <span class="tc-badge out">OUT</span>
    </a>

    <a href="https://www.manabadi.co.in/entrance-exams/nata-exam-dates/" class="tc-chip">
      <span>NATA Exam 2026</span>
      <span class="tc-badge new">OUT</span>
    </a>
	
	<a href="https://www.manabadi.co.in/entrance-exams/lpu-nest-exam-dates/" class="tc-chip">
      <span>LPU NEST Exam 2026</span>
      <span class="tc-badge out">OUT</span>
    </a>

    <a href="https://www.manabadi.co.in/entrance-exams/comedk-uget-exam-dates/" class="tc-chip">
      <span>COMEDK UG Exam 2026</span>
      <span class="tc-badge out">OUT</span>
    </a>

    <a href="https://www.manabadi.co.in/entrance-exams/kcet-exam-dates/" class="tc-chip">
      <span>KCET Exam 2026</span>
      <span class="tc-badge new">OUT</span>
    </a>

  </div>

  <div class="tc-btn">
  <span class="gold_bg_g"><a href="https://www.manabadi.co.in/entrance-exams/entrance-exams-after-intermediate/"> View All Articles</a></span>
  </div>

</div>


<div class="card university-section">
  <div class="section-title">UNIVERSITY UPDATES</div>

  <div id="universityList" class="toggle-list">
    
   <div class="uni-item">
      <img src="/institute/images/Icons/JNTUH.png" />
      <span><a href="https://www.manabadi.co.in/JNTU-Hyderabad-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/10">JNTU-Hyderabad</a></span>
      <i class="arrow">›</i>
    </div>

    <div class="uni-item">
      <img src="/institute/images/Icons/JNTUK.png" />
      <span><a href="https://www.manabadi.co.in/JNTU-Kakinada-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/86">JNTU-Kakinada</a></span>
      <i class="arrow">›</i>
    </div>
	
	 <div class="uni-item">
      <img src="/institute/images/Icons/JNTUA.png" />
      <span><a href="https://www.manabadi.co.in/JNTU-Anantapur-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/104">JNTU-Anantapur</a></span>
      <i class="arrow">›</i>
    </div>

    <div class="uni-item">
      <img src="/institute/images/Icons/SVU-L.png" />
      <span><a href="https://www.manabadi.co.in/Sri-Venkateswara-University-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/12">Sri Venkateswara University</a></span>
      <i class="arrow">›</i>
    </div>

    <div class="uni-item">
      <img src="/institute/images/Icons/OU-L.png" />
      <span><a href="https://www.manabadi.co.in/Osmania-University-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/20">Osmania University</a></span>
      <i class="arrow">›</i>
    </div>

    <div class="uni-item">
      <img src="/institute/images/Icons/AU-L.png" />
      <span><a href="https://www.manabadi.co.in/Andhra-University-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/11">Andhra University</a></span>
      <i class="arrow">›</i>
    </div>

    <!-- add ALL universities here -->
	 <div class="uni-item">
      <img src="/institute/images/Icons/ANU.png" />
      <span><a href="https://www.manabadi.co.in/Nagarjuna-University-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/15">Acharya Nagarjuna University</a></span>
      <i class="arrow">›</i>
    </div>

    <div class="uni-item">
      <img src="/institute/images/Icons/AKNU-L.png" />
      <span><a href="https://www.manabadi.co.in/Adikavi-Nannaya-University-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/1296">Adikavi Nannaya University</a></span>
      <i class="arrow">›</i>
    </div>

    <div class="uni-item">
      <img src="/institute/images/Icons/DRBRAOPU-S-L.png" />
      <span><a href="https://www.manabadi.co.in/Dr-B-R-Ambedkar-University-Srikakulam-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/1017">Dr B R Ambedkar University Srikakulam</a></span>
      <i class="arrow">›</i>
    </div>
	
	<div class="uni-item">
      <img src="/institute/images/Icons/DRBRAOPU-L.png" />
      <span><a href="https://www.manabadi.co.in/Dr-B-R-Ambedkar-Open-University-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/13">Dr B R Ambedkar Open University</a></span>
      <i class="arrow">›</i>
    </div>
	
		<div class="uni-item">
      <img src="/institute/images/Icons/UH-L.png" />
      <span><a href="https://www.manabadi.co.in/Hyderabad-University-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/42">Hyderabad University</a></span>
      <i class="arrow">›</i>
    </div>
	 <div class="uni-item">
      <img src="/institute/images/Icons/KU-L.png" />
      <span><a href="https://www.manabadi.co.in/Kakatiya-University-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/14">Kakatiya University</a></span>
      <i class="arrow">›</i>
    </div>
	
	<div class="uni-item">
      <img src="/institute/images/Icons/KRU-L.png" />
      <span><a href="https://www.manabadi.co.in/Krishna-University-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/81">Krishna University</a></span>
      <i class="arrow">›</i>
    </div>
	
		<div class="uni-item">
      <img src="/institute/images/Icons/MGU-L.png" />
      <span><a href="https://www.manabadi.co.in/Mahathma-Gandhi-University--Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/182">Mahathma Gandhi University</a></span>
      <i class="arrow">›</i>
    </div>

  <div class="uni-item">
      <img src="/institute/images/Icons/PU-L.png" />
      <span><a href="https://www.manabadi.co.in/Palamuru-University-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/473">Palamuru University</a></span>
      <i class="arrow">›</i>
    </div>
	
	<div class="uni-item">
      <img src="/institute/images/Icons/RU-L.png" />
      <span><a href="https://www.manabadi.co.in/Rayalaseema-University-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/494">Rayalaseema University</a></span>
      <i class="arrow">›</i>
    </div>
	
		<div class="uni-item">
      <img src="/institute/images/Icons/TU-L.png" />
      <span><a href="https://www.manabadi.co.in/Telangana-University-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/242">Telangana University</a></span>
      <i class="arrow">›</i>
    </div>

  </div>

  <div class="load-more-wrap">
    <button type="button" id="btnUniMore" class="btn-load"  onclick="toggleList('universityList','btnUniMore')">

      Show More
    </button>
  </div>
</div>



<div class="card university-section">
  <div class="section-title">Boards / Entrance Exams</div>

  <div id="boardList"  class="toggle-list">
    
    <div class="uni-item">
      <img src="/institute/images/Icons/CBSE.png" />
      <span><a href="https://www.manabadi.co.in/CBSE-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/28">CBSE (10th)</a></span>
      <i class="arrow">›</i>
    </div>
	
	<div class="uni-item">
      <img src="/institute/images/Icons/CBSE.png" />
      <span><a href="https://www.manabadi.co.in/CBSE-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/28">CBSE (11th,12th)</a></span>
      <i class="arrow">›</i>
    </div>

    <div class="uni-item">
      <img src="/institute/images/Icons/AP-SBTET-L.png" />
      <span><a href="https://www.manabadi.co.in/SBTET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/772">AP SBTET </a></span>
      <i class="arrow">›</i>
    </div>
	
	<div class="uni-item">
      <img src="/institute/images/Icons/TS-SBTET-L.png" />
      <span><a href="https://www.manabadi.co.in/SBTET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/772">TS SBTET </a></span>
      <i class="arrow">›</i>
    </div>
	
	<div class="uni-item">
      <img src="/institute/images/Icons/NEET-L.png" />
      <span><a href="https://www.manabadi.co.in/NEET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/235">NEET </a></span>
      <i class="arrow">›</i>
    </div>

    <div class="uni-item">
      <img src="/institute/images/Icons/APOSS-L.png" />
      <span><a href="https://www.manabadi.co.in/APOSS-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/168">APOSS </a></span>
      <i class="arrow">›</i>
    </div>

     <div class="uni-item">
      <img src="/institute/images/Icons/TSOSS-L.png" />
      <span><a href="https://www.manabadi.co.in/TOSS-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/1740">TSOSS </a></span>
      <i class="arrow">›</i>
    </div>

    
	 <div class="uni-item">
      <img src="/institute/images/Icons/JNTUK.png" />
      <span><a href="https://www.manabadi.co.in/EAMCET--EAPCET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/3">AP EAPCET </a></span>
      <i class="arrow">›</i>
    </div>

    <div class="uni-item">
      <img src="/institute/images/Icons/JNTUH.png" />
      <span><a href="https://www.manabadi.co.in/EAMCET--EAPCET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/1777">TS EAPCET </a></span>
      <i class="arrow">›</i>
    </div>

    <div class="uni-item">
      <img src="/institute/images/Icons/JNTUA.png" />
      <span><a href="https://www.manabadi.co.in/ECET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/21">AP ECET </a></span>
      <i class="arrow">›</i>
    </div>
	
	<div class="uni-item">
      <img src="/institute/images/Icons/TS-ICET-L.png" />
      <span><a href="https://www.manabadi.co.in/ECET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/21">TS ECET </a></span>
      <i class="arrow">›</i>
    </div>
	
	 <div class="uni-item">
      <img src="/institute/images/Icons/AP-SBTET-L.png" />
      <span><a href="https://www.manabadi.co.in/POLYCET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/29">AP POLYCET </a></span>
      <i class="arrow">›</i>
    </div>

    <div class="uni-item">
      <img src="/institute/images/Icons/TS-SBTET-L.png" />
      <span><a href="https://www.manabadi.co.in/POLYCET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/29">TS POLYCET </a></span>
      <i class="arrow">›</i>
    </div>

    <div class="uni-item">
      <img src="/institute/images/Icons/ANU.png" />
      <span><a href="https://www.manabadi.co.in/EDCET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/9">AP EdCET </a></span>
      <i class="arrow">›</i>
    </div>
	
	<div class="uni-item">
      <img src="/institute/images/Icons/MGU-L.png" />
      <span><a href="https://www.manabadi.co.in/EDCET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/9">TS EdCET </a></span>
      <i class="arrow">›</i>
    </div>
	
	 <div class="uni-item">
      <img src="/institute/images/Icons/AU-L.png" />
      <span><a href="https://www.manabadi.co.in/ICET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/4">AP ICET </a></span>
      <i class="arrow">›</i>
    </div>
	
	<div class="uni-item">
      <img src="/institute/images/Icons/TS-ICET-L.png" />
      <span><a href="https://www.manabadi.co.in/ICET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/4">TS ICET </a></span>
      <i class="arrow">›</i>
    </div>
	
	 <div class="uni-item">
      <img src="/institute/images/Icons/SPMVV-L.png" />
      <span><a href="https://www.manabadi.co.in/LAWCET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/5">AP LAWCET </a></span>
      <i class="arrow">›</i>
    </div>
	
	<div class="uni-item">
      <img src="/institute/images/Icons/TS-ICET-L.png" />
      <span><a href="https://www.manabadi.co.in/LAWCET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/5">TS LAWCET </a></span>
      <i class="arrow">›</i>
    </div>
	
	 <div class="uni-item">
      <img src="/institute/images/Icons/ANU.png" />
      <span><a href="https://www.manabadi.co.in/PECET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/39">AP PECET </a></span>
      <i class="arrow">›</i>
    </div>
	
	<div class="uni-item">
      <img src="/institute/images/Icons/MGU-L.png" />
      <span><a href="https://www.manabadi.co.in/PECET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/39">TS PECET </a></span>
      <i class="arrow">›</i>
    </div>
	
	 <div class="uni-item">
      <img src="/institute/images/Icons/SVU-L.png" />
      <span><a href="https://www.manabadi.co.in/PGCET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/62">AP PGCET </a></span>
      <i class="arrow">›</i>
    </div>
	
	<div class="uni-item">
      <img src="/institute/images/Icons/OU-L.png" />
      <span><a href="https://www.manabadi.co.in/TS-CPGET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/1763">TS CPGET </a></span>
      <i class="arrow">›</i>
    </div>
	
	 <div class="uni-item">
      <img src="/institute/images/Icons/AP-SSC.png" />
      <span><a href="https://www.manabadi.co.in/PGECET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/63">AP PGECET </a></span>
      <i class="arrow">›</i>
    </div>
	
	<div class="uni-item">
      <img src="/institute/images/Icons/JNTUH.png" />
      <span><a href="https://www.manabadi.co.in/PGECET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/63">TS PGECET </a></span>
      <i class="arrow">›</i>
    </div>
	
	 <div class="uni-item">
      <img src="/institute/images/Icons/AP-SSC.png" />
      <span><a href="https://www.manabadi.co.in/APTET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/238">AP TET </a></span>
      <i class="arrow">›</i>
    </div>
	
	<div class="uni-item">
      <img src="/institute/images/Icons/TS-SSC.png" />
      <span><a href="https://www.manabadi.co.in/TSTET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/1757">TS TET </a></span>
      <i class="arrow">›</i>
    </div>
	
	 <div class="uni-item">
      <img src="/institute/images/Icons/CAT-L.png" />
      <span><a href="https://www.manabadi.co.in/CAT-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/105">CAT </a></span>
      <i class="arrow">›</i>
    </div>
	
	<div class="uni-item">
      <img src="/institute/images/Icons/GATE-L.png" />
      <span><a href="https://www.manabadi.co.in/GATE-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/1516">GATE </a></span>
      <i class="arrow">›</i>
    </div>
	
	<div class="uni-item">
      <img src="/institute/images/Icons/NEET-L.png" />
      <span><a href="https://www.manabadi.co.in/NEET-PG-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/1203">NEET PG </a></span>
      <i class="arrow">›</i>
    </div>

  </div>

  <div class="load-more-wrap">
    <button type="button" id="btnUniMore" class="btn-load"  onclick="toggleList('boardList','btnBoardMore')">

      Show More
    </button>
  </div>
  <div style="clear:both; height:1px;"></div>
	<ins class="adsbygoogle" style="display: block" data-ad-client="ca-pub-2551325655874098"
				data-ad-slot="6713161600" data-ad-format="auto"></ins>

				<script>
				    (adsbygoogle = window.adsbygoogle || []).push({});
				</script>
			<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
	<div style="clear:both; height:1px;"></div>
</div>


<!-- EDUCATION SERVICES -->
<div class="card edu-services-wrap">

  <div class="edu-services-head">
    <h2>Education Services</h2>
    <p>Explore Various Education Related Services</p>
  </div>

  <div class="edu-services-grid">

   <a href="https://www.manabadi.co.in/institute/Add_Institute/home/AISchoolFinder.aspx" class="edu-service-card">
      <img src="/images/edu/schools.png" alt="Schools" />
      <span>Schools</span>
    </a>

    <a href="https://www.manabadi.co.in/MB_2023/default.html" class="edu-service-card">
      <img src="/images/edu/colleges.png" alt="Colleges" />
      <span>Colleges</span>
    </a>

    <a href="https://www.manabadi.co.in/institute/TrgInstSearch.aspx" class="edu-service-card">
      <img src="/images/edu/training.png" alt="Training Institutes" />
      <span>Training Institutes</span>
    </a>

    <a href="https://www.manabadi.co.in/institute/ConsultancySearch.aspx" class="edu-service-card">
      <img src="/images/edu/consultancy.png" alt="Edu Consultancy" />
      <span>Edu Consultancy</span>
    </a>

    <a href="https://www.manabadi.co.in/institute/OthersSearch.aspx" class="edu-service-card">
      <img src="/images/edu/commodities.png" alt="Edu Commodities" />
      <span>Edu Commodities</span>
    </a>

    <a href="https://www.manabadi.co.in/forstudents/studentloans.asp" class="edu-service-card">
      <img src="/images/edu/loans.png" alt="Education Loans" />
      <span>Educational Loans</span>
    </a>

    <a href="https://www.manabadi.co.in/Articles/Latest-scholarships/Scholarships_Home.aspx" class="edu-service-card">
      <img src="/images/edu/scholarships.png" alt="Scholarships" />
      <span>Scholarships</span>
    </a>

    <a href="#" class="edu-service-card">
      <img src="/images/edu/study-abroad.png" alt="Study Abroad" />
      <span>Study Abroad</span>
    </a>

    <a href="https://www.manabadi.co.in/SCERT/default.aspx" class="edu-service-card">
      <img src="/images/edu/ebooks.png" alt="E-Textbooks" />
      <span>E-Textbooks</span>
    </a>


<div class="edu-service-card edu-view-all">
     <span class="gold_bg_g"><a href="https://www.manabadi.co.in/Institute-menu.aspx"> View All</a></span>
    </div>
    <!-- CENTER BUTTON -->
  
 </div>
</div>

<div class="tc-box">

  <div class="tc-head">
    <h3>Teachers & Careers</h3>
    <p>Explore Various Opportunities for Educators and Job Seekers</p>
  </div>

  <div class="tc-list">

    <a href="https://www.manabadi.co.in/forteachers/teachers-information-ap-ts-teacher-GOs-Jobs-reimbursement-policy-pension-salary-exam-notification-guideline.aspx" class="tc-chip">
        <span class="service-icon">👩‍🏫</span>
<span class="service-text">For Teachers</span>

      <i>›</i>
    </a>

    <a href="http://jobs.manabadi.co.in/index/index.aspx" class="tc-chip">
     <span class="service-icon">💼</span>
<span class="service-text">Teacher Jobs</span>

      <i>›</i>
    </a>
    <a href="https://www.manabadi.co.in/Articles/Latest-Governmet-Jobs/All_Government_Jobs.aspx" class="tc-chip">

<span class="service-icon">🏢</span>
<span class="service-text">Private Jobs</span>
      <i>›</i>
    </a>



    <a href="https://www.manabadi.co.in/articles/Latest-current-affairs/Latest-Current-Affairs.aspx" class="tc-chip">
     <span class="service-icon">📰</span>
<span class="service-text">Current Affairs</span>

      <i>›</i>
    </a>

    <a href="https://www.manabadi.co.in/institute/careerlist.aspx" class="tc-chip">
    <span class="service-icon">🎯</span>
<span class="service-text">Career Options</span>

      <i>›</i>
    </a>

  <a href="https://www.manabadi.co.in/articles/ViewByCatgory.htm" class="tc-chip">
  <span class="service-icon">📚</span>
  <span class="service-text">All Articles</span>
  <i>›</i>
</a>


  </div>
<ins class="adsbygoogle" style="display: block" data-ad-client="ca-pub-2551325655874098"
				data-ad-slot="6713161600" data-ad-format="auto"></ins>

				<script>
				    (adsbygoogle = window.adsbygoogle || []).push({});
				</script>
			<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
</div>
	
</div>
</div>
</form>
<!--SMS dispatcher to Inter students--->
<script>
setTimeout(function () {
  fetch('/HTML-Trigger/sms_dispatcher.aspx', {
    method: 'GET',
    cache: 'no-store'
  }).catch(function(){});
}, 1500);
</script>

<!-- Google Analytics Java Script START -->
<script type="text/javascript">
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date(); a = s.createElement(o),
					  m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-929033-1', 'auto');
    ga('send', 'pageview');

</script> 
</body>
</html>
 <div id="Demo-Ads" class="adsdiv">  </div> 
  
 <script language="javascript">
 $(function() {
  $("#Demo-Ads").load("pagehitcounter.aspx"); 
   }); 
</script>