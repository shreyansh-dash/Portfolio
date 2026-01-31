import Reveal from "@/components/Reveal";



export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 px-6 py-16">
      <Reveal>
        {/* HERO SECTION */}
        <section className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Shreyansh Dash
          </h1>

          <p className="text-lg text-gray-300 mb-6">
            ML-focused Computer Science student · Open-source contributor · GSoC 2026 aspirant
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com/shreyansh-dash"
              className="px-4 py-2 border border-gray-700 rounded hover:bg-gray-800"
            >
              GitHub
            </a>

            <a
              href="#projects"
              className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200"
            >
              Projects
            </a>
          </div>
        </section>
      </Reveal>

      {/* PROJECTS SECTION */}
      <Reveal>  
        <section id="projects" className="max-w-3xl mx-auto mt-20">
          <h2 className="text-2xl font-semibold mb-6">
            Projects
          </h2>

          <div className="space-y-6">
                      <div className="border border-gray-800 rounded p-5 transition transform hover:-translate-y-1 hover:border-gray-600">
            <h3 className="text-xl font-medium mb-2">
              Misinformation Risk Scoring System
            </h3>

            <p className="text-gray-400 mb-3">
              Designed an applied machine learning system to assign a normalized risk score to textual content based on signals commonly associated with misinformation, enabling early-stage automated assessment.
            </p>

            <p className="text-sm text-gray-500 mb-3">
              Python · scikit-learn · Pandas · NLP · FastAPI · Risk Scoring
            </p>

            <p className="text-sm text-gray-500 mb-3">
              Status: Baseline pipeline under active development
            </p>

            <a
              href="https://github.com/shreyansh-dash/misinformation-risk-scoring"
              className="text-sm underline text-gray-300 hover:text-white"
            >
              View on GitHub →
            </a>
          </div>

            <div className="border border-gray-800 rounded p-5 transition transform hover:-translate-y-1 hover:border-gray-600">
              <h3 className="text-xl font-medium mb-2">
                Bias-Aware GNN for Judicial Outcome Prediction
              </h3>

              <p className="text-gray-400 mb-3">
                Built a graph neural network pipeline to analyze judicial decisions while accounting for bias and fairness constraints.
              </p>

              <p className="text-sm text-gray-500 mb-3">
                Python · PyTorch · NetworkX · Fairness Metrics
              </p>

              <a
                href="https://github.com/shreyansh-dash/bias-aware-gnn-judicial-outcomes"
                className="text-sm underline text-gray-300 hover:text-white"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        </section>
      </Reveal>

      {/* SKILLS SECTION */}
      <Reveal>
        <section className="max-w-3xl mx-auto mt-20">
          <h2 className="text-2xl font-semibold mb-6">
            Skills
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-300">
            <div>
              <h3 className="font-medium mb-2">Languages</h3>
              <p className="text-sm text-gray-400">
                Python, C++, C, Java
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-2">Machine Learning & Data</h3>
              <p className="text-sm text-gray-400">
                NumPy, Pandas, Matplotlib, PyTorch, Scikit-learn
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-2">Tools & Platforms</h3>
              <p className="text-sm text-gray-400">
                Git, GitHub, Linux, Kaggle, Jupyter Notebook
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-2">Concepts</h3>
              <p className="text-sm text-gray-400">
                Data Structures & Algorithms, OOP, Graph Neural Networks, Model Evaluation
              </p>
            </div>
          </div>
        </section>
      </Reveal>

    </main>
  );
}
