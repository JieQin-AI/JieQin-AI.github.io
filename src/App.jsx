import React, { useState } from 'react';
import { Mail, GraduationCap, Github, FileText, Award, MapPin, ExternalLink, Code, Terminal, Cpu, BookOpen, Flame, Building2, Globe, Target, BrainCircuit, Bot, Network, Sparkles, Layers } from 'lucide-react';

// --- Data based on Resume & Real Searches ---
const DATA = {
  name: "Jie Qin",
  title: "Senior Algorithm Researcher",
  affiliation: "Meituan | Beidou Talent Program",
  email: "jayqinliu@gmail.com",
  scholar: "https://scholar.google.com/citations?user=zhw6nz4AAAAJ&hl=zh-CN&oi=ao",
  github: "https://github.com/JayQine",
  about: "I am currently a Senior Algorithm Researcher at Meituan (Beidou Talent Program), focusing on unified multimodal large models. I received my Ph.D. in Pattern Recognition and Intelligent Systems from the Institute of Automation, Chinese Academy of Sciences (CASIA) in 2024. My research interests encompass multimodal perception, vision foundation models, and multi-agent collaborative generation systems.",

  // Research Interests for Hero Section
  interests: [
    "Unified Multimodal Large Models (MLLMs)",
    "Vision Foundation Models (VFMs)",
    "Multimodal Perception",
    "Generative Models & Agents"
  ],

  // Categorized Research Focus
  research: [
    {
      title: "Multimodal Large Language Models (MLLMs)",
      icon: <Network className="w-6 h-6 text-indigo-500" />,
      desc: "Focusing on building unified end-to-end frameworks that seamlessly integrate multimodal understanding and generation capabilities. Exploring advanced architectures like stacked autoregressive models.",
      works: [
        { name: "[STAR]", link: "https://star-mm-ai.github.io/" },
        { name: "[UniViTAR]", link: "https://arxiv.org/abs/2504.01792" }
      ]
    },
    {
      title: "Vision Foundation Models (VFMs)",
      icon: <Layers className="w-6 h-6 text-blue-500" />,
      desc: "Designing scalable and efficient vision transformers capable of handling native resolutions and dynamic sequences. Investigating 100% codebook utilization in vector-quantized networks.",
      works: [
        { name: "[FVQ]", link: "https://arxiv.org/abs/2509.10140" }
      ]
    },
    {
      title: "Multimodal Perception & Segmentation",
      icon: <BrainCircuit className="w-6 h-6 text-violet-500" />,
      desc: "Tackling open-vocabulary, weak-supervised, and semi-supervised image segmentation by aligning cross-modal features and discovering additional supervisions for robust visual perception.",
      works: [
        { name: "[FreeSeg]", link: "https://freeseg.github.io/" },
        { name: "[MGD]", link: "https://arxiv.org/abs/2208.10169" },
        { name: "[AMR]", link: "https://arxiv.org/abs/2112.08996" }
      ]
    },
    {
      title: "Generative Models & Embodied Agents",
      icon: <Bot className="w-6 h-6 text-indigo-400" />,
      desc: "Developing LLM-driven multi-agent collaborative frameworks for complex image generation tasks and visual-guided robotic systems for real-world automated measurement and interaction.",
      works: [
        { name: "[DiffusionAgent]", link: "https://arxiv.org/abs/2401.10061" }
      ]
    }
  ],

  news: [
    { date: "2026.02", text: "One paper is accepted by CVPR 2026." },
    { date: "2026.01", text: "One paper is accepted by ICLR 2026." },
    { date: "2025.09", text: "One paper is accepted by NeurIPS 2025." },
    { date: "2024.07", text: "Paper 'Wps-sam' is accepted by ECCV 2024." },
    { date: "2024.06", text: "Successfully obtained my Ph.D. degree from the Institute of Automation, CAS!" },
    { date: "2024.02", text: "One paper is accepted by AAAI 2024." },
    { date: "2023.03", text: "Paper 'FreeSeg' is accepted by CVPR 2023." }
  ],

  education: [
    {
      period: "2019.09 - 2024.06",
      school: "Institute of Automation, Chinese Academy of Sciences",
      degree: "Ph.D. (Direct) | Pattern Recognition & Intelligent Systems",
    },
    {
      period: "2015.09 - 2019.06",
      school: "Nanjing University of Aeronautics and Astronautics",
      degree: "B.E. | College of Automation",
      desc: "Ranked Top 3% in the major."
    }
  ],

  experience: [
    {
      period: "2024.06 - Present",
      company: "Meituan",
      role: "Senior Algorithm Researcher",
      dept: "Beidou Talent Program | M17-MM Dept",
      desc: "Focusing on unified multimodal large models. Lead core projects such as STAR (Unified Understanding and Generation MLLM) and UniViTAR."
    },
    {
      period: "2021.06 - 2023.12",
      company: "ByteDance",
      role: "Algorithm Intern",
      dept: "Intelligent Creation AutoML Platform",
      desc: "Researched multimodal perception algorithms and published 4 top-tier papers. Led the 'FreeSeg' unified multimodal perception framework."
    },
    {
      period: "2019.12 - 2020.12",
      company: "Horizon Robotics",
      role: "Algorithm Intern",
      dept: "Fundamental Vision Algorithm Dept.",
      desc: "Researched data augmentation and its automation; published 1 top-tier paper."
    }
  ],

  publications: [
    {
      title: "STAR: STacked AutoRegressive Scheme for Unified Multimodal Learning",
      authors: ["Jie Qin", "Jiancheng Huang", "Limeng Qiao", "Lin Ma"],
      venue: "arXiv",
      desc: "Proposed a 'Stacked AR Expansion + 4-Stage Progressive Training' scheme and a self-developed FullVQ discretizer, achieving leading generation/editing abilities without compromising understanding metrics.",
      pdf: "https://arxiv.org/abs/2512.13752",
      code: "https://github.com/MM-MVR/STAR",
      homepage: "https://star-mm-ai.github.io/",
      image: "./images/star-zhuye.png"
    },
    {
      title: "UniViTAR: Unified Vision Transformer with Native Resolution",
      authors: ["Limeng Qiao", "Yiyang Gan", "Bairui Wang", "Jie Qin", "Shuang Xu", "Siqi Yang", "Lin Ma"],
      venue: "NeurIPS (CCF-A), 2025",
      desc: "Systematically upgraded ViT to construct a unified vision foundation model supporting native resolution and dynamic sequences, achieving SOTA on multiple tasks.",
      pdf: "https://arxiv.org/abs/2504.01792",
      code: "https://github.com/MM-MVR/UniViTAR",
      image: "./images/univitar.png"
    },
    {
      title: "Scalable Training for Vector-Quantized Networks with 100% Codebook Utilization",
      authors: ["Yifan Chang", "Jie Qin", "Limeng Qiao", "Xiaofeng Wang", "Zheng Zhu", "Lin Ma", "Xingang Wang"],
      venue: "ICLR (CCF-A), 2026",
      desc: "Proposed FVQ (FullVQ) to optimize code vectors through a compress-process-recover pipeline, achieving 100% codebook utilization.",
      pdf: "https://arxiv.org/abs/2509.10140",
      code: "https://github.com/yfChang-cv/FVQ",
      image: "./images/fvq.png"
    },
    {
      title: "DiffusionAgent: Navigating Expert Models for Agentic Image Generation",
      authors: ["Jie Qin", "Jie Wu", "Weifeng Chen", "Yuxi Ren", "Xuefeng Xiao", "Rui Wang", "Shilei Wen"],
      venue: "arXiv",
      desc: "Designed a multi-agent collaborative generation framework driven by LLMs, implementing task decomposition, expert scheduling, and self-optimization via 'Plan-Execute-Reflect' cycles.",
      pdf: "https://arxiv.org/abs/2401.10061",
      code: "https://github.com/DiffusionAgent/DiffusionAgent",
      homepage: "https://diffusionagent.github.io/",
      image: "./images/diffusionagent.png"
    },
    {
      title: "FreeSeg: Unified, Universal and Open-Vocabulary Image Segmentation",
      authors: ["Jie Qin", "Jie Wu", "Pengxiang Yan", "Ming Li", "Ren Yuxi", "Xuefeng Xiao", "et al."],
      venue: "CVPR (CCF-A), 2023",
      desc: "Proposed a unified multimodal segmentation model fusing cross-modal features for open-vocabulary unified modeling in semantic, instance, and panoptic tasks.",
      pdf: "https://openaccess.thecvf.com/content/CVPR2023/papers/Qin_FreeSeg_Unified_Universal_and_Open-Vocabulary_Image_Segmentation_CVPR_2023_paper.pdf",
      code: "https://freeseg.github.io/",
      homepage: "https://freeseg.github.io/",
      image: "./images/freeseg.png"
    },
    {
      title: "Multi-Granularity Distillation Scheme Towards Lightweight Semi-Supervised Semantic Segmentation",
      authors: ["Jie Qin", "Jie Wu", "Ming Li", "Xuefeng Xiao", "Min Zheng", "Xingang Wang"],
      venue: "ECCV (CCF-B), 2022",
      desc: "Proposed a multi-granularity distillation scheme (MGD) to facilitate lightweight semi-supervised semantic segmentation.",
      pdf: "https://arxiv.org/abs/2208.10169",
      code: "https://github.com/JayQine/MGD-SSSS",
      image: "./images/mgd.png"
    },
    {
      title: "ResizeMix: Mixing Data while Preserving Object Information and Label Validity",
      authors: ["Jie Qin", "Jiemin Fang", "Qian Zhang", "Wenyu Liu", "Xingang Wang", "Xinggang Wang"],
      venue: "CVMJ (IF=6.9, SCI-I), 2023",
      desc: "Introduced a novel data augmentation method, ResizeMix, that mixes data by resizing patches to preserve object information and label validity.",
      pdf: "https://arxiv.org/abs/2012.11101",
      image: "./images/resizemix.png"
    },
    {
      title: "Wps-sam: Towards weakly-supervised part segmentation with foundation models",
      authors: ["Xin-Jian Wu", "Ruisong Zhang", "Jie Qin", "Shijie Ma", "Cheng-Lin Liu"],
      venue: "ECCV (CCF-B), 2024",
      desc: "Explored weakly-supervised part segmentation leveraging the prior knowledge from vision foundation models.",
      pdf: "https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/06063.pdf",
      image: "./images/wps_sam.png"
    },
    {
      title: "Activation Modulation and Recalibration Scheme for Weakly Supervised Semantic Segmentation",
      authors: ["Jie Qin", "Jie Wu", "Xuefeng Xiao", "Lujun Li", "Xingang Wang"],
      venue: "AAAI (CCF-A), 2022",
      desc: "Proposed an AMR scheme to discover additional supervision and narrow the gap between full and weak supervisions.",
      pdf: "https://arxiv.org/abs/2112.08996",
      code: "https://github.com/JayQine/AMR",
      image: "./images/amr.png"
    }
  ],

  awards: [
    "Champion, CVPR 2022 Instance Segmentation on Synthetic Data Challenge",
    "5th Place, CVPR 2022 3rd Agriculture Vision Challenge",
    "Merit Student, University of Chinese Academy of Sciences (2021, 2022)",
    "Outstanding Student Leader, University of Chinese Academy of Sciences (2021)",
    "National Encouragement Scholarship (2016, 2017)"
  ],

  services: [
    {
      type: "Journal Reviewer",
      items: "IEEE TPAMI, IEEE TIP, IJCV, TCSVT, PR"
    },
    {
      type: "Conference Reviewer",
      items: "CVPR, ICCV, ECCV, NeurIPS, ICLR, ICML, AAAI, ACM MM, IJCAI"
    }
  ]
};

// --- Components ---

const HighlightAuthor = ({ authors }) => {
  return (
    <div className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
      {authors.map((author, index) => (
        <span key={index}>
          {author.includes("Jie Qin") ? (
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-violet-700 font-extrabold">
              {author}
            </span>
          ) : (
            author
          )}
          {index < authors.length - 1 ? ", " : ""}
        </span>
      ))}
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-indigo-200 selection:text-indigo-900 overflow-x-hidden">

      {/* --- Navigation --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200 transition-all shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-700 via-indigo-600 to-violet-700 flex items-center justify-center text-white font-black shadow-md shadow-indigo-500/30">
              JQ
            </div>
            <span className="text-slate-900 ml-1 font-extrabold">Jie Qin</span>
          </div>
          <div className="hidden md:flex space-x-5 lg:space-x-8 text-sm font-bold tracking-wide text-slate-600">
            {['Home', 'News', 'Experience', 'Research', 'Publications', 'Awards'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-indigo-700 transition-colors relative group py-2"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-indigo-600 to-violet-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="relative z-10 w-full pt-20">

        {/* === SECTION 1: HERO === */}
        <div id="home" className="bg-white w-full py-16 md:py-28 relative overflow-hidden">

          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/5 blur-[100px]"></div>
            <div className="absolute top-[30%] right-[-5%] w-[30%] h-[40%] rounded-full bg-violet-500/5 blur-[120px]"></div>

            <BrainCircuit className="absolute top-[15%] left-[5%] w-24 h-24 text-indigo-100/50 -rotate-12 animate-[pulse_4s_ease-in-out_infinite]" strokeWidth={1} />
            <Bot className="absolute top-[60%] left-[8%] w-32 h-32 text-blue-100/40 rotate-12 animate-[pulse_6s_ease-in-out_infinite]" strokeWidth={1} />
            <Network className="absolute top-[20%] right-[10%] w-28 h-28 text-violet-100/50 rotate-6 animate-[pulse_5s_ease-in-out_infinite]" strokeWidth={1} />
            <Sparkles className="absolute bottom-[15%] right-[15%] w-16 h-16 text-indigo-200/40 -rotate-12 animate-pulse" strokeWidth={1} />
            <Layers className="absolute top-[45%] right-[40%] w-40 h-40 text-slate-100/60 rotate-45" strokeWidth={0.5} />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20">
            <div className="flex-1 space-y-8 animate-fade-in-up">

              <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-indigo-600 to-violet-700 rounded-full text-white text-xs font-bold uppercase tracking-widest shadow-lg shadow-indigo-500/30">
                <span className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] animate-pulse"></span>
                AI Researcher
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight">
                  Hi, I'm <br className="hidden md:block"/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700">
                    Jie Qin
                  </span>
                </h1>

                <h2 className="text-xl md:text-2xl font-bold text-slate-700">
                  {DATA.title}
                </h2>

                <div className="flex items-center gap-2 text-indigo-700 font-semibold font-mono text-sm tracking-wide bg-indigo-50 inline-flex px-4 py-1.5 rounded-md border border-indigo-200 shadow-sm">
                  <MapPin size={16} />
                  {DATA.affiliation}
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed max-w-2xl text-justify text-base md:text-lg font-medium">
                {DATA.about}
              </p>

              <div className="pt-2">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Target size={16} className="text-indigo-600" /> Research Interests
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {DATA.interests.map((interest, idx) => (
                    <span key={idx} className="px-4 py-1.5 bg-indigo-50/80 border border-indigo-100 text-indigo-700 text-xs md:text-sm font-bold rounded-lg shadow-sm hover:bg-indigo-100 transition-colors">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a href={`mailto:${DATA.email}`} className="flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600 text-white rounded-xl text-sm font-bold shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-1 transition-all z-10 relative">
                  <Mail size={18} /> Email Me
                </a>
                <a href={DATA.scholar} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-7 py-3.5 bg-white border-2 border-slate-200 text-slate-700 rounded-xl text-sm font-bold shadow-sm hover:border-indigo-400 hover:text-indigo-700 hover:shadow-lg transition-all z-10 relative">
                  <GraduationCap size={18} /> Google Scholar
                </a>
              </div>
            </div>

            <div className="relative w-64 h-64 md:w-[340px] md:h-[340px] flex-shrink-0 perspective-1000 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 rounded-full blur-[40px] opacity-40"></div>
              <div className="absolute inset-4 bg-white border-4 border-white shadow-2xl shadow-indigo-900/20 rounded-[2rem] overflow-hidden transform transition-transform hover:scale-[1.03] duration-500 z-10 relative">
                <div className="w-full h-full bg-slate-50 flex flex-col items-center justify-center relative">
                  <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at center, #818cf8 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
                  <Cpu className="text-indigo-300 w-24 h-24 mb-4" strokeWidth={1.5} />
                  <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-300 to-violet-300 tracking-tighter">Photo PlaceHolder</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* === SECTION 2: NEWS === */}
        <div id="news" className="w-full bg-gradient-to-br from-indigo-50/80 via-white to-violet-50/80 py-24 relative overflow-hidden border-y border-slate-100">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-100/40 blur-[100px] rounded-full mix-blend-multiply pointer-events-none"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-100/30 blur-[100px] rounded-full mix-blend-multiply pointer-events-none"></div>

          <div className="relative max-w-6xl mx-auto px-6 animate-fade-in-up z-10">
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 rounded-xl bg-white shadow-sm border border-indigo-100 text-indigo-600">
                <Flame size={28} strokeWidth={2.5} className="text-orange-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight drop-shadow-sm">
                Latest News
              </h2>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-xl shadow-indigo-900/5 border border-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-400 to-violet-400"></div>
              <ul className="space-y-8">
                {DATA.news.map((item, idx) => (
                  <li key={idx} className="flex flex-col md:flex-row gap-4 md:gap-8 items-start group">
                    <span className="inline-flex px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-lg font-mono text-sm font-bold shrink-0 border border-indigo-100 shadow-sm">
                      {item.date}
                    </span>
                    <p className="text-slate-700 text-base md:text-lg font-medium leading-relaxed pt-1">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* === SECTION 3: EXPERIENCE & EDUCATION === */}
        <div id="experience" className="w-full bg-white py-24">
          <div className="relative max-w-6xl mx-auto px-6 animate-fade-in-up z-10">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24">

              {/* Experience */}
              <div className="space-y-12">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600 shadow-sm border border-indigo-100">
                    <Building2 size={28} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight">Experience</h3>
                </div>

                <div className="space-y-12 border-l-4 border-indigo-100 pl-8 relative">
                  {DATA.experience.map((exp, idx) => (
                    <div key={idx} className="relative group">
                      <div className="absolute -left-[42px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-indigo-500 group-hover:bg-indigo-500 group-hover:scale-125 transition-all shadow-md"></div>

                      <div className="text-sm font-bold text-indigo-700 mb-2 uppercase tracking-wider">{exp.period}</div>
                      <h4 className="text-2xl font-bold text-slate-900 mb-2">{exp.role}</h4>
                      <div className="text-slate-700 font-bold mb-4 text-base flex items-center gap-2">
                        {exp.company} <span className="text-indigo-300">|</span> {exp.dept}
                      </div>
                      <p className="text-slate-600 text-base leading-relaxed font-medium">{exp.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="space-y-12">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-blue-50 text-blue-600 shadow-sm border border-blue-100">
                    <BookOpen size={28} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight">Education</h3>
                </div>

                <div className="space-y-12 border-l-4 border-blue-100 pl-8 relative">
                  {DATA.education.map((edu, idx) => (
                    <div key={idx} className="relative group">
                      <div className="absolute -left-[42px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-blue-500 group-hover:bg-blue-500 group-hover:scale-125 transition-all shadow-md"></div>

                      <div className="text-sm font-bold text-blue-700 mb-2 uppercase tracking-wider">{edu.period}</div>
                      <h4 className="text-2xl font-bold text-slate-900 mb-2">{edu.school}</h4>
                      <div className="text-slate-700 font-bold mb-4 text-base">{edu.degree}</div>
                      {edu.desc && <p className="text-slate-600 text-base leading-relaxed font-medium">{edu.desc}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* === SECTION 4: RESEARCH FOCUS === */}
        <div id="research" className="w-full bg-slate-50 py-24 border-y border-slate-200/60 relative overflow-hidden">
           <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100/40 blur-[100px] rounded-full mix-blend-multiply pointer-events-none"></div>

          <div className="max-w-6xl mx-auto px-6 animate-fade-in-up z-10 relative">

            <div className="flex items-center gap-4 mb-16">
              <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/30">
                <Target size={28} strokeWidth={2.5} />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                Research Focus
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {DATA.research.map((item, idx) => (
                <div key={idx} className="bg-white border border-slate-200 hover:border-indigo-200 rounded-3xl p-8 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-indigo-900/5 group flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 bg-slate-50 rounded-2xl shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 font-medium leading-relaxed mb-6 flex-1">
                    {item.desc}
                  </p>
                  <div className="mt-auto pt-6 border-t border-slate-200/60">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-3">Representative Works</span>
                    <div className="flex flex-wrap gap-2">
                      {item.works.map((work, wIdx) => (
                        <a key={wIdx} href={work.link} target="_blank" rel="noreferrer" className="px-3 py-1.5 bg-indigo-50 text-indigo-700 text-sm font-bold rounded-lg border border-indigo-100 hover:bg-indigo-600 hover:text-white transition-colors shadow-sm cursor-pointer">
                          {work.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* === SECTION 5: PUBLICATIONS === */}
        <div id="publications" className="w-full bg-white py-24 relative overflow-hidden">
           <div className="relative max-w-6xl mx-auto px-6 animate-fade-in-up z-10">
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 rounded-xl bg-indigo-50 shadow-sm border border-indigo-100 text-indigo-600">
                <FileText size={28} strokeWidth={2.5} />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight drop-shadow-sm">
                Selected Publications
              </h2>
            </div>

            <div className="space-y-8">
              {DATA.publications.map((pub, idx) => (
                <div
                  key={idx}
                  className="group relative flex flex-col md:flex-row gap-8 p-8 bg-white backdrop-blur-xl rounded-3xl border border-slate-200 hover:border-indigo-300 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-indigo-900/10 hover:-translate-y-1"
                >
                  {/* Paper Methodology Figure Container */}
                  <div className="w-full md:w-64 h-40 md:h-auto shrink-0 bg-slate-50 border border-slate-100 rounded-2xl relative flex items-center justify-center overflow-hidden transition-colors group-hover:border-indigo-100 shadow-sm">
                    {/* Render Image with fallback handling */}
                    <img
                      src={pub.image}
                      alt={`${pub.title} method diagram`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    {/* Fallback Icon if Image is missing/broken */}
                    <div className="absolute inset-0 flex items-center justify-center -z-10 bg-slate-100">
                      <Code className="text-slate-300 w-16 h-16" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Paper Info */}
                  <div className="flex-1 space-y-4 flex flex-col justify-center relative z-10">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-violet-600 transition-all duration-300 leading-snug">
                      {pub.title}
                    </h3>

                    <HighlightAuthor authors={pub.authors} />

                    <div className="flex items-center gap-3 pt-1">
                      <span className="px-4 py-1.5 text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-lg shadow-sm">
                        {pub.venue}
                      </span>
                    </div>

                    {pub.desc && (
                      <p className="text-base text-slate-600 leading-relaxed font-medium pt-2">
                        {pub.desc}
                      </p>
                    )}

                    {/* Links */}
                    <div className="flex gap-4 pt-5 mt-auto">
                      {pub.pdf && pub.pdf !== "#" && (
                        <a href={pub.pdf} target="_blank" rel="noreferrer" className="text-sm font-bold flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors bg-slate-50 hover:bg-indigo-50 px-5 py-2.5 rounded-xl border border-slate-200 hover:border-indigo-300 shadow-sm">
                          <FileText size={18} /> PDF
                        </a>
                      )}
                      {pub.code && pub.code !== "#" && (
                        <a href={pub.code} target="_blank" rel="noreferrer" className="text-sm font-bold flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors bg-slate-50 hover:bg-indigo-50 px-5 py-2.5 rounded-xl border border-slate-200 hover:border-indigo-300 shadow-sm">
                          <Github size={18} /> Code
                        </a>
                      )}
                      {pub.homepage && pub.homepage !== "#" && (
                        <a href={pub.homepage} target="_blank" rel="noreferrer" className="text-sm font-bold flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors bg-slate-50 hover:bg-indigo-50 px-5 py-2.5 rounded-xl border border-slate-200 hover:border-indigo-300 shadow-sm">
                          <Globe size={18} /> Project
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* === SECTION 6: HONORS & AWARDS === */}
        <div id="awards" className="w-full bg-slate-50 py-24 border-t border-slate-200/60">
           <div className="max-w-6xl mx-auto px-6 animate-fade-in-up">
              <div className="flex items-center gap-4 mb-12">
                <div className="p-3 rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/30">
                  <Award size={28} strokeWidth={2.5} />
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                  Honors & Awards
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {DATA.awards.map((award, idx) => (
                 <div key={idx} className="flex items-center gap-5 p-6 bg-white border border-slate-200 rounded-2xl hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300 group hover:-translate-y-1">
                   <div className="bg-gradient-to-br from-violet-50 to-indigo-50 p-3.5 rounded-xl border border-indigo-100 shadow-sm group-hover:from-violet-600 group-hover:to-indigo-600 transition-all duration-500">
                      <Award className="text-violet-600 group-hover:text-white transition-colors duration-500" size={24} strokeWidth={2} />
                   </div>
                   <span className="text-slate-800 font-bold text-base md:text-lg leading-snug">{award}</span>
                 </div>
               ))}
             </div>
           </div>
        </div>

        {/* === SECTION 7: ACADEMIC SERVICES === */}
        <div id="services" className="w-full bg-white py-24 border-t border-slate-100">
           <div className="max-w-6xl mx-auto px-6 animate-fade-in-up">
              <div className="flex items-center gap-4 mb-12">
                <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600 shadow-sm border border-indigo-100">
                  <Globe size={28} strokeWidth={2.5} />
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                  Academic Services
                </h2>
              </div>

              <div className="flex flex-col gap-8 max-w-4xl">
               {DATA.services.map((service, idx) => (
                 <div key={idx} className="p-8 bg-white border border-slate-200 rounded-2xl hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 group">
                   <h4 className="text-lg font-black text-indigo-700 mb-4 uppercase tracking-widest flex items-center gap-3">
                     <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                     {service.type}
                   </h4>
                   <p className="text-slate-700 font-bold text-base md:text-lg leading-relaxed">
                     {service.items}
                   </p>
                 </div>
               ))}
             </div>
           </div>
        </div>

      </main>

      {/* --- Footer --- */}
      <footer className="border-t border-slate-200 bg-slate-50 py-12 text-center mt-auto relative z-10">
        <p className="text-slate-500 font-bold text-sm flex items-center justify-center gap-3">
          &copy; {new Date().getFullYear()} Jie Qin
          <span className="text-slate-300">|</span>
          Designed with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-violet-700 font-black">AI Tech Aesthetics</span>
        </p>
      </footer>

      {/* --- Global Styles --- */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        html { scroll-behavior: smooth; background-color: #ffffff; }
        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-track { background: #f8fafc; }
        ::-webkit-scrollbar-thumb { background: #94a3b8; border-radius: 5px; }
        ::-webkit-scrollbar-thumb:hover { background: #6366f1; }
      `}} />
    </div>
  );
}
