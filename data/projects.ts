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
    title: "Scientific ML Model",
    description: "Machine learning model for solving Partial Differential Equations in Computational Fluid Dynamics applications.",
    technologies: ["Python", "PyTorch", "Scientific Computing", "PDEs"],
    github: "https://github.com/VMaster123",
    demo: "#",
    icon: "🧪"
  },
  {
    title: "Multi-Physics Simulation",
    description: "Advanced simulation framework combining multiple physics domains with machine learning acceleration.",
    technologies: ["Python", "TensorFlow", "Numerical Methods", "HPC"],
    github: "https://github.com/VMaster123",
    demo: "#",
    icon: "⚛️"
  },
  {
    title: "Mathematical Modeling Tool",
    description: "Tool for building and solving complex mathematical models with optimization capabilities.",
    technologies: ["Python", "NumPy", "SciPy", "Optimization"],
    github: "https://github.com/VMaster123",
    demo: "#",
    icon: "📐"
  },
  {
    title: "AI Data Analysis Platform",
    description: "Platform for analyzing scientific data using AI/ML techniques with interactive visualizations.",
    technologies: ["Python", "Machine Learning", "Data Science", "Visualization"],
    github: "https://github.com/VMaster123",
    demo: "#",
    icon: "📊"
  },
  {
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website built with Next.js, React, and TypeScript showcasing projects and skills.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/VMaster123/Portfolio",
    demo: "#",
    icon: "💼"
  },
  {
    title: "Computational Fluid Dynamics Solver",
    description: "CFD solver implementing finite difference and finite volume methods for fluid flow simulation.",
    technologies: ["Python", "CFD", "Numerical Methods", "Parallel Computing"],
    github: "https://github.com/VMaster123",
    demo: "#",
    icon: "🌊"
  }
]

