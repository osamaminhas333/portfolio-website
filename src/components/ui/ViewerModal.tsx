"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Document, Page, pdfjs } from "react-pdf";

// Lazy load pdf worker as requested in AGENTS.md
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export function ViewerModal({ 
  isOpen, 
  onClose, 
  documents 
}: { 
  isOpen: boolean; 
  onClose: () => void;
  documents: string[];
}) {
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState<number | null>(null);

  if (!isOpen || documents.length === 0) return null;

  const url = documents[0];
  const isPdf = url.toLowerCase().endsWith('.pdf');

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
          />
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-5xl h-[85vh] bg-[var(--color-surface-secondary)] border border-[var(--color-border-hairline)] rounded shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-[var(--color-border-hairline)] bg-[var(--color-surface-primary)]">
              <span className="font-mono text-xs text-[var(--color-text-secondary)]">Document Viewer</span>
              <button onClick={onClose} className="text-[var(--color-text-secondary)] hover:text-white font-mono text-xs uppercase tracking-wider px-3 py-1 border border-[var(--color-border-hairline)] rounded">
                Close (Esc)
              </button>
            </div>

            {/* Viewer Content */}
            <div className="flex-1 overflow-auto flex items-center justify-center bg-[#0a0a0a] p-8">
              {isPdf ? (
                <Document
                  file={url}
                  onLoadSuccess={onDocumentLoadSuccess}
                  className="flex flex-col items-center"
                  loading={<div className="font-mono text-xs text-[var(--color-text-secondary)]">Loading PDF...</div>}
                >
                  <Page 
                    pageNumber={pageNumber} 
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    className="shadow-2xl max-h-full w-auto"
                    width={800}
                  />
                </Document>
              ) : (
                <img src={url} alt="Document" className="max-w-full max-h-full object-contain shadow-2xl border border-[var(--color-border-hairline)]" />
              )}
            </div>
            
            {/* Footer / Controls */}
            {isPdf && numPages && numPages > 1 && (
              <div className="flex justify-center items-center gap-4 p-4 border-t border-[var(--color-border-hairline)] bg-[var(--color-surface-primary)] font-mono text-xs">
                <button 
                  onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
                  disabled={pageNumber <= 1}
                  className="px-3 py-1 border border-[var(--color-border-hairline)] rounded disabled:opacity-50"
                >
                  Prev
                </button>
                <span>{pageNumber} / {numPages}</span>
                <button 
                  onClick={() => setPageNumber(Math.min(numPages, pageNumber + 1))}
                  disabled={pageNumber >= numPages}
                  className="px-3 py-1 border border-[var(--color-border-hairline)] rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
