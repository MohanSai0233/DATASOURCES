        // --- STREAMING_CHUNK:Explorer View ---
        const ExplorerView = () => {
            const [search, setSearch] = useState('');
            const [filterState, setFilterState] = useState('All');
            const [selectedDataset, setSelectedDataset] = useState(null);

            const filteredData = RESEARCH_DATA.filter(d => {
                const matchesSearch = d.name.toLowerCase().includes(search.toLowerCase()) || 
                                      d.tags.join(' ').toLowerCase().includes(search.toLowerCase());
                const matchesFilter = filterState === 'All' ? true : 
                                      filterState === 'AI Ready' ? d.aiReady : 
                                      filterState === 'Beginner' ? d.difficulty === 'Beginner' :
                                      filterState === 'Radar/SAR' ? d.type.includes('SAR') : true;
                return matchesSearch && matchesFilter;
            });

            return (
                <div className="flex flex-col h-full animate-in fade-in">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-1">Dataset Explorer</h2>
                            <p className="text-slate-400 text-sm">Discover and compare open satellite data sources.</p>
                        </div>
                        <div className="flex gap-2 w-full md:w-auto">
                            <div className="relative flex-1 md:w-64">
                                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-400">
                                    <Icons.Search />
                                </div>
                                <input 
                                    type="text" 
                                    className="w-full bg-slate-800/80 border border-slate-700 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-brand-500 text-sm"
                                    placeholder="Search Sentinel, IMD, AI..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                            <select 
                                className="bg-slate-800/80 border border-slate-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-brand-500 text-sm appearance-none"
                                value={filterState}
                                onChange={(e) => setFilterState(e.target.value)}
                            >
                                <option>All</option>
                                <option>AI Ready</option>
                                <option>Beginner</option>
                                <option>Radar/SAR</option>
                            </select>
                        </div>
                    </div>

                    {selectedDataset ? (
                        <div className="flex flex-col md:flex-row gap-6 animate-in slide-in-from-right-4">
                            <div className="md:w-2/3 space-y-6">
                                <Card className="border-brand-500/30">
                                    <button onClick={() => setSelectedDataset(null)} className="text-brand-400 hover:text-brand-300 text-sm flex items-center mb-4">
                                        ← Back to Explorer
                                    </button>
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h1 className="text-3xl font-bold text-white mb-2">{selectedDataset.name}</h1>
                                            <p className="text-slate-400 font-mono text-sm">{selectedDataset.provider}</p>
                                        </div>
                                        <Badge color={selectedDataset.difficulty === 'Beginner' ? 'green' : selectedDataset.difficulty === 'Intermediate' ? 'orange' : 'purple'}>
                                            {selectedDataset.difficulty}
                                        </Badge>
                                    </div>
                                    <p className="text-lg text-slate-300 mb-6 leading-relaxed">{selectedDataset.desc}</p>
                                    
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                        <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700/50">
                                            <div className="text-xs text-slate-500 mb-1">Resolution</div>
                                            <div className="font-mono text-sm text-white">{selectedDataset.resolution}</div>
                                        </div>
                                        <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700/50">
                                            <div className="text-xs text-slate-500 mb-1">Revisit</div>
                                            <div className="font-mono text-sm text-white">{selectedDataset.revisit}</div>
                                        </div>
                                        <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700/50">
                                            <div className="text-xs text-slate-500 mb-1">Data Type</div>
                                            <div className="font-mono text-sm text-white">{selectedDataset.type}</div>
                                        </div>
                                        <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700/50">
                                            <div className="text-xs text-slate-500 mb-1">Coverage</div>
                                            <div className="font-mono text-sm text-white">{selectedDataset.coverage}</div>
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-semibold text-white mb-3 border-b border-slate-700 pb-2">Technical Access</h3>
                                    <div className="flex items-center gap-4 text-sm text-slate-300 mb-6">
                                        <div className="flex items-center gap-2"><Icons.Code /> API: <span className="text-brand-400 font-mono">{selectedDataset.api}</span></div>
                                        <div className="flex items-center gap-2">
                                            <div className={`w-2 h-2 rounded-full ${selectedDataset.aiReady ? 'bg-emerald-500' : 'bg-slate-500'}`}></div>
                                            {selectedDataset.aiReady ? 'AI/ML Ready Format' : 'Requires Preprocessing for ML'}
                                        </div>
                                    </div>

                                    {selectedDataset.accessLinks && (
                                        <>
                                            <h3 className="text-lg font-semibold text-white mb-3 border-b border-slate-700 pb-2 mt-6">Direct Access Links</h3>
                                            <div className="flex flex-wrap gap-3">
                                                {selectedDataset.accessLinks.map((link, idx) => (
                                                    <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" 
                                                       className="flex items-center gap-2 bg-brand-600/10 hover:bg-brand-600/20 text-brand-400 border border-brand-500/30 px-4 py-2 rounded-lg transition-colors text-sm font-medium">
                                                        {link.label} <Icons.ExternalLink />
                                                    </a>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </Card>
                            </div>
                            <div className="md:w-1/3 space-y-6">
                                <Card>
                                    <h3 className="text-white font-semibold mb-4">Cyclone Applications</h3>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {selectedDataset.applications.map(app => (
                                            <span key={app} className="bg-slate-800 text-slate-300 text-xs px-2 py-1 rounded border border-slate-700">{app}</span>
                                        ))}
                                    </div>
                                    <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-3">
                                        <div className="text-xs text-orange-400 uppercase tracking-wider mb-1">Primary Phase</div>
                                        <div className="font-medium text-white">{selectedDataset.cyclonePhase}</div>
                                    </div>
                                </Card>
                                <Card>
                                    <h3 className="text-white font-semibold mb-4">Student Project Ideas</h3>
                                    <ul className="space-y-3">
                                        {selectedDataset.projects.map((proj, i) => (
                                            <li key={i} className="flex gap-3 text-sm text-slate-300 items-start">
                                                <div className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-500"></div>
                                                {proj}
                                            </li>
                                        ))}
                                    </ul>
                                </Card>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {filteredData.map(dataset => (
                                <Card key={dataset.id} onClick={() => setSelectedDataset(dataset)} className="flex flex-col">
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <div className="text-xs text-slate-400 font-mono mb-1">{dataset.provider}</div>
                                            <h3 className="text-lg font-bold text-white leading-tight">{dataset.name}</h3>
                                        </div>
                                        <Badge color={dataset.aiReady ? 'purple' : 'slate'}>
                                            {dataset.aiReady ? 'ML Ready' : 'Data'}
                                        </Badge>
                                    </div>
                                    <p className="text-slate-400 text-sm mb-4 line-clamp-2 flex-grow">{dataset.desc}</p>
                                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-700/50">
                                        <div className="text-xs text-slate-500">{dataset.resolution} • {dataset.type.split(' ')[0]}</div>
                                        <div className="text-brand-400 text-sm group-hover:translate-x-1 transition-transform">Explore →</div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
            );
        };
