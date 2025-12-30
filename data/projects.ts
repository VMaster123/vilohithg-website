export interface Project {
  title: string
  description: string
  technologies: string[]
  github?: string
  demo?: string
  icon: string
}

export const projectsData: Project[] = [
  {
    title: "Optimal Plasma Control using Physics Informed RL",
    description: "Developed a physics-informed PPO controller in Gym-TORAX to coordinate 3 coupled actuators (plasma current, NBI, ECRH) over 150s ITER discharge simulations, training for 200,000 iterations to achieve peak Q_fusion of roughly 200 during the 50s fusion phase while operating within 10-15% of key disruption thresholds. Engineered a 2×256 MLP actor-critic with a 50D diagnostic observation space, achieving 1.7ms average (<3.5ms worst-case) inference latency, below the 50ms real-time control target.",
    technologies: ["Python", "PyTorch", "Reinforcement Learning", "PPO", "Plasma Physics", "Gym-TORAX"],
    github: "https://github.com/VMaster123/Portfolio",
    demo: "#",
    icon: "⚡"
  },
  {
    title: "Physics-Guided Black Hole Image Reconstruction",
    description: "Built a physics-informed GAN for black hole image reconstruction from sparse UV-plane data, enforcing Fourier visibility constraints; achieved ~5-10 dB PSNR gains at 64×64 over adversarial-only baselines in 2,000 epochs. Applied physics-guided multi-objective training to preserve Doppler-boosted ring asymmetry and Fourier symmetry, maintaining physical fidelity under ~10% spectral sampling while reducing artifacts.",
    technologies: ["Python", "PyTorch", "GANs", "Computer Vision", "Plasma Physics", "Inverse Problems"],
    github: "https://github.com/VMaster123/Portfolio",
    demo: "#",
    icon: "🕳️"
  },
  {
    title: "Neural PDEs for Nonlinear Chaotic Systems",
    description: "Research project on Neural Partial Differential Equations Modeling for Nonlinear Chaotic Systems. Combining deep learning with traditional PDE solvers to model complex dynamical systems.",
    technologies: ["Python", "PyTorch", "Neural ODEs", "PDEs", "Scientific ML", "Dynamical Systems"],
    github: "https://github.com/VMaster123/Portfolio",
    demo: "#",
    icon: "🧠"
  },
  {
    title: "Spectral Inverse Modeling of Space Plasmas",
    description: "Research on Spectral Inverse Modeling of Space Plasmas, applying inverse problem theory and machine learning to reconstruct plasma properties from observational data.",
    technologies: ["Python", "NumPy", "Inverse Problems", "Spectral Methods", "Plasma Physics"],
    github: "https://github.com/VMaster123/Portfolio",
    demo: "#",
    icon: "🌌"
  },
  {
    title: "Fish Schooling Modeling and Simulation",
    description: "Developed and executed a large-scale predator-prey simulation in Scala, running 1,050 Monte Carlo trials to analyze emergent schooling behaviors and quantify group dynamics under stochastic perturbations. Tuned and evaluated cohesion, alignment, and evasion rules, identifying phase-transition regimes and achieving 60.6% mean survival, reproducing schooling patterns consistent with observed fish behavior and literature findings.",
    technologies: ["Scala", "Agent-Based Modeling", "Monte Carlo", "Simulation", "NetLogo"],
    github: "https://github.com/VMaster123/Portfolio/tree/main/Fish_Schooling_Project",
    demo: "#",
    icon: "🐟"
  },
  {
    title: "Randomized Numerical Linear Algebra Framework",
    description: "Building an extensible test framework for randomized numerical linear algebra benchmarks, enabling automated evaluation of JL-based k-NN pipelines for scientific computing and ML workloads. Developing parametrized test inputs and distance-preservation checks.",
    technologies: ["Python", "NumPy", "Linear Algebra", "Benchmarking", "k-NN"],
    github: "https://github.com/VMaster123/Portfolio",
    demo: "#",
    icon: "🔢"
  },
  {
    title: "Neural Network Emulation of Spiking Neurons",
    description: "Simulated spiking neuron networks (LIF model) using stochastic differential equations and emulated them using an SRM deep neural network, achieving >90% neuron prediction accuracy across datasets. Part of brain emulation research at Carboncopies Foundation.",
    technologies: ["Python", "PyTorch", "Neural Networks", "Dynamical Systems", "Control Theory"],
    github: "https://github.com/VMaster123/Portfolio/tree/main/Carboncopies_Internship_Projects",
    demo: "#",
    icon: "🧬"
  },
  {
    title: "3D Foot Scan Annotation & Mesh Reconstruction",
    description: "Engineered geometric smoothing and mesh reconstruction algorithms for computer-vision model pipeline, improving anatomical fit by 20-25% in over 1,000 foot scans. Implemented React-based tools to annotate anatomical landmarks on 3D foot scans.",
    technologies: ["React", "TypeScript", "Computer Vision", "3D Modeling", "Mesh Processing"],
    github: "https://github.com/VMaster123/Portfolio",
    demo: "#",
    icon: "👣"
  }
]

