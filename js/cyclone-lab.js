        // --- STREAMING_CHUNK:Cyclone Lab View ---
        const CycloneLabView = () => {
            const [activePhase, setActivePhase] = useState('environment');

            const phases = [
                { id: 'environment', label: '1. Environment / Genesis', datasets: ['ds-oisst', 'ds-era5'], desc: "Monitor Sea Surface Temps and atmospheric pressure to predict formation." },
                { id: 'tracking', label: '2. Real-time Tracking', datasets: ['ds-insat', 'ds-imdtrack'], desc: "Track the eye-wall and rotation using Geostationary TIR sensors." },
                { id: 'intensity', label: '3. Internal Structure', datasets: ['ds-tcprimed'], desc: "Use Microwave imagery to pierce top clouds and estimate core intensity." },
                { id: 'impact', label: '4. Landfall / Flooding', datasets: ['ds-s1', 'ds-gpm', 'ds-dem'], desc: "Measure rainfall accumulation and use SAR to map surface floods through the storm clouds." }
            ];

            const activeData = RESEARCH_DATA.filter(d => phases.find(p => p.id === activePhase).datasets.includes(d.id));

            return (
                <div className="animate-in fade-in h-full">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-2">Cyclone Data Pipeline</h2>
                        <p className="text-slate-400 text-sm max-w-3xl">Tropical cyclones are complex thermodynamic systems. No single satellite can capture everything. Click through the timeline to see which datasets are used at each stage of a cyclone's lifecycle over the Bay of Bengal.</p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Timeline Sidebar */}
                        <div className="lg:w-1/3 flex flex-col gap-3 relative">
                            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-800 -z-10"></div>
                            {phases.map((phase, index) => (
                                <button 
                                    key={phase.id}
                                    onClick={() => setActivePhase(phase.id)}
                                    className={`relative text-left p-4 rounded-xl border transition-all duration-300 flex gap-4 ${activePhase === phase.id ? 'bg-slate-800 border-brand-500 shadow-[0_0_15px_rgba(14,165,233,0.1)]' : 'bg-slate-900/50 border-slate-700/50 hover:bg-slate-800/50'}`}
                                >
                                    <div className={`w-5 h-5 mt-1 rounded-full border-4 flex-shrink-0 ${activePhase === phase.id ? 'bg-brand-500 border-slate-900 ring-2 ring-brand-500' : 'bg-slate-700 border-slate-900'}`}></div>
                                    <div>
                                        <h3 className={`font-semibold ${activePhase === phase.id ? 'text-white' : 'text-slate-400'}`}>{phase.label}</h3>
                                        {activePhase === phase.id && <p className="text-sm text-slate-300 mt-2">{phase.desc}</p>}
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Associated Datasets */}
                        <div className="lg:w-2/3 bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm">
                            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                <Icons.Layers /> Datasets for {phases.find(p => p.id === activePhase).label.split('.')[1]}
                            </h3>
                            <div className="grid gap-4">
                                {activeData.map(dataset => (
                                    <div key={dataset.id} className="bg-slate-900/80 p-5 rounded-xl border border-slate-700 flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <h4 className="text-lg font-bold text-white">{dataset.name}</h4>
                                                <Badge color={dataset.id === 'ds-tcprimed' ? 'purple' : 'brand'}>{dataset.type}</Badge>
                                            </div>
                                            <p className="text-sm text-slate-400 mb-2">{dataset.desc}</p>
                                            <div className="text-xs font-mono text-slate-500">Provider: {dataset.provider} | Res: {dataset.resolution}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            );
        };
