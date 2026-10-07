        // --- STREAMING_CHUNK:Project Builder View ---
        const ProjectBuilderView = () => {
            const [interest, setInterest] = useState('Flood');
            const [level, setLevel] = useState('Intermediate');
            const [generated, setGenerated] = useState(false);

            // Simple mock generator logic based on research
            const generateProject = () => {
                setGenerated(true);
            }

            const getProjectConfig = () => {
                if(interest === 'Flood' && level === 'Beginner') return { title: "Historical Flood Mapper", desc: "Map previous floods using optical data post-event.", data: ['ds-s2', 'ds-dem'], tools: ["Python", "Rasterio", "QGIS"] };
                if(interest === 'Flood') return { title: "SAR Flood Inundation Pipeline", desc: "Use C-band radar to map floods in the Krishna basin during peak cyclone cloud cover.", data: ['ds-s1', 'ds-dem', 'ds-gpm'], tools: ["Google Earth Engine API", "Python", "GeoPandas"] };
                if(interest === 'Cyclone' && level === 'Beginner') return { title: "Cyclone Track Visualizer", desc: "Build an interactive map dashboard of historical Bay of Bengal cyclones.", data: ['ds-imdtrack'], tools: ["Pandas", "Leaflet/Mapbox", "HTML/JS"] };
                if(interest === 'Cyclone' && level === 'Advanced') return { title: "Cyclone Intensity CNN", desc: "Train a PyTorch model to estimate cyclone wind speed from passive microwave matrices.", data: ['ds-tcprimed', 'ds-imdtrack'], tools: ["PyTorch", "xarray", "AWS S3"] };
                if(interest === 'Ocean') return { title: "SST Anomaly Detector", desc: "Track ocean heat waves prior to cyclogenesis in the Indian Ocean.", data: ['ds-oisst', 'ds-era5'], tools: ["Python", "xarray", "NetCDF"] };
                
                // Fallback
                return { title: "Coastal Impact Analysis", desc: "Analyze the aftermath of a storm on coastal vegetation.", data: ['ds-s2'], tools: ["Python", "GDAL"] };
            }

            const config = generated ? getProjectConfig() : null;

            return (
                <div className="animate-in fade-in h-full max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-white mb-3">AI/ML Project Builder</h2>
                        <p className="text-slate-400">Select your parameters to generate a verified data architecture for your portfolio project.</p>
                    </div>

                    <Card className="mb-8">
                        <div className="grid md:grid-cols-3 gap-6 items-end">
                            <div>
                                <label className="block text-sm text-slate-400 mb-2">Primary Interest</label>
                                <select 
                                    className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-brand-500"
                                    value={interest} onChange={e => {setInterest(e.target.value); setGenerated(false);}}
                                >
                                    <option>Cyclone</option>
                                    <option>Flood</option>
                                    <option>Ocean</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm text-slate-400 mb-2">Skill Level</label>
                                <select 
                                    className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-brand-500"
                                    value={level} onChange={e => {setLevel(e.target.value); setGenerated(false);}}
                                >
                                    <option>Beginner</option>
                                    <option>Intermediate</option>
                                    <option>Advanced</option>
                                </select>
                            </div>
                            <button 
                                onClick={generateProject}
                                className="w-full bg-brand-600 hover:bg-brand-500 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                            >
                                Generate Architecture
                            </button>
                        </div>
                    </Card>

                    {generated && config && (
                        <div className="animate-in slide-in-from-bottom-4">
                            <div className="bg-slate-800/80 border border-brand-500/30 rounded-2xl p-8 shadow-[0_0_30px_rgba(14,165,233,0.1)]">
                                <Badge color="brand">Recommended Architecture</Badge>
                                <h3 className="text-2xl font-bold text-white mt-4 mb-2">{config.title}</h3>
                                <p className="text-slate-300 mb-8">{config.desc}</p>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-700 pb-2">Required Datasets</h4>
                                        <div className="space-y-3">
                                            {config.data.map(id => {
                                                const d = RESEARCH_DATA.find(x => x.id === id);
                                                return (
                                                    <div key={id} className="bg-slate-900 p-3 rounded-lg border border-slate-700">
                                                        <div className="font-semibold text-brand-400">{d.name}</div>
                                                        <div className="text-xs text-slate-500 mt-1">{d.type} • {d.provider}</div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-700 pb-2">Tech Stack</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {config.tools.map(tool => (
                                                <span key={tool} className="bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1.5 rounded text-sm">
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="mt-6 bg-slate-900/50 p-4 rounded-lg border border-slate-700/50">
                                            <div className="text-xs text-slate-400 mb-2">Workflow Hint</div>
                                            <div className="text-sm text-slate-300 font-mono">
                                                Fetch Data → Preprocess → {interest === 'Cyclone' && level === 'Advanced' ? 'Train Model' : 'Geospatial Mask'} → Visualize
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            );
        };
