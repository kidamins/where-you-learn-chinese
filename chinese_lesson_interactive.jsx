import { useState, useEffect, useRef } from "react";

const COLORS = {
  red: "#C41E3A", darkRed: "#8B0000", gold: "#D4A017", brightGold: "#FFD700",
  jade: "#00A693", darkJade: "#007A6E", blue: "#4A90D9", cream: "#FFF8E7",
  beige: "#F5E6C8", orange: "#F4A460", ink: "#1A1A2E", white: "#FFFFFF",
  lightGold: "#FFF3C0", paleRed: "#FFEEEE", paleJade: "#E0F5F3", paleBlue: "#E8F4FD",
};

const grammarSections = [
  {
    id: 1, key: "yiwen", char: "疑问代词", thai: "คำสรรพนามคำถาม", color: COLORS.red,
    light: COLORS.paleRed, icon: "❓",
    intro: "คำสรรพนามคำถาม ใช้เพื่อถามข้อมูลต่างๆ ในประโยค",
    words: [
      { cn: "谁", pinyin: "shéi", thai: "ใคร" },
      { cn: "什么", pinyin: "shénme", thai: "อะไร" },
      { cn: "哪儿", pinyin: "nǎr", thai: "ที่ไหน" },
      { cn: "怎么样", pinyin: "zěnmeyàng", thai: "เป็นอย่างไร" },
      { cn: "几", pinyin: "jǐ", thai: "เท่าไร (น้อย)" },
      { cn: "多少", pinyin: "duōshao", thai: "เท่าไร (มาก)" },
    ],
    examples: [
      { cn: "你去哪儿？", pinyin: "Nǐ qù nǎr?", thai: "คุณจะไปที่ไหน?" },
      { cn: "这是谁的书？", pinyin: "Zhè shì shéi de shū?", thai: "นี่คือหนังสือของใคร?" },
      { cn: "你叫什么名字？", pinyin: "Nǐ jiào shénme míngzi?", thai: "คุณชื่ออะไร?" },
    ],
  },
  {
    id: 2, key: "de", char: "的", thai: "คำช่วยเชื่อม", color: COLORS.blue,
    light: COLORS.paleBlue, icon: "🔗",
    intro: "的 ใช้เชื่อมคำขยายกับคำนาม เหมือน \"ของ\" ในภาษาไทย",
    structure: "คำขยาย + 的 + คำนาม",
    examples: [
      { cn: "我的书", pinyin: "wǒ de shū", thai: "หนังสือของฉัน", breakdown: ["我", "的", "书"] },
      { cn: "老师的本子", pinyin: "lǎoshī de běnzi", thai: "สมุดของครู", breakdown: ["老师", "的", "本子"] },
      { cn: "很好的同学", pinyin: "hěn hǎo de tóngxué", thai: "เพื่อนที่ดีมาก", breakdown: ["很好", "的", "同学"] },
    ],
  },
  {
    id: 3, key: "zai", char: "在", thai: "บอกสถานที่กระทำ", color: COLORS.jade,
    light: COLORS.paleJade, icon: "📍",
    intro: "在 วางหน้าสถานที่ เพื่อบอกว่า \"กระทำกิจกรรมที่ไหน\"",
    structure: "在 + สถานที่ + กริยา",
    examples: [
      { cn: "我在学校学习汉语。", pinyin: "Wǒ zài xuéxiào xuéxí hànyǔ.", thai: "ฉันเรียนภาษาจีนที่โรงเรียน", loc: "🏫" },
      { cn: "他在十楼住。", pinyin: "Tā zài shí lóu zhù.", thai: "เขาอาศัยอยู่ที่ชั้น 10", loc: "🏢" },
      { cn: "她在图书馆看书。", pinyin: "Tā zài túshūguǎn kàn shū.", thai: "เธออ่านหนังสือที่ห้องสมุด", loc: "📚" },
    ],
  },
  {
    id: 4, key: "gei", char: "给", thai: "บอกผู้รับ", color: COLORS.orange,
    light: "#FFF3E0", icon: "🎁",
    intro: "给 วางหน้าผู้รับ หรือแปลว่า \"ให้\" ก็ได้",
    structure: "给 + ผู้รับ + กริยา",
    examples: [
      { cn: "她给妈妈打电话。", pinyin: "Tā gěi māma dǎ diànhuà.", thai: "เธอโทรศัพท์หาแม่", icon: "📞" },
      { cn: "给你介绍一下。", pinyin: "Gěi nǐ jièshào yīxià.", thai: "ขอแนะนำให้คุณรู้จัก", icon: "🤝" },
      { cn: "给我一本书。", pinyin: "Gěi wǒ yī běn shū.", thai: "ให้หนังสือฉันเล่มหนึ่ง", icon: "📖" },
    ],
  },
];

const quizQuestions = [
  { q: "นี่คือหนังสือของ___? (ใคร)", options: ["谁", "什么", "哪儿", "怎么样"], answer: 0, hint: "ถามว่า 'ใคร'" },
  { q: "你去___？ = คุณจะไปที่ไหน?", options: ["什么", "谁", "哪儿", "几"], answer: 2, hint: "ถามสถานที่" },
  { q: "我___学校学习。 (ที่โรงเรียน)", options: ["给", "在", "的", "哪儿"], answer: 1, hint: "ใช้บอกสถานที่กระทำ" },
  { q: "她___妈妈打电话。 (โทรหาแม่)", options: ["在", "的", "给", "谁"], answer: 2, hint: "บอกผู้รับ" },
  { q: "老师___本子 = สมุดของครู", options: ["在", "给", "的", "谁"], answer: 2, hint: "เชื่อมคำขยายกับคำนาม" },
  { q: "โครงสร้าง 在 คือ?", options: ["在+คน+กริยา", "在+สถานที่+กริยา", "在+กริยา+คน", "คน+在+กริยา"], answer: 1, hint: "在 + สถานที่ + กริยา" },
];

const matchPairs = [
  { cn: "谁", thai: "ใคร" }, { cn: "什么", thai: "อะไร" },
  { cn: "哪儿", thai: "ที่ไหน" }, { cn: "怎么样", thai: "เป็นอย่างไร" },
  { cn: "几", thai: "เท่าไร(น้อย)" }, { cn: "多少", thai: "เท่าไร(มาก)" },
];

// ── COMPONENTS ──────────────────────────────────────────────────────────────

function FloatingParticles() {
  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
      {[...Array(12)].map((_, i) => (
        <div key={i} style={{
          position: "absolute",
          width: i % 3 === 0 ? 8 : i % 3 === 1 ? 5 : 6,
          height: i % 3 === 0 ? 8 : i % 3 === 1 ? 5 : 6,
          borderRadius: "50%",
          background: [COLORS.gold, COLORS.red, COLORS.jade, COLORS.orange][i % 4],
          opacity: 0.15 + (i % 4) * 0.05,
          left: `${(i * 8.3) % 100}%`,
          top: `${(i * 11.7) % 100}%`,
          animation: `float${i % 3} ${4 + i % 3}s ease-in-out infinite`,
          animationDelay: `${i * 0.4}s`,
        }} />
      ))}
      <style>{`
        @keyframes float0 { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-20px) rotate(10deg)} }
        @keyframes float1 { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-15px) rotate(-8deg)} }
        @keyframes float2 { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-25px) rotate(5deg)} }
        @keyframes fadeInUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.04)} }
        @keyframes shimmer { 0%{background-position:-200%} 100%{background-position:200%} }
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
      `}</style>
    </div>
  );
}

function ProgressBar({ current, total }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0" }}>
      <span style={{ fontSize: 12, color: COLORS.gold, fontWeight: 700, minWidth: 60 }}>
        {current}/{total} บท
      </span>
      <div style={{ flex: 1, height: 8, background: "rgba(255,255,255,0.1)", borderRadius: 4, overflow: "hidden" }}>
        <div style={{
          height: "100%", borderRadius: 4,
          background: `linear-gradient(90deg, ${COLORS.gold}, ${COLORS.orange})`,
          width: `${(current / total) * 100}%`,
          transition: "width 0.5s ease",
        }} />
      </div>
    </div>
  );
}

function CoverScreen({ onStart }) {
  return (
    <div style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", textAlign: "center",
      background: `radial-gradient(ellipse at 30% 20%, #2D0A12 0%, #1A0A0F 50%, #0D0A1A 100%)`,
      position: "relative", padding: 24,
    }}>
      <FloatingParticles />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 600, animation: "fadeInUp 0.8s ease" }}>
        {/* Lanterns row */}
        <div style={{ display: "flex", justifyContent: "center", gap: 24, marginBottom: 32 }}>
          {["福", "学", "汉"].map((c, i) => (
            <div key={i} style={{ textAlign: "center", animation: `bounce ${2 + i * 0.3}s ease-in-out infinite`, animationDelay: `${i * 0.2}s` }}>
              <div style={{
                width: 52, height: 68, borderRadius: "50% 50% 40% 40%",
                background: [COLORS.red, COLORS.orange, COLORS.red][i],
                border: `3px solid ${COLORS.gold}`, display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: 22, color: COLORS.brightGold, fontWeight: 900,
                boxShadow: `0 0 20px ${COLORS.gold}44`,
              }}>{c}</div>
              <div style={{ width: 3, height: 20, background: COLORS.gold, margin: "0 auto" }} />
            </div>
          ))}
        </div>
        {/* Title */}
        <div style={{
          background: "rgba(196,30,58,0.25)", border: `2px solid ${COLORS.gold}`,
          borderRadius: 16, padding: "28px 40px", marginBottom: 20,
          backdropFilter: "blur(8px)",
        }}>
          <div style={{ fontSize: 13, color: COLORS.gold, letterSpacing: 4, marginBottom: 8, textTransform: "uppercase" }}>
            ไวยากรณ์ภาษาจีน ม.4
          </div>
          <div style={{ fontSize: 42, fontWeight: 900, color: COLORS.brightGold, lineHeight: 1.2, marginBottom: 4, textShadow: `0 0 30px ${COLORS.gold}88` }}>
            你在哪儿学习汉语？
          </div>
          <div style={{ fontSize: 22, color: COLORS.white, fontWeight: 700 }}>บทที่ 12</div>
        </div>
        {/* Grammar pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 32 }}>
          {[
            { label: "疑问代词", sub: "คำถาม", color: COLORS.red },
            { label: "的", sub: "เชื่อมขยาย", color: COLORS.blue },
            { label: "在", sub: "สถานที่", color: COLORS.jade },
            { label: "给", sub: "ผู้รับ", color: COLORS.orange },
          ].map((g, i) => (
            <div key={i} style={{
              background: g.color + "33", border: `1.5px solid ${g.color}`,
              borderRadius: 30, padding: "8px 18px", animation: `fadeInUp 0.6s ease`,
              animationDelay: `${0.3 + i * 0.1}s`, animationFillMode: "both",
            }}>
              <span style={{ fontSize: 18, color: g.color, fontWeight: 900 }}>{g.label}</span>
              <span style={{ fontSize: 11, color: COLORS.white, marginLeft: 6, opacity: 0.8 }}>{g.sub}</span>
            </div>
          ))}
        </div>
        <button onClick={onStart} style={{
          background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.orange})`,
          border: "none", borderRadius: 50, padding: "16px 48px",
          fontSize: 18, fontWeight: 900, color: COLORS.darkRed, cursor: "pointer",
          boxShadow: `0 8px 32px ${COLORS.gold}66`,
          animation: "pulse 2s ease-in-out infinite",
          letterSpacing: 1,
        }}>
          🎋 เริ่มเรียนเลย！
        </button>
      </div>
    </div>
  );
}

function GrammarCard({ section, isActive, onClick }) {
  return (
    <button onClick={onClick} style={{
      background: isActive ? section.color : "rgba(255,255,255,0.05)",
      border: `2px solid ${isActive ? section.color : "rgba(255,255,255,0.15)"}`,
      borderRadius: 12, padding: "12px 18px", cursor: "pointer", textAlign: "left",
      transition: "all 0.3s ease", color: COLORS.white,
      transform: isActive ? "scale(1.03)" : "scale(1)",
      boxShadow: isActive ? `0 8px 24px ${section.color}66` : "none",
      width: "100%",
    }}>
      <div style={{ fontSize: 11, opacity: 0.7, marginBottom: 2 }}>ไวยากรณ์ที่ {section.id}</div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 20 }}>{section.icon}</span>
        <div>
          <div style={{ fontSize: 18, fontWeight: 900, lineHeight: 1 }}>{section.char}</div>
          <div style={{ fontSize: 11, opacity: 0.8 }}>{section.thai}</div>
        </div>
      </div>
    </button>
  );
}

function WordCard({ word, revealed, onClick }) {
  return (
    <div onClick={onClick} style={{
      background: revealed ? COLORS.white : "rgba(255,255,255,0.08)",
      borderRadius: 12, padding: "16px 12px", cursor: "pointer", textAlign: "center",
      border: `2px solid ${revealed ? COLORS.gold : "rgba(255,255,255,0.15)"}`,
      transition: "all 0.3s ease", minWidth: 120,
      transform: revealed ? "translateY(-4px)" : "none",
      boxShadow: revealed ? `0 8px 24px rgba(0,0,0,0.3)` : "none",
    }}>
      <div style={{ fontSize: 32, fontWeight: 900, color: revealed ? COLORS.red : COLORS.white, marginBottom: 4 }}>
        {word.cn}
      </div>
      <div style={{ fontSize: 12, color: revealed ? "#888" : "rgba(255,255,255,0.5)", fontStyle: "italic", marginBottom: 6 }}>
        {revealed ? word.pinyin : "คลิกเปิด"}
      </div>
      <div style={{
        background: revealed ? COLORS.gold : "transparent",
        borderRadius: 20, padding: revealed ? "4px 12px" : 0,
        fontSize: 14, fontWeight: 700, color: revealed ? COLORS.darkRed : "transparent",
        transition: "all 0.3s",
      }}>
        {revealed ? word.thai : "—"}
      </div>
    </div>
  );
}

function ExampleBubble({ ex, color, light, index }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), index * 200); return () => clearTimeout(t); }, [index]);
  return (
    <div style={{
      background: COLORS.white, borderRadius: 16, padding: "16px 20px",
      borderLeft: `5px solid ${color}`, boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
      opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)",
      transition: "all 0.4s ease",
    }}>
      <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
        {ex.loc && <span style={{ fontSize: 24 }}>{ex.loc}</span>}
        {ex.icon && <span style={{ fontSize: 24 }}>{ex.icon}</span>}
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 18, fontWeight: 900, color, marginBottom: 2 }}>{ex.cn}</div>
          <div style={{ fontSize: 12, color: "#888", fontStyle: "italic", marginBottom: 4 }}>{ex.pinyin}</div>
          <div style={{ fontSize: 14, color: COLORS.ink, fontWeight: 600 }}>= {ex.thai}</div>
          {ex.breakdown && (
            <div style={{ display: "flex", gap: 8, marginTop: 8, flexWrap: "wrap" }}>
              {ex.breakdown.map((part, i) => (
                <span key={i} style={{
                  background: i === 1 ? color : light,
                  color: i === 1 ? COLORS.white : COLORS.ink,
                  borderRadius: 6, padding: "2px 10px", fontSize: 14, fontWeight: 700,
                }}>{part}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function GrammarLesson({ section }) {
  const [revealedWords, setRevealedWords] = useState({});
  const [showAll, setShowAll] = useState(false);

  useEffect(() => { setRevealedWords({}); setShowAll(false); }, [section.id]);

  const toggleWord = (i) => setRevealedWords(r => ({ ...r, [i]: !r[i] }));
  const revealAll = () => {
    if (showAll) { setRevealedWords({}); setShowAll(false); }
    else {
      const all = {};
      (section.words || []).forEach((_, i) => all[i] = true);
      setRevealedWords(all); setShowAll(true);
    }
  };

  return (
    <div style={{ animation: "fadeInUp 0.5s ease" }}>
      {/* Header */}
      <div style={{
        background: `linear-gradient(135deg, ${section.color}22, ${section.color}11)`,
        border: `2px solid ${section.color}44`, borderRadius: 16, padding: "20px 24px", marginBottom: 20,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{
            width: 60, height: 60, borderRadius: 14, background: section.color,
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28,
          }}>{section.icon}</div>
          <div>
            <div style={{ fontSize: 11, color: section.color, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>
              ไวยากรณ์ที่ {section.id}
            </div>
            <div style={{ fontSize: 32, fontWeight: 900, color: section.color }}>{section.char}</div>
            <div style={{ fontSize: 14, color: COLORS.white, opacity: 0.8 }}>{section.thai}</div>
          </div>
        </div>
        <div style={{ marginTop: 12, padding: "10px 16px", background: "rgba(255,255,255,0.08)", borderRadius: 10, fontSize: 14, color: COLORS.white }}>
          💡 {section.intro}
        </div>
        {section.structure && (
          <div style={{
            marginTop: 10, padding: "10px 16px", borderRadius: 10, textAlign: "center",
            background: section.color + "22", border: `1.5px dashed ${section.color}`,
            fontSize: 16, fontWeight: 700, color: COLORS.white,
          }}>
            📐 โครงสร้าง: {section.structure}
          </div>
        )}
      </div>

      {/* Word cards (for 疑问代词) */}
      {section.words && (
        <div style={{ marginBottom: 20 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <div style={{ fontSize: 14, color: COLORS.gold, fontWeight: 700 }}>คลิกที่คำเพื่อดูความหมาย 👆</div>
            <button onClick={revealAll} style={{
              background: showAll ? "rgba(255,255,255,0.1)" : section.color,
              border: `1.5px solid ${section.color}`, borderRadius: 20,
              padding: "6px 16px", fontSize: 12, color: COLORS.white, cursor: "pointer",
            }}>
              {showAll ? "ซ่อนทั้งหมด" : "เปิดทั้งหมด"}
            </button>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {section.words.map((w, i) => (
              <WordCard key={i} word={w} revealed={!!revealedWords[i]} onClick={() => toggleWord(i)} />
            ))}
          </div>
        </div>
      )}

      {/* Examples */}
      <div>
        <div style={{ fontSize: 14, color: COLORS.gold, fontWeight: 700, marginBottom: 12 }}>📝 ตัวอย่างประโยค</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {section.examples.map((ex, i) => (
            <ExampleBubble key={i} ex={ex} color={section.color} light={section.light} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function QuizScreen({ onFinish }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState([]);

  const q = quizQuestions[current];

  const handleSelect = (idx) => {
    if (selected !== null) return;
    setSelected(idx);
    const correct = idx === q.answer;
    if (correct) setScore(s => s + 1);
    setAnswers(a => [...a, correct]);
  };

  const next = () => {
    if (current + 1 >= quizQuestions.length) setShowResult(true);
    else { setCurrent(c => c + 1); setSelected(null); }
  };

  if (showResult) {
    const pct = Math.round((score / quizQuestions.length) * 100);
    return (
      <div style={{ textAlign: "center", animation: "fadeInUp 0.5s ease", padding: 20 }}>
        <div style={{ fontSize: 64, marginBottom: 16 }}>
          {pct >= 80 ? "🏆" : pct >= 60 ? "🌟" : "📚"}
        </div>
        <div style={{ fontSize: 28, fontWeight: 900, color: COLORS.gold, marginBottom: 8 }}>
          {pct >= 80 ? "ยอดเยี่ยม!" : pct >= 60 ? "ดีมาก!" : "ลองใหม่อีกครั้ง!"}
        </div>
        <div style={{ fontSize: 48, fontWeight: 900, color: pct >= 80 ? COLORS.jade : pct >= 60 ? COLORS.gold : COLORS.red, marginBottom: 8 }}>
          {score}/{quizQuestions.length}
        </div>
        <div style={{ fontSize: 16, color: COLORS.white, opacity: 0.8, marginBottom: 24 }}>คะแนน {pct}%</div>
        <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 24 }}>
          {answers.map((a, i) => (
            <div key={i} style={{ width: 32, height: 32, borderRadius: "50%", background: a ? COLORS.jade : COLORS.red, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>
              {a ? "✓" : "✗"}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <button onClick={() => { setCurrent(0); setSelected(null); setScore(0); setShowResult(false); setAnswers([]); }} style={{
            background: "rgba(255,255,255,0.1)", border: `1.5px solid ${COLORS.gold}`,
            borderRadius: 30, padding: "12px 28px", color: COLORS.white, cursor: "pointer", fontSize: 15,
          }}>ทำซ้ำ</button>
          <button onClick={onFinish} style={{
            background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.orange})`,
            border: "none", borderRadius: 30, padding: "12px 28px", color: COLORS.darkRed, cursor: "pointer", fontSize: 15, fontWeight: 700,
          }}>เสร็จสิ้น ✓</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ animation: "fadeInUp 0.4s ease" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
        <div style={{ fontSize: 13, color: COLORS.gold, fontWeight: 700 }}>ข้อที่ {current + 1} / {quizQuestions.length}</div>
        <div style={{ fontSize: 13, color: COLORS.jade }}>⭐ {score} คะแนน</div>
      </div>
      <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 14, padding: "20px 24px", marginBottom: 20 }}>
        <div style={{ fontSize: 18, fontWeight: 700, color: COLORS.white, marginBottom: 6 }}>{q.q}</div>
        {selected !== null && (
          <div style={{ fontSize: 13, color: COLORS.gold, marginTop: 8 }}>💡 {q.hint}</div>
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {q.options.map((opt, i) => {
          let bg = "rgba(255,255,255,0.06)";
          let border = "rgba(255,255,255,0.15)";
          if (selected !== null) {
            if (i === q.answer) { bg = COLORS.jade + "33"; border = COLORS.jade; }
            else if (i === selected && selected !== q.answer) { bg = COLORS.red + "33"; border = COLORS.red; }
          }
          return (
            <button key={i} onClick={() => handleSelect(i)} style={{
              background: bg, border: `2px solid ${border}`, borderRadius: 12,
              padding: "14px 20px", color: COLORS.white, cursor: selected !== null ? "default" : "pointer",
              textAlign: "left", fontSize: 16, transition: "all 0.2s",
              display: "flex", alignItems: "center", gap: 12,
            }}>
              <span style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, flexShrink: 0 }}>
                {["A", "B", "C", "D"][i]}
              </span>
              <span style={{ fontWeight: selected !== null && i === q.answer ? 700 : 400 }}>{opt}</span>
              {selected !== null && i === q.answer && <span style={{ marginLeft: "auto" }}>✅</span>}
              {selected !== null && i === selected && i !== q.answer && <span style={{ marginLeft: "auto" }}>❌</span>}
            </button>
          );
        })}
      </div>
      {selected !== null && (
        <button onClick={next} style={{
          marginTop: 20, width: "100%",
          background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.orange})`,
          border: "none", borderRadius: 12, padding: "14px", fontSize: 16,
          fontWeight: 700, color: COLORS.darkRed, cursor: "pointer",
          animation: "fadeInUp 0.3s ease",
        }}>
          {current + 1 >= quizQuestions.length ? "ดูผลคะแนน 🏆" : "ข้อถัดไป →"}
        </button>
      )}
    </div>
  );
}

function MatchGame({ onDone }) {
  const [shuffledThai] = useState(() => [...matchPairs].sort(() => Math.random() - 0.5).map(p => p.thai));
  const [selectedCn, setSelectedCn] = useState(null);
  const [selectedThai, setSelectedThai] = useState(null);
  const [matched, setMatched] = useState([]);
  const [wrong, setWrong] = useState(false);

  useEffect(() => {
    if (selectedCn && selectedThai) {
      const pair = matchPairs.find(p => p.cn === selectedCn);
      if (pair && pair.thai === selectedThai) {
        setMatched(m => [...m, selectedCn]);
        setSelectedCn(null); setSelectedThai(null);
      } else {
        setWrong(true);
        setTimeout(() => { setSelectedCn(null); setSelectedThai(null); setWrong(false); }, 800);
      }
    }
  }, [selectedCn, selectedThai]);

  const done = matched.length === matchPairs.length;

  return (
    <div>
      <div style={{ fontSize: 14, color: COLORS.gold, marginBottom: 16, fontWeight: 700 }}>
        จับคู่คำถามภาษาจีนกับความหมายภาษาไทย 🔗
      </div>
      {done ? (
        <div style={{ textAlign: "center", animation: "fadeInUp 0.4s ease" }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🎉</div>
          <div style={{ fontSize: 22, color: COLORS.gold, fontWeight: 900, marginBottom: 8 }}>จับคู่ครบแล้ว!</div>
          <button onClick={onDone} style={{
            background: COLORS.jade, border: "none", borderRadius: 20, padding: "10px 28px",
            color: COLORS.white, fontWeight: 700, fontSize: 15, cursor: "pointer", marginTop: 12,
          }}>ต่อไป →</button>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div>
            <div style={{ fontSize: 12, color: COLORS.white, opacity: 0.6, marginBottom: 8 }}>ภาษาจีน</div>
            {matchPairs.map((p, i) => {
              const isMatched = matched.includes(p.cn);
              const isSelected = selectedCn === p.cn;
              return (
                <button key={i} onClick={() => !isMatched && setSelectedCn(p.cn)} style={{
                  display: "block", width: "100%", marginBottom: 8,
                  background: isMatched ? COLORS.jade + "33" : isSelected ? COLORS.red + "33" : "rgba(255,255,255,0.06)",
                  border: `2px solid ${isMatched ? COLORS.jade : isSelected ? COLORS.red : "rgba(255,255,255,0.2)"}`,
                  borderRadius: 10, padding: "12px", color: isMatched ? COLORS.jade : COLORS.white,
                  fontSize: 20, fontWeight: 900, cursor: isMatched ? "default" : "pointer",
                  textDecoration: isMatched ? "line-through" : "none",
                  transition: "all 0.2s",
                }}>{p.cn}</button>
              );
            })}
          </div>
          <div>
            <div style={{ fontSize: 12, color: COLORS.white, opacity: 0.6, marginBottom: 8 }}>ภาษาไทย</div>
            {shuffledThai.map((t, i) => {
              const pair = matchPairs.find(p => p.thai === t);
              const isMatched = pair && matched.includes(pair.cn);
              const isSelected = selectedThai === t;
              return (
                <button key={i} onClick={() => !isMatched && setSelectedThai(t)} style={{
                  display: "block", width: "100%", marginBottom: 8,
                  background: isMatched ? COLORS.jade + "33" : isSelected ? COLORS.blue + "33" : "rgba(255,255,255,0.06)",
                  border: `2px solid ${isMatched ? COLORS.jade : isSelected ? COLORS.blue : "rgba(255,255,255,0.2)"}`,
                  borderRadius: 10, padding: "12px", color: isMatched ? COLORS.jade : COLORS.white,
                  fontSize: 13, fontWeight: 700, cursor: isMatched ? "default" : "pointer",
                  transition: "all 0.2s",
                }}>{t}</button>
              );
            })}
          </div>
        </div>
      )}
      {wrong && (
        <div style={{ textAlign: "center", color: COLORS.red, fontSize: 14, marginTop: 8, animation: "fadeInUp 0.2s ease" }}>
          ❌ ไม่ตรงกัน ลองใหม่
        </div>
      )}
    </div>
  );
}

function SummaryScreen({ onRestart }) {
  return (
    <div style={{ animation: "fadeInUp 0.5s ease" }}>
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <div style={{ fontSize: 48, marginBottom: 8 }}>🎋</div>
        <div style={{ fontSize: 26, fontWeight: 900, color: COLORS.brightGold }}>谢谢大家！</div>
        <div style={{ fontSize: 16, color: COLORS.white, opacity: 0.8 }}>สรุปไวยากรณ์ที่เรียน</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
        {grammarSections.map(s => (
          <div key={s.id} style={{
            background: `linear-gradient(135deg, ${s.color}22, ${s.color}11)`,
            border: `1.5px solid ${s.color}44`, borderRadius: 12, padding: "12px 16px",
            display: "flex", alignItems: "center", gap: 14,
          }}>
            <div style={{ width: 44, height: 44, borderRadius: 10, background: s.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>
              {s.icon}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 20, fontWeight: 900, color: s.color }}>{s.char}</div>
              <div style={{ fontSize: 12, color: COLORS.white, opacity: 0.7 }}>{s.thai}</div>
            </div>
            <div style={{ fontSize: 12, color: COLORS.white, opacity: 0.6, textAlign: "right" }}>
              {s.structure || "คำถาม 6 คำ"}
            </div>
          </div>
        ))}
      </div>
      <div style={{ background: "rgba(212,160,23,0.15)", border: `1.5px solid ${COLORS.gold}44`, borderRadius: 12, padding: "14px 18px", marginBottom: 20, fontSize: 13, color: COLORS.white }}>
        ⭐ จำง่าย: <strong style={{ color: COLORS.gold }}>ถาม = 疑问代词 | ของ = 的 | ที่ = 在 | ให้ = 给</strong>
      </div>
      <button onClick={onRestart} style={{
        width: "100%", background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.orange})`,
        border: "none", borderRadius: 12, padding: "16px", fontSize: 16,
        fontWeight: 900, color: COLORS.darkRed, cursor: "pointer",
      }}>
        🔄 เรียนอีกครั้ง
      </button>
    </div>
  );
}

// ── MAIN APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState("cover"); // cover | lesson | quiz | match | summary
  const [activeSection, setActiveSection] = useState(0);
  const [completedSections, setCompletedSections] = useState([]);
  const [quizDone, setQuizDone] = useState(false);
  const [matchDone, setMatchDone] = useState(false);

  const totalSteps = grammarSections.length + 2; // 4 grammar + quiz + match
  const doneCount = completedSections.length + (quizDone ? 1 : 0) + (matchDone ? 1 : 0);

  const markSectionDone = (id) => {
    if (!completedSections.includes(id)) setCompletedSections(c => [...c, id]);
  };

  if (screen === "cover") return <CoverScreen onStart={() => setScreen("lesson")} />;

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #1A0A0F 0%, #0D0A1A 50%, #0A1A0D 100%)",
      fontFamily: "'Segoe UI', 'Noto Sans Thai', sans-serif",
      color: COLORS.white,
    }}>
      <FloatingParticles />

      {/* Sidebar + Content layout */}
      <div style={{ display: "flex", minHeight: "100vh", position: "relative", zIndex: 1 }}>

        {/* Sidebar */}
        <div style={{
          width: 220, flexShrink: 0, background: "rgba(0,0,0,0.4)", backdropFilter: "blur(12px)",
          borderRight: "1px solid rgba(255,255,255,0.08)", padding: "20px 14px",
          display: "flex", flexDirection: "column", gap: 8,
        }}>
          {/* Logo */}
          <div style={{ textAlign: "center", marginBottom: 8 }}>
            <div style={{ fontSize: 22, fontWeight: 900, color: COLORS.brightGold }}>你在哪儿</div>
            <div style={{ fontSize: 10, color: COLORS.gold, opacity: 0.7 }}>บทที่ 12</div>
          </div>
          <ProgressBar current={doneCount} total={totalSteps} />
          <div style={{ height: 1, background: "rgba(255,255,255,0.1)", margin: "4px 0" }} />

          {/* Grammar nav */}
          <div style={{ fontSize: 10, color: COLORS.white, opacity: 0.4, letterSpacing: 2, textTransform: "uppercase", marginBottom: 4 }}>
            ไวยากรณ์
          </div>
          {grammarSections.map((s, i) => (
            <div key={s.id} style={{ position: "relative" }}>
              <GrammarCard
                section={s}
                isActive={screen === "lesson" && activeSection === i}
                onClick={() => { setScreen("lesson"); setActiveSection(i); markSectionDone(s.id); }}
              />
              {completedSections.includes(s.id) && (
                <div style={{ position: "absolute", top: 8, right: 8, width: 16, height: 16, borderRadius: "50%", background: COLORS.jade, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10 }}>✓</div>
              )}
            </div>
          ))}

          <div style={{ height: 1, background: "rgba(255,255,255,0.1)", margin: "4px 0" }} />
          <div style={{ fontSize: 10, color: COLORS.white, opacity: 0.4, letterSpacing: 2, textTransform: "uppercase", marginBottom: 4 }}>
            แบบฝึกหัด
          </div>

          <button onClick={() => setScreen("quiz")} style={{
            background: screen === "quiz" ? COLORS.blue : "rgba(255,255,255,0.05)",
            border: `2px solid ${screen === "quiz" ? COLORS.blue : "rgba(255,255,255,0.15)"}`,
            borderRadius: 12, padding: "12px 14px", cursor: "pointer", textAlign: "left", color: COLORS.white,
            transition: "all 0.3s", width: "100%", position: "relative",
          }}>
            <div style={{ fontSize: 11, opacity: 0.7, marginBottom: 2 }}>Quiz</div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span>🧠</span>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700 }}>แบบทดสอบ</div>
                <div style={{ fontSize: 10, opacity: 0.7 }}>6 ข้อ</div>
              </div>
            </div>
            {quizDone && <div style={{ position: "absolute", top: 8, right: 8, width: 16, height: 16, borderRadius: "50%", background: COLORS.jade, fontSize: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>✓</div>}
          </button>

          <button onClick={() => setScreen("match")} style={{
            background: screen === "match" ? COLORS.orange : "rgba(255,255,255,0.05)",
            border: `2px solid ${screen === "match" ? COLORS.orange : "rgba(255,255,255,0.15)"}`,
            borderRadius: 12, padding: "12px 14px", cursor: "pointer", textAlign: "left", color: COLORS.white,
            transition: "all 0.3s", width: "100%", position: "relative",
          }}>
            <div style={{ fontSize: 11, opacity: 0.7, marginBottom: 2 }}>Activity</div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span>🔗</span>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700 }}>จับคู่คำ</div>
                <div style={{ fontSize: 10, opacity: 0.7 }}>6 คู่</div>
              </div>
            </div>
            {matchDone && <div style={{ position: "absolute", top: 8, right: 8, width: 16, height: 16, borderRadius: "50%", background: COLORS.jade, fontSize: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>✓</div>}
          </button>

          <div style={{ flex: 1 }} />
          <button onClick={() => setScreen("summary")} style={{
            background: doneCount >= 4 ? `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.orange})` : "rgba(255,255,255,0.05)",
            border: `1.5px solid ${doneCount >= 4 ? COLORS.gold : "rgba(255,255,255,0.1)"}`,
            borderRadius: 12, padding: "12px", color: doneCount >= 4 ? COLORS.darkRed : "rgba(255,255,255,0.3)",
            cursor: doneCount >= 4 ? "pointer" : "not-allowed", fontSize: 13, fontWeight: 700,
          }}>
            {doneCount >= 4 ? "🏆 สรุปบทเรียน" : `🔒 ทำให้ครบก่อน (${doneCount}/${totalSteps})`}
          </button>
        </div>

        {/* Main content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "28px 32px", maxHeight: "100vh" }}>
          {screen === "lesson" && (
            <div>
              <GrammarLesson section={grammarSections[activeSection]} />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 24 }}>
                <button onClick={() => { if (activeSection > 0) { setActiveSection(a => a - 1); } }} disabled={activeSection === 0} style={{
                  background: "rgba(255,255,255,0.06)", border: "1.5px solid rgba(255,255,255,0.15)",
                  borderRadius: 10, padding: "10px 20px", color: COLORS.white, cursor: activeSection === 0 ? "not-allowed" : "pointer",
                  opacity: activeSection === 0 ? 0.4 : 1, fontSize: 14,
                }}>← ก่อนหน้า</button>
                <button onClick={() => {
                  markSectionDone(grammarSections[activeSection].id);
                  if (activeSection < grammarSections.length - 1) setActiveSection(a => a + 1);
                  else setScreen("quiz");
                }} style={{
                  background: `linear-gradient(135deg, ${grammarSections[activeSection].color}, ${grammarSections[activeSection].color}cc)`,
                  border: "none", borderRadius: 10, padding: "10px 24px",
                  color: COLORS.white, cursor: "pointer", fontSize: 14, fontWeight: 700,
                }}>
                  {activeSection < grammarSections.length - 1 ? "ถัดไป →" : "ไปทำ Quiz! 🧠"}
                </button>
              </div>
            </div>
          )}
          {screen === "quiz" && <QuizScreen onFinish={() => { setQuizDone(true); setScreen("match"); }} />}
          {screen === "match" && <MatchGame onDone={() => { setMatchDone(true); setScreen("summary"); }} />}
          {screen === "summary" && <SummaryScreen onRestart={() => { setScreen("cover"); setCompletedSections([]); setQuizDone(false); setMatchDone(false); setActiveSection(0); }} />}
        </div>
      </div>
    </div>
  );
}
