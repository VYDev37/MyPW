"use client";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[9999] flex flex-col justify-center items-center bg-slate-950">
            <div className="container relative flex flex-col items-center">
                {/* Spinner */}
                <div className="relative w-20 h-20 mb-8">
                    <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
                <div className="text-center space-y-2">
                    <h1 className="text-2xl font-mono font-bold text-white tracking-widest uppercase animate-pulse">Initializing</h1>
                    <p className="text-gray-500 font-mono text-sm">Preparing github repositories and other required things...</p>
                </div>

                {/* Three dots */}
                <div className="mt-12 flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"></div>
                </div>
            </div>
        </div>
    );
}