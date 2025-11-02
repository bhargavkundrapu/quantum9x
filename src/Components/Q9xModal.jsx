import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';




const Q9XModal = ({ open, onClose, title, children }) => {
useEffect(() => {
if (!open) return;
const onKey = (e) => { if (e.key === 'Escape') onClose(); };
document.addEventListener('keydown', onKey);
return () => document.removeEventListener('keydown', onKey);
}, [open, onClose]);


return (
<AnimatePresence>
{open && (
<motion.div
className="fixed inset-0 z-[70]"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
>
{/* Backdrop */}
<div onClick={onClose} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
{/* Panel */}
<motion.div
initial={{ opacity: 0, y: 20, scale: 0.98 }}
animate={{ opacity: 1, y: 0, scale: 1 }}
exit={{ opacity: 0, y: 10, scale: 0.98 }}
transition={{ duration: 0.2 }}
className="relative mx-auto mt-24 w-[92%] max-w-2xl rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[var(--q9x-black)] text-slate-900 dark:text-white p-6 shadow-xl"
role="dialog" aria-modal="true"
>
<div className="flex items-start justify-between gap-6">
<h3 className="text-xl font-semibold">{title}</h3>
<button onClick={onClose} className="rounded-lg border border-black/10 dark:border-white/10 px-3 py-1 text-sm hover:bg-black/5 dark:hover:bg-white/5">Close</button>
</div>
<div className="mt-4">{children}</div>
</motion.div>
</motion.div>
)}
</AnimatePresence>
);
};
export default Q9XModal;