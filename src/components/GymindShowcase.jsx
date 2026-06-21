import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Smartphone,
    LayoutGrid,
    Database,
    ShieldCheck,
    Github,
    ExternalLink,
    MapPin,
    Zap,
    Key,
    RefreshCw,
    Activity
} from "lucide-react";
import "../CSS/GymindShowcase.css";

const TABS = [
    {
        id: "mobile",
        label: "Mobile App",
        icon: <Smartphone size={18} />,
        tagline: "Expo & React Native Client",
        description: "A fast, cross-platform member app supporting geofenced dynamic check-ins and offline-capable workout tracking.",
        techStack: ["React Native", "Expo SDK 54", "Zustand", "TanStack Query v5", "Axios", "Expo Secure Store"],
        features: [
            {
                title: "Single-Flight Token Refresher",
                desc: "Axios interceptor that queues concurrent 401 requests and shares a single refresh token promise, preventing validation loop storms.",
                icon: <RefreshCw size={16} />
            },
            {
                title: "Hybrid Secure Storage",
                desc: "Uses hardware-backed encrypted keychain storage via SecureStore on iOS/Android, falling back gracefully to AsyncStorage on React Native Web.",
                icon: <Key size={16} />
            },
            {
                title: "Optimized Server-State Cache",
                desc: "TanStack Query caching layer with strict TTLs, background re-fetching, and cache invalidation rules to minimize API traffic.",
                icon: <Zap size={16} />
            }
        ]
    },
    {
        id: "admin",
        label: "Admin Dashboard",
        icon: <LayoutGrid size={18} />,
        tagline: "Vite & React Admin Panel",
        description: "An analytical dashboard for gym owners and branch managers to manage subscriptions, audit attendance, and monitor branch capacity.",
        techStack: ["React 18", "Vite", "TypeScript", "Tailwind CSS", "React Hook Form", "Zod", "Recharts"],
        features: [
            {
                title: "Interactive Capacity Monitor",
                desc: "Visualizes real-time branch occupancy relative to maximum building capacity thresholds, dynamically warning staff of overload.",
                icon: <Activity size={16} />
            },
            {
                title: "Zod Schema Type-Safety",
                desc: "Ensures complete frontend input validation matching database constraints via React Hook Form integrated with Zod resolvers.",
                icon: <ShieldCheck size={16} />
            },
            {
                title: "Secure Check-In Audit Logs",
                desc: "Real-time list of all branch check-ins and manual overrides, mapping administrative actions back to specific staff accounts.",
                icon: <LayoutGrid size={16} />
            }
        ]
    },
    {
        id: "api",
        label: "API Architecture",
        icon: <Database size={18} />,
        tagline: "ASP.NET Core & PostgreSQL Backend",
        description: "A highly structured net8.0 REST API serving as the secure core of Gymind, managing concurrency and multi-gym isolation.",
        techStack: ["C#", ".NET 8.0", "EF Core", "PostgreSQL", "JWT Bearer", "BCrypt", "Supabase DB"],
        features: [
            {
                title: "Dynamic HMAC-SHA256 Token QR Flow",
                desc: "Generates time-rotated check-in QR codes (30s window). API validates the signature against branch keys, preventing screenshot-based check-in fraud.",
                icon: <ShieldCheck size={16} />
            },
            {
                title: "GPS Geofencing Range Validation",
                desc: "Enforces location verification using the Haversine formula, blocking check-ins if the user's distance to coordinates exceeds branch-defined radius (50m-150m).",
                icon: <MapPin size={16} />
            },
            {
                title: "Concurrency Constraint Handling",
                desc: "Integrates transactional DB checks, catching Postgres unique constraint violations to prevent concurrent multi-device session fraud.",
                icon: <Database size={16} />
            }
        ]
    }
];

const GymindShowcase = () => {
    const [activeTab, setActiveTab] = useState("mobile");

    const currentTab = TABS.find((t) => t.id === activeTab);

    return (
        <div className="gymind-showcase-container">
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="top-header"
            >
                <div className="gymind-logo-wrapper">
                    <img 
                        src="/Portfolio/images/GYMIN-LOGO.png" 
                        alt="Gymind Logo" 
                        className="gymind-logo"
                    />
                </div>
                <h1>Gymind Showcase</h1>
                <p className="gymind-tagline">
                    Flagship SaaS Ecosystem • High-Performance Cross-Platform Fitness Orchestration
                </p>
            </motion.div>

            <div className="gymind-grid">
                {/* Left Side: Overview & Links */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="gymind-info-column"
                >
                    <div className="gymind-intro-card glass-card">
                        <h3>About the Ecosystem</h3>
                        <p>
                            Gymind (formerly ForgeHub) is a production-grade, enterprise-ready SaaS ecosystem engineered to unify gym operations, check-in security, and member experiences. 
                        </p>
                        <p>
                            By bridging a high-performance .NET 8 API with real-time mobile apps and administrative web dashboards, it empowers fitness centers to prevent attendance fraud, optimize branch capacities, and automate billing at scale.
                        </p>
                    </div>

                    <div className="gymind-links-grid">
                        <motion.a 
                            href="https://expo.dev/preview/update/expo-go?projectId=8d10bd47-947e-431f-bc70-727a9a0042d5&group=a635c202-123f-488f-abe2-b6d0f3024a5d" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="gymind-link-card glass-card"
                            whileHover={{ scale: 1.03, y: -2 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                            <div className="link-icon-container mobile-app-icon">
                                <Smartphone size={20} />
                            </div>
                            <div className="link-details">
                                <h4>Mobile App</h4>
                                <p>Expo Go Preview <ExternalLink size={12} /></p>
                            </div>
                        </motion.a>

                        <motion.a 
                            href="https://forgehu-admin.netlify.app" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="gymind-link-card glass-card"
                            whileHover={{ scale: 1.03, y: -2 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                            <div className="link-icon-container admin-icon">
                                <LayoutGrid size={20} />
                            </div>
                            <div className="link-details">
                                <h4>Admin Panel</h4>
                                <p>Netlify Production Dashboard <ExternalLink size={12} /></p>
                            </div>
                        </motion.a>

                        <motion.a 
                            href="https://forgehub-api.onrender.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="gymind-link-card glass-card"
                            whileHover={{ scale: 1.03, y: -2 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                            <div className="link-icon-container api-icon">
                                <Database size={20} />
                            </div>
                            <div className="link-details">
                                <h4>API Layer</h4>
                                <p>Swagger Production API <ExternalLink size={12} /></p>
                            </div>
                        </motion.a>

                        <motion.a 
                            href="https://github.com/ForgeHub-Team/ForgeHub.git" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="gymind-link-card glass-card"
                            whileHover={{ scale: 1.03, y: -2 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                            <div className="link-icon-container github-icon">
                                <Github size={20} />
                            </div>
                            <div className="link-details">
                                <h4>Source Code</h4>
                                <p>GitHub Repository <ExternalLink size={12} /></p>
                            </div>
                        </motion.a>
                    </div>
                </motion.div>

                {/* Right Side: Interactive Tabs */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="gymind-tabs-column"
                >
                    {/* Tab Navigation */}
                    <div className="gymind-tabs-nav glass-card">
                        {TABS.map((tab) => (
                            <button
                                key={tab.id}
                                className={`gymind-tab-btn ${activeTab === tab.id ? "active" : ""}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                <span className="tab-icon">{tab.icon}</span>
                                <span className="tab-label">{tab.label}</span>
                                {activeTab === tab.id && (
                                    <motion.div
                                        layoutId="activeTabGlow"
                                        className="tab-active-glow"
                                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content Display */}
                    <div className="gymind-tab-content-wrapper">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="gymind-tab-card glass-card"
                            >
                                <div className="tab-card-header">
                                    <div className="tab-tagline-row">
                                        <span className="tab-badge">{currentTab.tagline}</span>
                                    </div>
                                    <h3>{currentTab.label} Features</h3>
                                    <p className="tab-card-desc">{currentTab.description}</p>
                                </div>

                                <div className="tab-tech-list">
                                    {currentTab.techStack.map((tech) => (
                                        <span key={tech} className="tech-badge">{tech}</span>
                                    ))}
                                </div>

                                <div className="tab-features-list">
                                    <h4>Technical Implementations</h4>
                                    <div className="features-subgrid">
                                        {currentTab.features.map((feature, index) => (
                                            <div key={index} className="feature-item">
                                                <div className="feature-item-icon">
                                                    {feature.icon}
                                                </div>
                                                <div className="feature-item-text">
                                                    <h5>{feature.title}</h5>
                                                    <p>{feature.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default GymindShowcase;
