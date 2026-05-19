<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>บทที่ 12 你在哪儿学习汉语？- Active Learning</title>
    <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;600;700&family=Noto+Sans+Thai:wght@400;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --red: #C41E3A; --darkRed: #8B0000; --gold: #D4A017; --brightGold: #FFD700;
            --jade: #00A693; --darkJade: #007A6E; --blue: #4A90D9; --cream: #FFF8E7;
            --beige: #F5E6C8; --orange: #F4A460; --ink: #1A1A2E; --white: #FFFFFF;
            --lightGold: #FFF3C0; --paleRed: #FFEEEE; --paleJade: #E0F5F3; --paleBlue: #E8F4FD;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Kanit', 'Noto Sans Thai', sans-serif; }
        body {
            background: linear-gradient(160deg, #1A0A0F 0%, #0D0A1A 50%, #0A1A0D 100%);
            color: var(--white); min-height: 100vh; overflow-x: hidden;
        }
        
        /* Layout */
        .app-layout { display: flex; min-height: 100vh; position: relative; z-index: 1; }
        .sidebar {
            width: 240px; flex-shrink: 0; background: rgba(0,0,0,0.5); backdrop-filter: blur(12px);
            border-right: 1px solid rgba(255,255,255,0.08); padding: 20px 14px;
            display: flex; flex-direction: column; gap: 10px;
        }
        .main-content { flex: 1; overflow-y: auto; padding: 28px 32px; max-height: 100vh; }
        
        /* Cover Screen */
        .cover-screen {
            min-height: 100vh; display: flex; flex-direction: column; align-items: center;
            justify-content: center; text-align: center; padding: 24px; width: 100%;
            background: radial-gradient(ellipse at 30% 20%, #2D0A12 0%, #1A0A0F 50%, #0D0A1A 100%);
        }
        .lantern-container { display: flex; justify-content: center; gap: 24px; margin-bottom: 32px; }
        .lantern {
            width: 52px; height: 68px; border-radius: 50% 50% 40% 40%; border: 3px solid var(--gold);
            display: flex; align-items: center; justify-content: center; font-size: 22px;
            color: var(--brightGold); font-weight: 900; box-shadow: 0 0 20px rgba(212,160,23,0.27);
        }
        .title-card {
            background: rgba(196,30,58,0.25); border: 2px solid var(--gold);
            border-radius: 16px; padding: 28px 40px; margin-bottom: 20px; backdrop-filter: blur(8px);
        }
        .start-btn {
            background: linear-gradient(135deg, var(--gold), var(--orange)); border: none;
            border-radius: 50px; padding: 16px 48px; font-size: 18px; font-weight: 900;
            color: var(--darkRed); cursor: pointer; box-shadow: 0 8px 32px rgba(212,160,23,0.4);
            transition: 0.2s;
        }
        .start-btn:hover { transform: scale(1.05); }

        /* Navigation Pills */
        .nav-btn {
            background: rgba(255,255,255,0.05); border: 2px solid rgba(255,255,255,0.15);
            border-radius: 12px; padding: 12px 14px; cursor: pointer; text-align: left;
            color: var(--white); width: 100%; display: flex; alignItems: center; gap: 8px;
            transition: all 0.3s ease; position: relative;
        }
        .nav-btn.active { background: var(--act-color, var(--blue)) !important; border-color: var(--act-color, var(--blue)) !important; transform: scale(1.03); }
        .badge-check { position: absolute; top: 8px; right: 8px; width: 16px; height: 16px; border-radius: 50%; background: var(--jade); display: none; align-items: center; justify-content: center; font-size: 10px; }

        /* Lesson elements */
        .lesson-header { background: rgba(255,255,255,0.03); border-radius: 16px; padding: 20px 24px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.1); }
        .word-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 12px; margin-bottom: 20px; }
        .word-card {
            background: rgba(255,255,255,0.08); border-radius: 12px; padding: 16px 12px; text-align: center;
            border: 2px solid rgba(255,255,255,0.15); cursor: pointer; transition: 0.3s;
        }
        .word-card.revealed { background: var(--white); color: var(--ink); border-color: var(--gold); }
        .example-bubble { background: var(--white); color: var(--ink); border-radius: 16px; padding: 16px 20px; margin-bottom: 12px; border-left: 5px solid var(--red); box-shadow: 0 4px 16px rgba(0,0,0,0.15); }

        /* Quiz UI */
        .quiz-card { background: rgba(255,255,255,0.06); border-radius: 14px; padding: 20px 24px; margin-bottom: 20px; }
        .option-item {
            width: 100%; padding: 14px 20px; background: rgba(255,255,255,0.06); border: 2px solid rgba(255,255,255,0.15);
            border-radius: 12px; color: white; cursor: pointer; text-align: left; font-size: 16px;
            display: flex; align-items: center; gap: 12px; margin-bottom: 10px; transition: 0.2s;
        }
        .option-item.correct { background: rgba(0,166,147,0.2) !important; border-color: var(--jade) !important; font-weight: bold; }
        .option-item.wrong { background: rgba(196,30,58,0.2) !important; border-color: var(--red) !important; }

        /* Match Game UI */
        .match-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .match-btn { width: 100%; padding: 12px; background: rgba(255,255,255,0.06); border: 2px solid rgba(255,255,255,0.2); border-radius: 10px; color: white; margin-bottom: 8px; font-weight: bold; cursor: pointer; }
        .match-btn.selected { background: rgba(74,144,217,0.3); border-color: var(--blue); }
        .match-btn.matched { background: rgba(0,166,147,0.2); border-color: var(--jade); color: var(--jade); text-transform: line-through; cursor: default; }

        /* Progress Bar */
        .progress-container { display: flex; align-items: center; gap: 10px; padding: 10px 0; }
        .progress-bar-bg { flex: 1; height: 8px; background: rgba(255,255,255,0.1); border-radius: 4px; overflow: hidden; }
        .progress-bar-fill { height: 100%; background: linear-gradient(90deg, var(--gold), var(--orange)); width: 0%; transition: width 0.5s ease; }

        .btn-control { background: rgba(255,255,255,0.06); border: 1.5px solid rgba(255,255,255,0.15); border-radius: 10px; padding: 10px 20px; color: white; cursor: pointer; }
        .btn-control:disabled { opacity: 0.4; cursor: not-allowed; }
    </style>
</head>
<body>

    <div id="cover-screen" class="cover-screen">
        <div class="lantern-container">
            <div class="lantern" style="background:var(--red)">福</div>
            <div class="lantern" style="background:var(--orange)">学</div>
            <div class="lantern" style="background:var(--red)">汉</div>
        </div>
        <div class="title-card">
            <p style="color:var(--gold); letter-spacing:4px; font-size:13px; margin-bottom:8px;">ไวยากรณ์ภาษาจีน ม.4</p>
            <h1 style="color:var(--brightGold); font-size:42px; font-weight:900; margin-bottom:4px;">你在哪儿学习汉语？</h1>
            <h2 style="font-size:22px; font-weight:700;">บทที่ 12</h2>
        </div>
        <button class="start-btn" onclick="startApp()">🎋 เริ่มเรียนเลย！</button>
    </div>

    <div id="app-layout" class="app-layout" style="display:none;">
        <div class="sidebar">
            <div style="text-align:center; margin-bottom:8px;">
                <h2 style="color:var(--brightGold); font-size:22px; font-weight:900;">你在哪儿</h2>
                <p style="color:var(--gold); font-size:10px; opacity:0.7;">บทที่ 12</p>
            </div>
            <div class="progress-container">
                <span id="progress-text" style="font-size:12px; color:var(--gold); font-weight:700; min-width:55px;">0/6 บท</span>
                <div class="progress-bar-bg"><div id="progress-fill" class="progress-bar-fill"></div></div>
            </div>
            <div style="height:1px; background:rgba(255,255,255,0.1); margin:4px 0;"></div>
            <p style="font-size:10px; opacity:0.4; letter-spacing:2px; margin-bottom:4px;">ไวยากรณ์</p>
            
            <button class="nav-btn active" style="--act-color:var(--red)" onclick="switchTab('lesson', 0)">
                <span>❓</span><div><h4 style="font-size:14px; font-weight:700;">疑问代词</h4><p style="font-size:10px; opacity:0.8;">คำสรรพนามคำถาม</p></div>
                <div id="check-1" class="badge-check">✓</div>
            </button>
            <button class="nav-btn" style="--act-color:var(--blue)" onclick="switchTab('lesson', 1)">
                <span>🔗</span><div><h4 style="font-size:14px; font-weight:700;">的</h4><p style="font-size:10px; opacity:0.8;">คำช่วยเชื่อม</p></div>
                <div id="check-2" class="badge-check">✓</div>
            </button>
            <button class="nav-btn" style="--act-color:var(--jade)" onclick="switchTab('lesson', 2)">
                <span>📍</span><div><h4 style="font-size:14px; font-weight:700;">在</h4><p style="font-size:10px; opacity:0.8;">บอกสถานที่กระทำ</p></div>
                <div id="check-3" class="badge-check">✓</div>
            </button>
            <button class="nav-btn" style="--act-color:var(--orange)" onclick="switchTab('lesson', 3)">
                <span>🎁</span><div><h4 style="font-size:14px; font-weight:700;">给</h4><p style="font-size:10px; opacity:0.8;">บอกผู้รับ</p></div>
                <div id="check-4" class="badge-check">✓</div>
            </button>
            
            <div style="height:1px; background:rgba(255,255,255,0.1); margin:4px 0;"></div>
            <p style="font-size:10px; opacity:0.4; letter-spacing:2px; margin-bottom:4px;">แบบฝึกหัด</p>
            
            <button class="nav-btn" style="--act-color:var(--blue)" onclick="switchTab('quiz')">
                <span>🧠</span><div><h4 style="font-size:14px; font-weight:700;">แบบทดสอบ</h4><p style="font-size:10px; opacity:0.7;">6 ข้อ</p></div>
                <div id="check-quiz" class="badge-check">✓</div>
            </button>
            <button class="nav-btn" style="--act-color:var(--orange)" onclick="switchTab('match')">
                <span>🔗</span><div><h4 style="font-size:14px; font-weight:700;">จับคู่คำ</h4><p style="font-size:10px; opacity:0.7;">6 คู่</p></div>
                <div id="check-match" class="badge-check">✓</div>
            </button>
            
            <div style="flex:1;"></div>
            <button id="summary-btn" disabled onclick="switchTab('summary')" style="width:100%; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:12px; padding:12px; color:rgba(255,255,255,0.3); font-size:13px; font-weight:700; cursor:not-allowed;">🔒 เรียนให้ครบก่อน</button>
        </div>

        <div class="main-content">
            <div id="lesson-view">
                <div id="lesson-header-content"></div>
                <div id="word-section"></div>
                <div id="example-section"></div>
                <div style="display:flex; justify-content:space-between; margin-top:24px;">
                    <button class="btn-control" id="prev-btn" onclick="prevLesson()">← ก่อนหน้า</button>
                    <button class="btn-control" id="next-btn" style="background:var(--red);" onclick="nextLesson()">ถัดไป →</button>
                </div>
            </div>

            <div id="quiz-view" style="display:none;">
                <div style="display:flex; justify-content:space-between; margin-bottom:16px;">
                    <div id="quiz-number" style="font-size:13px; color:var(--gold); font-weight:700;">ข้อที่ 1 / 6</div>
                    <div id="quiz-score" style="font-size:13px; color:var(--jade);">⭐ 0 คะแนน</div>
                </div>
                <div class="quiz-card">
                    <h3 id="quiz-question" style="font-size:18px; color:white;"></h3>
                    <p id="quiz-hint" style="font-size:13px; color:var(--gold); margin-top:8px; display:none;"></p>
                </div>
                <div id="quiz-options"></div>
                <button id="quiz-next-btn" style="display:none; margin-top:20px; width:100%; background:linear-gradient(135deg, var(--gold), var(--orange)); border:none; border-radius:12px; padding:14px; font-size:16px; font-weight:700; color:var(--darkRed); cursor:pointer;" onclick="nextQuiz()">ข้อถัดไป →</button>
            </div>

            <div id="match-view" style="display:none;">
                <p style="font-size:14px; color:var(--gold); margin-bottom:16px; font-weight:700;">จับคู่คำถามภาษาจีนกับความหมายภาษาไทย 🔗</p>
                <div class="match-grid">
                    <div id="cn-column"></div>
                    <div id="thai-column"></div>
                </div>
            </div>

            <div id="summary-view" style="display:none; text-align:center;">
                <div style="font-size:48px; margin-bottom:8px;">🎋</div>
                <h1 style="font-size:26px; font-weight:900; color:var(--brightGold); margin-bottom:4px;">谢谢大家！</h1>
                <p style="font-size:16px; opacity:0.8; margin-bottom:24px;">สรุปไวยากรณ์ที่เรียนสำเร็จแล้ว</p>
                <div style="background: rgba(212,160,23,0.15); border: 1.5px solid rgba(212,160,23,0.27); border-radius:12px; padding:18px; text-align:left; max-width:500px; margin:0 auto 24px auto;">
                    <p style="font-size:15px; margin-bottom:8px;">⭐ <strong>สูตรจำง่ายสไตล์ Active Learning:</strong></p>
                    <p style="margin-left:10px; margin-bottom:4px;">• ถามข้อมูล = <strong>疑问代词</strong> (ใคร, อะไร, ที่ไหน)</p>
                    <p style="margin-left:10px; margin-bottom:4px;">• แสดงความเป็นเจ้าของ/ขยาย = <strong>的</strong> (สมุดของครู)</p>
                    <p style="margin-left:10px; margin-bottom:4px;">• ทำกิจกรรมที่ไหน = <strong>在</strong> (อยู่ที่โรงเรียน)</p>
                    <p style="margin-left:10px; margin-bottom:4px;">• ทำสิ่งใดให้ใคร = <strong>给</strong> (โทรศัพท์หาแม่)</p>
                </div>
                <button class="start-btn" onclick="resetApp()">🔄 เรียนอีกครั้ง</button>
            </div>
        </div>
    </div>

    <script>
        // ข้อมูลบทเรียนดึงมาจากไฟล์ต้นฉบับของครูเป๊ะๆ
        const data = [
            { id: 1, char: "疑问代词", thai: "คำสรรพนามคำถาม", icon: "❓", color: "#C41E3A", intro: "คำสรรพนามคำถาม ใช้เพื่อถามข้อมูลต่างๆ ในประโยค", words:[{cn:"谁",pinyin:"shéi",thai:"ใคร"},{cn:"什么",pinyin:"shénme",thai:"อะไร"},{cn:"哪儿",pinyin:"nǎr",thai:"ที่ไหน"},{cn:"怎么样",pinyin:"zěnmeyàng",thai:"เป็นอย่างไร"},{cn:"几",pinyin:"jǐ",thai:"เท่าไร (น้อย)"},{cn:"多少",pinyin:"duōshao",thai:"เท่าไร (มาก)"}], examples:[{cn:"你去哪儿？",pinyin:"Nǐ qù nǎr?",thai:"คุณจะไปที่ไหน?"},{cn:"这是谁的书？",pinyin:"Zhè... shéi de shū?",thai:"นี่คือหนังสือของใคร?"},{cn:"你叫什么名字？",pinyin:"Nǐ jiào shénme míngzi?",thai:"คุณชื่ออะไร?"}] },
            { id: 2, char: "的", thai: "คำช่วยเชื่อม", icon: "🔗", color: "#4A90D9", intro: "的 ใช้เชื่อมคำขยายกับคำนาม เหมือน 'ของ' ในภาษาไทย", structure: "คำขยาย + 的 + คำนาม", examples:[{cn:"我的书",pinyin:"wǒ de shū",thai:"หนังสือของฉัน",breakdown:["我","的","书"]},{cn:"老师的本子",pinyin:"lǎoshī de běnzi",thai:"สมุดของครู",breakdown:["老师","的","本子"]},{cn:"很好的同学",pinyin:"hěn hǎo de tóngxué",thai:"เพื่อนที่ดีมาก",breakdown:["很好","的","同学"]}] },
            { id: 3, char: "在", thai: "บอกสถานที่กระทำ", icon: "📍", color: "#00A693", intro: "在 วางหน้าสถานที่ เพื่อบอกว่า 'กระทำกิจกรรมที่ไหน'", structure: "ในระบบ: 在 + สถานที่ + กริยา", examples:[{cn:"我在学校学习汉语。",pinyin:"Wǒ zài xuéxiào xuéxí...",thai:"ฉันเรียนภาษาจีนที่โรงเรียน",loc:"🏫"},{cn:"他在十楼住。",pinyin:"Tā zài shí lóu zhù.",thai:"เขาอาศัยอยู่ที่ชั้น 10",loc:"🏢"}] },
            { id: 4, char: "给", thai: "บอกผู้รับ", icon: "🎁", color: "#F4A460", intro: "给 วางหน้าผู้รับ หรือแปลว่า 'ให้' หรือ 'หา' ก็ได้", structure: "给 + ผู้รับ + กริยา", examples:[{cn:"เธอโทรศัพท์หาแม่",pinyin:"Tā gěi māma dǎ diànhuà.",thai:"เธอโทรศัพท์หาแม่",icon:"📞"},{cn:"给你介绍一下。",pinyin:"Gěi nǐ jièshào...",thai:"ขอแนะนำให้คุณรู้จัก",icon:"🤝"}] }
        ];

        const quizQuestions = [
            { q: "นี่คือหนังสือของ___? (ใคร)", options: ["谁", "什么", "哪儿", "怎么样"], answer: 0, hint: "ถามบุคคลใช้คำว่า 'ใคร'" },
            { q: "你去___？ = คุณจะไปที่ไหน?", options: ["什么", "谁", "哪儿", "几"], answer: 2, hint: "ถามสถานที่ในบทเรียนใช้คำนี้" },
            { q: "我___学校学习。 (ที่โรงเรียน)", options: ["给", "在", "的", "哪儿"], answer: 1, hint: "โครงสร้างบอกสถานที่กระทำ" },
            { q: "เธอ___妈妈打电话。 (โทรหาแม่)", options: ["在", "的", "给", "谁"], answer: 2, hint: "ใช้บอกทิศทางผู้รับการกระทำ" },
            { q: "老师___本子 = สมุดของครู", options: ["在", "给", "的", "ใคร"], answer: 2, hint: "คำเชื่อมแสดงความเป็นเจ้าของ" },
            { q: "โครงสร้าง 在 ที่ถูกต้องคือข้อใด?", options: ["在+คน+กริยา", "在线+สถานที่+กริยา", "在+สถานที่+กริยา", "คน+在+กริยา"], answer: 2, hint: "ประธาน + 在 + สถานที่ + กริยา" }
        ];

        let activeIdx = 0, currentQuiz = 0, quizScore = 0;
        let completed = new Set(), quizDone = false, matchDone = false;
        let selectedCn = null, selectedThai = null;

        function startApp() { document.getElementById('cover-screen').style.display = 'none'; document.getElementById('app-layout').style.display = 'flex'; renderLesson(); updateProgress(); }
        function switchTab(type, index) {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            document.getElementById('lesson-view').style.display = type === 'lesson' ? 'block' : 'none';
            document.getElementById('quiz-view').style.display = type === 'quiz' ? 'block' : 'none';
            document.getElementById('match-view').style.display = type === 'match' ? 'block' : 'none';
            document.getElementById('summary-view').style.display = type === 'summary' ? 'block' : 'none';
            if(type === 'lesson') { activeIdx = index; document.querySelectorAll('.nav-btn')[index].classList.add('active'); renderLesson(); completed.add(data[index].id); document.getElementById(`check-${data[index].id}`).style.display = 'flex'; }
            if(type === 'quiz') { document.querySelectorAll('.nav-btn')[4].classList.add('active'); renderQuiz(); }
            if(type === 'match') { document.querySelectorAll('.nav-btn')[5].classList.add('active'); renderMatch(); }
            if(type === 'summary') document.getElementById('summary-btn').classList.add('active');
            updateProgress();
        }
        function renderLesson() {
            const s = data[activeIdx]; document.getElementById('next-btn').style.background = s.color;
            let html = `<div class="lesson-header" style="border-left:6px solid ${s.color}">
                <h2 style="font-size:32px; font-weight:900; color:${s.color}">${s.icon} ${s.char}</h2>
                <p style="opacity:0.8; margin-bottom:8px;">${s.thai}</p>
                <div style="background:rgba(255,255,255,0.06); padding:10px; border-radius:8px; font-size:14px; margin-top:8px;">💡 ${s.intro}</div>
                ${s.structure ? `<div style="margin-top:8px; font-weight:bold; color:var(--brightGold)">📐 โครงสร้าง: ${s.structure}</div>` : ''}
            </div>`;
            document.getElementById('lesson-header-content').innerHTML = html;
            let wordHtml = '';
            if(s.words) {
                wordHtml = '<p style="color:var(--gold); font-size:14px; font-weight:bold; margin-bottom:8px;">คลิกเปิดดูคำศัพท์พินอินและความหมาย 👆</p><div class="word-grid">';
                s.words.forEach((w, i) => { wordHtml += `<div class="word-card" id="wc-${i}" onclick="revealWord(${i}, '${w.pinyin}', '${w.thai}')"><h3 style="font-size:26px; color:var(--brightGold);">${w.cn}</h3><p style="font-size:12px; opacity:0.5;">คลิกเปิด</p></div>`; });
                wordHtml += '</div>';
            }
            document.getElementById('word-section').innerHTML = wordHtml;
            let exHtml = '<p style="color:var(--gold); font-size:14px; font-weight:bold; margin-bottom:8px;">📝 ประโยคตัวอย่างสำเร็จรูป</p>';
            s.examples.forEach(ex => { exHtml += `<div class="example-bubble" style="border-left-color:${s.color}"><strong>${ex.cn}</strong><br><span style="color:#666; font-size:13px;">${ex.pinyin}</span><br><span style="color:black">${ex.thai}</span></div>`; });
            document.getElementById('example-section').innerHTML = exHtml;
            document.getElementById('prev-btn').disabled = activeIdx === 0;
        }
        function revealWord(i, py, th) { const el = document.getElementById(`wc-${i}`); el.classList.add('revealed'); el.innerHTML = `<h3 style="color:var(--red); font-size:26px;">${el.innerText.split('\n')[0]}</h3><p style="color:#555; font-size:12px;">${py}</p><p style="background:var(--gold); color:white; border-radius:10px; font-size:12px; padding:2px 6px; margin-top:4px;">${th}</p>`; }
        function prevLesson() { if(activeIdx > 0) switchTab('lesson', activeIdx - 1); }
        function nextLesson() { if(activeIdx < 3) switchTab('lesson', activeIdx + 1); else switchTab('quiz'); }
        function renderQuiz() {
            const q = quizQuestions[currentQuiz]; document.getElementById('quiz-number').innerText = `ข้อที่ ${currentQuiz + 1} / 6`;
            document.getElementById('quiz-question').innerText = q.q; document.getElementById('quiz-hint').innerText = `คำใบ้: ${q.hint}`;
            let optsHtml = ''; q.options.forEach((opt, i) => { optsHtml += `<button class="option-item" onclick="checkQuizAns(${i})"><span>${['A','B','C','D'][i]}</span> ${opt}</button>`; });
            document.getElementById('quiz-options').innerHTML = optsHtml; document.getElementById('quiz-next-btn').style.display = 'none'; document.getElementById('quiz-hint').style.display = 'none';
        }
        function checkQuizAns(idx) {
            const q = quizQuestions[currentQuiz]; if(document.getElementById('quiz-next-btn').style.display === 'block') return;
            const items = document.querySelectorAll('.option-item');
            if(idx === q.answer) { items[idx].classList.add('correct'); quizScore++; document.getElementById('quiz-score').innerText = `⭐ ${quizScore} คะแนน`; }
            else { items[idx].classList.add('wrong'); items[q.answer].classList.add('correct'); }
            document.getElementById('quiz-hint').style.display = 'block'; document.getElementById('quiz-next-btn').style.display = 'block';
        }
        function nextQuiz() { if(currentQuiz < 5) { currentQuiz++; renderQuiz(); } else { quizDone = true; document.getElementById('check-quiz').style.display = 'flex'; switchTab('match'); } updateProgress(); }
        function renderMatch() {
            const left = ["谁", "什么", "哪儿", "怎么样", "几", "多少"]; const right = ["ใคร", "อะไร", "ที่ไหน", "เป็นอย่างไร", "เท่าไร(น้อย)", "เท่าไร(มาก)"];
            let leftHtml = '<p style="font-size:12px; opacity:0.6; margin-bottom:8px;">ภาษาจีน</p>'; left.forEach(cn => { leftHtml += `<button class="match-btn" id="m-cn-${cn}" onclick="selectCn('${cn}')">${cn}</button>`; });
            let rightHtml = '<p style="font-size:12px; opacity:0.6; margin-bottom:8px;">ภาษาไทย</p>'; right.sort(()=>Math.random()-0.5).forEach(th => { rightHtml += `<button class="match-btn" id="m-th-${th}" onclick="selectThai('${th}')">${th}</button>`; });
            document.getElementById('cn-column').innerHTML = leftHtml; document.getElementById('thai-column').innerHTML = rightHtml;
        }
        function selectCn(cn) { if(document.getElementById(`m-cn-${cn}`).classList.contains('matched')) return; document.querySelectorAll('#cn-column .match-btn').forEach(b => b.classList.remove('selected')); selectedCn = cn; document.getElementById(`m-cn-${cn}`).classList.add('selected'); checkMatchPair(); }
        function selectThai(th) { if(document.getElementById(`m-th-${th}`).classList.contains('matched')) return; document.querySelectorAll('#thai-column .match-btn').forEach(b => b.classList.remove('selected')); selectedThai = th; document.getElementById(`m-th-${th}`).classList.add('selected'); checkMatchPair(); }
        function checkMatchPair() {
            if(!selectedCn || !selectedThai) return;
            const pairs = {"谁":"ใคร", "什么":"อะไร", "哪儿":"ที่ไหน", "怎么样":"เป็นอย่างไร", "几":"เท่าไร(น้อย)", "多少":"เท่าไร(มาก)"};
            if(pairs[selectedCn] === selectedThai) { document.getElementById(`m-cn-${selectedCn}`).className = 'match-btn matched'; document.getElementById(`m-th-${selectedThai}`).className = 'match-btn matched'; selectedCn = null; selectedThai = null; if(document.querySelectorAll('.match-btn.matched').length === 12) { matchDone = true; document.getElementById('check-match').style.display = 'flex'; updateProgress(); switchTab('summary'); } }
            else { setTimeout(() => { document.querySelectorAll('.match-btn').forEach(b => { if(!b.classList.contains('matched')) b.classList.remove('selected'); }); selectedCn = null; selectedThai = null; }, 400); }
        }
        function updateProgress() {
            let totalDone = completed.size + (quizDone ? 1 : 0) + (matchDone ? 1 : 0);
            document.getElementById('progress-text').innerText = `${totalDone}/6 บท`;
            document.getElementById('progress-fill').style.width = `${(totalDone/6)*100}%`;
            if(totalDone === 6) { const sBtn = document.getElementById('summary-btn'); sBtn.disabled = false; sBtn.innerText = '🏆 สรุปบทเรียนสำเร็จ'; sBtn.style.background = 'linear-gradient(135deg, var(--gold), var(--orange))'; sBtn.style.color = 'var(--darkRed)'; sBtn.style.cursor = 'pointer'; }
        }
        function resetApp() { activeIdx = 0; currentQuiz = 0; quizScore = 0; completed.clear(); quizDone = false; matchDone = false; document.querySelectorAll('.badge-check').forEach(c => c.style.display = 'none'); const sBtn = document.getElementById('summary-btn'); sBtn.disabled = true; sBtn.innerText = '🔒 เรียนให้ครบก่อน'; sBtn.style.background = 'rgba(255,255,255,0.05)'; sBtn.style.color = 'rgba(255,255,255,0.3)'; switchTab('lesson', 0); }
    </script>
</body>
</html>
