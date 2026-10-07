        // --- STREAMING_CHUNK:Main Application Layout ---
        const App = () => {
            const [currentView, setCurrentView] = useState('home');

            const navItems = [
                { id: 'home', label: 'Dashboard', icon: <Icons.Database /> },
                { id: 'explorer', label: 'Dataset Explorer', icon: <Icons.Search /> },
                { id: 'cyclone', label: 'Cyclone Lab', icon: <Icons.Wind /> },
                { id: 'projects', label: 'Project Builder', icon: <Icons.Code /> },
            ];

            return (
                <div className="min-h-screen grid-bg flex flex-col md:flex-row">
                    {/* Sidebar */}
                    <aside className="w-full md:w-64 glass-panel border-r border-slate-700/50 flex flex-col md:min-h-screen sticky top-0 z-50">
                        <div className="p-6">
                            <div className="text-brand-400 font-bold text-xl tracking-wider flex items-center gap-2">
                                <Icons.Satellite /> OSL
                            </div>
                            <div className="text-xs text-slate-500 mt-1 uppercase tracking-widest font-mono">Open Satellite Lab</div>
                        </div>
                        <nav className="flex-1 px-4 pb-4 md:pb-0 flex md:flex-col gap-2 overflow-x-auto hide-scrollbar">
                            {navItems.map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => setCurrentView(item.id)}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors whitespace-nowrap md:whitespace-normal text-sm font-medium ${
                                        currentView === item.id 
                                        ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/20' 
                                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                                    }`}
                                >
                                    {item.icon}
                                    {item.label}
                                </button>
                            ))}
                        </nav>
                        <div className="hidden md:block p-4 mt-auto">
                            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                                <div className="text-xs text-slate-400 uppercase tracking-wider mb-2">Focus Region</div>
                                <div className="flex items-center gap-2 text-sm text-white">
                                    <Icons.Map /> Bay of Bengal, India
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <main className="flex-1 p-4 md:p-8 overflow-y-auto min-h-[calc(100vh-80px)] md:min-h-screen">
                        <div className="max-w-6xl mx-auto h-full">
                            {currentView === 'home' && <DashboardView setView={setCurrentView} />}
                            {currentView === 'explorer' && <ExplorerView />}
                            {currentView === 'cyclone' && <CycloneLabView />}
                            {currentView === 'projects' && <ProjectBuilderView />}
                        </div>
                    </main>
                </div>
            );
        };

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);
