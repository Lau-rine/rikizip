import imageCompression from "browser-image-compression";

export interface ImageCompressionOptions {
  quality: number; // 0.1 à 1 (1 = meilleure qualité)
  maxWidthOrHeight?: number;
}

export async function compressImage(
  file: File,
  options: ImageCompressionOptions
): Promise<File> {
  const compressed = await imageCompression(file, {
    maxSizeMB: 50,
    maxWidthOrHeight: options.maxWidthOrHeight ?? 4096,
    initialQuality: options.quality,
    useWebWorker: true,
    fileType: file.type,
  });

  // Retourne un vrai File avec nom conservé
  return new File([compressed], file.name, { type: compressed.type });
}
