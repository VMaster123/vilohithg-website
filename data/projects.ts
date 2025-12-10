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
    description: "Developed a physics-informed PPO controller in Gym-TORAX to coordinate 3 coupled actuators (plasma current, NBI, ECRH) over 150s ITER discharge simulations. Achieved peak Q_fusion of ~200 during fusion phase while operating within 10-15% of key disruption thresholds. Engineered 2×256 MLP actor-critic with 50D diagnostic observation space, achieving 1.7ms average inference latency.",
    technologies: ["Python", "PyTorch", "Reinforcement Learning", "PPO", "Plasma Physics", "Gym-TORAX"],
    github: "https://github.com/VMaster123/Portfolio",
    demo: "#",
    icon: "⚡"
  },
  {
    title: "Physics-Guided Black Hole Image Reconstruction",
    description: "Developing GAN models to reconstruct black hole images from spectral data, using plasma physics constraints to enhance fidelity and reduce reconstruction error across simulations. Applying physics-guided multi-objective training to ensure generated images capture realistic black hole features.",
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
    description: "Built an agent-based predator-prey model in Scala and ran 1,050 Monte Carlo simulations to study fish school formation and predator strategies. Quantified survival outcomes, identifying optimal school formations achieving 60.6% average survival, closely matching ecological observations.",
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

