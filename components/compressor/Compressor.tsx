"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud, FileIcon, Download, X, Loader2, CheckCircle2 } from "lucide-react";
import JSZip from "jszip";
import { compressImage } from "@/lib/compressors/image";
import { compressPdf } from "@/lib/compressors/pdf";
import { convertHeicToJpg } from "@/lib/compressors/heic";
import { cn, formatBytes, percentReduction } from "@/lib/utils/cn";

export type CompressorMode = "all" | "image" | "pdf" | "heic";

interface CompressorProps {
  mode?: CompressorMode;
  title?: string;
  subtitle?: string;
}

interface FileItem {
  id: string;
  original: File;
  compressed?: File;
  status: "pending" | "processing" | "done" | "error";
  error?: string;
}

const ACCEPT_MAP: Record<CompressorMode, Record<string, string[]>> = {
  all: {
    "image/*": [".jpg", ".jpeg", ".png", ".webp", ".heic", ".heif"],
    "application/pdf": [".pdf"],
  },
  image: {
    "image/jpeg": [".jpg", ".jpeg"],
    "image/png": [".png"],
    "image/webp": [".webp"],
  },
  pdf: {
    "application/pdf": [".pdf"],
  },
  heic: {
    "image/heic": [".heic"],
    "image/heif": [".heif"],
  },
};

export default function Compressor({ mode = "all", title, subtitle }: CompressorProps) {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [quality, setQuality] = useState(0.75);
  const [isProcessing, setIsProcessing] = useState(false);

  const onDrop = useCallback((accepted: File[]) => {
    const newItems: FileItem[] = accepted.map((f) => ({
      id: `${f.name}-${f.size}-${Date.now()}-${Math.random()}`,
      original: f,
      status: "pending",
    }));
    setFiles((prev) => [...prev, ...newItems]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ACCEPT_MAP[mode],
    multiple: true,
  });

  const detectType = (file: File): "image" | "pdf" | "heic" | "unknown" => {
    const name = file.name.toLowerCase();
    if (name.endsWith(".heic") || name.endsWith(".heif")) return "heic";
    if (file.type === "application/pdf" || name.endsWith(".pdf")) return "pdf";
    if (file.type.startsWith("image/")) return "image";
    return "unknown";
  };

  const processFile = async (item: FileItem): Promise<FileItem> => {
    try {
      const type = detectType(item.original);
      let compressed: File;

      if (type === "pdf") {
        compressed = await compressPdf(item.original);
      } else if (type === "heic") {
        compressed = await convertHeicToJpg(item.original, quality);
      } else if (type === "image") {
        compressed = await compressImage(item.original, { quality });
      } else {
        throw new Error("Format non supporté");
      }

      return { ...item, compressed, status: "done" };
    } catch (e) {
      return {
        ...item,
        status: "error",
        error: e instanceof Error ? e.message : "Erreur inconnue",
      };
    }
  };

  const handleCompressAll = async () => {
    setIsProcessing(true);
    const pendings = files.filter((f) => f.status === "pending");

    for (const item of pendings) {
      setFiles((prev) =>
        prev.map((f) => (f.id === item.id ? { ...f, status: "processing" } : f))
      );
      const result = await processFile(item);
      setFiles((prev) => prev.map((f) => (f.id === item.id ? result : f)));
    }

    setIsProcessing(false);
  };

  const handleDownload = (item: FileItem) => {
    if (!item.compressed) return;
    const url = URL.createObjectURL(item.compressed);
    const a = document.createElement("a");
    a.href = url;
    a.download = item.compressed.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDownloadAll = async () => {
    const done = files.filter((f) => f.status === "done" && f.compressed);
    if (done.length === 0) return;

    const zip = new JSZip();
    done.forEach((item) => {
      if (item.compressed) zip.file(item.compressed.name, item.compressed);
    });
    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "rikizip-fichiers-compresses.zip";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleRemove = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const handleClearAll = () => setFiles([]);

  const hasPending = files.some((f) => f.status === "pending");
  const hasDone = files.some((f) => f.status === "done");
  const doneCount = files.filter((f) => f.status === "done").length;

  const showQualitySlider = mode !== "pdf";

  return (
    <div className="w-full">
      {(title || subtitle) && (
        <div className="text-center mb-8">
          {title && <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">{title}</h1>}
          {subtitle && <p className="text-lg text-neutral-600 max-w-2xl mx-auto">{subtitle}</p>}
        </div>
      )}

      <div
        {...getRootProps()}
        className={cn(
          "relative border-2 border-dashed rounded-3xl p-10 md:p-16 text-center cursor-pointer transition-all",
          isDragActive
            ? "border-brand-400 bg-brand-50"
            : "border-neutral-300 hover:border-brand-400 hover:bg-brand-50/30"
        )}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-brand-100 flex items-center justify-center">
            <UploadCloud className="w-8 h-8 text-brand-700" strokeWidth={2} />
          </div>
          <div>
            <p className="font-display text-xl font-semibold text-neutral-900">
              {isDragActive ? "Lâchez vos fichiers ici" : "Glissez vos fichiers ici"}
            </p>
            <p className="text-sm text-neutral-500 mt-1">ou cliquez pour parcourir</p>
          </div>
          <p className="text-xs text-neutral-400 max-w-md">
            🔒 100% navigateur — vos fichiers ne quittent jamais votre appareil
          </p>
        </div>
      </div>

      {showQualitySlider && files.length > 0 && (
        <div className="mt-6 p-4 bg-neutral-50 rounded-2xl">
          <label className="flex items-center justify-between text-sm font-medium text-neutral-700">
            <span>Qualité</span>
            <span className="text-brand-700 font-semibold">{Math.round(quality * 100)}%</span>
          </label>
          <input
            type="range"
            min={0.3}
            max={1}
            step={0.05}
            value={quality}
            onChange={(e) => setQuality(parseFloat(e.target.value))}
            disabled={isProcessing}
            className="w-full mt-2 accent-brand-500"
          />
          <div className="flex justify-between text-xs text-neutral-500 mt-1">
            <span>Plus léger</span>
            <span>Meilleure qualité</span>
          </div>
        </div>
      )}

      {files.length > 0 && (
        <div className="mt-6 space-y-3 animate-fade-in">
          {files.map((item) => (
            <FileRow
              key={item.id}
              item={item}
              onDownload={() => handleDownload(item)}
              onRemove={() => handleRemove(item.id)}
            />
          ))}
        </div>
      )}

      {files.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          {hasPending && (
            <button
              onClick={handleCompressAll}
              disabled={isProcessing}
              className="btn-primary"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Compression en cours…
                </>
              ) : (
                <>Compresser {files.filter((f) => f.status === "pending").length} fichier(s)</>
              )}
            </button>
          )}
          {hasDone && doneCount > 1 && (
            <button onClick={handleDownloadAll} className="btn-ghost">
              <Download className="w-4 h-4" />
              Tout télécharger (.zip)
            </button>
          )}
          {!isProcessing && (
            <button onClick={handleClearAll} className="btn-ghost">
              <X className="w-4 h-4" />
              Tout effacer
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function FileRow({
  item,
  onDownload,
  onRemove,
}: {
  item: FileItem;
  onDownload: () => void;
  onRemove: () => void;
}) {
  const beforeSize = item.original.size;
  const afterSize = item.compressed?.size ?? 0;
  const reduction = item.compressed ? percentReduction(beforeSize, afterSize) : 0;

  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl border border-neutral-200 bg-white hover:border-neutral-300 transition-colors">
      <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0">
        <FileIcon className="w-5 h-5 text-neutral-500" />
      </div>

      <div className="flex-1 min-w-0">
        <p className="font-medium text-sm text-neutral-900 truncate">{item.original.name}</p>
        <p className="text-xs text-neutral-500 mt-0.5">
          {formatBytes(beforeSize)}
          {item.status === "done" && (
            <>
              <span className="mx-1.5 text-neutral-300">→</span>
              <span className="text-brand-700 font-semibold">{formatBytes(afterSize)}</span>
              {reduction > 0 && (
                <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded-full bg-brand-100 text-brand-800 text-[10px] font-semibold">
                  −{reduction}%
                </span>
              )}
            </>
          )}
          {item.status === "error" && <span className="ml-2 text-red-600">— {item.error}</span>}
        </p>
      </div>

      <div className="shrink-0 flex items-center gap-2">
        {item.status === "processing" && <Loader2 className="w-4 h-4 animate-spin text-brand-600" />}
        {item.status === "done" && (
          <>
            <CheckCircle2 className="w-4 h-4 text-brand-600" />
            <button
              onClick={onDownload}
              className="p-2 rounded-full hover:bg-brand-50 text-neutral-600 hover:text-brand-700 transition-colors"
              aria-label="Télécharger"
            >
              <Download className="w-4 h-4" />
            </button>
          </>
        )}
        <button
          onClick={onRemove}
          className="p-2 rounded-full hover:bg-neutral-100 text-neutral-400 hover:text-neutral-700 transition-colors"
          aria-label="Supprimer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
