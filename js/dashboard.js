        const DashboardView = ({ setView }) => {
            return (
                <div className="space-y-8 animate-in fade-in duration-500">
                    {/* Header Area */}
                    <div className="relative overflow-hidden rounded-2xl glass-panel p-8 border-l-4 border-brand-500">
                        <div className="relative z-10">
                            <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">Open Satellite Lab</h1>
                            <p className="text-slate-400 text-lg max-w-2xl">
                                An interactive research & discovery platform for student Earth-Observation projects. Focus on Cyclones, Floods, and AI/ML over India and the Bay of Bengal.
                            </p>
                        </div>
                        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
                            <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-brand-500"><path d="M50 0 A50 50 0 0 0 0 50 A50 50 0 0 0 50 100 A50 50 0 0 0 100 50 A50 50 0 0 0 50 0 Z M50 10 A40 40 0 0 1 90 50 A40 40 0 0 1 50 90 A40 40 0 0 1 10 50 A40 40 0 0 1 50 10 Z" /></svg>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { label: "Verified Datasets", value: "9+", icon: <Icons.Database />, color: "text-brand-400" },
                            { label: "Free APIs/Access", value: "8", icon: <Icons.Code />, color: "text-emerald-400" },
                            { label: "AI/ML Ready", value: "6", icon: <Icons.Cpu />, color: "text-purple-400" },
                            { label: "Cyclone Specific", value: "9", icon: <Icons.Wind />, color: "text-orange-400" },
                        ].map((stat, i) => (
                            <Card key={i} className="flex flex-col items-center text-center">
                                <div className={`p-3 rounded-full bg-slate-800/50 mb-3 ${stat.color}`}>
                                    {stat.icon}
                                </div>
                                <div className="text-3xl font-bold text-white mb-1 font-mono">{stat.value}</div>
                                <div className="text-sm text-slate-400 uppercase tracking-wider">{stat.label}</div>
                            </Card>
                        ))}
                    </div>

                    {/* Action Areas */}
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card onClick={() => setView('explorer')} className="group border-brand-500/20">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-semibold text-white">Dataset Explorer</h3>
                                <Icons.ArrowRight />
                            </div>
                            <p className="text-slate-400 text-sm">Search and filter through verified satellite datasets, APIs, and access methods.</p>
                        </Card>
                        <Card onClick={() => setView('cyclone')} className="group border-orange-500/20">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-semibold text-white">Cyclone Data Lab</h3>
                                <Icons.ArrowRight />
                            </div>
                            <p className="text-slate-400 text-sm">Explore the data pipeline of a tropical cyclone from ocean genesis to inland flooding.</p>
                        </Card>
                        <Card onClick={() => setView('projects')} className="group border-purple-500/20">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-semibold text-white">Project Builder</h3>
                                <Icons.ArrowRight />
                            </div>
                            <p className="text-slate-400 text-sm">Generate practical AI/ML and GIS project architectures based on your skill level.</p>
                        </Card>
                    </div>
                </div>
            );
        };
