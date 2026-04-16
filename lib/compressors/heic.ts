export async function convertHeicToJpg(file: File, quality = 0.85): Promise<File> {
  // heic2any ne fonctionne que côté navigateur
  const heic2any = (await import("heic2any")).default;

  const blob = await heic2any({
    blob: file,
    toType: "image/jpeg",
    quality,
  });

  // heic2any peut renvoyer Blob ou Blob[]
  const finalBlob = Array.isArray(blob) ? blob[0] : blob;
  const newName = file.name.replace(/\.(heic|heif)$/i, ".jpg");

  return new File([finalBlob], newName, { type: "image/jpeg" });
}
