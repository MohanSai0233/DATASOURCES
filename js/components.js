        // --- STREAMING_CHUNK:UI Components ---
        const Badge = ({ children, color = "brand" }) => {
            const colors = {
                brand: "bg-brand-500/10 text-brand-400 border-brand-500/20",
                green: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
                orange: "bg-orange-500/10 text-orange-400 border-orange-500/20",
                purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
                slate: "bg-slate-700/50 text-slate-300 border-slate-600",
            };
            return (
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${colors[color]}`}>
                    {children}
                </span>
            );
        };

        const Card = ({ children, className = "", onClick }) => (
            <div 
                onClick={onClick}
                className={`glass-panel rounded-xl p-5 hover:bg-slate-800/80 transition-all duration-300 ${onClick ? 'cursor-pointer hover:border-brand-500/50 hover:shadow-[0_0_15px_rgba(14,165,233,0.15)]' : ''} ${className}`}
            >
                {children}
            </div>
        );
