ï»¿

<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><title>
	Manabadi â Home
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


/* CARD â smaller so 3 fit */
.hcard{
flex:0 0 auto; 
  min-width:120px;     /* â¬ KEY CHANGE */
  height:80px;         /* â¬ KEY CHANGE */

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
  gap:20px;   /* â¬ IMPORTANT */
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
  margin-bottom:18px; /* â¬ GAP BETWEEN BOXES */
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
  font-size:34px;                 /* ð key fix */
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
  padding:10px 16px;   /* ð text width + ~10px */
  font-size:15px;
  font-weight:700;
  width:auto;          /* ð IMPORTANT */
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

/* COLLAPSED STATE (â 6 items) */
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
   grid-template-columns:repeat(2,1fr);   /* â Mobile: 2 x 2 */
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
/* TEACHERS & CAREERS â CHIP BOXES */
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
  display:inline-flex;       /* â¬ KEY FIX */
  align-items:center;
  justify-content:center;
  flex:0 0 auto;   /* â¬ DO NOT GROW */

  width:auto;               /* â¬ prevent stretching */
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
    width:88px;   /* â¬ was 120px */
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

  /* Chips â BIG WIN */
  .chip{
    height:36px;          /* â¬ from 44px */
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
    padding:7px 0;        /* â¬ reduced */
    font-size:12.5px;
  }

  /* Chips inside Inter / SSC */
  .chip{
    height:34px;          /* â¬ FINAL key */
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
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPDwUJNzIyNDEyNDM0D2QWAgIDD2QWAgIBDzwrAAkBAA8WBB4IRGF0YUtleXMWAB4LXyFJdGVtQ291bnQCKGQWUGYPZBYCZg8VBQoyNC4wMi4yMDI2B1JFU1VMVFMGMTkzODUxQGh0dHBzOi8vd3d3Lm1hbmFiYWRpLmNvLmluL2JvYXJkcy90cy1pbnRlci0ybmQteWVhci1oYWxsLXRpY2tldC8mVFMgSW50ZXIgMm5kIFllYXIgSGFsbCB0aWNrZXQgUmVsZWFzZWRkAgEPZBYCZg8VBQoyNC4wMi4yMDI2C0hBTExUSUNLRVRTBjE5MTMyMkBodHRwczovL3d3dy5tYW5hYmFkaS5jby5pbi9ib2FyZHMvdHMtaW50ZXItMXN0LXllYXItaGFsbC10aWNrZXQvJlRHIEludGVyIDFzdCBZZWFyIEhhbGwgVGlja2V0IDIwMjYgT3V0ZAICD2QWAmYPFQUKMjQuMDIuMjAyNgdSRVNVTFRTBjE5Mzk5OZABaHR0cHM6Ly93d3cubWFuYWJhZGkuY28uaW4vUmVzdWx0c18yNi9PVS1CRS1BSUNURS0xc3QzcmQ1dGgtN3RoLVNlbS1NYWluLUJhY2tsb2ctMm5kLTR0aC02dGgtU2VtLUJhY2tsb2ctRGVjLTIwMjUtSmFuLTIwMjYtUmVzdWx0cy0yNC0yLTIwMjYuYXNwXk9VIEJFIEFJQ1RFIDEsMyw1ICYgNyBTZW0gKE1haW4gJiBCYWNrbG9nKSAmIDIgLCA0ICYgNiBTZW0gKEJhY2tsb2cpIERlYy0yMDI1L0phbi0yMDI2IFJlc3VsdHNkAgMPZBYCZg8VBQoyNC4wMi4yMDI2B1JFU1VMVFMGMTkzOTk4Zmh0dHBzOi8vd3d3Lm1hbmFiYWRpLmNvLmluL1Jlc3VsdHNfMjYvT1UtQkVkLVNwbC1FZG4tTVJJLWFsbC1zZW1lc3RlcnMtRGVjLTIwMjUtUmVzdWx0cy0tMjQtMi0yMDI2LmFzcDRPVSBCLkVkIFNwbCBFZG4gKE1SSSkgYWxsIHNlbWVzdGVycyBEZWMtMjAyNSBSZXN1bHRzZAIED2QWAmYPFQUKMjQuMDIuMjAyNgdSRVNVTFRTBjE5Mzk5N2VodHRwczovL3d3dy5tYW5hYmFkaS5jby5pbi9SZXN1bHRzXzI2L09VLUJFZC1TcGwtRWRuQVNELWFsbC1zZW1lc3RlcnMtRGVjLTIwMjUtUmVzdWx0cy0tMjQtMi0yMDI2LmFzcDNPVSBCLkVkIFNwbCBFZG4oQVNEKSBhbGwgc2VtZXN0ZXJzIERlYy0yMDI1IFJlc3VsdHNkAgUPZBYCZg8VBQoyNC4wMi4yMDI2B1JFU1VMVFMGMTkzOTk2ZGh0dHBzOi8vd3d3Lm1hbmFiYWRpLmNvLmluL1Jlc3VsdHNfMjYvT1UtQkVkLVNwbC1FZG4tSEktYWxsLXNlbWVzdGVycy1EZWMtMjAyNS1SZXN1bHRzLTI0LTItMjAyNi5hc3AzT1UgQi5FZCBTcGwgRWRuIChISSkgYWxsIHNlbWVzdGVycyBEZWMtMjAyNSBSZXN1bHRzZAIGD2QWAmYPFQUKMjQuMDIuMjAyNgdSRVNVTFRTBjE5Mzk5NWVodHRwczovL3d3dy5tYW5hYmFkaS5jby5pbi9SZXN1bHRzXzI2L09VLUJFZC1TcGwtRWRuLUxELWFsbC1zZW1lc3RlcnMtRGVjLTIwMjUtUmVzdWx0cy0tMjQtMi0yMDI2LmFzcDNPVSBCLkVkIFNwbCBFZG4gKExEKSBhbGwgc2VtZXN0ZXJzIERlYy0yMDI1IFJlc3VsdHNkAgcPZBYCZg8VBQoyNC4wMi4yMDI2B1JFU1VMVFMGMTkzOTk0Zmh0dHBzOi8vd3d3Lm1hbmFiYWRpLmNvLmluL1Jlc3VsdHNfMjYvT1UtQlBoYXJtYWN5LUNCQ1MtT25lLVRpbWUtQ2hhbmNlLURlYy0yMDI1LVJlc3VsdHMtMjQtMi0yMDI2LmFzcDNPVSBCLlBoYXJtYWN5IENCQ1MgT25lIFRpbWUgQ2hhbmNlIERlYy0yMDI1IFJlc3VsdHNkAggPZBYCZg8VBQoyNC4wMi4yMDI2B1JFU1VMVFMGMTkzOTkza2h0dHBzOi8vd3d3Lm1hbmFiYWRpLmNvLmluL1Jlc3VsdHNfMjYvT1UtQlBoYXJtYWN5LU5vbi1DQkNTLU9uZS1UaW1lLUNoYW5jZS1EZWMtMjAyNS1SZXN1bHRzLS0yNC0yLTIwMjYuYXNwN09VIEIuUGhhcm1hY3kgTm9uIENCQ1MgT25lLVRpbWUgQ2hhbmNlIERlYy0yMDI1IFJlc3VsdHNkAgkPZBYCZg8VBQoyNC4wMi4yMDI2DE5PVElGSUNBVElPTgYxOTM5OTKAAWh0dHBzOi8vd3d3Lm1hbmFiYWRpLmNvLmluL05vdGlmaWNhdGlvbnNfMjYvS05SVUhTLU1EUy1QQVJULUlJLU5ldy1SZWd1bGF0aW9ucy1TdXBwbHktRXhhbS1BcHJpbC0yMDI2LU5vdGlmaWNhdGlvbi0yNC0yLTIwMjYuYXNwSEtOUlVIUyBNRFMgUEFSVCBJSSAoTmV3IFJlZ3VsYXRpb25zKSBTdXBwbHkgRXhhbSBBcHJpbCAyMDI2IE5vdGlmaWNhdGlvbmQCCg9kFgJmDxUFCjI0LjAyLjIwMjYMTk9USUZJQ0FUSU9OBjE5Mzk5MXRodHRwczovL3d3dy5tYW5hYmFkaS5jby5pbi9Ob3RpZmljYXRpb25zXzI2L0tOUlVIUy1CSE1TLUZpbmFsLVllYXItU3VwcGx5LUV4YW0tQXByaWwtMjAyNi1Ob3RpZmljYXRpb24tMjQtMi0yMDI2LmFzcDpLTlJVSFMgQkhNUyBGaW5hbCBZZWFyIFN1cHBseSBFeGFtIEFwcmlsIDIwMjYgTm90aWZpY2F0aW9uZAILD2QWAmYPFQUKMjQuMDIuMjAyNgxOT1RJRklDQVRJT04GMTkzOTkwc2h0dHBzOi8vd3d3Lm1hbmFiYWRpLmNvLmluL05vdGlmaWNhdGlvbnNfMjYvS05SVUhTLU1QSC1GaW5hbC1ZZWFyLVN1cHBseS1FeGFtLUFwcmlsLTIwMjYtTm90aWZpY2F0aW9uLTI0LTItMjAyNi5hc3A5S05SVUhTIE1QSCBGaW5hbCBZZWFyIFN1cHBseSBFeGFtIEFwcmlsIDIwMjYgTm90aWZpY2F0aW9uZAIMD2QWAmYPFQUKMjQuMDIuMjAyNgdSRVNVTFRTBjE5Mzk4OXNodHRwczovL3d3dy5tYW5hYmFkaS5jby5pbi9SZXN1bHRzXzI2L0FVLUxMQjNZRUFSUy01dGgtU2VtLTMtMS1SZWd1LVN1cHBseS1FeGFtLU5vdmVtYmVyLTIwMjUtUmVzdWx0cy0yNC0yLTIwMjYuYXNwQ0FVIExMQigzWUVBUlMpIDV0aCBTZW0gKDMtMSkgUmVndS9TdXBwbHkgRXhhbSBOb3ZlbWJlciAyMDI1IFJlc3VsdHNkAg0PZBYCZg8VBQoyNC4wMi4yMDI2B1JFU1VMVFMGMTkzOTg4c2h0dHBzOi8vd3d3Lm1hbmFiYWRpLmNvLmluL1Jlc3VsdHNfMjYvQVUtTExCNVlFQVJTLTV0aC1TZW0tMy0xLVJlZ3UtU3VwcGx5LUV4YW0tTm92ZW1iZXItMjAyNS1SZXN1bHRzLTI0LTItMjAyNi5hc3BDQVUgTExCKDVZRUFSUykgNXRoIFNlbSAoMy0xKSBSZWd1L1N1cHBseSBFeGFtIE5vdmVtYmVyIDIwMjUgUmVzdWx0c2QCDg9kFgJmDxUFCjI0LjAyLjIwMjYHUkVTVUxUUwYxOTM5ODdzaHR0cHM6Ly93d3cubWFuYWJhZGkuY28uaW4vUmVzdWx0c18yNi9BVS1MTEI1WUVBUlMtOXRoLVNlbS01LTEtUmVndS1TdXBwbHktRXhhbS1Ob3ZlbWJlci0yMDI1LVJlc3VsdHMtMjQtMi0yMDI2LmFzcENBVSBMTEIoNVlFQVJTKSA5dGggU2VtICg1LTEpIFJlZ3UvU3VwcGx5IEV4YW0gTm92ZW1iZXIgMjAyNSBSZXN1bHRzZAIPD2QWAmYPFQUKMjQuMDIuMjAyNgdSRVNVTFRTBjE5Mzk4Nn1odHRwczovL3d3dy5tYW5hYmFkaS5jby5pbi9SZXN1bHRzXzI2L0pOVFVBLU1DQS0ybmQtU2VtZXN0ZXItUjIxLVN1cHBseS1FeGFtLURlY2VtYmVyLUphbnVhcnktMjAyNS0yMDI2LVJlc3VsdHMtMjQtMi0yMDI2LmFzcEtKTlRVQSBNQ0EgMm5kIFNlbWVzdGVyIChSMjEpIFN1cHBseSBFeGFtIERlY2VtYmVyL0phbnVhcnkgMjAyNS8yMDI2IFJlc3VsdHNkAhAPZBYCZg8VBQoyNC4wMi4yMDI2B1JFU1VMVFMGMTkzOTg1gQFodHRwczovL3d3dy5tYW5hYmFkaS5jby5pbi9SZXN1bHRzXzI2L0pOVFVBLU1CQS0xc3QtU2VtZXN0ZXItUjIxLVJlZy1TdXBwbHktRXhhbS1EZWNlbWJlci1KYW51YXJ5LTIwMjUtMjAyNi1SZXN1bHRzLTI0LTItMjAyNi5hc3BPSk5UVUEgTUJBIDFzdCBTZW1lc3RlciAoUjIxKSBSZWcvU3VwcGx5IEV4YW0gRGVjZW1iZXIvSmFudWFyeSAyMDI1LzIwMjYgUmVzdWx0c2QCEQ9kFgJmDxUFCjI0LjAyLjIwMjYHUkVTVUxUUwYxOTM5ODR9aHR0cHM6Ly93d3cubWFuYWJhZGkuY28uaW4vUmVzdWx0c18yNi9KTlRVQS1NQkEtMm5kLVNlbWVzdGVyLVIyMS1TdXBwbHktRXhhbS1EZWNlbWJlci1KYW51YXJ5LTIwMjUtMjAyNi1SZXN1bHRzLTI0LTItMjAyNi5hc3BLSk5UVUEgTUJBIDJuZCBTZW1lc3RlciAoUjIxKSBTdXBwbHkgRXhhbSBEZWNlbWJlci9KYW51YXJ5IDIwMjUvMjAyNiBSZXN1bHRzZAISD2QWAmYPFQUKMjQuMDIuMjAyNgdSRVNVTFRTBjE5Mzk4M4wBaHR0cHM6Ly93d3cubWFuYWJhZGkuY28uaW4vUmVzdWx0c18yNi9KTlRVQS1NQ0EtMXN0LVNlbWVzdGVyLVIyMS1SZWd1bGFyLVN1cHBsZW1lbnRhcnktRXhhbS1EZWNlbWJlci1KYW51YXJ5LTIwMjUtMjAyNi1SZXN1bHRzLTI0LTItMjAyNi5hc3BaSk5UVUEgTUNBIDFzdCBTZW1lc3RlciAoUjIxKSBSZWd1bGFyL1N1cHBsZW1lbnRhcnkgRXhhbSBEZWNlbWJlci9KYW51YXJ5IDIwMjUvMjAyNiBSZXN1bHRzZAITD2QWAmYPFQUKMjQuMDIuMjAyNg9JTVBPUlRBTlQgREFURVMGMTkzOTgymgFodHRwczovL3d3dy5tYW5hYmFkaS5jby5pbi9Ob3RpZmljYXRpb25zXzI2L09VLU1FLU1UZWNoLUFJQ1RFLTNyZC1TZW0tTWFpbi1SZS1SZWdpc3RlcmVkLTJuZC1TZW0tTWFrZXVwLUV4YW0tTWFyY2gtMjAyNi1SZXZpc2VkLU5vdGlmaWNhdGlvbi0yNC0yLTIwMjYuYXNwZE9VIE0uRS9NLlRlY2ggQUlDVEUgM3JkIFNlbSAoTWFpbiAmIFJlLVJlZ2lzdGVyZWQpICYgMm5kIFNlbSAoTWFrZXVwKSBFeGFtIE1hcmNoLTIwMjYgUmV2aXNlZCBOb3RpY2VkAhQPZBYCZg8VBQoyNC4wMi4yMDI2DE5PVElGSUNBVElPTgYxOTM5ODGaAWh0dHBzOi8vd3d3Lm1hbmFiYWRpLmNvLmluL05vdGlmaWNhdGlvbnNfMjYvT1UtTUUtTVRlY2gtQUlDVEUtM3JkLVNlbS1NYWluLVJlLVJlZ2lzdGVyZWQtMm5kLVNlbS1NYWtldXAtRXhhbS1NYXJjaC0yMDI2LVJldmlzZWQtTm90aWZpY2F0aW9uLTI0LTItMjAyNi5hc3BkT1UgTS5FL00uVGVjaCBBSUNURSAzcmQgU2VtIChNYWluICYgUmUtUmVnaXN0ZXJlZCkgJiAybmQgU2VtIChNYWtldXApIEV4YW0gTWFyY2gtMjAyNiBSZXZpc2VkIE5vdGljZWQCFQ9kFgJmDxUFCjI0LjAyLjIwMjYPSU1QT1JUQU5UIERBVEVTBjE5Mzk4MJEBaHR0cHM6Ly93d3cubWFuYWJhZGkuY28uaW4vTm90aWZpY2F0aW9uc18yNi9PVS1KdW5pb3ItU2VuaW9yLUFkdmFuY2VkLURpcGxvbWEtaW4tRnJlbmNoLUdlcm1hbi1SZWd1bGFyLUV4YW0tQXByaWwtMjAyNi1Ob3RpZmljYXRpb24tMjQtMi0yMDI2LmFzcFlPVSBKdW5pb3IvU2VuaW9yICYgQWR2YW5jZWQgRGlwbG9tYSBpbiBGcmVuY2gvR2VybWFuIFJlZ3VsYXIgRXhhbSBBcHJpbC0yMDI2IE5vdGlmaWNhdGlvbmQCFg9kFgJmDxUFCjI0LjAyLjIwMjYMTk9USUZJQ0FUSU9OBjE5Mzk3OZEBaHR0cHM6Ly93d3cubWFuYWJhZGkuY28uaW4vTm90aWZpY2F0aW9uc18yNi9PVS1KdW5pb3ItU2VuaW9yLUFkdmFuY2VkLURpcGxvbWEtaW4tRnJlbmNoLUdlcm1hbi1SZWd1bGFyLUV4YW0tQXByaWwtMjAyNi1Ob3RpZmljYXRpb24tMjQtMi0yMDI2LmFzcFlPVSBKdW5pb3IvU2VuaW9yICYgQWR2YW5jZWQgRGlwbG9tYSBpbiBGcmVuY2gvR2VybWFuIFJlZ3VsYXIgRXhhbSBBcHJpbC0yMDI2IE5vdGlmaWNhdGlvbmQCFw9kFgJmDxUFCjI0LjAyLjIwMjYHUkVTVUxUUwYxOTM5NzhkaHR0cHM6Ly93d3cubWFuYWJhZGkuY28uaW4vUmVzdWx0c18yNi9KTlRVLUdWLURFLVByZS1QaEQtRXhhbWluYXRpb25zLTIwMjUtUmVnLVJlc3VsdHMtMjQtMi0yMDI2LmFzcDFKTlRVIEdWIERFIFByZS1QaC5EIEV4YW1pbmF0aW9ucyAyMDI1IFJlZyBSZXN1bHRzZAIYD2QWAmYPFQUKMjQuMDIuMjAyNgpUSU1FIFRBQkxFBjE5Mzk3N44BaHR0cHM6Ly93d3cubWFuYWJhZGkuY28uaW4vVGltZXRhYmxlc18yNi9KTlRVQS1CLVBoYXJtYWN5LTNyZC15ZWFyLTFzdC0ybmQtc2VtLVIyM1IxOS1SMTUtUmVnLXN1cGx5LURlYy1KYW4tMjAyNS0yMDI2LVRpbWUtVGFibGUtMjQtMi0yMDI2LmFzcGBKTlRVQSBCIFBoYXJtYWN5IDNyZCB5ZWFyIDFzdCAmIDJuZCBzZW0gKFIyMyxSMTkgJiBSMTUpIFJlZyAmIHN1cGx5IERlYy1KYW4tMjAyNS0yMDI2IFRpbWUgVGFibGVkAhkPZBYCZg8VBQoyNC4wMi4yMDI2ClRJTUUgVEFCTEUGMTkzOTc2eGh0dHBzOi8vd3d3Lm1hbmFiYWRpLmNvLmluL1RpbWV0YWJsZXNfMjYvSk5UVUEtQlBoYXJtLTJuZC15ZWFyLTJuZC1TZW0tUjIzLVN1cHBseS1FeGFtLUZlYi0yMDI2LVRpbWUtVGFibGUtMjQtMi0yMDI2LmFzcERKTlRVQSBCLlBoYXJtIDJuZCB5ZWFyIDJuZCBTZW0gKFIyMykgU3VwcGx5IEV4YW0gRmViIDIwMjYgVGltZSBUYWJsZWQCGg9kFgJmDxUFCjI0LjAyLjIwMjYMTk9USUZJQ0FUSU9OBjE5Mzk3NZYBaHR0cHM6Ly93d3cubWFuYWJhZGkuY28uaW4vTm90aWZpY2F0aW9uc18yNi9KTlRVQS1NQkEtMXN0LTJuZC1TZW0tUjIxLVJlZ3VsYXItU3VwcGx5LUV4YW0tUmVjb3VudGluZy1DVi1QQ0EtRGVjSmFuLTIwMjUyMDI2LU5vdGlmaWNhdGlvbi0yNC0yLTIwMjYuYXNwZEpOVFVBIE1CQSAxc3QgJiAybmQgU2VtKCBSMjEpIFJlZ3VsYXIvU3VwcGx5IEV4YW0gUmVjb3VudGluZywgQ1YsIFBDQSBEZWMsSmFuIDIwMjUuMjAyNiBOb3RpZmljYXRpb25kAhsPZBYCZg8VBQoyNC4wMi4yMDI2DE5PVElGSUNBVElPTgYxOTM5NzSEAWh0dHBzOi8vd3d3Lm1hbmFiYWRpLmNvLmluL05vdGlmaWNhdGlvbnNfMjYvSk5UVUEtTUJBLTFzdC0ybmQtU2VtLVIyMS1SZWd1bGFyLVN1cHBseS1EZWMtSmFudWFyeS0yMDI1MjAyNi1Ob3RpZmljYXRpb24tMjQtMi0yMDI2LmFzcFFKTlRVQSBNQkEgMXN0ICYgMm5kIFNlbSAoUjIxKSBSZWd1bGFyICYgU3VwcGx5IERlYy9KYW51YXJ5IDIwMjUuMjAyNiBOb3RpZmljYXRpb25kAhwPZBYCZg8VBQoyNC4wMi4yMDI2DE5PVElGSUNBVElPTgYxOTM5NzOEAWh0dHBzOi8vd3d3Lm1hbmFiYWRpLmNvLmluL05vdGlmaWNhdGlvbnNfMjYvSk5UVUEtTUNBLTFzdC0ybmQtU2VtLVIyMS1SZWd1bGFyLVN1cHBseS1EZWMtSmFudWFyeS0yMDI1MjAyNi1Ob3RpZmljYXRpb24tMjQtMi0yMDI2LmFzcFFKTlRVQSBNQ0EgMXN0ICYgMm5kIFNlbSAoUjIxKSBSZWd1bGFyICYgU3VwcGx5IERlYy9KYW51YXJ5IDIwMjUuMjAyNiBOb3RpZmljYXRpb25kAh0PZBYCZg8VBQoyNC4wMi4yMDI2DE5PVElGSUNBVElPTgYxOTM5NzJAaHR0cHM6Ly93d3cubWFuYWJhZGkuY28uaW4vZW50cmFuY2UtZXhhbXMvdGctcGVjZXQtbm90aWZpY2F0aW9uLx5URyBQRUNFVCBOb3RpZmljYXRpb24gMjAyNiBPdXRkAh4PZBYCZg8VBQoyNC4wMi4yMDI2D0lNUE9SVEFOVCBEQVRFUwYxOTM5NzFwaHR0cHM6Ly93d3cubWFuYWJhZGkuY28uaW4vVGltZXRhYmxlc18yNi9KTlRVSC1NVGVjaC0xc3QtU2VtLVIxOS1TdXBwbHktRXhhbS1NYXJjaC0yMDI2LVRpbWUtVGFibGUtMjQtMi0yMDI2LmFzcDpKTlRVSCBNLlRlY2ggMXN0IFNlbSBSMTkgU3VwcGx5IEV4YW0gTWFyY2ggMjAyNiBUaW1lIFRhYmxlZAIfD2QWAmYPFQUKMjQuMDIuMjAyNgpUSU1FIFRBQkxFBjE5Mzk3MHBodHRwczovL3d3dy5tYW5hYmFkaS5jby5pbi9UaW1ldGFibGVzXzI2L0pOVFVILU1UZWNoLTFzdC1TZW0tUjE5LVN1cHBseS1FeGFtLU1hcmNoLTIwMjYtVGltZS1UYWJsZS0yNC0yLTIwMjYuYXNwOkpOVFVIIE0uVGVjaCAxc3QgU2VtIFIxOSBTdXBwbHkgRXhhbSBNYXJjaCAyMDI2IFRpbWUgVGFibGVkAiAPZBYCZg8VBQoyNC4wMi4yMDI2B1JFU1VMVFMGMTkzOTY5R2h0dHBzOi8vd3d3Lm1hbmFiYWRpLmNvLmluL2VudHJhbmNlLWV4YW1zL2plZS1tYWluLTIwMjYtcGFwZXItMi1yZXN1bHQvIEpFRSBNYWluIDIwMjYgUGFwZXIgMiBSZXN1bHQgT3V0ZAIhD2QWAmYPFQUKMjQuMDIuMjAyNgdSRVNVTFRTBjE5Mzk2OHFodHRwczovL3d3dy5tYW5hYmFkaS5jby5pbi9SZXN1bHRzXzI2L0pOVFVILUJUZWNoLTJuZC1ZZWFyLTJuZC1TZW0tUjIyLVN1cHBseS1FeGFtLURFQy0yMDI1LVJlc3VsdHMtMjQtMi0yMDI2LmFzcEBKTlRVSCBCLlRlY2ggMm5kIFllYXIgMm5kIFNlbSAoUjIyKSBTdXBwbHkgRXhhbSBERUMtMjAyNSBSZXN1bHRzZAIiD2QWAmYPFQUKMjQuMDIuMjAyNgdSRVNVTFRTBjE5Mzk2N3FodHRwczovL3d3dy5tYW5hYmFkaS5jby5pbi9SZXN1bHRzXzI2L0pOVFVILUJUZWNoLTJuZC1ZZWFyLTJuZC1TZW0tUjE4LVN1cHBseS1FeGFtLURFQy0yMDI1LVJlc3VsdHMtMjQtMi0yMDI2LmFzcEBKTlRVSCBCLlRlY2ggMm5kIFllYXIgMm5kIFNlbSAoUjE4KSBTdXBwbHkgRXhhbSBERUMtMjAyNSBSZXN1bHRzZAIjD2QWAmYPFQUKMjQuMDIuMjAyNgdSRVNVTFRTBjE5Mzk2NnJodHRwczovL3d3dy5tYW5hYmFkaS5jby5pbi9SZXN1bHRzXzI2L0pOVFVILUJUZWNoLTJuZC1ZZWFyLTFzdC1TZW0tUjIyLVJlZ3VsYXItRXhhbS1ERUMtMjAyNS1SZXN1bHRzLTI0LTItMjAyNi5hc3BBSk5UVUggQi5UZWNoIDJuZCBZZWFyIDFzdCBTZW0gKFIyMikgUmVndWxhciBFeGFtIERFQy0yMDI1IFJlc3VsdHNkAiQPZBYCZg8VBQoyNC4wMi4yMDI2B1JFU1VMVFMGMTkzOTY1cWh0dHBzOi8vd3d3Lm1hbmFiYWRpLmNvLmluL1Jlc3VsdHNfMjYvSk5UVUgtQlRlY2gtMm5kLVllYXItMXN0LVNlbS1SMTgtU3VwcGx5LUV4YW0tREVDLTIwMjUtUmVzdWx0cy0yNC0yLTIwMjYuYXNwQEpOVFVIIEIuVGVjaCAybmQgWWVhciAxc3QgU2VtIChSMTgpIFN1cHBseSBFeGFtIERFQy0yMDI1IFJlc3VsdHNkAiUPZBYCZg8VBQoyNC4wMi4yMDI2D0lNUE9SVEFOVCBEQVRFUwYxOTM5NjSPAWh0dHBzOi8vd3d3Lm1hbmFiYWRpLmNvLmluL1RpbWV0YWJsZXNfMjYvUGFsYW11cnUtVW5pdmVyc2l0eS1CUGhhcm1hY3ktMXN0LVNlbS1SZWd1bGFyLUJhY2tsb2ctUENJLVN5bGxhYnVzLU1hcmNoLTIwMjYtVGltZS1UYWJsZS0yNC0yLTIwMjYuYXNwW1BhbGFtdXJ1IFVuaXZlcnNpdHkgQi5QaGFybWFjeSAxc3QgU2VtIChSZWd1bGFyL0JhY2tsb2ctUENJIFN5bGxhYnVzKSBNYXJjaCAyMDI2IFRpbWUgVGFibGVkAiYPZBYCZg8VBQoyNC4wMi4yMDI2ClRJTUUgVEFCTEUGMTkzOTYzjwFodHRwczovL3d3dy5tYW5hYmFkaS5jby5pbi9UaW1ldGFibGVzXzI2L1BhbGFtdXJ1LVVuaXZlcnNpdHktQlBoYXJtYWN5LTFzdC1TZW0tUmVndWxhci1CYWNrbG9nLVBDSS1TeWxsYWJ1cy1NYXJjaC0yMDI2LVRpbWUtVGFibGUtMjQtMi0yMDI2LmFzcFtQYWxhbXVydSBVbml2ZXJzaXR5IEIuUGhhcm1hY3kgMXN0IFNlbSAoUmVndWxhci9CYWNrbG9nLVBDSSBTeWxsYWJ1cykgTWFyY2ggMjAyNiBUaW1lIFRhYmxlZAInD2QWAmYPFQUKMjQuMDIuMjAyNg9JTVBPUlRBTlQgREFURVMGMTkzOTYyjwFodHRwczovL3d3dy5tYW5hYmFkaS5jby5pbi9UaW1ldGFibGVzXzI2L1BhbGFtdXJ1LVVuaXZlcnNpdHktQlBoYXJtYWN5LTNyZC1TZW0tUmVndWxhci1CYWNrbG9nLVBDSS1TeWxsYWJ1cy1NYXJjaC0yMDI2LVRpbWUtVGFibGUtMjQtMi0yMDI2LmFzcFtQYWxhbXVydSBVbml2ZXJzaXR5IEIuUGhhcm1hY3kgM3JkIFNlbSAoUmVndWxhci9CYWNrbG9nLVBDSSBTeWxsYWJ1cykgTWFyY2ggMjAyNiBUaW1lIFRhYmxlZGTPfNXBfZsINtzW4qs39DTJ0m45+w==" />

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
      ð <span class="contact-text">Contact</span>
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
    <div class="start-icon">ð¯</div>
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
  <span class="hot-icon">ð¢</span>

  <div class="hot-text">
    <strong>ANNOUNCEMENT:</strong>
    <span class="hot-msg">
	<br />
	  <a href="https://www.manabadi.co.in/qp/downloadqpnew.aspx"> <span class="hot-msg">AP / TS Inter Guess Papers 2026  </span></a> <br />
	  <a href="https://www.manabadi.co.in/boards/ts-inter-2nd-year-hall-ticket/"> <span class="hot-msg">TS Inter 2nd Year Hall Ticket 2026 (OUT)  </span></a> <br />
	  <!--<a href="https://www.manabadi.co.in/entrance-exams/jee/jee-rank-calculator.aspx"> JEE Mains Percentile Vs Rank Calculator 2026 </a>-->
	
    </span>
  </div>

  <span class="hot-action">â¡</span>
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
    <a class="get-alerts" href="https://www.manabadi.co.in/qp/ap-ts-inter-mobile-data.aspx" ><span style="float:right;color:var(--muted)">ð Get Alerts</span></a>
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
  <a class="chip" id="chip-hall">ð Hall Tickets</a>
   <a class="chip" id="chip-time">ð Time Tables</a>
   <a class="chip" id="chip-guess">ð Guess Papers<img src="../Graphics/Images/New_icons_22.jpg" id="DataList1_ctl03_ImgArt1" base="" target="_blank"></a>
   <a class="chip" id="chip-results">ð Results</a>
  <a class="chip" id="chip-full">ð Full Program</a>
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
 <div class="section-title">10TH CLASS (SSC) <span style="float:right;color:var(--muted)">ð<a href="https://www.manabadi.co.in/qp/ap-ts-ssc-mobile-data.aspx"> Get Alerts</a></span></div>
 <div class="toggle ssc" id="ssc">
  <span class="active" onclick="toggle(this,'ssc')">AP SSC</span>
  <span onclick="toggle(this,'ssc')">TS SSC</span>
</div>

  <div class="chips" id="sscChips">
    <a class="chip" id="ssc-results">ð Results</a>
    <a class="chip" id="ssc-hall">ð« Hall Tickets</a>
    <a class="chip" id="ssc-model">ð Model Papers<img src="../Graphics/Images/New_icons_22.jpg" id="DataList1_ctl03_ImgArt1" base="" target="_blank"></a>
	<a class="chip" id="ssc-guess">ð Guess Papers<img src="../Graphics/Images/New_icons_22.jpg" id="DataList1_ctl03_ImgArt1" base="" target="_blank"></a>
	<a class="chip" id="ssc-time">ð Time Table</a>
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
  <div class="exam-title">EAPCET â TS</div>
  <div class="exam-desc">
   <a href="https://www.exams.manabadi.co.in/eamcet-mock-exam/EAMCET-EAPCET-Online-Mock-Exams.aspx">Mock Exams</a> <span>|</span> <a href="https://www.manabadi.co.in/entrance-exams/ts-eapcet-notification/">Notification</a> <span>|</span> <a href="https://www.manabadi.co.in/entrance-exams/tg-eapcet-eligibility-criteria-2026/">Eligibility</a> <span>|</span> <a href="https://www.manabadi.co.in/entrance-exams/tg-eapcet-exam-date/">Exam Date</a> <span>|</span> <a href="https://www.manabadi.co.in/entrance-exams/tg-eapcet-syllabus/">Syllabus</a> <span>|</span> <a href="https://www.manabadi.co.in/182/TS%20EAPCET-Model-Papers">Model Papers</a>
  </div>
 </div>

 <div class="exam">
  <div class="exam-title">EAPCET â AP</div>
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
        <div class="update-row" data-date="24.02.2026">

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
        <div class="update-row" data-date="24.02.2026">

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
        <div class="update-row" data-date="24.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            RESULTS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193999&DocUrl=https://www.manabadi.co.in/Results_26/OU-BE-AICTE-1st3rd5th-7th-Sem-Main-Backlog-2nd-4th-6th-Sem-Backlog-Dec-2025-Jan-2026-Results-24-2-2026.asp">
            OU BE AICTE 1,3,5 & 7 Sem (Main & Backlog) & 2 , 4 & 6 Sem (Backlog) Dec-2025/Jan-2026 Results
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="24.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            RESULTS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193998&DocUrl=https://www.manabadi.co.in/Results_26/OU-BEd-Spl-Edn-MRI-all-semesters-Dec-2025-Results--24-2-2026.asp">
            OU B.Ed Spl Edn (MRI) all semesters Dec-2025 Results
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="24.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            RESULTS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193997&DocUrl=https://www.manabadi.co.in/Results_26/OU-BEd-Spl-EdnASD-all-semesters-Dec-2025-Results--24-2-2026.asp">
            OU B.Ed Spl Edn(ASD) all semesters Dec-2025 Results
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="24.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            RESULTS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193996&DocUrl=https://www.manabadi.co.in/Results_26/OU-BEd-Spl-Edn-HI-all-semesters-Dec-2025-Results-24-2-2026.asp">
            OU B.Ed Spl Edn (HI) all semesters Dec-2025 Results
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="24.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            RESULTS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193995&DocUrl=https://www.manabadi.co.in/Results_26/OU-BEd-Spl-Edn-LD-all-semesters-Dec-2025-Results--24-2-2026.asp">
            OU B.Ed Spl Edn (LD) all semesters Dec-2025 Results
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="24.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            RESULTS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193994&DocUrl=https://www.manabadi.co.in/Results_26/OU-BPharmacy-CBCS-One-Time-Chance-Dec-2025-Results-24-2-2026.asp">
            OU B.Pharmacy CBCS One Time Chance Dec-2025 Results
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="24.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            RESULTS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193993&DocUrl=https://www.manabadi.co.in/Results_26/OU-BPharmacy-Non-CBCS-One-Time-Chance-Dec-2025-Results--24-2-2026.asp">
            OU B.Pharmacy Non CBCS One-Time Chance Dec-2025 Results
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="24.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            NOTIFICATION
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193992&DocUrl=https://www.manabadi.co.in/Notifications_26/KNRUHS-MDS-PART-II-New-Regulations-Supply-Exam-April-2026-Notification-24-2-2026.asp">
            KNRUHS MDS PART II (New Regulations) Supply Exam April 2026 Notification
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="24.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            NOTIFICATION
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193991&DocUrl=https://www.manabadi.co.in/Notifications_26/KNRUHS-BHMS-Final-Year-Supply-Exam-April-2026-Notification-24-2-2026.asp">
            KNRUHS BHMS Final Year Supply Exam April 2026 Notification
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="24.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            NOTIFICATION
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193990&DocUrl=https://www.manabadi.co.in/Notifications_26/KNRUHS-MPH-Final-Year-Supply-Exam-April-2026-Notification-24-2-2026.asp">
            KNRUHS MPH Final Year Supply Exam April 2026 Notification
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="24.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            RESULTS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193989&DocUrl=https://www.manabadi.co.in/Results_26/AU-LLB3YEARS-5th-Sem-3-1-Regu-Supply-Exam-November-2025-Results-24-2-2026.asp">
            AU LLB(3YEARS) 5th Sem (3-1) Regu/Supply Exam November 2025 Results
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="24.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            RESULTS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193988&DocUrl=https://www.manabadi.co.in/Results_26/AU-LLB5YEARS-5th-Sem-3-1-Regu-Supply-Exam-November-2025-Results-24-2-2026.asp">
            AU LLB(5YEARS) 5th Sem (3-1) Regu/Supply Exam November 2025 Results
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="24.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            RESULTS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193987&DocUrl=https://www.manabadi.co.in/Results_26/AU-LLB5YEARS-9th-Sem-5-1-Regu-Supply-Exam-November-2025-Results-24-2-2026.asp">
            AU LLB(5YEARS) 9th Sem (5-1) Regu/Supply Exam November 2025 Results
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="24.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            RESULTS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193986&DocUrl=https://www.manabadi.co.in/Results_26/JNTUA-MCA-2nd-Semester-R21-Supply-Exam-December-January-2025-2026-Results-24-2-2026.asp">
            JNTUA MCA 2nd Semester (R21) Supply Exam December/January 2025/2026 Results
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="24.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            RESULTS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193985&DocUrl=https://www.manabadi.co.in/Results_26/JNTUA-MBA-1st-Semester-R21-Reg-Supply-Exam-December-January-2025-2026-Results-24-2-2026.asp">
            JNTUA MBA 1st Semester (R21) Reg/Supply Exam December/January 2025/2026 Results
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="24.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            RESULTS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193984&DocUrl=https://www.manabadi.co.in/Results_26/JNTUA-MBA-2nd-Semester-R21-Supply-Exam-December-January-2025-2026-Results-24-2-2026.asp">
            JNTUA MBA 2nd Semester (R21) Supply Exam December/January 2025/2026 Results
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="24.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            RESULTS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193983&DocUrl=https://www.manabadi.co.in/Results_26/JNTUA-MCA-1st-Semester-R21-Regular-Supplementary-Exam-December-January-2025-2026-Results-24-2-2026.asp">
            JNTUA MCA 1st Semester (R21) Regular/Supplementary Exam December/January 2025/2026 Results
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="24.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            IMPORTANT DATES
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193982&DocUrl=https://www.manabadi.co.in/Notifications_26/OU-ME-MTech-AICTE-3rd-Sem-Main-Re-Registered-2nd-Sem-Makeup-Exam-March-2026-Revised-Notification-24-2-2026.asp">
            OU M.E/M.Tech AICTE 3rd Sem (Main & Re-Registered) & 2nd Sem (Makeup) Exam March-2026 Revised Notice
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="24.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            NOTIFICATION
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193981&DocUrl=https://www.manabadi.co.in/Notifications_26/OU-ME-MTech-AICTE-3rd-Sem-Main-Re-Registered-2nd-Sem-Makeup-Exam-March-2026-Revised-Notification-24-2-2026.asp">
            OU M.E/M.Tech AICTE 3rd Sem (Main & Re-Registered) & 2nd Sem (Makeup) Exam March-2026 Revised Notice
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="24.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            IMPORTANT DATES
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193980&DocUrl=https://www.manabadi.co.in/Notifications_26/OU-Junior-Senior-Advanced-Diploma-in-French-German-Regular-Exam-April-2026-Notification-24-2-2026.asp">
            OU Junior/Senior & Advanced Diploma in French/German Regular Exam April-2026 Notification
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="24.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            NOTIFICATION
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193979&DocUrl=https://www.manabadi.co.in/Notifications_26/OU-Junior-Senior-Advanced-Diploma-in-French-German-Regular-Exam-April-2026-Notification-24-2-2026.asp">
            OU Junior/Senior & Advanced Diploma in French/German Regular Exam April-2026 Notification
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="24.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            RESULTS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193978&DocUrl=https://www.manabadi.co.in/Results_26/JNTU-GV-DE-Pre-PhD-Examinations-2025-Reg-Results-24-2-2026.asp">
            JNTU GV DE Pre-Ph.D Examinations 2025 Reg Results
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="24.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            TIME TABLE
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193977&DocUrl=https://www.manabadi.co.in/Timetables_26/JNTUA-B-Pharmacy-3rd-year-1st-2nd-sem-R23R19-R15-Reg-suply-Dec-Jan-2025-2026-Time-Table-24-2-2026.asp">
            JNTUA B Pharmacy 3rd year 1st & 2nd sem (R23,R19 & R15) Reg & suply Dec-Jan-2025-2026 Time Table
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="24.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            TIME TABLE
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193976&DocUrl=https://www.manabadi.co.in/Timetables_26/JNTUA-BPharm-2nd-year-2nd-Sem-R23-Supply-Exam-Feb-2026-Time-Table-24-2-2026.asp">
            JNTUA B.Pharm 2nd year 2nd Sem (R23) Supply Exam Feb 2026 Time Table
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="24.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            NOTIFICATION
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193975&DocUrl=https://www.manabadi.co.in/Notifications_26/JNTUA-MBA-1st-2nd-Sem-R21-Regular-Supply-Exam-Recounting-CV-PCA-DecJan-20252026-Notification-24-2-2026.asp">
            JNTUA MBA 1st & 2nd Sem( R21) Regular/Supply Exam Recounting, CV, PCA Dec,Jan 2025.2026 Notification
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="24.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            NOTIFICATION
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193974&DocUrl=https://www.manabadi.co.in/Notifications_26/JNTUA-MBA-1st-2nd-Sem-R21-Regular-Supply-Dec-January-20252026-Notification-24-2-2026.asp">
            JNTUA MBA 1st & 2nd Sem (R21) Regular & Supply Dec/January 2025.2026 Notification
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="24.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            NOTIFICATION
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193973&DocUrl=https://www.manabadi.co.in/Notifications_26/JNTUA-MCA-1st-2nd-Sem-R21-Regular-Supply-Dec-January-20252026-Notification-24-2-2026.asp">
            JNTUA MCA 1st & 2nd Sem (R21) Regular & Supply Dec/January 2025.2026 Notification
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="24.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            NOTIFICATION
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193972&DocUrl=https://www.manabadi.co.in/entrance-exams/tg-pecet-notification/">
            TG PECET Notification 2026 Out
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="24.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            IMPORTANT DATES
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193971&DocUrl=https://www.manabadi.co.in/Timetables_26/JNTUH-MTech-1st-Sem-R19-Supply-Exam-March-2026-Time-Table-24-2-2026.asp">
            JNTUH M.Tech 1st Sem R19 Supply Exam March 2026 Time Table
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="24.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            TIME TABLE
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193970&DocUrl=https://www.manabadi.co.in/Timetables_26/JNTUH-MTech-1st-Sem-R19-Supply-Exam-March-2026-Time-Table-24-2-2026.asp">
            JNTUH M.Tech 1st Sem R19 Supply Exam March 2026 Time Table
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="24.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            RESULTS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193969&DocUrl=https://www.manabadi.co.in/entrance-exams/jee-main-2026-paper-2-result/">
            JEE Main 2026 Paper 2 Result Out
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="24.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            RESULTS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193968&DocUrl=https://www.manabadi.co.in/Results_26/JNTUH-BTech-2nd-Year-2nd-Sem-R22-Supply-Exam-DEC-2025-Results-24-2-2026.asp">
            JNTUH B.Tech 2nd Year 2nd Sem (R22) Supply Exam DEC-2025 Results
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="24.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            RESULTS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193967&DocUrl=https://www.manabadi.co.in/Results_26/JNTUH-BTech-2nd-Year-2nd-Sem-R18-Supply-Exam-DEC-2025-Results-24-2-2026.asp">
            JNTUH B.Tech 2nd Year 2nd Sem (R18) Supply Exam DEC-2025 Results
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="24.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            RESULTS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193966&DocUrl=https://www.manabadi.co.in/Results_26/JNTUH-BTech-2nd-Year-1st-Sem-R22-Regular-Exam-DEC-2025-Results-24-2-2026.asp">
            JNTUH B.Tech 2nd Year 1st Sem (R22) Regular Exam DEC-2025 Results
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="24.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            RESULTS
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193965&DocUrl=https://www.manabadi.co.in/Results_26/JNTUH-BTech-2nd-Year-1st-Sem-R18-Supply-Exam-DEC-2025-Results-24-2-2026.asp">
            JNTUH B.Tech 2nd Year 1st Sem (R18) Supply Exam DEC-2025 Results
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="24.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            IMPORTANT DATES
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193964&DocUrl=https://www.manabadi.co.in/Timetables_26/Palamuru-University-BPharmacy-1st-Sem-Regular-Backlog-PCI-Syllabus-March-2026-Time-Table-24-2-2026.asp">
            Palamuru University B.Pharmacy 1st Sem (Regular/Backlog-PCI Syllabus) March 2026 Time Table
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="24.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            TIME TABLE
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193963&DocUrl=https://www.manabadi.co.in/Timetables_26/Palamuru-University-BPharmacy-1st-Sem-Regular-Backlog-PCI-Syllabus-March-2026-Time-Table-24-2-2026.asp">
            Palamuru University B.Pharmacy 1st Sem (Regular/Backlog-PCI Syllabus) March 2026 Time Table
          </a>

        </div>
      </span><br /><span>
        <div class="update-row" data-date="24.02.2026">

          <!-- DATE (JS will control visibility) -->
          <div class="update-date"></div>

          <!-- CATEGORY -->
          <div class="update-type">
            IMPORTANT DATES
          </div>

          <!-- TITLE -->
          <a class="update-title"
             href="../qp/POPUP-Manabadi-Mobile-Alert.aspx?DocTypeId=193962&DocUrl=https://www.manabadi.co.in/Timetables_26/Palamuru-University-BPharmacy-3rd-Sem-Regular-Backlog-PCI-Syllabus-March-2026-Time-Table-24-2-2026.asp">
            Palamuru University B.Pharmacy 3rd Sem (Regular/Backlog-PCI Syllabus) March 2026 Time Table
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
      <span>COMEDK UGET â Complete Guide 2026</span>
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
      <i class="arrow">âº</i>
    </div>

    <div class="uni-item">
      <img src="/institute/images/Icons/JNTUK.png" />
      <span><a href="https://www.manabadi.co.in/JNTU-Kakinada-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/86">JNTU-Kakinada</a></span>
      <i class="arrow">âº</i>
    </div>
	
	 <div class="uni-item">
      <img src="/institute/images/Icons/JNTUA.png" />
      <span><a href="https://www.manabadi.co.in/JNTU-Anantapur-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/104">JNTU-Anantapur</a></span>
      <i class="arrow">âº</i>
    </div>

    <div class="uni-item">
      <img src="/institute/images/Icons/SVU-L.png" />
      <span><a href="https://www.manabadi.co.in/Sri-Venkateswara-University-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/12">Sri Venkateswara University</a></span>
      <i class="arrow">âº</i>
    </div>

    <div class="uni-item">
      <img src="/institute/images/Icons/OU-L.png" />
      <span><a href="https://www.manabadi.co.in/Osmania-University-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/20">Osmania University</a></span>
      <i class="arrow">âº</i>
    </div>

    <div class="uni-item">
      <img src="/institute/images/Icons/AU-L.png" />
      <span><a href="https://www.manabadi.co.in/Andhra-University-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/11">Andhra University</a></span>
      <i class="arrow">âº</i>
    </div>

    <!-- add ALL universities here -->
	 <div class="uni-item">
      <img src="/institute/images/Icons/ANU.png" />
      <span><a href="https://www.manabadi.co.in/Nagarjuna-University-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/15">Acharya Nagarjuna University</a></span>
      <i class="arrow">âº</i>
    </div>

    <div class="uni-item">
      <img src="/institute/images/Icons/AKNU-L.png" />
      <span><a href="https://www.manabadi.co.in/Adikavi-Nannaya-University-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/1296">Adikavi Nannaya University</a></span>
      <i class="arrow">âº</i>
    </div>

    <div class="uni-item">
      <img src="/institute/images/Icons/DRBRAOPU-S-L.png" />
      <span><a href="https://www.manabadi.co.in/Dr-B-R-Ambedkar-University-Srikakulam-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/1017">Dr B R Ambedkar University Srikakulam</a></span>
      <i class="arrow">âº</i>
    </div>
	
	<div class="uni-item">
      <img src="/institute/images/Icons/DRBRAOPU-L.png" />
      <span><a href="https://www.manabadi.co.in/Dr-B-R-Ambedkar-Open-University-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/13">Dr B R Ambedkar Open University</a></span>
      <i class="arrow">âº</i>
    </div>
	
		<div class="uni-item">
      <img src="/institute/images/Icons/UH-L.png" />
      <span><a href="https://www.manabadi.co.in/Hyderabad-University-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/42">Hyderabad University</a></span>
      <i class="arrow">âº</i>
    </div>
	 <div class="uni-item">
      <img src="/institute/images/Icons/KU-L.png" />
      <span><a href="https://www.manabadi.co.in/Kakatiya-University-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/14">Kakatiya University</a></span>
      <i class="arrow">âº</i>
    </div>
	
	<div class="uni-item">
      <img src="/institute/images/Icons/KRU-L.png" />
      <span><a href="https://www.manabadi.co.in/Krishna-University-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/81">Krishna University</a></span>
      <i class="arrow">âº</i>
    </div>
	
		<div class="uni-item">
      <img src="/institute/images/Icons/MGU-L.png" />
      <span><a href="https://www.manabadi.co.in/Mahathma-Gandhi-University--Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/182">Mahathma Gandhi University</a></span>
      <i class="arrow">âº</i>
    </div>

  <div class="uni-item">
      <img src="/institute/images/Icons/PU-L.png" />
      <span><a href="https://www.manabadi.co.in/Palamuru-University-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/473">Palamuru University</a></span>
      <i class="arrow">âº</i>
    </div>
	
	<div class="uni-item">
      <img src="/institute/images/Icons/RU-L.png" />
      <span><a href="https://www.manabadi.co.in/Rayalaseema-University-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/494">Rayalaseema University</a></span>
      <i class="arrow">âº</i>
    </div>
	
		<div class="uni-item">
      <img src="/institute/images/Icons/TU-L.png" />
      <span><a href="https://www.manabadi.co.in/Telangana-University-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/242">Telangana University</a></span>
      <i class="arrow">âº</i>
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
      <i class="arrow">âº</i>
    </div>
	
	<div class="uni-item">
      <img src="/institute/images/Icons/CBSE.png" />
      <span><a href="https://www.manabadi.co.in/CBSE-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/28">CBSE (11th,12th)</a></span>
      <i class="arrow">âº</i>
    </div>

    <div class="uni-item">
      <img src="/institute/images/Icons/AP-SBTET-L.png" />
      <span><a href="https://www.manabadi.co.in/SBTET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/772">AP SBTET </a></span>
      <i class="arrow">âº</i>
    </div>
	
	<div class="uni-item">
      <img src="/institute/images/Icons/TS-SBTET-L.png" />
      <span><a href="https://www.manabadi.co.in/SBTET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/772">TS SBTET </a></span>
      <i class="arrow">âº</i>
    </div>
	
	<div class="uni-item">
      <img src="/institute/images/Icons/NEET-L.png" />
      <span><a href="https://www.manabadi.co.in/NEET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/235">NEET </a></span>
      <i class="arrow">âº</i>
    </div>

    <div class="uni-item">
      <img src="/institute/images/Icons/APOSS-L.png" />
      <span><a href="https://www.manabadi.co.in/APOSS-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/168">APOSS </a></span>
      <i class="arrow">âº</i>
    </div>

     <div class="uni-item">
      <img src="/institute/images/Icons/TSOSS-L.png" />
      <span><a href="https://www.manabadi.co.in/TOSS-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/1740">TSOSS </a></span>
      <i class="arrow">âº</i>
    </div>

    
	 <div class="uni-item">
      <img src="/institute/images/Icons/JNTUK.png" />
      <span><a href="https://www.manabadi.co.in/EAMCET--EAPCET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/3">AP EAPCET </a></span>
      <i class="arrow">âº</i>
    </div>

    <div class="uni-item">
      <img src="/institute/images/Icons/JNTUH.png" />
      <span><a href="https://www.manabadi.co.in/EAMCET--EAPCET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/1777">TS EAPCET </a></span>
      <i class="arrow">âº</i>
    </div>

    <div class="uni-item">
      <img src="/institute/images/Icons/JNTUA.png" />
      <span><a href="https://www.manabadi.co.in/ECET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/21">AP ECET </a></span>
      <i class="arrow">âº</i>
    </div>
	
	<div class="uni-item">
      <img src="/institute/images/Icons/TS-ICET-L.png" />
      <span><a href="https://www.manabadi.co.in/ECET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/21">TS ECET </a></span>
      <i class="arrow">âº</i>
    </div>
	
	 <div class="uni-item">
      <img src="/institute/images/Icons/AP-SBTET-L.png" />
      <span><a href="https://www.manabadi.co.in/POLYCET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/29">AP POLYCET </a></span>
      <i class="arrow">âº</i>
    </div>

    <div class="uni-item">
      <img src="/institute/images/Icons/TS-SBTET-L.png" />
      <span><a href="https://www.manabadi.co.in/POLYCET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/29">TS POLYCET </a></span>
      <i class="arrow">âº</i>
    </div>

    <div class="uni-item">
      <img src="/institute/images/Icons/ANU.png" />
      <span><a href="https://www.manabadi.co.in/EDCET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/9">AP EdCET </a></span>
      <i class="arrow">âº</i>
    </div>
	
	<div class="uni-item">
      <img src="/institute/images/Icons/MGU-L.png" />
      <span><a href="https://www.manabadi.co.in/EDCET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/9">TS EdCET </a></span>
      <i class="arrow">âº</i>
    </div>
	
	 <div class="uni-item">
      <img src="/institute/images/Icons/AU-L.png" />
      <span><a href="https://www.manabadi.co.in/ICET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/4">AP ICET </a></span>
      <i class="arrow">âº</i>
    </div>
	
	<div class="uni-item">
      <img src="/institute/images/Icons/TS-ICET-L.png" />
      <span><a href="https://www.manabadi.co.in/ICET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/4">TS ICET </a></span>
      <i class="arrow">âº</i>
    </div>
	
	 <div class="uni-item">
      <img src="/institute/images/Icons/SPMVV-L.png" />
      <span><a href="https://www.manabadi.co.in/LAWCET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/5">AP LAWCET </a></span>
      <i class="arrow">âº</i>
    </div>
	
	<div class="uni-item">
      <img src="/institute/images/Icons/TS-ICET-L.png" />
      <span><a href="https://www.manabadi.co.in/LAWCET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/5">TS LAWCET </a></span>
      <i class="arrow">âº</i>
    </div>
	
	 <div class="uni-item">
      <img src="/institute/images/Icons/ANU.png" />
      <span><a href="https://www.manabadi.co.in/PECET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/39">AP PECET </a></span>
      <i class="arrow">âº</i>
    </div>
	
	<div class="uni-item">
      <img src="/institute/images/Icons/MGU-L.png" />
      <span><a href="https://www.manabadi.co.in/PECET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/39">TS PECET </a></span>
      <i class="arrow">âº</i>
    </div>
	
	 <div class="uni-item">
      <img src="/institute/images/Icons/SVU-L.png" />
      <span><a href="https://www.manabadi.co.in/PGCET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/62">AP PGCET </a></span>
      <i class="arrow">âº</i>
    </div>
	
	<div class="uni-item">
      <img src="/institute/images/Icons/OU-L.png" />
      <span><a href="https://www.manabadi.co.in/TS-CPGET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/1763">TS CPGET </a></span>
      <i class="arrow">âº</i>
    </div>
	
	 <div class="uni-item">
      <img src="/institute/images/Icons/AP-SSC.png" />
      <span><a href="https://www.manabadi.co.in/PGECET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/63">AP PGECET </a></span>
      <i class="arrow">âº</i>
    </div>
	
	<div class="uni-item">
      <img src="/institute/images/Icons/JNTUH.png" />
      <span><a href="https://www.manabadi.co.in/PGECET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/63">TS PGECET </a></span>
      <i class="arrow">âº</i>
    </div>
	
	 <div class="uni-item">
      <img src="/institute/images/Icons/AP-SSC.png" />
      <span><a href="https://www.manabadi.co.in/APTET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/238">AP TET </a></span>
      <i class="arrow">âº</i>
    </div>
	
	<div class="uni-item">
      <img src="/institute/images/Icons/TS-SSC.png" />
      <span><a href="https://www.manabadi.co.in/TSTET-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/1757">TS TET </a></span>
      <i class="arrow">âº</i>
    </div>
	
	 <div class="uni-item">
      <img src="/institute/images/Icons/CAT-L.png" />
      <span><a href="https://www.manabadi.co.in/CAT-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/105">CAT </a></span>
      <i class="arrow">âº</i>
    </div>
	
	<div class="uni-item">
      <img src="/institute/images/Icons/GATE-L.png" />
      <span><a href="https://www.manabadi.co.in/GATE-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/1516">GATE </a></span>
      <i class="arrow">âº</i>
    </div>
	
	<div class="uni-item">
      <img src="/institute/images/Icons/NEET-L.png" />
      <span><a href="https://www.manabadi.co.in/NEET-PG-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/1203">NEET PG </a></span>
      <i class="arrow">âº</i>
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
        <span class="service-icon">ð©âð«</span>
<span class="service-text">For Teachers</span>

      <i>âº</i>
    </a>

    <a href="http://jobs.manabadi.co.in/index/index.aspx" class="tc-chip">
     <span class="service-icon">ð¼</span>
<span class="service-text">Teacher Jobs</span>

      <i>âº</i>
    </a>
    <a href="https://www.manabadi.co.in/Articles/Latest-Governmet-Jobs/All_Government_Jobs.aspx" class="tc-chip">

<span class="service-icon">ð¢</span>
<span class="service-text">Private Jobs</span>
      <i>âº</i>
    </a>



    <a href="https://www.manabadi.co.in/articles/Latest-current-affairs/Latest-Current-Affairs.aspx" class="tc-chip">
     <span class="service-icon">ð°</span>
<span class="service-text">Current Affairs</span>

      <i>âº</i>
    </a>

    <a href="https://www.manabadi.co.in/institute/careerlist.aspx" class="tc-chip">
    <span class="service-icon">ð¯</span>
<span class="service-text">Career Options</span>

      <i>âº</i>
    </a>

  <a href="https://www.manabadi.co.in/articles/ViewByCatgory.htm" class="tc-chip">
  <span class="service-icon">ð</span>
  <span class="service-text">All Articles</span>
  <i>âº</i>
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